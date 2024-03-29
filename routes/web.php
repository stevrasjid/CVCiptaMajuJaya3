<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', 'HomeController@index')->name('home');
Route::get('/services', 'ServiceController@index')->name('services');
Route::get('/projects/{parameter?}', 'ProjectController@index')->name('projects');
Route::get('/about-us', 'AboutUsController@index')->name('aboutUs');


// Route::get('/dashboard', function () {   
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    //dashboardHome
    Route::get('/dashboard', 'HomeController@DashboardHomepage')->name('dashboard');
    Route::post('/', 'HomeController@editHomepage')->name('editHomepage');   

    //dashboardAboutUs
    Route::get('/dashboard-about-us', 'AboutUsController@DashboardAboutUs')->name('dashboardAboutUs');
    Route::post('/about-us', 'AboutUsController@edit')->name('editAboutUs');

    //dashboardContactUs
    Route::get('/dashboard-contact-us', 'ContactUsController@DashboardContactUs')->name('dashboardContactUs');
    Route::put('/contact-us', 'ContactUsController@edit')->name('editContactUs');

    //dashboardServiceList
    Route::get('/dashboard-service-list/{parameter?}','ServiceController@DashboardServices')->name('dashboardServiceList');
    Route::get('/get-dashboard-service/{id}','ServiceController@GetService')->name('getDashboardService');
    Route::post('/add-new-dashboard-service','ServiceController@AddNewService')->name('addNewService');
    Route::post('/edit-dashboard-service','ServiceController@EditService')->name('editService');
    Route::delete('delete-dashboard-service/{id}', 'ServiceController@DeleteService')->name('deleteService');
    Route::get('/add-new-dashboard-service-form', function() {
    return Inertia::render('Dashboard/Dashboard', [
        'pathName' => '/add-new-dashboard-service-form'
    ]);
    })->name('newServiceForm');
    //=========================

    //dashboardProject
    Route::get('/dashboard-project-list/{parameter?}','ProjectController@DashboardProjects')->name('dashboardProjectList');
    Route::get('/get-dashboard-project/{id}','ProjectController@GetProject')->name('getDashboardProject');
    Route::post('/add-new-dashboard-project','ProjectController@AddNewProject')->name('addNewProject');
    Route::post('/edit-dashboard-project', 'ProjectController@EditProject')->name('editProject');
    Route::delete('/delete-dashboard-project/{id}', 'ProjectController@DeleteProject')->name('deleteProject');
    Route::get('/get-category-master','ProjectController@GetMasterCategory')->name('getCategoryMaster');
    Route::get('/add-new-dashboard-project-form', 'ProjectController@AddNewProjectForm')->name('newProjectForm');

    Route::get('/dashboard-testimony-list/{parameter?}','TestimonyController@DashboardTestimony')->name('dashboardTestimonyList');
    Route::get('/get-dashboard-testimony/{id}','TestimonyController@GetTestimony')->name('getDashboardTestimony');
    Route::post('/add-new-dashboard-testimony','TestimonyController@AddNewTestimony')->name('addNewTestimony');
    Route::post('/edit-new-dashboard-testimony','TestimonyController@EditTestimony')->name('editTestimony');
    Route::delete('/delete-dashboard-testimony/{id}','TestimonyController@DeleteTestimony')->name('deleteTestimony');
    Route::get('/add-new-dashboard-testimony-form', function() {
        return Inertia::render('Dashboard/Dashboard', [
            'pathName' => '/add-new-dashboard-testimony-form'
        ]);
    })->name('newTestimonyForm');
});

require __DIR__.'/auth.php';
