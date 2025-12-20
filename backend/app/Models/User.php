<?php

namespace App\Models;

// 1. IMPORT IMPORTANT POUR SANCTUM
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    // 2. ACTIVATION DU TRAIT
    use HasApiTokens, HasFactory, Notifiable;

    // --- CONFIGURATION DE TA BASE DE DONNÉES PERSONNALISÉE ---

    // Indique à Laravel que ta clé primaire est 'user_id' (et pas 'id')
    protected $primaryKey = 'user_id';

    // Indique à Laravel que le mot de passe est dans 'password_hash'
    public function getAuthPassword()
    {
        return $this->password_hash;
    }

    // Les champs modifiables (Mass Assignment)
    protected $fillable = [
        'name',
        'email',
        'password_hash', // On utilise le nom de ta colonne
        'university',
        'CIN',
        'bio',
        'avatar_url',
    ];

    // Les champs cachés lors du retour JSON
    protected $hidden = [
        'password_hash',
        'remember_token',
    ];

    // Si tu utilises 'created_at' mais pas 'updated_at', configure-le ici.
    // Par défaut, Laravel attend les deux.
}