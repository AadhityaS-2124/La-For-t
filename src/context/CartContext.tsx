import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CheckoutStep = 'idle' | 'processing' | 'finalizing' | 'success';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  quickViewProduct: Product | null; // Quick View Addition
  checkoutStep: CheckoutStep;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void; // Quick View Addition
  setCheckoutStep: (step: CheckoutStep) => void;
  totalItems: number;
  subtotal: number;
  
  // Wishlist additions
  wishlistItems: Product[];
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;

  // Recently Viewed additions
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null); // Quick View Addition
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('idle');

  // Load state from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('la_foret_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart items', e);
      }
    }

    const savedWishlist = localStorage.getItem('la_foret_wishlist');
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Failed to parse wishlist items', e);
      }
    }

    const savedRecent = localStorage.getItem('la_foret_recent');
    if (savedRecent) {
      try {
        setRecentlyViewed(JSON.parse(savedRecent));
      } catch (e) {
        console.error('Failed to parse recently viewed items', e);
      }
    }
  }, []);

  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('la_foret_cart', JSON.stringify(items));
  };

  const addToCart = (product: Product) => {
    const existingIndex = cartItems.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    saveCart(cartItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const updated = cartItems.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  // Wishlist handlers
  const toggleWishlist = (product: Product) => {
    let updated: Product[];
    if (wishlistItems.some(item => item.id === product.id)) {
      updated = wishlistItems.filter(item => item.id !== product.id);
    } else {
      updated = [...wishlistItems, product];
    }
    setWishlistItems(updated);
    localStorage.setItem('la_foret_wishlist', JSON.stringify(updated));
  };

  const isWishlisted = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  // Recently Viewed handler
  const addToRecentlyViewed = (product: Product) => {
    const base = recentlyViewed.filter(item => item.id !== product.id);
    const updated = [product, ...base].slice(0, 4);
    setRecentlyViewed(updated);
    localStorage.setItem('la_foret_recent', JSON.stringify(updated));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        isSearchOpen,
        quickViewProduct,
        checkoutStep,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCartOpen,
        setSearchOpen,
        setQuickViewProduct,
        setCheckoutStep,
        totalItems,
        subtotal,
        wishlistItems,
        toggleWishlist,
        isWishlisted,
        recentlyViewed,
        addToRecentlyViewed
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
