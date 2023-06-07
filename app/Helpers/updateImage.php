<?php

use App\Models\AboutUsModel;
use Illuminate\Support\Facades\File;
use Spatie\ImageOptimizer;

function SaveImageAboutUs($file, $numberImgName)
{
    $getImage = AboutUsModel::First();
    $extension = '.'.$file->extension();
    switch($numberImgName){
        case "1":
            $name = "ImgAboutUs";
            $imageNameFromDb = $getImage->ImgAboutUs;
            break;
        case "2":
            $name = "ImgAboutUsHome";
            $imageNameFromDb = $getImage->ImgAboutUsHome;
            break;
        case "3":
            $name = "ImgAboutCommitment";
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

    ImageOptimizer::optimize($file);

    $destinationPath = \base_path()."/public/images";
    if(File::exists($destinationPath.'/'.$imageNameFromDb)){
        File::delete($destinationPath.'/'.$imageNameFromDb);
    }

    $imageName = $name.$extension;
    $file->move(\base_path()."/public/images", $imageName);
    
    return $imageName;
}

