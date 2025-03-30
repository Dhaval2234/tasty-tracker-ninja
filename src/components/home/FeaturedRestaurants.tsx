
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { restaurants } from '@/data/restaurants'; 

const FeaturedRestaurants = () => {
  // Show only the top 4 highest rated restaurants
  const featuredRestaurants = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Restaurants</h2>
            <p className="text-muted-foreground">Our top-rated places loved by customers</p>
          </div>
          <Link to="/restaurants" className="text-food-primary hover:underline">
            View all restaurants →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredRestaurants.map((restaurant) => (
            <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
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
                  <div className="flex items-center mt-2 text-xs text-muted-foreground">
                    <span>{restaurant.deliveryTime} min</span>
                    <span className="mx-1">•</span>
                    <span>{restaurant.deliveryFee === 0 ? 'Free delivery' : `$${restaurant.deliveryFee.toFixed(2)} delivery`}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
