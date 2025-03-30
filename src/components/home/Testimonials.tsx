
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'TastyTracker has completely changed how I order food. The selection of restaurants is amazing and delivery is always on time!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'As a busy professional, I love how easy it is to order through this app. The tracking feature is really useful.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emma Roberts',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    review:
      'Great variety of food options and the app is so intuitive to use. Customer service is also excellent!',
    rating: 5,
  },
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating 
              ? 'fill-food-accent text-food-accent' 
              : 'text-muted-foreground'
          }`}
        />
      ));
  };

  return (
    <section className="py-12 bg-gradient-to-r from-food-secondary/10 to-food-primary/10">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <p className="mt-2 text-muted-foreground">
            Join thousands of satisfied customers who love ordering with TastyTracker
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="flex flex-col h-full p-6">
                <div className="flex items-center space-x-2 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="flex-1 mb-4 italic">
                  "{testimonial.review}"
                </blockquote>
                <div className="flex items-center pt-4 mt-auto border-t">
                  <Avatar className="w-10 h-10 mr-3 border">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Happy Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
