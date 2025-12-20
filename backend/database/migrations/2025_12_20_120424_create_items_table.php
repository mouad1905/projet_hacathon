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
        Schema::create('items', function (Blueprint $table) {
            $table->id('item_id');

            // Lien vers la table Ads
            $table->foreignId('ad_id')
                ->constrained('ads', 'ad_id')
                ->onDelete('cascade');

            $table->string('condition', 50)->nullable(); // 'neuf', 'bon', 'usé'
            $table->string('transaction_type', 20)->nullable(); // 'don', 'pret', 'echange'
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
