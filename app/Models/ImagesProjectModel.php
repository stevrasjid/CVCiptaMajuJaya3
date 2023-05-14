<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class ImagesProjectModel extends Model
{
    use HasFactory, uuidFunction;
    protected $table = 'image_project';

    protected $fillable = [
       'ImgProjectId',
       'ImgProject',
       'NumberSort',
       'isFirst',
    ]; 

    public $incrementing = false;   
}
