<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction as uuid;

class TestimonyModel extends Model
{
    use HasFactory, uuid;
    protected $table = 'testimony';

    protected $fillable = [
       'TestimonyId',
       'ClientName',
       'Occupation',
       'TestimonialDescription',
       'ImgClient',
    ]; 

    public $incrementing = false;
    protected $primaryKey = 'TestimonyId';
}
