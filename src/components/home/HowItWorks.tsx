
import React from 'react';
import { 
  SearchIcon, 
  UtensilsCrossed, 
  Timer, 
  Map 
} from 'lucide-react';

const features = [
  {
    icon: <SearchIcon className="w-10 h-10 text-food-primary" />,
    title: 'Search',
    description: 'Browse our marketplace of restaurants and cuisines'
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10 text-food-primary" />,
    title: 'Choose',
    description: 'Select your favorite meals and add to cart'
  },
  {
    icon: <Timer className="w-10 h-10 text-food-primary" />,
    title: 'Order',
    description: 'Pay securely online and track your order'
  },
  {
    icon: <Map className="w-10 h-10 text-food-primary" />,
    title: 'Enjoy',
    description: 'Food is prepared and delivered to your door'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-2 text-muted-foreground">
            Order your favorite food in 4 simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-food-primary/10">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
