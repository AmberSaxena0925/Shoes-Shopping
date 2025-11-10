import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; // ✅ Remove Product type import
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";

export function FeaturedSection({ onProductClick }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("review_count", { ascending: false })
        .limit(6);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-lime-400/10 border border-lime-400/30 rounded-full text-lime-400 text-sm font-medium mb-4">
            Featured Picks
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer Favorites
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover our most loved shoes, handpicked by our community of shoe enthusiasts
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-lime-400 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onProductClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
