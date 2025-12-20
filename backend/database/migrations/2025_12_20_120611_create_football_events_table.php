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
        Schema::create('football_events', function (Blueprint $table) {
            $table->id('event_id');

            $table->string('team_a', 50)->nullable();
            $table->string('team_b', 50)->nullable();
            $table->timestamp('match_date')->nullable();
            $table->string('location_name', 100)->nullable();

            // Créé par (Lien vers User)
            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users', 'user_id') // On pointe bien vers user_id
                ->onDelete('set null'); // Si le user est supprimé, on garde l'event (optionnel)
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('football_events');
    }
};
