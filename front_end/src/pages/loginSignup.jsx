import React, { useState } from "react";
import friendsImg from "../assets/students.avif";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      console.log("CIN :", userId);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* PANNEAU GAUCHE */}
        <div className="hidden md:flex md:w-1/2 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${friendsImg})` }}
          ></div>
        </div>

        {/* PANNEAU DROIT */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Bonjour !</h2>
            <h3 className="text-gray-500">
              {isLogin ? "Bon matin" : "Bienvenue"}
            </h3>
          </div>

          <h4 className="text-lg font-semibold mb-4">
            {isLogin
              ? "Connectez-vous à votre compte"
              : "Créez un nouveau compte"}
          </h4>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Nom d'utilisateur */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                placeholder="Entrez votre nom"
                className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-gray-800 text-sm"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-gray-800 text-sm"
              />
            </div>

            {/* Confirmer le mot de passe (inscription) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-gray-800 text-sm"
                />
              </div>
            )}

            {/* CIN (inscription) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">CIN</label>
                <input
                  type="text"
                  placeholder="Entrez votre CIN"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-3 py-1.5 border rounded focus:outline-none focus:ring-1 focus:ring-gray-800 text-sm"
                />
              </div>
            )}

            {/* Actions */}
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
            )}

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded font-semibold hover:bg-gray-800 transition text-sm"
            >
              {isLogin ? "Se connecter" : "S'inscrire"}
            </button>

            {/* Basculer entre Login et Signup */}
            <div className="text-center">
              {isLogin ? (
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-sm text-gray-700 hover:underline"
                >
                  Créer un compte
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-sm text-gray-700 hover:underline"
                >
                  Vous avez déjà un compte ? Se connecter
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
