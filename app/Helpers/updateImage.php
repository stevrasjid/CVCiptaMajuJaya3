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
        $destinationPath = \base_path().$filepath;
        if(File::exists($destinationPath.'/'.$imageNameFromDb)){
            File::delete($destinationPath.'/'.$imageNameFromDb);
        }
    }
   
    $imageName = $name.$extension;
    $file->move(\base_path().$filepath, $imageName);
    
    return $imageName;
}

