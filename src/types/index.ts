
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  image: string;
  rating: number;
  deliveryTime: number;
  deliveryFee: number;
  priceRange: string;
  address: string;
  isNew?: boolean;
  featured?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  restaurantId: string;
  restaurantName: string;
}
