<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectModel;
use App\Traits\uuidFunction;

class ImagesProjectModel extends Model
{
    use HasFactory, uuidFunction;
    protected $table = 'images_project';

    protected $fillable = [
       'ImgProjectId',
       'ImgProject',
       'NumberSort',
       'ProjectId'
    ]; 

    public $incrementing = false;   
    protected $primaryKey = 'ImgProjectId';

    public function Project(){
        return $this->belongsTo(ProjectModel::class, 'ProjectId');
    }
}
