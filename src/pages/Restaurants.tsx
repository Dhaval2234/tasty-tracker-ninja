
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { RestaurantCard, RestaurantFilters } from '@/components';
import { restaurants } from '@/data/restaurants';
import { Restaurant } from '@/types';

const Restaurants = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryQuery = queryParams.get('category');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery || '');
  const [selectedSort, setSelectedSort] = useState('rating');
  const [priceRange, setPriceRange] = useState([1, 3]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants);

  const applyFilters = () => {
    let filtered = [...restaurants];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((restaurant) => {
        if (selectedCategory === 'vegetarian') {
          return restaurant.cuisine.toLowerCase().includes('vegetarian');
        }
        return restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase());
      });
    }

    // Filter by price range
    filtered = filtered.filter((restaurant) => {
      const priceLevel = restaurant.priceRange.length;
      return priceLevel >= priceRange[0] && priceLevel <= priceRange[1];
    });

    // Sort
    switch (selectedSort) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'deliveryTime':
        filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
        break;
      case 'priceRange':
        filtered.sort((a, b) => a.priceRange.length - b.priceRange.length);
        break;
      case 'priceRangeDesc':
        filtered.sort((a, b) => b.priceRange.length - a.priceRange.length);
        break;
      default:
        filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredRestaurants(filtered);
  };

  // Apply filters on mount and when category query changes
  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
    applyFilters();
  }, [categoryQuery]);

  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto md:px-6">
        <h1 className="mb-6 text-3xl font-bold">Restaurants</h1>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Filters Sidebar */}
          <div>
            <RestaurantFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              applyFilters={applyFilters}
            />
          </div>
          
          {/* Restaurant Listings */}
          <div className="md:col-span-3">
            {filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white rounded-lg shadow">
                <h3 className="mb-2 text-lg font-semibold">No restaurants found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Restaurants;
