
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-center">
          What are you craving?
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/restaurants?category=${category.slug}`}
              className="group"
            >
              <div className="flex flex-col items-center p-4 transition-all rounded-lg group-hover:bg-muted">
                <div className="flex items-center justify-center w-16 h-16 mb-3 overflow-hidden rounded-full bg-food-primary/10">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-10 h-10"
                  />
                </div>
                <span className="text-sm font-medium text-center group-hover:text-food-primary">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/restaurants">
            <Button variant="outline">View All Categories</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
