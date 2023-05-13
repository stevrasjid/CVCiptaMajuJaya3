<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomeModel;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomeModel::create([
            'TagLine' => 'Design & Build Your Property Dream With Us.',
            'SmallDescription' => 'Karya terbaik dari kami akan menciptakan kenyamanan 
            dengan tanpa rasa khawatir.',
            'YearsExperiences' => '10+',
            'HappyCustomers' => '20+',
            'ImgHeader' => 'header.png'
        ]);
    }
}
