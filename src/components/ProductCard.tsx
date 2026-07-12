import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  aspectRatio?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, aspectRatio = 'aspect-[4/3]' }) => {
  const { addToCart, setCartOpen, toggleWishlist, isWishlisted, setQuickViewProduct } = useCart();
  const { navigate } = useRouter();
  const wishlisted = isWishlisted(product.id);
  
  // Heartbeat trigger state
  const [favoritePressed, setFavoritePressed] = useState(false);

  const handleCardClick = () => {
    navigate(`objects/${product.id}`);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setCartOpen(true);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
    setFavoritePressed(true);
    setTimeout(() => setFavoritePressed(false), 500); // Reset heartbeat animation
  };

  return (
    <motion.div
      onClick={handleCardClick}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer relative flex flex-col focus-visible:outline-none w-full bg-[#FBFBF9] border border-primary/5 p-3 transition-shadow duration-500 ease-out hover:shadow-[8px_8px_0px_rgba(26,26,26,0.08)] hover:border-primary/20"
    >
      {/* Image & Overlay Container */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden bg-surface-container border border-primary/5`}>
        {/* Product Image */}
        <motion.img
          className="w-full h-full object-cover grayscale group-hover:grayscale-0"
          src={product.image}
          alt={product.alt}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Translucent overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Favorite Heartbeat Button */}
        <motion.button
          onClick={handleWishlistToggle}
          animate={{ scale: favoritePressed ? [1, 1.25, 0.95, 1] : 1 }}
          transition={{ duration: 0.45 }}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#FBFBF9]/90 backdrop-blur-sm border border-primary/10 flex items-center justify-center transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 focus-visible:outline-none hover:border-primary"
          style={{ borderRadius: '0px' }}
          aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <span
            className={`material-symbols-outlined text-[19px] ${
              wishlisted ? 'text-accent-sage font-fill' : 'text-primary'
            }`}
            style={{
              fontVariationSettings: wishlisted ? "'FILL' 1, 'wght' 300" : "'FILL' 0, 'wght' 300"
            }}
          >
            favorite
          </span>
        </motion.button>

        {/* Animated Action Drawer (slides up from bottom) */}
        <div className="absolute left-0 right-0 bottom-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-[0.16,1,0.3,1] flex border-t border-primary/10">
          <button
            onClick={handleQuickAdd}
            className="flex-1 bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] py-3.5 font-label-sm text-[11px] uppercase tracking-widest transition-colors duration-300 border-0 outline-none"
            style={{ borderRadius: '0px' }}
          >
            Quick Add +
          </button>
          
          <div className="w-[1px] bg-[#FBFBF9]/20" />

          <button
            onClick={handleQuickView}
            className="flex-1 bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] py-3.5 font-label-sm text-[11px] uppercase tracking-widest transition-colors duration-300 border-0 outline-none"
            style={{ borderRadius: '0px' }}
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Card Details */}
      <div className="flex justify-between items-start mt-4 px-1">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] text-secondary mb-1 uppercase tracking-widest font-semibold">
            {product.id} • {product.category}
          </span>
          <h3 className="font-body-md text-[14px] font-normal text-primary group-hover:text-accent-sage transition-colors leading-snug">
            {product.name}
          </h3>
        </div>
        <motion.span
          className="font-label-md text-label-md text-primary font-semibold tracking-wide"
          whileHover={{ y: -2 }}
        >
          ${product.price} USD
        </motion.span>
      </div>
    </motion.div>
  );
};
