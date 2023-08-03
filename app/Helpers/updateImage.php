<?php

use App\Models\AboutUsModel;
use Illuminate\Support\Facades\File;
use Spatie\ImageOptimizer\OptimizerChainFactory;

function SaveImage($file, $name, $filepath, $imageNameFromDb = null)
{
    $extension = '.'.$file->extension();
    $optimizerChain = OptimizerChainFactory::create();
    $optimizerChain->optimize($file);

    if(!empty($imageNameFromDb)){
        $destinationPath = \base_path().'/public'.$imageNameFromDb;
        if(File::exists($destinationPath)){
            File::delete($destinationPath);
        }
    }   
    $pathSave = \base_path()."/public".$filepath;
    $imageName = $name.$extension;
    $file->move($pathSave, $imageName);
    
    return $filepath."/".$imageName;
}

