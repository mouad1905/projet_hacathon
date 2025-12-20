<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Commande : php artisan make:migration create_ads_table
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->id('ad_id');

            // Clé étrangère vers users. 
            // On précise 'user_id' car ce n'est pas le standard 'id'
            $table->foreignId('user_id')
                ->constrained('users', 'user_id')
                ->onDelete('cascade');

            $table->string('category', 20); // 'coloc', 'revision', 'troc'
            $table->string('title', 200);
            $table->text('description')->nullable();
            $table->string('location', 100)->nullable();

            // Prix avec 2 décimales, défaut 0
            $table->decimal('price', 10, 2)->default(0);

            $table->boolean('is_active')->default(true);
            $table->timestamp('created_at')->useCurrent();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('ads');
    }
};
