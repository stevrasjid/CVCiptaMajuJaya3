<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class ContactUsModel extends Model
{
    use HasFactory, uuidFunction;
    protected $table = 'contact_us';

    protected $fillable = [
       'ContactUsId',
       'Address',
       'Email',
       'PhoneNumber1',
       'Admin1',
       'PhoneNumber2',
       'Admin2',
    ]; 

    public $incrementing = false;
    protected $primaryKey = 'ContactUsId';

}
