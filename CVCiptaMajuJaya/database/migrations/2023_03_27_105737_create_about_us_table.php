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
        Schema::create('about_us', function (Blueprint $table) {
            $table->uuid('AboutUsId');
            $table->primary('AboutUsId');
            $table->text('DescriptionAboutUsSmall');
            $table->text('DescriptionAboutUsFull');
            $table->text('Commitment');
            $table->text('Vision');
            $table->text('Mission');
            $table->string('ImgAboutUsHome');
            $table->string('ImgAboutUs');
            $table->string('ImgCommitment');
            $table->string('ImgAboutUsHomeSmall1');
            $table->string('ImgAboutUsHomeSmall2');
            $table->string('ImgAboutUsHomeSmall3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_us');
    }
};
