<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ContactUsModel;

class ContactUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ContactUsModel::create([
            'Address' => 'Jl. KH Noer Ali, Komplek Grand Kota Bintang Blok B 12 - 15 Lt. 8, Jatisampurna - Bekasi Kota (Ruko Zentrum KTV & Lounge)',
            'Email' => 'email@email.com',
            'PhoneNumber1' => '+62-857-7235-2312',
            'Admin1' => 'Robert',
            'PhoneNumber2' => '+62 896-0178-3007',
            'Admin2' => 'Stevanus',
        ]);
    }
}
