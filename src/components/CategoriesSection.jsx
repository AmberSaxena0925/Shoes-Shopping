import { Zap, Heart, TrendingUp, Award } from "lucide-react";

export function CategoriesSection() {
  const categories = [
    {
      name: "Running",
      icon: Zap,
      description: "Performance shoes for speed and endurance",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      color: "lime",
    },
    {
      name: "Casual",
      icon: Heart,
      description: "Comfortable everyday sneakers",
      image: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg",
      color: "blue",
    },
    {
      name: "Basketball",
      icon: TrendingUp,
      description: "Court-ready professional shoes",
      image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg",
      color: "purple",
    },
    {
      name: "Luxury",
      icon: Award,
      description: "Premium designer collections",
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg",
      color: "amber",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-lime-400/20 rounded-lg">
                      <Icon className="w-6 h-6 text-lime-400" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-zinc-300 text-sm">
                      {category.description}
                    </p>
                    <button className="mt-4 px-4 py-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg transition-colors text-sm">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}