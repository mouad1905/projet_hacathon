const Entraide = () => {
  const colorMap = {
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  const tools = [
    {
      title: "Bouilloire électrique",
      desc: "Utilisée 1 an, fonctionne très bien.",
      img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=400",
      status: "DON",
      color: "green",
    },
    {
      title: "Calculatrice TI-84",
      desc: "Prêt pour examen de maths (Lundi).",
      img: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=400",
      status: "PRÊT",
      color: "blue",
    },
    {
      title: "Lampe de bureau LED",
      desc: "Design moderne, intensité réglable.",
      img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=400",
      status: "DON",
      color: "green",
    },
    {
      title: "Clé USB 64GB",
      desc: "Rapide et compacte, compatible PC et Mac.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&q=80&w=400",
      status: "PRÊT",
      color: "blue",
    },
    {
      title: "Livre de mathématiques",
      desc: "Edition 2023, en très bon état.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
      status: "DON",
      color: "green",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Boîte à outils communautaire
          </h2>
          <p className="text-gray-500 mt-1">
            Empruntez, donnez ou échangez ce dont vous n'avez plus besoin.
          </p>
        </div>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-900 transition shadow-md hover:shadow-lg cursor-pointer">
          + Proposer un objet
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-3 mb-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {["Tout", "Cuisine", "Études", "Électronique"].map((cat, idx) => (
          <span
            key={idx}
            className={`${
              idx === 0
                ? "bg-gray-900 text-white"
                : "bg-white border hover:bg-gray-50 text-gray-700"
            } px-5 py-2 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap shadow-sm`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative">
              <img
                src={tool.img}
                alt={tool.title}
                className="h-48 w-full object-cover"
              />
              <span
                className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow-md ${
                  colorMap[tool.color] || "bg-gray-500"
                }`}
              >
                {tool.status}
              </span>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-gray-800">
                {tool.title}
              </h4>
              <p className="text-sm text-gray-500 line-clamp-3">{tool.desc}</p>
              <button className="mt-2 w-full bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-400 transition cursor-pointer">
                Contacter
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Entraide;
