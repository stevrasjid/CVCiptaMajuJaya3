<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectsCollection;
use App\Models\ProjectModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\uuidFunction as uuid;

class ProjectController extends Controller
{
    use uuid;
    public function index() {
        $projects = [
            [
                'ProjectId' => $this->NewGuid(),
                'ProjectName' => 'Zentrum & Venus Cabang Bogor',
                'Description' => 'Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur.',
                'ClientName' => 'Mr. Jason',
                "ProjectDate" => '12/12/2022',
                "ImageProjects" => [
                    [
                        'ImgProject' => 'projectImg.png'
                    ],
                    [
                        'ImgProject' => 'projectImg.png'
                    ]
                ]
            ],
            [
                'ProjectId' => $this->NewGuid(),
                'ProjectName' => 'Zentrum & Venus Cabang Bogor',
                'Description' => 'Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur. Malesuada ultrices pulvinar leo elit dictum amet ut aenean. Parturient netus eget varius commodo posuere pellentesque neque. Nunc sit fringilla faucibus sit tempor sit et tellus in. Pretium adipiscing id non tortor accumsan odio. Ultricies vel elit ullamcorper velit ante. Lorem ipsum dolor sit amet consectetur.',
                'ClientName' => 'Mr. Jason',
                "ProjectDate" => '12/12/2022',
                "ImageProjects" => [
                    [
                        'ImgProject' => 'projectImg.png'
                    ],
                    [
                        'ImgProject' => 'projectImg.png'
                    ]
                ]
            ],
        ];

        $projects = new ProjectsCollection(ProjectModel::paginate(1));

        return Inertia::render('PageLayout/OurProjectsLayout', [
            'pathName' => '/projects',
            'projects' => $projects,
        ]);
    }
}
