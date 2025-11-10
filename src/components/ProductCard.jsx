import { Heart } from 'lucide-react';

export function ProductCard({ product, onClick }) {
  const hasDiscount = product.original_price && product.original_price > product.price;

  return (
    <div
      onClick={() => onClick(product)}
      className="group cursor-pointer bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      <div className="relative aspect-square bg-zinc-800 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
        >
          <Heart className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="p-5">
        <div className="text-sm text-zinc-400 mb-2">{product.brand}</div>

        <h3 className="text-white font-medium text-lg mb-3 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-lime-400 fill-lime-400'
                    : 'text-zinc-600 fill-zinc-600'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-zinc-400">{product.review_count}</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-white">
            ${product.price.toLocaleString()}
          </span>

          {hasDiscount && (
            <span className="text-sm text-zinc-500 line-through">
              ${product.original_price?.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
