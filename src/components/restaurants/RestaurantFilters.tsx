
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search } from 'lucide-react';
import { categories } from '@/data/categories';

interface RestaurantFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedSort: string;
  setSelectedSort: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  applyFilters: () => void;
}

const RestaurantFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedSort,
  setSelectedSort,
  priceRange,
  setPriceRange,
  applyFilters
}: RestaurantFiltersProps) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Filters</h3>
      
      <div className="space-y-4">
        {/* Search Input */}
        <div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div>
          <label className="block mb-2 text-sm font-medium">Category</label>
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Sort By */}
        <div>
          <label className="block mb-2 text-sm font-medium">Sort By</label>
          <Select
            value={selectedSort}
            onValueChange={setSelectedSort}
          >
            <SelectTrigger>
              <SelectValue placeholder="Recommended" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rating</SelectItem>
              <SelectItem value="deliveryTime">Fastest Delivery</SelectItem>
              <SelectItem value="priceRange">Price: Low to High</SelectItem>
              <SelectItem value="priceRangeDesc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Price Range Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">Price Range</label>
            <span className="text-sm text-muted-foreground">
              {priceRange[0] === 1 ? '$' : ''}
              {priceRange[0] === 2 ? '$$' : ''}
              {priceRange[0] === 3 ? '$$$' : ''}
              {' - '}
              {priceRange[1] === 1 ? '$' : ''}
              {priceRange[1] === 2 ? '$$' : ''}
              {priceRange[1] === 3 ? '$$$' : ''}
            </span>
          </div>
          <Slider
            defaultValue={[1, 3]}
            min={1}
            max={3}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-4"
          />
        </div>
        
        <Button 
          onClick={applyFilters}
          className="w-full bg-food-primary hover:bg-food-primary/90"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default RestaurantFilters;
