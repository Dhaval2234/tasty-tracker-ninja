
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  Hero, 
  FeaturedRestaurants, 
  CategorySection, 
  HowItWorks,
  Testimonials,
  CTA
} from '@/components';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <CategorySection />
      <FeaturedRestaurants />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
};

export default Index;
