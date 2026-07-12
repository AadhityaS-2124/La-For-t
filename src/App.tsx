import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider, useCart } from './context/CartContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchOverlay } from './components/SearchOverlay';
import { ProductQuickView } from './components/ProductQuickView';

// Views
import { HomeView } from './views/HomeView';
import { ObjectsView } from './views/ObjectsView';
import { ProductDetailView } from './views/ProductDetailView';
import { AboutView } from './views/AboutView';
import { JournalView } from './views/JournalView';
import { CaseStudyView } from './views/CaseStudyView';
import { DesignSystemView } from './views/DesignSystemView';

// Footer & Social Views
import { PrivacyView } from './views/PrivacyView';
import { TermsView } from './views/TermsView';
import { ShippingView } from './views/ShippingView';
import { ContactView } from './views/ContactView';
import { InstagramView } from './views/InstagramView';
import { PinterestView } from './views/PinterestView';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();
  const { isCartOpen, isSearchOpen, quickViewProduct, checkoutStep } = useCart();

  // Route matching logic
  const renderActiveView = () => {
    let view;
    switch (currentPath) {
      case '':
        view = <HomeView />;
        break;
      case 'objects':
        view = <ObjectsView />;
        break;
      case 'about':
        view = <AboutView />;
        break;
      case 'journal':
        view = <JournalView />;
        break;
      case 'case-study':
        view = <CaseStudyView />;
        break;
      case 'design-system':
        view = <DesignSystemView />;
        break;
      case 'privacy':
        view = <PrivacyView />;
        break;
      case 'terms':
        view = <TermsView />;
        break;
      case 'shipping':
        view = <ShippingView />;
        break;
      case 'contact':
        view = <ContactView />;
        break;
      case 'instagram':
        view = <InstagramView />;
        break;
      case 'pinterest':
        view = <PinterestView />;
        break;
      default:
        // Handle dynamic paths
        if (currentPath.startsWith('objects/')) {
          const id = currentPath.split('/')[1];
          view = <ProductDetailView productId={id} />;
        } else {
          view = <HomeView />;
        }
    }

    const isInstagram = currentPath === 'instagram';

    // Disable transition wrap for Instagram because it has a unique immersive layout
    if (isInstagram) return view;

    return (
      <motion.div
        key={currentPath}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {view}
      </motion.div>
    );
  };

  const isSocialRoute = currentPath === 'instagram';

  if (isSocialRoute) {
    return (
      <div className="h-screen overflow-hidden bg-[#ffffff] text-[#262626] selection:bg-accent-sage selection:text-white font-sans antialiased">
        {renderActiveView()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-primary flex flex-col selection:bg-accent-sage selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActiveView()}
        </AnimatePresence>
      </main>
      
      <Footer />
      
      {/* Animated Drawers and Overlays using AnimatePresence */}
      <AnimatePresence>
        {isCartOpen && <CartDrawer />}
      </AnimatePresence>
      
      <AnimatePresence>
        {checkoutStep !== 'idle' && <CheckoutModal />}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && <SearchOverlay />}
      </AnimatePresence>

      <AnimatePresence>
        {quickViewProduct !== null && <ProductQuickView />}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <RouterProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </RouterProvider>
  );
};

export default App;
