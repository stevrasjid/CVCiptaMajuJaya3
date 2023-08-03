<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ImagesProjectModel;
use App\Traits\uuidFunction;

class ProjectModel extends Model
{
    use HasFactory, uuidFunction;
    protected $table = 'project_header';

    protected $fillable = [
       'ProjectId',
       'ProjectName',
       'ProjectCode',
       'Description',
       'ClientName',
       'ProjectDate',
       'CategoryId',
       'CategoryCode',
    ]; 

    public $incrementing = false;
    protected $primaryKey = 'ProjectId';

    public function ImgProjects() {
        return $this->hasMany(ImagesProjectModel::class, 'ProjectId', 'ProjectId');
    }
}
