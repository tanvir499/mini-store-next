// Cart and Wishlist management
import { Item } from './static-data';

export interface CartItem extends Item {
  quantity: number;
  addedAt: string;
}

export interface WishlistItem extends Item {
  addedAt: string;
}

const CART_STORAGE_KEY = 'ministore_cart';
const WISHLIST_STORAGE_KEY = 'ministore_wishlist';

// Cart Functions
export const getCartItems = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
    return [];
  }
};

export const addToCart = (item: Item, quantity: number = 1): CartItem[] => {
  const cartItems = getCartItems();
  const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
  if (existingItemIndex >= 0) {
    // Update quantity if item already exists
    cartItems[existingItemIndex].quantity += quantity;
  } else {
    // Add new item to cart
    const cartItem: CartItem = {
      ...item,
      quantity,
      addedAt: new Date().toISOString()
    };
    cartItems.push(cartItem);
  }
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }
  
  return cartItems;
};

export const removeFromCart = (itemId: string): CartItem[] => {
  const cartItems = getCartItems().filter(item => item.id !== itemId);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }
  
  return cartItems;
};

export const updateCartQuantity = (itemId: string, quantity: number): CartItem[] => {
  const cartItems = getCartItems();
  const itemIndex = cartItems.findIndex(item => item.id === itemId);
  
  if (itemIndex >= 0) {
    if (quantity <= 0) {
      cartItems.splice(itemIndex, 1);
    } else {
      cartItems[itemIndex].quantity = quantity;
    }
  }
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }
  
  return cartItems;
};

export const clearCart = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CART_STORAGE_KEY);
  }
};

export const getCartTotal = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce((count, item) => count + item.quantity, 0);
};

// Wishlist Functions
export const getWishlistItems = (): WishlistItem[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading wishlist from localStorage:', error);
    return [];
  }
};

export const addToWishlist = (item: Item): WishlistItem[] => {
  const wishlistItems = getWishlistItems();
  const existingItem = wishlistItems.find(wishlistItem => wishlistItem.id === item.id);
  
  if (!existingItem) {
    const wishlistItem: WishlistItem = {
      ...item,
      addedAt: new Date().toISOString()
    };
    wishlistItems.push(wishlistItem);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    }
  }
  
  return wishlistItems;
};

export const removeFromWishlist = (itemId: string): WishlistItem[] => {
  const wishlistItems = getWishlistItems().filter(item => item.id !== itemId);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
  }
  
  return wishlistItems;
};

export const isInWishlist = (itemId: string): boolean => {
  const wishlistItems = getWishlistItems();
  return wishlistItems.some(item => item.id === itemId);
};

export const clearWishlist = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(WISHLIST_STORAGE_KEY);
  }
};