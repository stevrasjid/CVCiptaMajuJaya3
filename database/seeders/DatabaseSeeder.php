<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\AboutUsSeeder;
use Database\Seeders\CategoryForProjectSeeder;
use Database\Seeders\ContactUsSeeder;
use Database\Seeders\HomeSeeder;
use Database\Seeders\ServiceSeeder;
use Database\Seeders\TestimonySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call([
            HomeSeeder::class,
            ContactUsSeeder::class,
            AboutUsSeeder::class,
            CategoryForProjectSeeder::class,
            ServiceSeeder::class,
            TestimonySeeder::class,
            UserSeeder::class,
        ]);
    }
}
