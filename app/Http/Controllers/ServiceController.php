<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceModel;
use App\Models\ContactUsModel;
use Inertia\Inertia;
use App\Traits\uuidFunction;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    use uuidFunction;

    public function index(){
        $services = ServiceModel::all();
         //untuk footer
        $contactUs = ContactUsModel::first();

        return Inertia::render('PageLayout/OurServicesLayout', [
            'pathName' => '/services',
            'services' => $services,
            'contactUs' => $contactUs
        ]);
    }

    public function DashboardServices(Request $request)
    {
        $searchText = $request->searchText;
        $pageSize = $request->pageSize;
        $pageNumber = $request->pageNumber;

        if(empty($pageSize)){
           $pageSize = 5;
        }
        if(empty($pageNumber)){
           $pageNumber = 1;
        }
         
        $services = ServiceModel::getQuery();

        if(!empty($searchText)){
            $textToSearch = strtoupper($searchText);
            $services = $services->where('ServiceCode', 'ILIKE', '%'.$textToSearch.'%')
            ->orWhere('ServiceTitle', 'ILIKE', '%'.$textToSearch.'%');
        }
        $totalService = count($services->get());
        $servicesPagination = $services->skip(($pageNumber-1)*$pageSize)->take($pageSize)->get();

        $totalCount = ceil( $totalService / $pageSize);
        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/dashboard-service-list',
            'services' => $servicesPagination,
            'searchText' => $searchText,
            'pageSize' => $pageSize,
            'totalCount' => $totalCount,
            'pageNumber' => $pageNumber
        ]);
    }
 

    public function GetService($id){
        $service = ServiceModel::Find($id);
        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/edit-dashboard-service',
            'service' => $service
        ]);
    }

    public function AddNewService(Request $request){
        $request->ServiceId = uuidFunction::NewGuid();
        $message = $this->CheckInputData($request, true);

        if(!empty($message)){
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }
        
        $service = $this->PutDataOnModel($request);

        if($request->hasFile('ImgService')){
            $file = $request->file("ImgService");
            $filePath = "/images/services";
            $imageName =  SaveImage($file, $service->ServiceCode, $filePath);
            $service->ImgService = $imageName;
        }

        ServiceModel::create([
            'ServiceTitle' => $service->ServiceTitle,
            'ServiceCode' => $service->ServiceCode,
            'ServiceDescription' => $service->ServiceDescription,
            'ImgService'=> $service->ImgService
        ]);

        return redirect()->back();
        
    }

    public function EditService(Request $request){
        $message = $this->CheckInputData($request, false);
        if(!empty($message)){
            return redirect()->back()->with([
                'message' => $message
            ]);
        }

        $service = $this->PutDataOnModel($request);
        if($request->hasFile('ImgService')){
            $file = $request->file("ImgService");
            $filePath = "/images/services";
            $imgServiceFromDb = ServiceModel::where('ServiceId',$service->ServiceId)->first();
            $imageName = SaveImage($file, $service->ServiceCode, $filePath, $imgServiceFromDb->ImgService);

            ServiceModel::where('ServiceId', $service->ServiceId)->update([
                'ImgService' => $imageName
            ]);
        }

        ServiceModel::where('ServiceId', $service->ServiceId)->update([
            'ServiceTitle' => $service->ServiceTitle,
            'ServiceCode' => $service->ServiceCode,
            'ServiceDescription' => $service->ServiceDescription,
        ]);

        return redirect()->back();
    }

    public function DeleteService($id){
        $service = ServiceModel::First('ServiceId',$id);
        if(empty($service)){
            $message = "Data Layanan tidak ditemukan";
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }
        $destinationPath = \base_path()."/public/images";
        if(File::exists($destinationPath.'/'.$service->ImgService)){
            File::delete($destinationPath.'/'.$service->ImgService);
        }

        ServiceModel::destroy($id);
        return redirect()->back();
    }

    private function CheckInputData($request, $isNew){
        $message = '';
        $validator = Validator::make($request->all(), [
            'ServiceId' => 'nullable',
            'ServiceCode' => 'required|string',
            'ServiceTitle' => 'required|string',
            'ServiceDescription' => 'required|string',
        ],[
            'ServiceCode.required' => "Kode Layanan masih kosong, harap diisi",
            'ServiceTitle.required' => "Nama Layanan masih kosong, harap diisi",
            'ServiceDescription.required' => "Deskripsi Layanan masih kosong, harap diisi",
        ]);
        
        if($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach($errors as $error){
                $message .= $error."<br>";
            }
        }

        if($request->file('ImgService') == null && $isNew)
        {
            $message .= "Project harus punya gambar <br>";
        }

        if($request->ServiceCode != null){
            if(ServiceModel::where('ServiceCode',$request->ServiceCode)->where("ServiceId", "!=", $request->ServiceId)->exists()){
                $message .= "Kode Layanan sudah ada, harap diganti <br>";
            }
        }

        return $message;
    }

    private function PutDataOnModel($request){
        $service = new ServiceModel();
        $service->ServiceId = $request->ServiceId;
        $service->ServiceTitle = $request->ServiceTitle;
        $service->ServiceDescription = $request->ServiceDescription;
        $service->ServiceCode = strtoupper($request->ServiceCode);
        
        return $service;
    }
}
