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
        Schema::create('contact_us', function (Blueprint $table) {
            $table->uuid('ContactUsId');
            $table->primary('ContactUsId');
            $table->text('Address');
            $table->text('Email');
            $table->string('PhoneNumber1');
            $table->string('Admin1');
            $table->string('PhoneNumber2');
            $table->string('Admin2');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_us');
    }
};
