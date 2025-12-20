<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // Commande : php artisan make:migration create_users_table
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            // Tu as demandé user_id, mais Laravel préfère 'id'. 
            // Si tu gardes user_id, il faudra le préciser dans le Modèle.
            $table->id('user_id');

            $table->string('name', 100);
            $table->string('email', 150)->unique();

            // ATTENTION : Pour que Laravel Auth (Sanctum) fonctionne par défaut,
            // il vaut mieux nommer cette colonne 'password'.
            $table->text('password_hash');

            $table->string('university', 100)->nullable();
            $table->text('bio')->nullable();
            $table->text('avatar_url')->nullable();
            $table->string('CIN', 6)->unique();


            // created_at (timestamp)
            $table->timestamp('created_at')->useCurrent();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
