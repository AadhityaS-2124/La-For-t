import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailViewProps {
  productId: string;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ productId }) => {
  const { addToCart, setCartOpen, addToRecentlyViewed, recentlyViewed, toggleWishlist, isWishlisted } = useCart();
  const { navigate } = useRouter();

  const product = products.find((p) => p.id === productId);

  // Add to recently viewed on mount
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product]);

  // Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Selected Color State
  const [selectedColor, setSelectedColor] = useState('');

  // Set default color when product changes
  useEffect(() => {
    if (product && product.colorVariants.length > 0) {
      setSelectedColor(product.colorVariants[0]);
      setActiveImageIndex(0);
    }
  }, [product]);

  // Accordion State
  const [openSpecIndex, setOpenSpecIndex] = useState<number | null>(null);

  // Scroll detection for Sticky Purchase Panel
  const [showStickyBar, setShowStickyBar] = useState(false);
  const mainBuyBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainBuyBtnRef.current) return;
      const rect = mainBuyBtnRef.current.getBoundingClientRect();
      if (rect.bottom < 0) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <section className="min-h-screen pt-36 pb-24 px-margin-mobile flex flex-col items-center justify-center text-center bg-[#FBFBF9]">
        <span className="material-symbols-outlined text-[64px] text-secondary mb-4">error</span>
        <h1 className="font-headline-lg text-headline-lg mb-2">Object Not Found</h1>
        <p className="font-body-md text-body-md text-secondary mb-8">
          The requested architectural object could not be resolved.
        </p>
        <button
          onClick={() => navigate('objects')}
          className="px-8 py-4 border border-primary text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all focus-visible:outline-none"
        >
          Return to Objects
        </button>
      </section>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const galleryImages = product.images.length > 0 ? product.images : [product.image];

  const handleAddToBag = () => {
    addToCart(product);
    setCartOpen(true);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, damping: 22 } }
  };

  // Related Collection: same category, excluding current product
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Recently Viewed collection: excluding current product
  const recentProducts = recentlyViewed
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <section className="min-h-screen pt-32 pb-32 bg-[#FBFBF9]">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Back Link */}
        <div className="mb-10">
          <button
            onClick={() => navigate('objects')}
            className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors py-1 group focus-visible:outline-none"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Back to Objects</span>
          </button>
        </div>

        {/* Primary Details Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 items-start">
          
          {/* Left: Dynamic Image Gallery (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div
              className="aspect-[4/3] w-full bg-surface-container overflow-hidden border border-primary/5 cursor-zoom-in relative"
              onClick={() => setLightboxOpen(true)}
            >
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={galleryImages[activeImageIndex]}
                alt={`${product.name} details image ${activeImageIndex + 1}`}
              />
              <span className="absolute bottom-4 right-4 bg-[#1A1A1A]/70 text-[#FBFBF9] text-[10px] font-label-sm uppercase tracking-widest px-3 py-1.5 pointer-events-none">
                Click to Enlarge ⤢
              </span>
            </div>

            {/* Thumbnail Navigation */}
            {galleryImages.length > 1 && (
              <div className="flex gap-4">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-24 h-16 border bg-surface-container overflow-hidden transition-colors focus-visible:outline-none ${
                      activeImageIndex === idx ? 'border-primary' : 'border-primary/10 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover grayscale"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Technical Specs & Core CTA (5 columns) */}
          <div className="lg:col-span-5 flex flex-col py-2 justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block font-semibold">
                  Object {product.id} • {product.category}
                </span>
                {/* Availability status badge */}
                <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest border border-accent-sage/30 px-2 py-0.5 font-bold">
                  {product.availability ? 'In Stock' : 'Pre-Order Only'}
                </span>
              </div>
              
              <h1 className="font-headline-lg text-[32px] sm:text-headline-lg text-primary mb-2 leading-tight font-normal">
                {product.name}
              </h1>
              
              <div className="flex gap-4 items-center mb-6">
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-widest">
                  Collection: <strong>{product.collection}</strong>
                </span>
                <span className="text-secondary/30">•</span>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="font-label-sm text-[11px] text-secondary hover:text-primary transition-colors flex items-center gap-1 focus-visible:outline-none"
                >
                  <span className={`material-symbols-outlined text-[16px] ${wishlisted ? 'text-accent-sage font-fill' : ''}`} style={{ fontVariationSettings: wishlisted ? "'FILL' 1, 'wght' 300" : "'FILL' 0, 'wght' 300" }}>favorite</span>
                  <span>{wishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                </button>
              </div>

              <p className="font-headline-md text-headline-md text-primary mb-8 font-light">
                ${product.price} USD
              </p>

              <div className="w-full h-[1px] bg-primary/10 mb-8" />

              {/* Technical properties */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-label-sm text-[11px] uppercase tracking-wider text-secondary mb-2 font-semibold">Reflections</h4>
                  <p className="font-body-md text-body-md text-primary leading-relaxed text-justify-custom text-[15px] font-light">
                    {product.description}
                  </p>
                </div>

                {/* Color swatches */}
                {product.colorVariants.length > 0 && (
                  <div>
                    <h4 className="font-label-sm text-[11px] uppercase tracking-wider text-secondary mb-3 font-semibold">
                      Color Variants: {selectedColor}
                    </h4>
                    <div className="flex gap-3">
                      {product.colorVariants.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1.5 border text-[11px] font-label-sm uppercase tracking-wider transition-all focus-visible:outline-none ${
                            selectedColor === color
                              ? 'border-primary bg-[#1A1A1A] text-[#FBFBF9] font-bold'
                              : 'border-primary/20 text-secondary hover:border-primary/50'
                          }`}
                          style={{ borderRadius: '0px' }}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-label-sm text-[11px] uppercase tracking-wider text-secondary mb-2 font-semibold">Materials</h4>
                  <p className="font-body-md text-body-md text-secondary text-[15px] font-light">
                    {product.materials}
                  </p>
                </div>

                <div>
                  <h4 className="font-label-sm text-[11px] uppercase tracking-wider text-secondary mb-2 font-semibold">Sizing &amp; Fit</h4>
                  <p className="font-body-md text-body-md text-secondary text-[15px] font-light">
                    {product.sizing}
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-primary/10 mb-8" />

              {/* Main Checkout button */}
              <button
                ref={mainBuyBtnRef}
                onClick={handleAddToBag}
                className="w-full bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] py-5 font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 border-0 mb-12 focus-visible:outline-none"
                style={{ borderRadius: '0px' }}
              >
                ADD TO BAG • ${product.price} USD
              </button>
            </div>
          </div>
        </div>

        {/* Storytelling & Craftsmanship Section */}
        <section className="border-t border-primary/10 pt-24 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Story column */}
            <div className="md:col-span-5 pr-0 md:pr-10 space-y-6">
              <div>
                <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
                  Design Integrity
                </span>
                <h2 className="font-headline-lg text-headline-lg mb-6 text-primary font-normal leading-tight">
                  The Story Behind the Shape
                </h2>
                <p className="font-body-md text-body-md text-secondary leading-relaxed font-light text-justify-custom text-[15px]">
                  {product.story}
                </p>
              </div>

              <div className="border-t border-primary/5 pt-6">
                <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
                  Sustainability Profile
                </span>
                <p className="font-body-md text-body-md text-secondary leading-relaxed font-light text-justify-custom text-[15px]">
                  {product.sustainability}
                </p>
              </div>
            </div>
            
            {/* Specifications accordion column */}
            <div className="md:col-span-7 bg-[#F2F1ED] p-12 border border-primary/10">
              <h3 className="font-headline-md text-headline-md mb-8 text-primary font-normal">Atelier Specifications</h3>
              
              <div className="divide-y divide-primary/10 border-y border-primary/10">
                {[
                  {
                    title: "Pattern Drafting",
                    desc: "Drafted using traditional Japanese puzzle patterns to construct high-silhouette fits with zero residual fabric waste."
                  },
                  {
                    title: "Tracing & Sourcing",
                    desc: "Woven on narrow wooden shuttle looms in certified fair-trade mills, tracked directly back to single-source wool and linen fields."
                  },
                  {
                    title: "Natural Dyeing",
                    desc: "Pigment washes are created utilizing earth clays, mineral salts, ash, and root juices for rich, chemical-free patinas."
                  }
                ].map((item, index) => {
                  const isOpen = openSpecIndex === index;
                  return (
                    <div key={index} className="py-4">
                      <button
                        onClick={() => setOpenSpecIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-center text-left py-2 font-label-md text-label-md uppercase tracking-wider text-primary focus-visible:outline-none"
                      >
                        <span>{item.title}</span>
                        <span className="material-symbols-outlined text-[20px]">
                          {isOpen ? 'remove' : 'add'}
                        </span>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-body-md text-body-md text-secondary pt-3 pb-2 leading-relaxed text-[14px]">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Related Collection Section */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-primary/10 pt-24">
            <div className="text-center mb-16">
              <h3 className="font-headline-lg text-headline-lg font-normal text-primary mb-2">Related Objects</h3>
              <div className="w-12 h-[1px] bg-primary/20 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Recently Viewed Section */}
        {recentProducts.length > 0 && (
          <section className="border-t border-primary/10 pt-24 mt-24">
            <div className="text-center mb-16">
              <h3 className="font-headline-lg text-headline-lg font-normal text-primary mb-2">Recently Viewed</h3>
              <div className="w-12 h-[1px] bg-primary/20 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter">
              {recentProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Fullscreen Interactive Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 border border-white/20"
              style={{ borderRadius: '0px' }}
            >
              <span className="material-symbols-outlined text-[24px] block">close</span>
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              src={galleryImages[activeImageIndex]}
              alt="Fullscreen product layout zoom"
              className="max-w-full max-h-[90vh] object-contain grayscale hover:grayscale-0 transition-all duration-[1000ms]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Quick-Purchase Drawer (Scroll Triggered) */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-t border-primary/20 py-4 px-margin-mobile md:px-margin-desktop flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover grayscale border border-primary/10 hidden sm:block"
              />
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest">
                  Object {product.id}
                </span>
                <span className="font-body-md text-primary font-medium text-[15px]">{product.name}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="font-label-md text-label-md text-primary font-semibold hidden md:block">
                ${product.price} USD
              </span>
              <button
                onClick={handleAddToBag}
                className="bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] px-8 py-3.5 font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 border-0 focus-visible:outline-none"
                style={{ borderRadius: '0px' }}
              >
                Add to Bag
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
