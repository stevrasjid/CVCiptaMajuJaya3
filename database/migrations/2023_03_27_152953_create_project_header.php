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
        Schema::create('project_header', function (Blueprint $table) {
            $table->uuid('ProjectId');
            $table->primary('ProjectId');
            $table->string('ProjectName');
            $table->text('Description');
            $table->string('ClientName');
            $table->dateTime('ProjectDate');
            $table->string('CategoryId');
            $table->string('CategoryCode');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_header');
    }
};
