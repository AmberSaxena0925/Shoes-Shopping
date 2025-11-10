import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { FeaturedSection } from './components/FeaturedSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { Product } from './lib/supabase';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <Hero />
      <BenefitsSection />
      <FeaturedSection onProductClick={setSelectedProduct} />
      <CategoriesSection />
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;
