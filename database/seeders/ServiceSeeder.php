<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ServiceModel;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [ [
            'ServiceTitle' => 'Kontraktor Umum',
            'ServiceCode'=> 'KONTRAKTORUMUM',
            'ServiceDescription' => 'Lorem ipsum dolor sit amet consectetur. Lorem praesent eu mauris arcu. Aliquam molestie varius imperdiet facilisis sagittis id donec. Nisi aliquet quisque vivamus scelerisque neque eget diam dolor nec. Non tortor quis cursus at dui. Imperdiet est lacinia congue egestas. Scelerisque mauris amet scelerisque volutpat convallis ipsum. In in id.',
            'ImgService' => 'images/services/kontraktorUmum.png',
        ],
        [
            'ServiceTitle' => 'Mekanik dan Listrik',
            'ServiceCode'=> 'MEKANIKLISTRIK',
            'ServiceDescription' => 'Lorem ipsum dolor sit amet consectetur. Lorem praesent eu mauris arcu. Aliquam molestie varius imperdiet facilisis sagittis id donec. Nisi aliquet quisque vivamus scelerisque neque eget diam dolor nec. Non tortor quis cursus at dui. Imperdiet est lacinia congue egestas. Scelerisque mauris amet scelerisque volutpat convallis ipsum. In in id.',
            'ImgService' => 'images/services/mekanikDanListrik.png',
        ],
        [
            'ServiceTitle' => 'Dinding, Plafon, dan Pengecatan',
            'ServiceCode'=> 'DINDINGPLAFONCAT',
            'ServiceDescription' => 'Lorem ipsum dolor sit amet consectetur. Lorem praesent eu mauris arcu. Aliquam molestie varius imperdiet facilisis sagittis id donec. Nisi aliquet quisque vivamus scelerisque neque eget diam dolor nec. Non tortor quis cursus at dui. Imperdiet est lacinia congue egestas. Scelerisque mauris amet scelerisque volutpat convallis ipsum. In in id.',
            'ImgService' => 'images/services/dindingDanPlafon.png',
        ],
        [
            'ServiceTitle' => 'Lantai dan Pemasangan Vinyl',
            'ServiceCode'=> 'LANTAIVINYL',
            'ServiceDescription' => 'Lorem ipsum dolor sit amet consectetur. Lorem praesent eu mauris arcu. Aliquam molestie varius imperdiet facilisis sagittis id donec. Nisi aliquet quisque vivamus scelerisque neque eget diam dolor nec. Non tortor quis cursus at dui. Imperdiet est lacinia congue egestas. Scelerisque mauris amet scelerisque volutpat convallis ipsum. In in id.',
            'ImgService' => 'images/services/lantaiDanPemasanganVinyl.png',
        ],
        [
            'ServiceTitle' => 'Arsitek',
            'ServiceCode' => 'ARSITEK',
            'ServiceDescription' => 'Lorem ipsum dolor sit amet consectetur. Lorem praesent eu mauris arcu. Aliquam molestie varius imperdiet facilisis sagittis id donec. Nisi aliquet quisque vivamus scelerisque neque eget diam dolor nec. Non tortor quis cursus at dui. Imperdiet est lacinia congue egestas. Scelerisque mauris amet scelerisque volutpat convallis ipsum. In in id.',
            'ImgService' => 'images/services/arsitek.png',
        ],];

        foreach($services as $service){
            ServiceModel::create($service);
        }
    }
}
