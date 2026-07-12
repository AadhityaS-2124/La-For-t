import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { totalItems, setCartOpen, setSearchOpen } = useCart();
  const { currentPath, navigate } = useRouter();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll behavior for auto-hide and transparent-to-glass transitions
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu if they scroll down
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (path: string) => {
    if (path === '') {
      return currentPath === '';
    }
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  const navItems = [
    { label: 'Collection', path: '' },
    { label: 'Objects', path: 'objects' },
    { label: 'About', path: 'about' },
    { label: 'Journal', path: 'journal' },
    { label: 'Case Study', path: 'case-study' },
    { label: 'Design System', path: 'design-system' } // Added Design System
  ];

  return (
    <>
      {/* Global Announcement Banner */}
      <div className="w-full bg-[#7A827A] text-white py-3 px-margin-mobile text-center z-[60] relative font-medium">
        <span className="font-label-sm text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium">
          International Shipping Available on All Objects
        </span>
      </div>

      {/* Main Navigation Header */}
      <motion.header
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 w-full z-50 px-margin-mobile md:px-margin-desktop transition-all duration-300 border-b ${
          isScrolled
            ? 'top-0 bg-[#FBFBF9]/85 backdrop-blur-md h-16 border-primary/10 shadow-sm'
            : 'top-12 bg-transparent h-20 border-primary/5'
        }`}
      >
        <div className="max-w-container-max w-full mx-auto h-full flex justify-between items-center">
          {/* Brand Logo & Name */}
          <div className="flex items-center">
            <button
              onClick={(e) => handleNavClick('', e)}
              className="font-headline-md text-headline-md font-bold tracking-tighter text-primary border-0 bg-transparent cursor-pointer p-0 flex items-center focus-visible:outline-none"
              aria-label="La Forêt Home"
            >
              <Logo className="h-7 w-7 mr-1.5" />
              <span className="font-semibold tracking-wide uppercase text-[15px] font-label-md">La Forêt</span>
            </button>
          </div>

          {/* Desktop Navigation with framer-motion Active Underlines */}
          <nav className="hidden md:flex gap-8 lg:gap-10 h-full items-center">
            {navItems.map((item) => {
              const active = isLinkActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className={`relative font-label-md text-label-md transition-colors uppercase py-2 focus-visible:outline-none ${
                    active ? 'text-primary font-medium' : 'text-secondary hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7A827A]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Navigation Buttons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-accent-sage transition-colors py-1 focus-visible:outline-none"
              aria-label="Open Search (Ctrl+K)"
            >
              <span className="material-symbols-outlined text-[22px] block">search</span>
            </button>
            
            {/* Cart Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              className="hover:text-accent-sage transition-colors flex items-center gap-1.5 py-1 focus-visible:outline-none"
              aria-label="Open Shopping Bag"
            >
              <span className="material-symbols-outlined text-[22px] block">shopping_bag</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-[11px] sm:text-xs font-semibold">
                ({totalItems})
              </span>
            </button>

            {/* Mobile Menu Hamburg Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:text-accent-sage transition-colors py-1 focus-visible:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span className="material-symbols-outlined text-[24px] block">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-[#F2F1ED] border-b border-primary/20 flex flex-col md:hidden z-40 overflow-hidden"
            >
              <nav className="flex flex-col py-6 px-margin-mobile gap-4">
                {navItems.map((item, idx) => {
                  const active = isLinkActive(item.path);
                  return (
                    <motion.button
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      key={item.path}
                      className={`font-label-md text-label-md py-2.5 uppercase border-b border-primary/10 text-left focus-visible:outline-none ${
                        active ? 'text-primary font-semibold border-b-2 border-accent-sage' : 'text-secondary'
                      }`}
                      onClick={(e) => handleNavClick(item.path, e)}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
