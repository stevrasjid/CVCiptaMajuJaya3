<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class AboutUsModel extends Model
{
    use HasFactory;
    use uuidFunction;

    protected $table = 'about_us';  

    protected $fillable = [
       'AboutUsId',
       'DescriptionAboutUsSmall',
       'DescriptionAboutUsFull',
       'Commitment',
       'Vision',
       'MIssion',
       'ImgAboutUsHome',
       'ImgAboutUs',
       'ImgCommitment',
       'ImgAboutUsHomeSmall1',
       'ImgAboutUsHomeSmall2',
       'ImgAboutUsHomeSmall3',

    ]; 

    public $incrementing = false;
    protected $primaryKey = 'AboutUsId';
}
