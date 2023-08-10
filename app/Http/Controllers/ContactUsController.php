<?php

namespace App\Http\Controllers;

use App\Models\ContactUsModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function DashboardContactUs()
    {
         $contactUs = ContactUsModel::first();
 
         return Inertia::render('Dashboard/DashboardContactUs', [
             'pathName' => '/dashboard-contact-us',
             'contactUs' => $contactUs
         ]); 
    }
    
    public function edit(Request $request) 
    {    
        ContactUsModel::where('ContactUsId', $request->contactUsId)->update([
            'Address' => $request->address,
            'Email'=> $request->email,
            'PhoneNumber1'=>$request->phoneNumber1,
            'Admin1'=>$request->admin1,
            'PhoneNumber2'=>$request->phoneNumber2,
            'Admin2'=>$request->admin2
        ]);

        return redirect()->back()->with('message', 'Berhasil di edit');
    }
}
