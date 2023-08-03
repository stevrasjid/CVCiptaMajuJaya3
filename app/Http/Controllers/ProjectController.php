<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectsCollection;
use App\Models\ProjectModel;
use App\Models\CategoryForProjectModel;
use App\Models\ImagesProjectModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\uuidFunction;
use File;
use Illuminate\Support\Facades\Redirect; 
use Carbon\Carbon;

class ProjectController extends Controller
{
    use uuidFunction;

    //ini untuk bagian main website
    public function index() {
        $projects = [
            [
                'ProjectId' => $this->NewGuid(),
                'ProjectName' => 'Zentrum & Venus Cabang Bogor',
                'Description' => 'Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur.',
                'ClientName' => 'Mr. Jason',
                "ProjectDate" => '12/12/2022',
                "ImageProjects" => [
                    [
                        'ImgProject' => 'projectImg.png'
                    ],
                    [
                        'ImgProject' => 'projectImg.png'
                    ]
                ]
            ],
            [
                'ProjectId' => $this->NewGuid(),
                'ProjectName' => 'Zentrum & Venus Cabang Bogor',
                'Description' => 'Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur.',
                'ClientName' => 'Mr. Jason',
                "ProjectDate" => '12/12/2022',
                "ImageProjects" => [
                    [
                        'ImgProject' => 'projectImg.png'
                    ],
                    [
                        'ImgProject' => 'projectImg.png'
                    ]
                ]
            ],
        ];

        // $projects = new ProjectsCollection(ProjectModel::paginate(1));

        return Inertia::render('PageLayout/OurProjectsLayout', [
            'pathName' => '/projects',
            'projects' => $projects,
        ]);
    }

    //buat form baru
    public function AddNewProjectForm() {
        $categories = CategoryForProjectModel::all();

        return Inertia::render('Dashboard/DashboardProjects', [
            'pathName' => 'add-new-dashboard-project-form',
            'Categories' => $categories
        ]);
    }

    //untuk list project
    public function DashboardProjects(){
         $projects = ProjectModel::with(['ImgProjects' => function($query) {
            $query->where('NumberSort', '0');
         }])->get();
 
         return Inertia::render('Dashboard/DashboardProjects', [
             'pathName' => '/dashboard-project-list',
             'projects' => $projects
         ]);
    }
 
    public function GetProject($id) {
        $project = ProjectModel::with(['ImgProjects' => function($query) {
            $query->orderBy('NumberSort');
        }])->find($id);
        $categories = CategoryForProjectModel::all();
        return Inertia::render('Dashboard/DashboardProjects', [
            'pathName' => 'edit-dashboard-project-form',
            'Project' => $project,
            'Categories' => $categories
        ]);
    }

    //add new Project
    public function AddNewProject(Request $request){
        $validateData = $request->validate([
            'ProjectId' => 'nullable',
            'ProjectCode' => 'required|string',
            'ProjectName' => 'required|string',
            'Description' => 'required|string',
            'ClientName' => 'required|string',
            'ProjectDate' => 'date',
            'CategoryCode' => 'required',
            'CategoryId' => 'required'
        ]);
        $files = $request->allFiles();
        $project = $this->PutDataOnModel((object)$validateData); 
        $message = $this->CheckInputData($project, $files, true);
        
        if(!empty($message)){
            return redirect()->back()->with('message', $message);
        }

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

        $images = $this->SaveImageProject($projectModel, $files); //push image into image list
        $projectModel->save(); //save parent
        $projectModel->ImgProjects()->saveMany($images); //save child

        return response()->json(['message' => 'Project created successfully']);
    }

    public function EditProject (Request $request){
        $validateData = $request->validate([
            'ProjectId' => 'required',
            'ProjectCode' => 'required|string',
            'ProjectName' => 'required|string',
            'Description' => 'required|string',
            'ClientName' => 'required|string',
            'ProjectDate' => 'date',
            'CategoryCode' => 'required',
            'CategoryId' => 'required',
        ]);

        $files = $request->allFiles();
        $project = $this->PutDataOnModel((object)$validateData); 
        $message = $this->CheckInputData($project, $files, false);
        if(!empty($message)){
            return redirect()->back()->with('message', $message);
        }

        $projectFromDb = ProjectModel::find($project->ProjectId);
        $projectFromDb->ProjectName = $project->ProjectName;
        $projectFromDb->ProjectCode = $project->ProjectCode;
        $projectFromDb->Description = $project->Description;
        $projectFromDb->ClientName = $project->ClientName;
        $projectFromDb->ProjectDate = $project->ProjectDate;
        $projectFromDb->CategoryId = $project->CategoryId;
        $projectFromDb->CategoryCode = $project->CategoryCode;

        if($files != null){
            $this->UndoTransaction($project->ProjectId); //hapus gambar 
            $images = $this->SaveImageProject($project, $files); //simpan gambar baru 
            $projectFromDb->ImgProjects()->saveMany($images); //save into database
        }

        $projectFromDb->save();
        return response()->json(['message' => 'Project edit successfully']);
    }

    public function DeleteProject($id)
    {
        $project = ProjectModel::with('ImgProjects')->find($id);
        if(empty($project)){
            $message = "Data Project tidak ditemukan";
            return redirect()->back()->with('message', $message);
        }
 
        foreach($project->ImgProjects as $imgProject){
            $imagepath = \base_path().'/public'.$imgProject->ImgProject;
            if(File::exists($imagepath))
               File::delete($imagepath);
        }

        ProjectModel::destroy($project->ProjectId);
        return response()->json(['message' => 'Project delete successfully']);
    }

    private function PutDataOnModel($validateData){
        $project = new ProjectModel();
        $project->ProjectId = $validateData->ProjectId == null ? uuidFunction::NewGuid() : $validateData->ProjectId;
        $project->ProjectCode = strtoupper($validateData->ProjectCode);
        $project->ProjectName = $validateData->ProjectName;
        $project->Description = $validateData->Description;
        $project->ClientName = $validateData->ClientName;
        $project->ProjectDate = Carbon::createFromFormat('Y-m-d',$validateData->ProjectDate)->format('Y-m-d');
        $project->CategoryCode = $validateData->CategoryCode;
        $project->CategoryId = $validateData->CategoryId;

        return $project;
    }

    private function CheckInputData($project, $files, $isNew){
        $message = '';
        if(ProjectModel::where('ProjectCode',$project->ProjectCode)->where("ProjectId", "!=", $project->ProjectId)->exists()){
            $message .= "Kode Project sudah ada, harap diganti\n";
        }

        if($project->ProjectName == null){
            $message .= "Nama Project kosong\n";
        }

        if($project->ClientName == null){
            $message .= "Nama Klien kosong\n";
        }

        if(count($files) === 0 && $isNew){
            $message .= "Gambar Belum ada yang diupload\n";
        }

        return $message;
    }

    private function SaveImageProject($project, $files) 
    {
        $images = [];
        foreach ($files as $index => $file) {
            $filePath = "/images/projects";
            $imageName =  SaveImage($file, $project->ProjectCode.'_'.$index, $filePath);
            $images[] = new ImagesProjectModel([
                'ImgProjectId' => uuidFunction::NewGuid(),
                'ImgProject' => $imageName,
                'NumberSort' => $index
            ]);
        }  

       return $images;
    }

    private function UndoTransaction($id) : void {
        $images = ImagesProjectModel::where('ProjectId',$id)->get();

        if($images->isNotEmpty()) {
            $idsToRemove = $images->pluck('ImgProjectId')->toArray();
            ImagesProjectModel::whereIn('ImgProjectId', $idsToRemove)->delete();
        }
    }
}
