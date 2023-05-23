<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AboutUsModel;
use App\Models\HomeModel;
use App\Models\ProjectModel;
use App\Models\ServiceModel;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexAboutUs()
    {
        $aboutUs = AboutUsModel::first();

        return Inertia::render('Dashboard/DashboardAboutUs', [
            'pathName' => '/dashboardAboutUs',
            'aboutUs' => $aboutUs
        ]);
    }

   public function indexDashboard()
   {
        $home = HomeModel::first();

        return Inertia::render('Dashboard/DashboardHomepage', [
            'pathName' => '/dashboard',
            'home' => $home
        ]);
   }

   public function indexProjects()
   {
        $projects = ProjectModel::all();

        return Inertia::render('Dashboard/DashboardProject', [
            'pathName' => '/dashboardProject',
            'projects' => $projects
        ]);
   }

   public function indexServices()
   {
        $services = ServiceModel::all();

        return Inertia::render('Dashboard/DashboardService', [
            'pathName' => '/dashboardService',
            'services' => $services
        ]);
   }
}
