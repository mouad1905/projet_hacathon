<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('study_groups', function (Blueprint $table) {
            $table->id('study_id');

            // Lien vers la table Ads
            $table->foreignId('ad_id')
                ->constrained('ads', 'ad_id')
                ->onDelete('cascade');

            $table->string('subject', 100)->nullable(); // ex: 'Maths'
            $table->string('level', 50)->nullable();    // ex: 'L1'
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('study_groups');
    }
};
