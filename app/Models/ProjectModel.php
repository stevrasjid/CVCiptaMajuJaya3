<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class ProjectModel extends Model
{
    use HasFactory, uuidFunction;
    protected $table = 'project_header';

    protected $fillable = [
       'ProjectId',
       'ProjectName',
       'Description',
       'ClientName',
       'ProjectDate',
       'CategoryId',
       'CategoryCode',
    ]; 

    public $incrementing = false;
}
