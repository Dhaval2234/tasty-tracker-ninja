
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { MenuItem } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { convertToINR, formatCurrency } from '@/utils/currency';

interface MenuItemCardProps {
  menuItem: MenuItem;
  restaurantId: string;
  restaurantName: string;
}

const MenuItemCard = ({ menuItem, restaurantId, restaurantName }: MenuItemCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      quantity: 1,
      image: menuItem.image,
      restaurantId,
      restaurantName
    });

    toast({
      title: "Added to cart",
      description: `${menuItem.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  // Convert price to INR
  const priceInr = convertToINR(menuItem.price);

  return (
    <Card className="overflow-hidden menu-item">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 p-4">
          <h3 className="font-medium">{menuItem.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {menuItem.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="font-semibold">{formatCurrency(priceInr)}</span>
            <Button 
              onClick={handleAddToCart} 
              size="sm" 
              className="bg-food-primary hover:bg-food-primary/90"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
        {menuItem.image && (
          <div className="w-full sm:w-24 h-24 overflow-hidden">
            <img
              src={menuItem.image}
              alt={menuItem.name}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default MenuItemCard;
