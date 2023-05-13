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
        Schema::create('category_for_project', function (Blueprint $table) {
            $table->uuid('CategoryId');
            $table->primary('CategoryId');
            $table->string('CategoryCode');
            $table->string('CategoryName');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_for_project');
    }
};
