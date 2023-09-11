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
use App\Models\ProjectModel;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Traits\uuidFunction as uuid;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    use uuid;
    public function index(){
        $aboutUsHome = AboutUsModel::first(['DescriptionAboutUsSmall','ImgAboutUsHome',  
                                          'ImgAboutUsHomeSmall1', 'ImgAboutUsHomeSmall2', 'ImgAboutUsHomeSmall3' ]);
        $services = ServiceModel::all();
        $testimonies = TestimonyModel::all();
        $contactUs = ContactUsModel::first();
        $home = HomeModel::first();
        
        $projects = ProjectModel::with('ImgProjects')->orderby('ProjectDate')->take(2)->get();
        return Inertia::render('PageLayout/Homepage', [
            'pathName' => '/',
            'services' => $services,
            'projects' => $projects,
            'testimonies' => $testimonies,
            'home' => $home,
            'aboutUsHome' => $aboutUsHome,
            'contactUs'=> $contactUs
        ]);
    }

    public function DashboardHomepage()
   {
        $home = HomeModel::first();

        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/dashboard',
            'home' => $home
        ]);
   }

    public function editHomepage(Request $request) {
        $message = '';
        $validator = Validator::make($request->all(), [
            'tagLine' => 'required',
            'smallDescription' => 'required',
            'yearsExperiences' => 'required',
            'happyCustomers' => 'required',
        ], [
            'tagLine.required' => 'Tag Line masih kosong, harap diisi',
            'smallDescription.required' => 'Deskripsi masih kosong, harap diisi',
            'yearsExperiences.required' => 'Tahun pengalaman masih kosong, harap diisi',
            'happyCustomers.required' => 'Pelanggan Senang masih kosong, harap diisi',
        ]);

        if($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach($errors as $error){
                $message = $message.$error."<br>";
            }
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }

        if($request->hasFile('imgHeader')){
            $file = $request->file("imgHeader");
            $imgNameFromDb = HomeModel::First()->ImgHeader;
            $filePath = "/images";
            $imageNameHome = SaveImage($file, "ImgHeader", $filePath, $imgNameFromDb);

            HomeModel::where('HomeId',$request->homeId)->update([
                'ImgHeader' => $imageNameHome
            ]);
        }

        HomeModel::where('HomeId', $request->homeId)->update([
            'TagLine' => $request->tagLine,
            'SmallDescription' => $request->smallDescription,
            'YearsExperiences' => $request->yearsExperiences,
            'HappyCustomers' => $request->happyCustomers
        ]);

        return redirect()->back();
    }
}
