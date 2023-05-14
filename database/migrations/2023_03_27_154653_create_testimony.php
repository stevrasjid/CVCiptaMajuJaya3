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
        Schema::create('testimony', function (Blueprint $table) {
            $table->uuid('TestimonyId');
            $table->primary('TestimonyId');
            $table->string('ClientName');
            $table->string('Occupation');
            $table->text('TestimonialDescription');
            $table->string('ImgClient');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimony');
    }
};
