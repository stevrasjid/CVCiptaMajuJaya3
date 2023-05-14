<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AboutUsModel;

class AboutUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AboutUsModel::create([
            'DescriptionAboutUsSmall' => 'CV Cipta Maju Jaya bergerak dalam bidang pembuatan baru, renovasi dan jasa desain interior. Berdiri sejak 2009 dengan komitmen :',
            'DescriptionAboutUsFull' => 'CV. Cipta Maju Jaya berdiri sejak 2009. Bergerak dalam bidang pembuatan baru, renovasi, dan jasa desain interior. Proyek yang pernah kami tangani meliputi Pembangunan Karaoke Keluarga & KTV, Restoran, Lounge, Club, dan Rumah Tinggal. Kami mengerjakan proyek renovasi dan pembangunan baru dengan harga yang terjangkau dan kredibilitas yang tinggi',
            'Commitment' => 'Selalu berusaha memberikan yang terbaik kepada seluruh konsumen baik dalam ketepatan waktu dengan target yang telah ditetapkan dengan memberikan hasil dan kualitas yang terbaik juga akan terus mengikuti perkembangan zaman agar dapat memberikan ide yang unik serta konsep yang baru kepada konsumen.',
            'Vision' => 'Menjadi perusahaan kontraktor, jasa design dan interior yang unggul dan terpercaya dalam membantu dan mewujudkan keinginan serta kepuasan konsumen',
            'Mission' => 'Selalu menjadi yang pertama dan terdepan untuk membentu konsumen serta memberikan ide unik dan konsep yang baru serta menyelesaikan pekerjaan dengan cepat dan ketepatan waktu tanpa mengurangi hasil dan kualitas.',
            'ImgAboutUsHome' => 'aboutUsHome.png',
            'ImgAboutUs' => 'aboutUsImg.png',
            'ImgCommitment' => 'commitment.png',
            'ImgAboutUsHomeSmall1' => 'sesuaiTarget.png' ,
            'ImgAboutUsHomeSmall2' => 'tepatWaktu.png',
            'ImgAboutUsHomeSmall3' => 'hargaTerjangkau.png',
        ]);
    }
}
