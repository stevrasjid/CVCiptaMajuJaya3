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

    public function projectImages() {
        return $this->hasMany(ImagesProjectModel::class);
    }
}
