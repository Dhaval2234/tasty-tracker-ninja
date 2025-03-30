
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/types';

interface CartContextType {
  cart: {
    items: CartItem[];
    restaurantId: string | null;
  };
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<{
    items: CartItem[];
    restaurantId: string | null;
  }>({
    items: [],
    restaurantId: null,
  });

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      // If trying to add an item from a different restaurant, clear the cart first
      if (prevCart.restaurantId && newItem.restaurantId !== prevCart.restaurantId) {
        if (!window.confirm(
          "Your cart contains items from a different restaurant. Would you like to clear your cart and add this item instead?"
        )) {
          return prevCart;
        }
        return {
          items: [newItem],
          restaurantId: newItem.restaurantId,
        };
      }

      // Check if the item already exists in the cart
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return {
          ...prevCart,
          items: updatedItems,
        };
      } else {
        // Add new item
        return {
          items: [...prevCart.items, newItem],
          restaurantId: newItem.restaurantId,
        };
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== itemId);
      
      // If cart becomes empty, reset restaurantId
      const updatedRestaurantId = updatedItems.length > 0 ? prevCart.restaurantId : null;
      
      return {
        items: updatedItems,
        restaurantId: updatedRestaurantId,
      };
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return {
        ...prevCart,
        items: updatedItems,
      };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      restaurantId: null,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
