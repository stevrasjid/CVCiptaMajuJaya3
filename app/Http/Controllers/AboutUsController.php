<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AboutUsModel;
use App\Models\ContactUsModel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class AboutUsController extends Controller
{
    public function index(){
        $aboutUs = AboutUsModel::first([
            'AboutUsId',
            'DescriptionAboutUsFull',
            'Commitment',
            'Vision',
            'Mission',
            'ImgAboutUs',
        ]);
        
        //untuk footer
        $contactUs = ContactUsModel::first();

        return Inertia::render('PageLayout/AboutUs', [
            'pathName' => '/aboutUs',
            'aboutUs' => $aboutUs,
            'contactUs' => $contactUs
        ]);
    }

    public function DashboardAboutUs()
    {
        $aboutUs = AboutUsModel::first();

        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/dashboard-about-us',
            'aboutUs' => $aboutUs
        ]);
    }

    public function edit(Request $request)
    {
        $message = '';
        $validator = Validator::make($request->all(), [
            'vision' => 'required',
            'mission' => 'required',
            'commitment' => 'required',
            'descriptionAboutUsSmall' => 'required',
            'descriptionAboutUsFull' => 'required',
            'imgAboutUsHome' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUs' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgCommitment' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUsHomeSmall1' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUsHomeSmall2' => 'image|mimes:jpg,png,jpeg|max:2048|nullable',
            'imgAboutUsHomeSmall3' => 'image|mimes:jpg,png,jpeg|max:2048|nullable'
        ], [
            'vision.required' => 'Visi masih kosong, harap diisi',
            'mission.required' => 'Misi masih kosong, harap diisi',
            'commitment.required' => 'Komitmen masih kosong, harap diisi',
            'descriptionAboutUsSmall.required' => 'Deskripsi Tentang Kami di beranda masih kosong, harap diisi',
            'descriptionAboutUsFull.required' => 'Deskripsi Tentang Kami masih kosong, harap diisi',
            'imgAboutUsHome.mimes' => 'Format gambar Tentang Kami di beranda hanya bisa jpg, png, jpeg, harap diperbaiki',
            'imgAboutUsHome.max' => 'Ukuran gambar Tentang Kami di beranda melebihi ukuran maksimal (2mb), harap diperbaiki',
            'imgAboutUs.mimes' => 'Format gambar Tentang Kami hanya bisa jpg, png, jpeg, harap diperbaiki',
            'imgAboutUs.max' => 'Ukuran gambar Tentang Kami melebihi ukuran maksimal (2mb), harap diperbaiki',
            'imgCommitment.mimes' => 'Format gambar Komitment hanya bisa jpg, png, jpeg, harap diperbaiki',
            'imgCommitment.max' => 'Ukuran gambar Komitment di beranda melebihi ukuran maksimal (2mb), harap diperbaiki',
            'imgAboutUsHomeSmall1.mimes' => 'Format gambar Tentang Kami kecil di beranda 1 hanya bisa jpg, png, jpeg, harap diperbaiki',
            'imgAboutUsHomeSmall1.max' => 'Ukuran gambar Tentang kami kecil 1 di beranda melebihi ukuran maksimal (2mb), harap diperbaiki',
            'imgAboutUsHomeSmall2.mimes' => 'Format gambar Tentang Kami kecil di beranda 2 hanya bisa jpg, png, jpeg, harap diperbaiki',
            'imgAboutUsHomeSmall2.max' => 'Ukuran gambar Tentang kami kecil 2 di beranda melebihi ukuran maksimal (2mb), harap diperbaiki',
            'imgAboutUsHomeSmall3.mimes' => 'Format gambar Tentang Kami kecil di beranda 3 hanya bisa jpg, png, jpeg, harap diperbaiki',
            'imgAboutUsHomeSmall3.max' => 'Ukuran gambar Tentang kami kecil 3 di beranda melebihi ukuran maksimal (2mb), harap diperbaiki',
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

       return redirect()->back();
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
