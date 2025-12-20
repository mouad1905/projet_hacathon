<?php

namespace App\Http\Controllers;

use App\Models\User; // Import du modèle
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Fonction de Login
    public function login(Request $request)
    {
        // 1. Validation des données
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        // 2. Tentative de connexion
        // NOTE : On garde la clé 'password' ici car c'est ce que Auth::attempt attend par défaut.
        // Laravel fera le lien avec 'password_hash' grâce à la fonction getAuthPassword() dans le Modèle.
        if (!Auth::attempt(['email' => $fields['email'], 'password' => $fields['password']])) {
            return response()->json([
                'message' => 'Identifiants incorrects'
            ], 401);
        }

        // 3. Récupération de l'utilisateur
        /** @var \App\Models\User $user */ // Cette ligne aide ton éditeur à comprendre le type de $user
        $user = Auth::user();

        // 4. Création du Token (CORRIGÉ : Pas de "User::" ici)
        $token = $user->createToken('auth_token')->plainTextToken;

        // 5. Réponse
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }
    public function register(Request $request)
    {
        // 1. Validation des champs
        $fields = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|string|email|unique:users,email', // Email unique
            'password' => 'required|string|min:6', // Min 6 caractères
            'CIN' => 'required|string|max:6|unique:users,CIN' // CIN unique
        ]);

        // 2. Création de l'utilisateur
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password_hash' => Hash::make($fields['password']), // On hashe le mot de passe
            'CIN' => $fields['CIN'],
            // Les autres champs (bio, university) sont null par défaut, pas besoin de les mettre ici
        ]);

        // 3. Création du Token (pour le connecter directement)
        $token = $user->createToken('auth_token')->plainTextToken;

        // 4. Réponse
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 201); // 201 = Code HTTP "Created"
    }

    // Fonction de Logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Déconnexion réussie']);
    }
}