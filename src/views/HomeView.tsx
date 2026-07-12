import React from 'react';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { products } from '../data/products';
import { useRouter } from '../context/RouterContext';
import { ProductCard } from '../components/ProductCard';

export const HomeView: React.FC = () => {
  const { navigate } = useRouter();

  // Curated edit shows only products 01, 02, and 03
  const curatedProducts = products.filter(p => ['01', '02', '03'].includes(p.id));

  return (
    <div>
      {/* Hero Header */}
      <Hero />

      {/* Curated Grid Section */}
      <section className="py-40 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto">
        <div className="text-center mb-24">
          <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
            Seasonal Edit
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-4 text-primary font-normal">
            The Curated Edit
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto opacity-30 mb-6"></div>
          <button
            onClick={() => navigate('objects')}
            className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-secondary/30 pb-0.5 hover:border-primary focus-visible:outline-none"
          >
            View All Objects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-gutter">
          {curatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Manifesto & Architecture Showcase */}
      <Philosophy />
    </div>
  );
};
