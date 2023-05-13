<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('images_project', function (Blueprint $table) {
            $table->uuid('ImgProjectId');
            $table->primary('ImgProjectId');
            $table->string('ImgProject');
            $table->integer('NumberSort');
            $table->boolean('isFirst');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images_project');
    }
};
