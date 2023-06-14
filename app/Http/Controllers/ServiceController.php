<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceModel;
use Inertia\Inertia;
use App\Traits\uuidFunction;
use Illuminate\Support\Facades\File;


class ServiceController extends Controller
{
    use uuidFunction;

    public function index(){
        $services = ServiceModel::all();

        return Inertia::render('PageLayout/OurServicesLayout', [
            'pathName' => '/services',
            'services' => $services
        ]);
    }

    public function GetService($id){
        $service = ServiceModel::Find($id);
        return Inertia::render('Dashboard/DashboardServices', [
            'pathName' => 'edit-dashboard-service',
            'service' => $service
        ]);
    }

    public function AddNewService(Request $request){
        $request->validate([
            'serviceTitle'=> 'required',
            'serviceCode'=> 'required',
            'serviceDescription'=>'required',
            'imgService'=> 'required|image|mimes:jpg,png,jpeg|max:2048'
        ]);
        
        $service = $this->PutDataOnModel($request);
        $message = $this->VerifyInput($service, $request, true);

        if(!empty($message)){
            return redirect()->back()->with('message', $message);
        }
        
        if($request->hasFile('imgService')){
            $file = $request->file("imgService");
            $imageName =  SaveImage($file, $request->serviceCode, "/public/images/services");
            $service->ImgService = $imageName;
        }

        ServiceModel::create([
            'ServiceTitle' => $service->ServiceTitle,
            'ServiceCode' => $service->ServiceCode,
            'ServiceDescription' => $service->ServiceDescription,
            'ImgService'=> $service->ImgService
        ]);

        return to_route('dashboardServiceList');
        
    }

    public function EditService(Request $request, $id){
        $request->validate([
            'ServiceTitle'=> 'required',
            'ServiceCode'=> 'required',
            'ServiceDescription'=>'required',
            'ImgService'=> 'nullable|image|mimes:jpg,png,jpeg|max:2048'
        ]);

        $request->serviceCode = strtoupper($request->serviceCode);
        $message = $this->VerifyInput($request, false);

        if(empty($message)){
            return redirect()->back()->with('message', $message);
        }
        if($request->hasFile('ImgService')){
            $file = $request->file("ImgService");
            $imgServiceFromDb = ServiceModel::where('ServiceId',$request->serviceId);
            $imageName = SaveImage($file, $request->serviceCode, $imgServiceFromDb);

            ServiceModel::where('ServiceId', $request->serviceId)->update([
                'ImgService' => $imageName
            ]);
        }

        ServiceModel::where('ServiceId', $request->serviceId)->update([
            'ServiceTitle' => $request->serviceTitle,
            'ServiceCode' => $request->serviceCode,
            'ServiceDescription' => $request->serviceDescription,
        ]);

        return to_route('dashboardServiceList');
    }

    public function DeleteService($id){
        $service = ServiceModel::First('ServiceId',$id);
        if(empty($service)){
            $message = "Data service tidak ditemukan";
            return redirect()->back()->with('message', $message);
        }
        $destinationPath = \base_path()."/public/images";
        if(File::exists($destinationPath.'/'.$service->ImgService)){
            File::delete($destinationPath.'/'.$service->ImgService);
        }

        ServiceModel::destroy($id);
        return redirect()->back()->with('message', 'Data Berhasil Di Hapus');

    }

    private function VerifyInput($service, $request, $isNew){
        $message = '';
        if(ServiceModel::where('ServiceCode',$service->ServiceCode)->where('ServiceId','!=',$service->ServiceId)->exists()){
            $message = "Kode Service sudah ada, harap diganti \n";
        }

        if(!($request->hasFile('imgService')) && $isNew){
            $message = "Gambar tidak ada yang diupload \n";
        }

        return $message;
    }

    private function PutDataOnModel($request){
        $service = new ServiceModel();
        $service->ServiceId = uuidFunction::NewGuid();
        $service->ServiceTitle = $request->serviceTitle;
        $service->ServiceDescription = $request->serviceDescription;
        $service->ServiceCode = strtoupper($request->serviceCode);
        
        return $service;
    }
}
