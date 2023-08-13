<?php

namespace App\Http\Controllers;

use App\Models\ContactUsModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

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
        $message = '';
        $validator = Validator::make($request->all(), [
            'address' => 'required',
            'email' => 'required',
            'phoneNumber1' => 'required',
            'admin1' => 'required',
            'phoneNumber2' => 'required',
            'admin2' => 'required',
        ], [
            'address.required' => 'Alamat masih kosong, harap diisi',
            'email.required' => 'Email masih kosong, harap diisi',
            'phoneNumber1.required' => 'Nomor Telepon Admin 1 masih kosong, harap diisi',
            'admin1.required' => 'Nama Admin 1 masih kosong, harap diisi',
            'phoneNumber2.required' => 'Nomor Telepon Admin 2 masih kosong, harap diisi',
            'admin2.required' => 'Nama Admin 2 masih kosong, harap diisi',
        ]);

        if($validator->fails()) {
            $errors = $validator->errors()->all();
            foreach($errors as $error){
                $message = $message.$error."<br>";
            }
            return redirect()->back()->withErrors([
                'message' => $message
            ]);
        }

        ContactUsModel::where('ContactUsId', $request->contactUsId)->update([
            'Address' => $request->address,
            'Email'=> $request->email,
            'PhoneNumber1'=>$request->phoneNumber1,
            'Admin1'=>$request->admin1,
            'PhoneNumber2'=>$request->phoneNumber2,
            'Admin2'=>$request->admin2
        ]);

        return redirect()->back();
    }
}
