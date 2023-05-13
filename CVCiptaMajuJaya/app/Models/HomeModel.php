<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class HomeModel extends Model
{
    use uuidFunction;
    use HasFactory;
    protected $table = 'home';

    protected $fillable = [
       'HomeId',
       'TagLine',
       'SmallDescription',
       'YearsExperiences',
       'HappyCustomers',
       'ImgHeader'
    ]; 

    protected $primaryKey = 'HomeId';
    
    public $incrementing = false;
}
