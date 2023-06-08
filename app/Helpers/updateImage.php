<?php

use App\Models\AboutUsModel;
use Illuminate\Support\Facades\File;
use Spatie\ImageOptimizer\OptimizerChainFactory;

function SaveImage($file, $name, $imageNameFromDb)
{
    $extension = '.'.$file->extension();
    $optimizerChain = OptimizerChainFactory::create();
    $optimizerChain->optimize($file);

    $destinationPath = \base_path()."/public/images";
    if(File::exists($destinationPath.'/'.$imageNameFromDb)){
        File::delete($destinationPath.'/'.$imageNameFromDb);
    }

    $imageName = $name.$extension;
    $file->move(\base_path()."/public/images", $imageName);
    
    return $imageName;
}

