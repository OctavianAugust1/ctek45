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
        Schema::create('developments_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('development_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('path');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('developments_image');
    }
};