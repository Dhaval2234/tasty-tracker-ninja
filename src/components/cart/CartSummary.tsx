
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/use-cart';

const CartSummary = () => {
  const { cart } = useCart();
  
  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const deliveryFee = 3.99;
  const tax = subtotal * 0.07; // Assuming 7% tax
  const total = subtotal + deliveryFee + tax;

  const isCartEmpty = cart.items.length === 0;

  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="pt-2 mt-2 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <Button 
          className="w-full bg-food-primary hover:bg-food-primary/90"
          disabled={isCartEmpty}
        >
          Proceed to Checkout
        </Button>
        <Link to="/restaurants">
          <Button variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
