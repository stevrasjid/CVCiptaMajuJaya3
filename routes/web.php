<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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
Route::get('/projects', 'ProjectController@index')->name('projects');
Route::get('/aboutUs', 'AboutUsController@index')->name('aboutUs');

//dashboardHome
Route::get('/dashboard', 'DashboardController@indexDashboard')->name('dashboard');
Route::put('/', 'HomeController@editHomepage')->name('editHomepage');   

//dashboardAboutUs
Route::get('/dashboardAboutUs', 'DashboardController@indexAboutUs')->name('dashboardAboutUs');
Route::put('/aboutUs', 'AboutUsController@edit')->name('editAboutUs');

//dashboardContactUs
Route::get('/dashboardContactUs', 'DashboardController@indexContactUs')->name('dashboardContactUs');
Route::put('/contactUs', 'ContactUsController@edit')->name('editContactUs');



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
