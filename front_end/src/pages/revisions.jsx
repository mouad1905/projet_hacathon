const Revisions = () => {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Study Corner : Trouvez votre binôme de révision
        </h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2">
          <i className="fas fa-chalkboard-teacher"></i> Devenir Partenaire
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-10 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Filtrer par Matière et Niveau
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Rechercher une matière (ex: Droit civil)"
            className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 col-span-2"
          />
          <select className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500">
            <option>Niveau d'étude</option>
            <option>L1 / M1</option>
            <option>L2 / M2</option>
            <option>Prépa / Concours</option>
          </select>
          <select className="p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500">
            <option>Disponibilité</option>
            <option>En ligne</option>
            <option>Sur Campus</option>
          </select>
          <button className="bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
            <i className="fas fa-search"></i> Chercher
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-500">
          <div className="flex items-start gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/150?img=4"
              alt="Profil étudiant"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Reda Bernoussi. (M2)
              </h3>
              <p className="text-sm text-gray-500">
                Emsi - Ecole Marocaine des science de l'ingenieur
              </p>
            </div>
          </div>
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-2 inline-block">
            Mathématiques Appliquées
          </span>
          <p className="text-gray-600 mt-2 line-clamp-3">
            Disponible pour aider les L1/L2 avec l'algèbre et l'analyse. J'ai de
            nombreuses fiches et je suis très patiente. Préférence pour les
            sessions en ligne.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="font-bold text-lg text-teal-600">Gratuit / H</span>
            <a
              href="#"
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Contacter →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="Profil étudiant"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Wissal Hassani. (L3)
              </h3>
              <p className="text-sm text-gray-500">École d'Ingénieur, Lyon</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full mb-2 inline-block">
            Programmation (Python/Java)
          </span>
          <p className="text-gray-600 mt-2 line-clamp-3">
            Aide au débogage de projets et compréhension des structures de
            données. Je peux me déplacer sur le campus les soirs.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="font-bold text-lg text-teal-600">15€ / H</span>
            <a
              href="#"
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Contacter →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Revisions;
