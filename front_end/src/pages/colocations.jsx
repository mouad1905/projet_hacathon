import { FaMapMarkerAlt } from "react-icons/fa";

const colocationData = [
  {
    id: 1,
    title: "Chambre au Centre-Ville",
    price: "2500 MAD",
    location: "Quartier Agdal, Rabat",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
    poster: "Sara L",
    avatar: "https://ui-avatars.com/api/?name=Sara+L",
  },
  {
    id: 2,
    title: "Studio près du Campus",
    price: "2800 MAD",
    location: "Quartier Hassan, Rabat",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600",
    poster: "Youssef A",
    avatar: "https://ui-avatars.com/api/?name=Youssef+A",
  },
  {
    id: 3,
    title: "Colocation moderne",
    price: "3000 MAD",
    location: "Quartier Souissi, Rabat",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600",
    poster: "Laila B",
    avatar: "https://ui-avatars.com/api/?name=Laila+B",
  },
];

const Colocations = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 italic">
          Annonces de Colocation
        </h2>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition cursor-pointer">
          + Publier une offre
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer">
          Toutes les zones
        </button>
        <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer">
          Près du Campus
        </button>
        <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 whitespace-nowrap cursor-pointer">
          Budget &lt; 3000 MAD
        </button>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colocationData.map((colocation) => (
          <div
            key={colocation.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
          >
            <img
              src={colocation.image}
              alt={colocation.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-800">
                  {colocation.title}
                </h3>
                <span className="text-teal-600 font-bold text-lg italic">
                  {colocation.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                <FaMapMarkerAlt /> {colocation.location}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <img
                  src={colocation.avatar}
                  alt={colocation.poster}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-700">
                  Posté par <strong>{colocation.poster}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Colocations;
