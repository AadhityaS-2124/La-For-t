import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';

export const ProductQuickView: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    setCartOpen,
    toggleWishlist,
    isWishlisted
  } = useCart();
  const { navigate } = useRouter();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isWishlisted(product.id);

  const handleAddToBag = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setQuickViewProduct(null); // Close quick view
    setCartOpen(true); // Open shopping drawer
  };

  const handleFullDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(null);
    navigate(`objects/${product.id}`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative bg-[#FBFBF9] border border-primary text-primary w-full max-w-3xl overflow-hidden flex flex-col md:flex-row z-10"
        style={{ borderRadius: '0px' }}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute right-4 top-4 z-20 flex items-center justify-center w-8 h-8 bg-[#FBFBF9] border border-primary/20 hover:border-primary text-secondary hover:text-primary transition-colors focus-visible:outline-none"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Left Side: Product Image (50%) */}
        <div className="w-full md:w-[50%] bg-surface-container aspect-square md:aspect-auto md:h-full relative overflow-hidden group">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1000ms] group-hover:scale-105"
          />

          {/* Wishlist Button Overlay */}
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute left-4 top-4 z-10 w-9 h-9 bg-[#FBFBF9] hover:bg-[#F2F1ED] border border-primary/20 hover:border-primary flex items-center justify-center transition-colors focus-visible:outline-none"
            aria-label="Add to Wishlist"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${
                wishlisted ? 'fill-1 text-accent-sage font-fill' : 'text-primary'
              }`}
              style={{
                fontVariationSettings: wishlisted ? "'FILL' 1, 'wght' 300" : "'FILL' 0, 'wght' 300"
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Right Side: Product Details (50%) */}
        <div className="w-full md:w-[50%] p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label-sm text-[11px] text-secondary uppercase tracking-[0.15em] block">
                Object {product.id} • {product.category}
              </span>
              <span className="font-label-sm text-[9px] text-accent-sage uppercase tracking-wider font-semibold">
                {product.availability ? 'In Stock' : 'Pre-Order'}
              </span>
            </div>
            
            <h3 className="font-headline-md text-2xl text-primary font-normal mb-3">
              {product.name}
            </h3>
            
            <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-4">
              Collection: <strong>{product.collection}</strong>
            </span>

            <span className="font-label-md text-label-md text-primary font-semibold block mb-6">
              ${product.price} USD
            </span>

            <div className="w-full h-[1px] bg-primary/10 mb-6" />

            <div className="space-y-4 mb-8">
              <div>
                <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-1">
                  Description
                </span>
                <p className="font-body-md text-body-md text-primary leading-relaxed text-justify-custom text-[13px] font-light">
                  {product.description}
                </p>
              </div>

              {product.colorVariants.length > 0 && (
                <div>
                  <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-1">
                    Colors
                  </span>
                  <div className="flex gap-2">
                    {product.colorVariants.map((c) => (
                      <span key={c} className="px-2 py-0.5 border border-primary/20 text-[10px] font-label-sm uppercase tracking-wider text-secondary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-1">
                  Materials
                </span>
                <p className="font-body-md text-body-md text-secondary text-[13px] font-light">
                  {product.materials}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {/* Add to Bag Button */}
            <button
              onClick={handleAddToBag}
              className="w-full bg-[#1A1A1A] text-[#FBFBF9] py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-accent-sage transition-all duration-300 border-0 focus-visible:outline-none"
              style={{ borderRadius: '0px' }}
            >
              ADD TO BAG • ${product.price} USD
            </button>

            {/* View Full Specs Button */}
            <button
              onClick={handleFullDetails}
              className="w-full border border-primary text-primary py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-[#1A1A1A]/5 transition-all duration-300 focus-visible:outline-none"
              style={{ borderRadius: '0px' }}
            >
              VIEW FULL DETAILS →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
