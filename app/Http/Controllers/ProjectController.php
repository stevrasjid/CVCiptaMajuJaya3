<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectsCollection;
use App\Models\ProjectModel;
use App\Models\CategoryForProjectModel;
use App\Models\ImagesProjectModel;
use App\Models\ContactUsModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\uuidFunction;
use File;
use Illuminate\Support\Facades\Redirect; 
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    use uuidFunction;

    //ini untuk bagian main website
    public function index(Request $request) {
        $category = $request->categoryCode;
        $pageNumber = $request->pageNumber;
        if(empty($category)){
            $category = "ALL";
        }
        if(empty($pageNumber)){
            $pageNumber = 1;
        }
        $pageSize = 5; 

        $projects = ProjectModel::with(['ImgProjects' => function($query) {
            $query->orderBy('NumberSort');
         }]);

         if($category != "ALL"){
            $projects = $projects->where('CategoryCode',$category);
         }

         $totalProjects = count($projects->get());
         $projectPagination = $projects->skip(($pageNumber-1)*$pageSize)->take($pageSize)->orderby("ProjectDate", 'DESC')->get();
         $totalCount = ceil($totalProjects / $pageSize);

         $categories = CategoryForProjectModel::all();
         //untuk footer
         $contactUs = ContactUsModel::first();

         return Inertia::render('PageLayout/OurProjectsLayout', [
            'pathName' => '/projects',
            'projects' => $projectPagination,
            'totalCount'=> $totalCount,
            'contactUs'=>$contactUs,
            'categories' => $categories,
            'category' => $category,
            'pageNumber' => $pageNumber
         ]);
    }

    //buat form baru
    public function AddNewProjectForm() {
        $categories = CategoryForProjectModel::all();

        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/add-new-dashboard-project-form',
            'categories' => $categories
        ]);
    }

    //untuk list project
    public function DashboardProjects(Request $request){
         $searchText = $request->searchText;
         $pageSize = $request->pageSize;
         $pageNumber = $request->pageNumber;
        
         if(empty($pageSize)){
            $pageSize = 5;
         }
         if(empty($pageNumber)){
            $pageNumber = 1;
         }
         $projects = ProjectModel::with(['ImgProjects' => function($query) {
            $query->where('NumberSort', '0');
         }]);

         if(!empty($searchText))
         {
            $textToSearch = strtoupper($searchText);
            $projects = $projects->where('ProjectName','LIKE','%'.$textToSearch.'%')
            ->orWhere('ProjectCode','LIKE','%'.$textToSearch.'%');
         }

         $totalProjects = count($projects->get());
         $projectPagination = $projects->skip(($pageNumber-1)*$pageSize)->take($pageSize)->get();
         $totalCount = ceil( $totalProjects / $pageSize);
         return Inertia::render('Dashboard/DashboardProjects', [
             'pathName' => '/dashboard-project-list',
             'projects' => $projectPagination,
             'searchText' => $searchText,
             'pageSize' => $pageSize,
             'totalCount' => $totalCount,
             'pageNumber' => $pageNumber
         ]);
    }
 
    public function GetProject($id) {
        $project = ProjectModel::with(['ImgProjects' => function($query) {
            $query->orderBy('NumberSort');
        }])->find($id);
        $categories = CategoryForProjectModel::all();
        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => 'edit-dashboard-project-form',
            'project' => $project,
            'categories' => $categories
        ]);
    }

    //add new Project
    public function AddNewProject(Request $request){
        $request->ProjectId =  uuidFunction::NewGuid();
        $message = $this->CheckInputData($request, true);
        if(!empty($message)){
           return redirect()->back()->withErrors([
            'message' => $message
           ]);
        }
        $project = $this->PutDataOnModel($request); 
        
        $projectModel = new ProjectModel([
            'ProjectId' => $project->ProjectId,
            'ProjectCode' => $project->ProjectCode,
            'ProjectName' => $project->ProjectName,
            'Description' => $project->Description,
            'ClientName' => $project->ClientName,
            'ProjectDate'=> $project->ProjectDate,
            'CategoryCode' => $project->CategoryCode,
            'CategoryId' => $project->CategoryId,
        ]);

        $images = null;
        if($request->file("ImgProjects") != null){
            $files = $request->file("ImgProjects");
            $images = $this->SaveImageProject($projectModel, $files); //push image into image list
        }
        
        $projectModel->save(); //save parent
        if($images != null){
            $projectModel->ImgProjects()->saveMany($images); //save child
        }

        return redirect()->back();
    }

    public function EditProject (Request $request){
        $message = $this->CheckInputData($request, false);
        if(!empty($message)){
           return redirect()->back()->withErrors([
            'message' => $message
           ]);
        }
        $project = $this->PutDataOnModel($request); 

        $projectFromDb = ProjectModel::find($project->ProjectId);
        $projectFromDb->ProjectName = $project->ProjectName;
        $projectFromDb->ProjectCode = $project->ProjectCode;
        $projectFromDb->Description = $project->Description;
        $projectFromDb->ClientName = $project->ClientName;
        $projectFromDb->ProjectDate = $project->ProjectDate;
        $projectFromDb->CategoryId = $project->CategoryId;
        $projectFromDb->CategoryCode = $project->CategoryCode;

        $images = null;
        if($request->file("ImgProjects") != null){
            $files = $request->file("ImgProjects");
            $this->UndoTransaction($project->ProjectId, $files); //hapus gambar
            $images = $this->SaveImageProject($project, $files); //simpan gambar baru 
        }
        
        $projectFromDb->save();
        if($images != null) {
            $projectFromDb->ImgProjects()->saveMany($images); //save child
        }
        return redirect()->back();
       
    }

    public function DeleteProject($id)
    {
        $project = ProjectModel::with('ImgProjects')->find($id);
        if(empty($project)){
            $message = "Data Project tidak ditemukan";
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }
 
        foreach($project->ImgProjects as $imgProject){
            $imagepath = \base_path().'/public'.$imgProject->ImgProject;
            if(File::exists($imagepath))
               File::delete($imagepath);
        }

        ProjectModel::destroy($project->ProjectId);
        return redirect()->back();
    }

    private function PutDataOnModel($request){
        $project = new ProjectModel();
        $project->ProjectId = $request->ProjectId;
        $project->ProjectCode = strtoupper($request->ProjectCode);
        $project->ProjectName = $request->ProjectName;
        $project->Description = $request->Description;
        $project->ClientName = $request->ClientName;
        $project->ProjectDate = $request->ProjectDate;
        $project->CategoryCode = $request->CategoryCode;
        $project->CategoryId = $request->CategoryId;

        return $project;
    }

    private function CheckInputData($request, $isNew){
        $message = '';
        $validator = Validator::make($request->all(), [
            'ProjectId' => 'nullable',
            'ProjectCode' => 'required|string',
            'ProjectName' => 'required|string',
            'Description' => 'required|string',
            'ClientName' => 'required|string',
            'ProjectDate' => 'date',
            'CategoryCode' => 'required',
            'CategoryId' => 'required'
        ],[
            'ProjectCode.required' => "Kode Project masih kosong, harap diisi",
            'ProjectName.required' => "Nama Project masih kosong, harap diisi",
            'Description.required' => "Deskripsi Project masih kosong, harap diisi",
            'ClientName.required' => 'Nama Klien masih kosong, harap diisi',
            'CategoryCode.required' => 'Kode Kategori belom dipilih, harap dipilih'
        ]);
        
        if($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach($errors as $error){
                $message .= $error."<br>";
            }
        }

        if($request->file('ImgProjects') == null && $isNew)
        {
            $message .= "Project harus punya min. 1 gambar <br>";
        }

        if($request->ProjectCode != null){
            if(ProjectModel::where('ProjectCode',$request->ProjectCode)->where("ProjectId", "!=", $request->ProjectId)->exists()){
                $message .= "Kode Project sudah ada, harap diganti\n";
            }
        }

        return $message;
    }

    private function SaveImageProject($project, $files) 
    {
        $images = [];
        foreach ($files as $index => $file) {
            $filePath = "/images/projects";
            $imageName =  SaveImage($file['ImgFile'], $project->ProjectCode.'_'.$index, $filePath);
            $images[] = new ImagesProjectModel([
                'ImgProjectId' => uuidFunction::NewGuid(),
                'ImgProject' => $imageName,
                'NumberSort' => $index
            ]);
        }  

       return $images;
    }

    private function UndoTransaction($id, $files) : void {
        $idsToRemove = [];
        foreach($files as $index => $file){
            $image = ImagesProjectModel::where('ProjectId',$id)->where('NumberSort', $index)->first();
            if($image != null){
                array_push($idsToRemove, $image->ImgProjectId);
            }
        }
        
        if(count($idsToRemove) > 0) {
            ImagesProjectModel::where('ImgProjectId', $idsToRemove)->delete();
        }
    }
}
