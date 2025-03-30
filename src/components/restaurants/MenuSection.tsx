
import React from 'react';
import { MenuItemCard } from '@/components';
import { MenuItem } from '@/types';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  restaurantId: string;
  restaurantName: string;
}

const MenuSection = ({ title, items, restaurantId, restaurantName }: MenuSectionProps) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-8" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <h3 className="mb-4 text-xl font-semibold border-b pb-2">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            menuItem={item}
            restaurantId={restaurantId}
            restaurantName={restaurantName}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
