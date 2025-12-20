import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBookReader, FaHandsHelping, FaTrophy } from "react-icons/fa";

const Home = () => {
  const friendsImg =
    "https://images.unsplash.com/photo-1596495577886-d920f1c0a6a8?auto=format&fit=crop&q=80&w=1400";
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="relative h-100 flex items-center justify-center text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
          alt="Students"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Simplifiez votre vie étudiante
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Logement, révisions, entraide et passion sportive au même endroit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/colocations"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Explorer les offres
            </Link>
            <Link
              to="/login"
              className="bg-teal-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-600"
            >
              Rejoindre la communauté
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Trouve un logement */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-teal-400 to-teal-600 text-white text-2xl mb-4 shadow">
              <FaHome />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Trouve un logement
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Trouve la colocation idéale selon ta localisation.
            </p>
            <Link
              to="/colocations"
              className="inline-block text-teal-600 font-semibold text-sm hover:underline"
            >
              Voir les annonces →
            </Link>
          </div>

          {/* Partenaires de révision */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-blue-400 to-blue-600 text-white text-2xl mb-4 shadow">
              <FaBookReader />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Partenaires de révision
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Ne révise plus seul. Match avec d'autres étudiants.
            </p>
            <Link
              to="/revisions"
              className="inline-block text-blue-600 font-semibold text-sm hover:underline"
            >
              Chercher un binôme →
            </Link>
          </div>

          {/* Prêts & Dons */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-orange-400 to-orange-600 text-white text-2xl mb-4 shadow">
              <FaHandsHelping />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Prêts & Dons
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Besoin d'un chargeur ou d'une poêle ? Demande ici.
            </p>
            <Link
              to="/entraide"
              className="inline-block text-orange-600 font-semibold text-sm hover:underline"
            >
              Voir le matériel →
            </Link>
          </div>

          {/* Mode FanZone */}
          <div className="bg-teal-50 p-6 rounded-2xl shadow-md border border-teal-200 hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-red-400 to-red-600 text-white text-2xl mb-4 shadow">
              <FaTrophy />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Mode FanZone
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Suivez la CAN et la Coupe du monde ensemble.
            </p>
            <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase">
              Special Event
            </span>
          </div>
        </div>
      </section>
      <section className="relative ">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-125  overflow-hidden bg-gray-800s">
          {/* Hero Text */}
          <div className="relative w-full h-[90vh] bg-gray-800">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center text-white">
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                Bienvenue sur UniConnect
              </h1>

              {/* Quote or tagline */}
              <p className="italic text-lg md:text-xl mb-6 drop-shadow-md">
                "Apprenez, partagez et connectez-vous avec vos camarades
                étudiants !"
              </p>

              {/* Subtitle */}
              <p className="text-md md:text-lg mb-8 drop-shadow-md">
                Connectez-vous avec des colocataires, partenaires de révision et
                plus encore.
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <Link
                  to="/colocations"
                  className="bg-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg"
                >
                  Voir Colocations
                </Link>
                <Link
                  to="/revisions"
                  className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Révisions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
