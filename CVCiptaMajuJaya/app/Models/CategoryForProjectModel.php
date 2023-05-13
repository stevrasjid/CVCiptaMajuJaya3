<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\uuidFunction;

class CategoryForProjectModel extends Model
{
    use HasFactory;
    use uuidFunction;

    protected $table = 'category_for_project';

    protected $fillable = [
       'CategoryId',
       'CategoryCode',
       'CategoryName',
    ]; 

    public $incrementing = false;
    protected $primaryKey = 'CategoryId';
}
