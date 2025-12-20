const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-3">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold italic">
            U
          </div>
          <h1 className="text-3xl font-extrabold">UniConnect</h1>
          <p className="text-gray-300 text-sm">
            Connectez, apprenez et partagez vos connaissances avec la
            communauté.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white">Découvrir</h3>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Accueil
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Documents
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Colocations
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Entraide
          </a>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            FAQ
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Contact
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Mentions légales
          </a>
          <a href="#" className="text-gray-400 hover:text-teal-400 transition">
            Politique de confidentialité
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
        &copy; 2025 UniConnect. Tous droits réservés.
      </div>
    </footer>
  );
};
export default Footer;
