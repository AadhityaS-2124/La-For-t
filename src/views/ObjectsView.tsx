import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { ProductCard } from '../components/ProductCard';

type CategoryFilter = 'all' | 'outerwear' | 'trousers' | 'knitwear' | 'apparel' | 'accessories';
type SortOption = 'default' | 'price-asc' | 'price-desc';

export const ObjectsView: React.FC = () => {
  const { navigate } = useRouter();
  const { wishlistItems } = useCart();
  
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [activeSort, setActiveSort] = useState<SortOption>('default');

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All Objects', value: 'all' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Trousers', value: 'trousers' },
    { label: 'Knitwear', value: 'knitwear' },
    { label: 'Apparel', value: 'apparel' },
    { label: 'Accessories', value: 'accessories' }
  ];

  // Filter and Sort logic
  const processedProducts = useMemo(() => {
    let list = [...products];

    // Filter
    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    // Sort
    if (activeSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeCategory, activeSort]);

  // Editorial layouts based on grid position (gives asymmetrical Japandi layout)
  const getEditorialStyles = (index: number) => {
    const styles = [
      { colSpan: 'md:col-span-7', aspect: 'aspect-[4/3]', margin: 'mt-0' },
      { colSpan: 'md:col-span-5', aspect: 'aspect-[3/4]', margin: 'md:pt-20' },
      { colSpan: 'md:col-span-4', aspect: 'aspect-square', margin: 'mt-0' },
      { colSpan: 'md:col-span-8', aspect: 'aspect-[16/10]', margin: 'md:-mt-10' },
      { colSpan: 'md:col-span-6', aspect: 'aspect-[4/3]', margin: 'mt-0' },
      { colSpan: 'md:col-span-6', aspect: 'aspect-[3/4]', margin: 'md:pt-12' }
    ];
    return styles[index % styles.length];
  };

  return (
    <section className="min-h-screen pt-36 pb-32 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto">
      {/* Title & Introduction */}
      <div className="text-center mb-20">
        <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
          Studio Archive
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4 font-normal">Our Objects</h1>
        <p className="font-body-md text-body-md text-secondary max-w-md mx-auto leading-relaxed font-light">
          An edit of architectural essentials engineered for durability, zero-waste construction, and intentional utility.
        </p>
      </div>

      {/* Controls: Filtering and Sorting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-primary/20 pb-6 mb-16 gap-6">
        {/* Category Filter Tags */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-label-sm text-label-sm uppercase tracking-wider transition-colors pb-1 border-b focus-visible:outline-none ${
                activeCategory === cat.value
                  ? 'text-primary border-primary font-semibold'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown Control */}
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-medium">Sort by</span>
          <select
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value as SortOption)}
            className="bg-[#FBFBF9] border border-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-wider px-3 py-2 outline-none focus:border-accent-sage cursor-pointer"
            style={{ borderRadius: '0px' }}
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid wrapper with FLIP Layout Animations */}
      <motion.div layout className="min-h-[400px]">
        {processedProducts.length === 0 ? (
          <div className="py-32 text-center">
            <span className="material-symbols-outlined text-[48px] text-secondary/40 mb-4 block">search_off</span>
            <p className="font-body-lg text-body-lg text-secondary">No items match this category.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-gutter items-start"
          >
            <AnimatePresence mode="popLayout">
              {processedProducts.map((product, idx) => {
                const styles = getEditorialStyles(idx);
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      opacity: { duration: 0.2 }
                    }}
                    className={`${styles.colSpan} ${styles.margin}`}
                  >
                    <ProductCard product={product} aspectRatio={styles.aspect} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
