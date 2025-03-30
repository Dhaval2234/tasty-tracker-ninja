
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { CartItem, CartSummary } from '@/components';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto md:px-6">
        <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>

        {cart.items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="p-6 bg-white border rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Items ({cart.items.length})</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to clear your cart?')) {
                        clearCart();
                      }
                    }}
                  >
                    Clear Cart
                  </Button>
                </div>
                <div className="divide-y">
                  {cart.items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="max-w-md p-8 mx-auto text-center bg-white border rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="w-16 h-16 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
            <p className="mb-6 text-muted-foreground">
              It looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/restaurants">
              <Button className="bg-food-primary hover:bg-food-primary/90">
                Browse Restaurants
              </Button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
