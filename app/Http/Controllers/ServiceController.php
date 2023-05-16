<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceModel;
use Inertia\Inertia;
class ServiceController extends Controller
{
    public function index(){
        $services = ServiceModel::all();

        return Inertia::render('PageLayour/OurServicesLayout', [
            'pathName' => '/services',
            'services' => $services
        ]);
    }
}
