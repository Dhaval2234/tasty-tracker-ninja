
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-food-primary text-white">
      <div className="container px-4 mx-auto text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to satisfy your cravings?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-white/80">
          Join thousands of food lovers who order delicious meals from their favorite 
          restaurants every day.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/restaurants">
            <Button className="bg-white text-food-primary hover:bg-white/90">
              Order Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
