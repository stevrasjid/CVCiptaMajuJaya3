<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectsCollection;
use App\Models\ProjectModel;
use App\Models\CategoryForProjectModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\uuidFunction;
use Illuminate\Support\Facades\Redirect; 

class ProjectController extends Controller
{
    use uuidFunction;

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

    public function AddNewProjectForm() {
        $categories = CategoryForProjectModel::all();

        return Inertia::render('Dashboard/DashboardProjects', [
            'pathName' => 'add-new-dashboard-project-form',
            'Categories' => $categories
        ]);
        

    }

    public function DashboardProjects(){
         $projects = ProjectModel::with('projectImages')->get();
 
         return Inertia::render('Dashboard/DashboardProjects', [
             'pathName' => '/dashboard-project-list',
             'projects' => $projects
         ]);
    }
 

    public function AddNewProject(Request $request){
        $request->validate([
            'ProjectName' => 'required',
            'Description' => 'required',
            'ClientName' => 'required',
            'ProjectDate' => 'date',
            'CategoryCode' => 'required',
            'ProjectImages' => 'required',
            'ProjectImages.*' => 'image|mimes:jpg,png,jpeg'
        ]);

        $project = $this->PutDataOnModel($request); 
        if($request->hasFile('ProjectImages')){
            
        }

        
        
    }

    private function PutDataOnModel($request){
        $project = new ProjectModel();
        $project->ProjectId = $request->ProjectId == null ? uuidFunction::NewGuid() : $request->ProjectId;
        $project->ProjectName = $request->ProjectName;
        $project->Description = $request->Description;
        $project->ClientName = $request->ClientName;
        $project->ProjectDate = $request->ProjectDate;
        $project->CategoryCode = $request->CategoryCode;
        $project->CategoryId = $request->CategoryId;
    }

   
}
