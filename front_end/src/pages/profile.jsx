import { FaStar, FaRegStar } from "react-icons/fa";

const profile = {
  name: "Houssam Jabri",
  role: "Étudiante en M2 Mathématiques",
  avatar: "https://i.pravatar.cc/150?img=1",
  rating: 4.5, // out of 5
  bio: "Passionnée par l'algèbre et l'analyse. Disponible pour aider les L1/L2. Très patiente et organisée.",
  skills: ["Mathématiques Appliquées", "Analyse", "Algèbre"],
  comments: [
    {
      id: 1,
      user: "Oussama El ALaoui",
      text: "Marie m'a beaucoup aidé, très claire et patiente.",
    },
    {
      id: 2,
      user: "Hiba Blkt",
      text: "Excellente explication des concepts, je recommande !",
    },
    {
      id: 3,
      user: "Youssef A.",
      text: "Toujours ponctuelle et très efficace.",
    },
  ],
};

const ProfileSection = () => {
  const fullStars = Math.floor(profile.rating);
  const halfStar = profile.rating - fullStars >= 0.5;

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-teal-500"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-gray-500">{profile.role}</p>
          <div className="flex items-center mt-1">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            {halfStar && <FaStar className="text-yellow-400 opacity-50" />}
            {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
              <FaRegStar key={i} className="text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600">
              {profile.rating.toFixed(1)} / 5
            </span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Bio</h3>
        <p className="text-gray-600">{profile.bio}</p>

        <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">
          Compétences
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">
          Commentaires
        </h3>
        <div className="space-y-3">
          {profile.comments.map((comment) => (
            <div key={comment.id} className="border p-3 rounded-lg bg-gray-50">
              <p className="text-gray-800 font-semibold">{comment.user}</p>
              <p className="text-gray-600 text-sm">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
