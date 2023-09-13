<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TestimonyModel;

class TestimonySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonies = [
            [
            'TestimonyCode' => 'Jason1',
            'ClientName' => 'Jason',
            'Occupation' => 'Pengusaha Karaoke',
            'TestimonialDescription' => 'Pekerjaannya rapi banget, gercep, dan tepat sesuai kontrak di awal. Maju terus dan sukses selalu CV. Cipta Maju Jaya',
            'ImgClient' => 'imgClient.png',
            ],
            [
                'TestimonyCode' => 'Jason2',
                'ClientName' => 'Jason',
                'Occupation' => 'Pengusaha Karaoke',
                'TestimonialDescription' => 'Pekerjaannya rapi banget, gercep, dan tepat sesuai kontrak di awal. Maju terus dan sukses selalu CV. Cipta Maju Jaya',
                'ImgClient' => 'imgClient.png',
            ]
            ];
            foreach($testimonies as $testimony){
                TestimonyModel::create($testimony);
            }
    }
}
