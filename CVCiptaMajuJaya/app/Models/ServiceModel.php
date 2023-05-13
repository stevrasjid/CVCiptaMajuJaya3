<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class ServiceModel extends Model
{
    use HasFactory, uuidFunction;
    protected $table = 'service';

    protected $fillable = [
       'ServiceId',
       'ServiceTitle',
       'ServiceDescription',
       'ImgService',
    ]; 

    public $incrementing = false;
    protected $primaryKey = 'ServiceId';
}
