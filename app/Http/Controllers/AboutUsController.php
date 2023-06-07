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

    public function edit(Request $request)
    {
        // $validated = $request->validate([
        //     'vision' => 'required',
        //     'mission' => 'required',
        //     'commitment' => 'required',
        //     'descriptionAbousUsSmall' => 'required',
        //     'descriptionAbousUsFull' => 'required',
        //     'imgAboutUsHome' => 'image|mimes:jpg,png,jpeg|max:2048|nullable'
        // ]);

        if($request->hasFile('imgAboutUsHome')){
            $file = $request->file("imgAboutUsHome");
            $imageNameAboutUsHome = SaveImageAboutUs($file, "1");

            AboutUsModel::where('AboutUsId',$request->aboutUsId)->update([
                'ImgAboutUsHome' => $imageNameAboutUsHome
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

    function updateImage ($file) {
        
    }
}
