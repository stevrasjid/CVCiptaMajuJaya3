<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AboutUsModel;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index(){
        $aboutUs = AboutUsModel::get([
            'AboutUsId',
            'DescriptionAboutUsFull',
            'Commitment',
            'Vision',
            'Mission',
            'ImgAboutUs',
        ]);

        return Inertia::render('PageLayout/AboutUs', [
            'pathName' => '/aboutUs',
            'aboutUs' => $aboutUs
        ]);
    }

    public function DashboardAboutUs()
    {
        $aboutUs = AboutUsModel::first();

        return Inertia::render('Dashboard/DashboardAboutUs', [
            'pathName' => '/dashboard-about-us',
            'aboutUs' => $aboutUs
        ]);
    }

    public function edit(Request $request)
    {
        $validated = $request->validate([
            'vision' => 'required',
            'mission' => 'required',
            'commitment' => 'required',
            'descriptionAbousUsSmall' => 'required',
            'descriptionAbousUsFull' => 'required',
            'imgAboutUsHome' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUs' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgCommitment' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUsHomeSmall1' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUsHomeSmall2' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUsHomeSmall3' => 'image|mimes:jpg,png,jpeg|max:2048|nullable'

        ]);

        if($request->hasFile('imgAboutUsHome')){
            $file = $request->file("imgAboutUsHome");
            $imageNameAboutUsHome = $this->updateImageAboutUs($file, "1");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgAboutUsHome' => $imageNameAboutUsHome
            ]);
        }

        if($request->hasFile('imgAboutUs')){
            $file = $request->file("imgAboutUs");
            $imageNameAboutUs = $this->updateImageAboutUs($file, "2");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgAboutUs' => $imageNameAboutUs
            ]);
        }

        if($request->hasFile('imgCommitment')){
            $file = $request->file("imgCommitment");
            $imageNameCommitment = $this->updateImageAboutUs($file, "3");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgCommitment' => $imageNameCommitment
            ]);
        }

        if($request->hasFile('imgAboutUsHomeSmall1')){
            $file = $request->file("imgAboutUsHomeSmall1");
            $imageNameAboutUsSmall1 = $this->updateImageAboutUs($file, "4");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgAboutUsHomeSmall1' => $imageNameAboutUsSmall1
            ]);
        }

        if($request->hasFile('imgAboutUsHomeSmall2')){
            $file = $request->file("imgAboutUsHomeSmall2");
            $imageNameAboutUsSmall2 = $this->updateImageAboutUs($file, "5");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgAboutUsHomeSmall2' => $imageNameAboutUsSmall2
            ]);
        }

        if($request->hasFile('imgAboutUsHomeSmall3')){
            $file = $request->file("imgAboutUsHomeSmall3");
            $imageNameAboutUsSmall3 = $this->updateImageAboutUs($file, "6");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgAboutUsHomeSmall3' => $imageNameAboutUsSmall3
            ]);
        }

       AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
            'Vision' => $request->vision,
            'Mission' => $request->mission,
            'Commitment' => $request->commitment,
            'DescriptionAboutUsSmall' => $request->descriptionAboutUsSmall,
            'DescriptionAboutUsFull' => $request->descriptionAboutUsFull
       ]);

       return redirect()->back()->with('message', 'Berhasil di edit');
    }

    private function updateImageAboutUs ($file, $numberImgName) 
    {
        $getImage = AboutUsModel::First();
        switch($numberImgName){
            case "1":
                $name = "ImgAboutUsHome";
                $imageNameFromDb = $getImage->ImgAboutUsHome;
                break;
            case "2":
                $name = "ImgAboutUs";
                $imageNameFromDb = $getImage->ImgAboutUs;
                break;
            case "3":
                $name = "ImgCommitment";
                $imageNameFromDb = $getImage->ImgCommitment;
                break;
            case "4":
                $name = "ImgAboutUsHomeSmall1";
                $imageNameFromDb = $getImage->ImgAboutUsHomeSmall1;
                break;
            case "5":
                $name = "ImgAboutUsHomeSmall2";
                $imageNameFromDb = $getImage->ImgAboutUsHomeSmall2;
                break;
            case "6":
                $name = "ImgAboutUsHomeSmall3";
                $imageNameFromDb = $getImage->ImgAboutUsHomeSmall3;
                break;
        }
        $filePath = "/images";
        $imageNameAboutUsHome = SaveImage($file, $name, $filePath, $imageNameFromDb);

        return $imageNameAboutUsHome;
    }
}
