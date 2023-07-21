<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CategoryForProjectModel;

class CategoryForProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'CategoryCode' => 'TEMPATHIBURAN',
                'CategoryName' => 'Tempat Hiburan'
            ],
            [
                'CategoryCode' => 'TEMPATTINGGAL',
                'CategoryName' => 'Tempat Tinggal',
            ],
            [
                'CategoryCode' => 'RESTORAN',
                'CategoryName' => 'Restoran',
            ],
        ];
        
        foreach($categories as $category)
        {
            CategoryForProjectModel::create($category);
        }
    
    }
}
