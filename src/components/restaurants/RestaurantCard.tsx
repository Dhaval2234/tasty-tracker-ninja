
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, DollarSign } from 'lucide-react';
import { Restaurant } from '@/types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <Card className="overflow-hidden restaurant-card">
        <div className="relative h-48">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="object-cover w-full h-full"
          />
          {restaurant.isNew && (
            <Badge className="absolute top-2 right-2 bg-food-accent text-food-dark">
              New
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 fill-food-accent text-food-accent" />
              <span className="text-sm font-medium">{restaurant.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="flex items-center text-xs">
              <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
              <span>{restaurant.deliveryTime} min</span>
            </div>
            <div className="flex items-center text-xs">
              <DollarSign className="w-3 h-3 mr-1 text-muted-foreground" />
              <span>{restaurant.priceRange}</span>
            </div>
            <div className="text-xs">
              {restaurant.deliveryFee === 0 
                ? 'Free delivery' 
                : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
