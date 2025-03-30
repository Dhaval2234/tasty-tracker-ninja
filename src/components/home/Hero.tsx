
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative py-12 overflow-hidden bg-gradient-to-r from-food-primary/10 to-food-secondary/10 md:py-20">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid items-center gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Delicious Food,
              <span className="block text-food-primary">Delivered Fast</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Order from your favorite local restaurants with easy online payment. 
              Fast delivery right to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/restaurants">
                <Button className="bg-food-primary hover:bg-food-primary/90">
                  Explore Restaurants
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">Sign Up</Button>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full h-full max-w-[500px] aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
                alt="Delicious food plate"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
