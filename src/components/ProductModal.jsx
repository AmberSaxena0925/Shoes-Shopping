import { useState } from 'react';
import { X, Heart, ChevronLeft, ChevronRight, Package, Truck } from 'lucide-react';

export function ProductModal({ product, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [product.image_url, product.image_url, product.image_url];
  const hasDiscount = product.original_price && product.original_price > product.price;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          
          {/* IMAGES */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-zinc-800 rounded-lg overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImageIndex === idx
                      ? 'border-lime-400'
                      : 'border-transparent hover:border-zinc-600'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="flex flex-col">
            <button
              onClick={onClose}
              className="self-end p-2 hover:bg-zinc-800 rounded-lg transition-colors mb-4"
            >
              <X className="w-6 h-6 text-zinc-400" />
            </button>

            <div className="flex-1">
              <div className="text-sm text-zinc-400 mb-2">{product.brand}</div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
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

              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                {hasDiscount && (
                  <span className="text-xl text-zinc-500 line-through">
                    ${product.original_price}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <button className="text-sm text-white border-b border-white pb-1 mb-4">
                  Size chart
                </button>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <select className="bg-zinc-800 text-white px-4 py-3 rounded-lg border border-zinc-700">
                    <option>Size</option>
                    <option>US 6</option>
                    <option>US 7</option>
                    <option>US 8</option>
                    <option>US 9</option>
                  </select>
                  <select className="bg-zinc-800 text-white px-4 py-3 rounded-lg border border-zinc-700">
                    <option>Color</option>
                    <option>White/Black</option>
                    <option>All White</option>
                    <option>All Black</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-zinc-400 mb-3">Available options:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">To order</span>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      ${product.preorder_price}
                    </div>
                  </div>
                  <div className="bg-zinc-800 border-2 border-lime-400 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">In stock</span>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      ${product.stock_price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 rounded-lg transition-colors">
                  One-click buy
                </button>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 rounded-lg transition-colors">
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
