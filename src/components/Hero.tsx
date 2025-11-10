import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-lime-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lime-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative h-screen max-w-7xl mx-auto px-4 h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-lime-400 text-sm font-medium mb-6">
                New Collection 2025
              </span>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
                Step Into
                <br />
                <span className="text-lime-400">Excellence</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-md">
                Premium footwear crafted for those who demand quality, style, and performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-zinc-600 hover:border-lime-400 text-white font-semibold rounded-lg transition-colors">
                Explore Collection
              </button>
            </div>

            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-lime-400">500+</div>
                <div className="text-zinc-400">Premium Styles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">50K+</div>
                <div className="text-zinc-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">4.9★</div>
                <div className="text-zinc-400">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full hidden md:block">
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
              alt="Featured Shoe"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
