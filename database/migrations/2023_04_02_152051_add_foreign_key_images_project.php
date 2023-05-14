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
        Schema::table('images_project', function($table){
            $table->foreignUuid('ProjectId')->contrained()->references('ProjectId')->on('project_header')->onDelete('cascade')->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('images_project', function($table){
           $table->dropColumn('ProjectId');
        });
    }
};
