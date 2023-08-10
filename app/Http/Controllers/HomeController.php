<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HomeModel;
use App\Models\AboutUsModel;
use App\Models\ContactUsModel;
use App\Models\TestimonyModel;
use App\Models\ImageProjectModel;
use App\Models\ServiceModel;
use App\Models\ServiceModels;
use App\Models\TestimonyModels;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Traits\uuidFunction as uuid;
use Illuminate\Support\Facades\Redirect;

class HomeController extends Controller
{
    use uuid;
    public function index(){
        $aboutUsHome = AboutUsModel::get(['DescriptionAboutUsSmall','ImgAboutUsHome',  
                                          'ImgAboutUsHomeSmall1', 'ImgAboutUsHomeSmall2', 'ImgAboutUsHomeSmall3' ]);
        $services = ServiceModel::all();
        $testimonies = TestimonyModel::all();
        $contactUs = ContactUsModel::all();
        
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

        return Inertia::render('PageLayout/Homepage', [
            'pathName' => '/',
            'services' => $services,
            'projects' => $projects,
            'testimonies' => $testimonies
        ]);
    }

    public function DashboardHomepage()
   {
        $home = HomeModel::first();

        return Inertia::render('Dashboard/DashboardHomepage', [
            'pathName' => '/dashboard',
            'home' => $home
        ]);
   }

    public function editHomepage(Request $request) {
       $validated = $request->validate([
            'tagLine' => 'required',
            'smallDescription' => 'required',
            'yearsExperiences' => 'required',
            'happyCustomers' => 'required',
        ]);

        if($request->hasFile('imgHeader')){
            $file = $request->file("imgHeader");
            $imgNameFromDb = HomeModel::First()->ImgHeader;
            $filePath = "/images";
            $imageNameHome = SaveImage($file, "ImgHeader", $filePath, $imgNameFromDb);

            HomeModel::where('HomeId',$request->homeId)->update([
                'ImgHeader' => $imageNameHome
            ]);
        }

        // return redirect()->back()->withErrors([
        //     'message' => 'error'
        // ]);

        HomeModel::where('HomeId', $request->homeId)->update([
            'TagLine' => $request->tagLine,
            'SmallDescription' => $request->smallDescription,
            'YearsExperiences' => $request->yearsExperiences,
            'HappyCustomers' => $request->happyCustomers
        ]);

        return redirect()->back()->with('success', 'Post created successfully');
    }
}
