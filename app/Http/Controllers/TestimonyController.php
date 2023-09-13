<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\uuidFunction;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Models\TestimonyModel;

class TestimonyController extends Controller
{
    use uuidFunction;

    public function DashboardTestimony(Request $request){
        $searchText = $request->searchText;
        $pageSize = $request->pageSize;
        $pageNumber = $request->pageNumber;

        if(empty($pageSize)){
            $pageSize = 5;
        }

        if(empty($pageNumber)){
            $pageNumber = 1;
        }

        $testimonies = TestimonyModel::getQuery();

        if(!empty($searchText)){
            $textToSearch = strtoupper($searchText);
            $testimonies = $testimonies->where('ClientName', 'ILIKE', '%'.$textToSearch.'%')
            ->orWhere('TestimonyCode', 'ILIKE', '%'.$textToSearch.'%')
            ->orWhere('Occupation', 'ILIKE', '%'.$textToSearch.'%');
        }

        $totalTestimony = count($testimonies->get());
        $testimonyPagination = $testimonies->skip(($pageNumber-1)*$pageSize)->take($pageSize)->get();

        $totalCount = ceil($totalTestimony / $pageSize);
        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/dashboard-testimony-list',
            'testimonies' => $testimonyPagination,
            'searchText' => $searchText,
            'pageSize'=> $pageSize,
            'totalCount' => $totalCount,
            'pageNumber' => $pageNumber
        ]);
    }

    public function GetTestimony($id) {
        $testimony = TestimonyModel::Find($id);
        return Inertia::render('Dashboard/Dashboard', [
            'pathName'=> '/edit-dashboard-testimony',
            'testimony' => $testimony
        ]);
    }

    public function AddNewTestimony(Request $request){
        $request->TestimonyId = uuidFunction::NewGuid();
        $message = $this->CheckInputData($request, true);

        if(!empty($message)){
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }

        $testimony = $this->PutDataOnModel($request);

        if($request->hasFile('ImgClient')){
            $file = $request->file('ImgClient');
            $filePath = "/images/testimony";
            $imageName = SaveImage($file, $testimony->TestimonyCode, $filePath);
            $testimony->ImgClient = $imageName;
        }

       $testimony->save();
       return redirect()->back();
    }

    public function EditTestimony(Request $request) {
        $message = $this->CheckInputData($request, false);
        if(!empty($message)){
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }

        $testimony = $this->PutDataOnModel($request);
        $testimonyFromDb = TestimonyModel::find($testimony->TestimonyId);
        $testimonyFromDb->ClientName = $testimony->ClientName;
        $testimonyFromDb->Occupation = $testimony->Occupation;
        $testimonyFromDb->TestimonialDescription = $testimony->TestimonialDescription;

        if($request->file("ImgClient") != null) {
            $file = $request->file("ImgClient");
            $filePath = "/images/testimony";
            $imgTestimonyFromDb = TestimonyModel::where('TestimonyId',$testimony->TestimonyId)->first();
            $imageName = SaveImage($file, $testimony->TestimonyCode, $filePath, $imgTestimonyFromDb->ImgClient);

          $testimonyFromDb->ImgClient = $imageName;
        }

        $testimonyFromDb->save();
        return redirect()->back();
    }

    public function DeleteTestimony($id){
        $testimony = TestimonyModel::First('TestimonyId',$id);
        if(empty($testimony)){
            $message = "Data Testimony tidak ditemukan";
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }
        $destinationPath = \base_path()."/public/images";
        if(File::exists($destinationPath.'/'.$testimony->ImgClient)){
            File::delete($destinationPath.'/'.$testimony->ImgClient);
        }

        TestimonyModel::destroy($id);
        return redirect()->back();
    }

    private function CheckInputData($request, $isNew){
        $message = '';
        $validator = Validator::make($request->all(), [
            'TestimonyId' => 'nullable',
            'TestimonyCode' => 'required|string',
            'ClientName' => 'required|string',
            'Occupation' => 'required|string',
            'TestimonialDescription' => 'required|string',
        ],[
            'TestimonyCode.required' => "Kode Testimony masih kosong, harap diisi",
            'ClientName.required' => "Nama Klien masih kosong, harap diisi",
            'Occupation.required' => "Pekerjaan Klien masih kosong, harap diisi",
            'TestimonialDescription.required' => "Deskripsi Testimony masih kosong, harap diisi",
        ]);
        
        if($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach($errors as $error){
                $message .= $error."<br>";
            }
        }

        if($request->file('ImgClient') == null && $isNew)
        {
            $message .= "Klien harus punya gambar <br>";
        }

        if($request->TestimonyCode != null){
            if(TestimonyModel::where('TestimonyCode',$request->TestimonyCode)->where("TestimonyId", "!=", $request->TestimonyId)->exists()){
                $message .= "Kode Testimony sudah ada, harap diganti <br>";
            }
        }

        return $message;
    }

    private function PutDataOnModel($request){
        $testimony = new TestimonyModel();
        $testimony->TestimonyId = $request->TestimonyId;
        $testimony->TestimonyCode = strtoupper($request->TestimonyCode);
        $testimony->ClientName = $request->ClientName;
        $testimony->Occupation = $request->Occupation;
        $testimony->TestimonialDescription = $request->TestimonialDescription;
        
        return $testimony;
    }
}
