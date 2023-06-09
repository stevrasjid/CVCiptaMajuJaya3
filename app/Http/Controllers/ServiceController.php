<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceModel;
use Inertia\Inertia;
use App\Traits\uuidFunction;

class ServiceController extends Controller
{
    use uuidFunction;

    public function index(){
        $services = ServiceModel::all();

        return Inertia::render('PageLayour/OurServicesLayout', [
            'pathName' => '/services',
            'services' => $services
        ]);
    }

    public function AddNewService(Request $request){
        $request->validate([
            'ServiceTitle'=> 'required',
            'ServiceCode'=> 'required',
            'ServiceDescription'=>'required',
            'ImgService'=> 'required|image|mimes:jpg,png,jpeg|max:2048'
        ]);

        $request->serviceId = uuidFunction::NewGuid();
        $request->serviceCode = strtoupper($request->serviceCode);

        $message = $this->VerifyInput($request, true);
        if(empty($message)){
            return redirect()->back()->with('message', $message);
        }

        if($request->hasFile('ImgService')){
            $file = $request->file("ImgService");
            $imageName =  SaveImage($file, $request->serviceCode);
        }
        
        ServiceModel::create([
            'ServiceTitle' => $request->serviceTitle,
            'ServiceCode' => $request->serviceCode,
            'ServiceDescription' => $request->serviceDescription,
            'ImgService'=> $imageName
        ]);

        return redirect()->back()->with('message','Berhasil dibuat');
        
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

        return redirect()->back()->with('message','Berhasil di edit');
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

    private function VerifyInput($request, $isNew){
        $message = '';
        if(ServiceModel::where('ServiceCode',$request->serviceCode)->where('ServiceId','!=',$request->serviceId)->exists()){
            $message = "Kode Service sudah ada, harap diganti \n";
        }

        if(!($request->hasFile('ImgService')) && $isNew){
            $message = "Gambar tidak ada yang diupload \n";
        }

        return $message;
    }
}
