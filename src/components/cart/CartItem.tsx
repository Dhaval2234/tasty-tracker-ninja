
import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { CartItem as CartItemType } from '@/types';
import { convertToINR, formatCurrency } from '@/utils/currency';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleUpdateQuantity = (amount: number) => {
    const newQuantity = item.quantity + amount;
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  // Convert price to INR
  const itemTotalInr = convertToINR(item.price * item.quantity);

  return (
    <div className="flex items-start py-4 border-b last:border-0">
      {item.image && (
        <div className="flex-shrink-0 w-16 h-16 mr-4 overflow-hidden rounded-md">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-xs text-muted-foreground">{item.restaurantName}</p>
          </div>
          <button
            onClick={handleRemove}
            className="text-muted-foreground hover:text-destructive"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => handleUpdateQuantity(-1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => handleUpdateQuantity(1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <span className="font-medium">{formatCurrency(itemTotalInr)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
