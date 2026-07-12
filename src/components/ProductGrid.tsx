import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductGrid: React.FC = () => {
  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto">
      <div className="text-center mb-24">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-primary font-normal">The Living Edit</h2>
        <div className="w-12 h-[1px] bg-primary mx-auto opacity-30"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-gutter">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
