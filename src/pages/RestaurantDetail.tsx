
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { MenuSection } from '@/components';
import { restaurants } from '@/data/restaurants';
import { getRestaurantMenu } from '@/data/menu';
import { Restaurant, MenuCategory } from '@/types';
import { Star, Clock, MapPin, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { convertToINR, formatCurrency } from '@/utils/currency';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    if (id) {
      const foundRestaurant = restaurants.find((r) => r.id === id);
      if (foundRestaurant) {
        setRestaurant(foundRestaurant);
        
        const restaurantMenu = getRestaurantMenu(id);
        setMenu(restaurantMenu);
        
        if (restaurantMenu.length > 0) {
          setActiveCategory(restaurantMenu[0].id);
        }
      }
    }
  }, [id]);

  if (!restaurant) {
    return (
      <MainLayout>
        <div className="container px-4 py-8 mx-auto md:px-6">
          <div className="p-8 text-center bg-white rounded-lg shadow">
            <h2 className="mb-2 text-xl font-semibold">Restaurant not found</h2>
            <p className="text-muted-foreground">
              The restaurant you're looking for does not exist.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Convert delivery fee to INR
  const deliveryFeeInr = convertToINR(restaurant.deliveryFee);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center mt-2 text-white gap-x-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 fill-food-accent text-food-accent" />
                <span>{restaurant.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{restaurant.deliveryTime} min</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="w-4 h-4 mr-1" />
                <span>{restaurant.priceRange}</span>
              </div>
              <div>
                {restaurant.deliveryFee === 0 
                  ? 'Free delivery' 
                  : `${formatCurrency(deliveryFeeInr)} delivery`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto md:px-6">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Menu Categories Sidebar */}
          <div className="w-full md:w-64 md:flex-shrink-0">
            <div className="sticky top-20 md:border-r pr-4">
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Info</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mt-0.5 mr-2 text-muted-foreground" />
                    <span className="text-sm">{restaurant.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 mt-0.5 mr-2 text-muted-foreground" />
                    <span className="text-sm">Open until 10:00 PM</span>
                  </div>
                </div>
              </div>
              
              <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Menu</h3>
              <nav className="space-y-1">
                {menu.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"}
                    className={`w-full justify-start text-sm ${
                      activeCategory === category.id 
                        ? 'bg-food-primary hover:bg-food-primary/90' 
                        : ''
                    }`}
                    onClick={() => scrollToCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </nav>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 mt-8 md:mt-0">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Menu</h2>
              <p className="text-muted-foreground">{restaurant.description}</p>
            </div>

            {menu.map((category) => (
              <MenuSection
                key={category.id}
                title={category.name}
                items={category.items}
                restaurantId={restaurant.id}
                restaurantName={restaurant.name}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RestaurantDetail;
