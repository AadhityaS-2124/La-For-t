import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { products, Product } from '../data/products';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setSearchOpen } = useCart();
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { label: 'All Objects', value: 'all' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Trousers', value: 'trousers' },
    { label: 'Knitwear', value: 'knitwear' },
    { label: 'Apparel', value: 'apparel' },
    { label: 'Accessories', value: 'accessories' }
  ];

  const suggestions = ['Blazer', 'Knit', 'Trouser', 'Linen', 'Atelier'];

  // Global keyboard shortcuts (Ctrl+K to toggle, Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setSearchOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setSelectedCategory('all');
    }
  }, [isSearchOpen]);

  // Filter products based on query and category
  const filteredProducts = products.filter((product) => {
    const matchesQuery =
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.materials.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  if (!isSearchOpen) return null;

  const handleProductClick = (id: string) => {
    setSearchOpen(false);
    navigate(`objects/${id}`);
  };

  const handleSuggestionClick = (sug: string) => {
    setQuery(sug);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-start">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm"
        onClick={() => setSearchOpen(false)}
      />

      {/* Search Panel */}
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        className="relative w-full bg-[#FBFBF9] border-b border-primary/20 pt-28 pb-12 px-margin-mobile md:px-margin-desktop z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header row with Close button */}
          <div className="flex justify-between items-center mb-6">
            <span className="font-label-sm text-[11px] text-secondary uppercase tracking-[0.2em]">
              Search La Forêt Atelier (Press ESC to close)
            </span>
            <button
              onClick={() => setSearchOpen(false)}
              className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors py-1 focus-visible:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
              <span className="font-label-sm text-label-sm uppercase">Close</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center border-b border-primary pb-4 mb-8">
            <span className="material-symbols-outlined text-[28px] text-secondary mr-4">search</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by object name, fabric, keyword..."
              className="bg-transparent border-0 ring-0 outline-none text-2xl md:text-3xl text-primary placeholder:text-primary/20 w-full font-light font-headline-md"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-secondary hover:text-primary p-1"
              >
                <span className="material-symbols-outlined text-[20px]">backspace</span>
              </button>
            )}
          </div>

          {/* Category Filter Tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 border-b border-primary/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`font-label-sm text-label-sm uppercase tracking-wider transition-colors pb-1 border-b ${
                  selectedCategory === cat.value
                    ? 'text-primary border-primary font-medium'
                    : 'text-secondary border-transparent hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Body Content: Suggestions or Results */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Quick Suggestions (3 columns) */}
            <div className="md:col-span-3 space-y-6 border-r border-primary/5 pr-4 hidden md:block">
              <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                Suggestions
              </h4>
              <ul className="space-y-3">
                {suggestions.map((sug) => (
                  <li key={sug}>
                    <button
                      onClick={() => handleSuggestionClick(sug)}
                      className="font-body-md text-body-md text-secondary hover:text-primary transition-colors text-left py-1"
                    >
                      {sug}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results Grid (9 columns) */}
            <div className="md:col-span-9 max-h-[40vh] overflow-y-auto no-scrollbar">
              <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6">
                Objects Found ({filteredProducts.length})
              </h4>

              {filteredProducts.length === 0 ? (
                <div className="py-8">
                  <p className="font-body-md text-body-md text-secondary italic">
                    No objects match your search criteria. Try a different query.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="group flex gap-4 cursor-pointer p-2 hover:bg-[#F2F1ED] transition-colors duration-300 border border-transparent hover:border-primary/10"
                    >
                      <div className="w-16 h-16 bg-surface-container overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest mb-0.5">
                          {product.id} • {product.category}
                        </span>
                        <h5 className="font-body-md text-body-md text-primary font-medium group-hover:text-accent-sage transition-colors">
                          {product.name}
                        </h5>
                        <span className="font-label-sm text-label-sm text-primary mt-0.5">
                          ${product.price} USD
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
