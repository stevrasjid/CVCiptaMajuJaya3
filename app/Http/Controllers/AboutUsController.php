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
}
