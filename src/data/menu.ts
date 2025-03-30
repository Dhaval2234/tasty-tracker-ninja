
import { MenuItem, MenuCategory } from '@/types';

export const getBurgerHavenMenu = (): MenuCategory[] => {
  return [
    {
      id: 'burgers',
      name: 'Burgers',
      items: [
        {
          id: 'burger1',
          name: 'Classic Cheeseburger',
          description: 'Beef patty, cheddar cheese, lettuce, tomato, onion, and our special sauce on a brioche bun',
          price: 9.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
          category: 'burgers'
        },
        {
          id: 'burger2',
          name: 'Bacon Deluxe',
          description: 'Beef patty, applewood smoked bacon, swiss cheese, sautéed mushrooms, and garlic aioli',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
          category: 'burgers'
        },
        {
          id: 'burger3',
          name: 'Veggie Burger',
          description: 'House-made veggie patty with avocado, sprouts, tomato, and cilantro-lime mayo',
          price: 10.99,
          image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=1000&auto=format&fit=crop',
          category: 'burgers'
        }
      ]
    },
    {
      id: 'sides',
      name: 'Sides',
      items: [
        {
          id: 'side1',
          name: 'French Fries',
          description: 'Hand-cut potatoes, fried to perfection and seasoned with sea salt',
          price: 3.99,
          image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=1000&auto=format&fit=crop',
          category: 'sides'
        },
        {
          id: 'side2',
          name: 'Onion Rings',
          description: 'Thick-cut onions, beer battered and fried until golden',
          price: 4.99,
          image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1000&auto=format&fit=crop',
          category: 'sides'
        },
        {
          id: 'side3',
          name: 'Sweet Potato Fries',
          description: 'Crispy sweet potato fries served with chipotle dipping sauce',
          price: 4.99,
          image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1000&auto=format&fit=crop',
          category: 'sides'
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      items: [
        {
          id: 'drink1',
          name: 'Vanilla Milkshake',
          description: 'Creamy vanilla ice cream blended to perfection',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1000&auto=format&fit=crop',
          category: 'drinks'
        },
        {
          id: 'drink2',
          name: 'Chocolate Milkshake',
          description: 'Rich chocolate ice cream blended to perfection',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop',
          category: 'drinks'
        },
        {
          id: 'drink3',
          name: 'Soft Drinks',
          description: 'Your choice of cola, lemon-lime, or root beer',
          price: 2.49,
          category: 'drinks'
        }
      ]
    }
  ];
};

export const getPizzaParadiseMenu = (): MenuCategory[] => {
  return [
    {
      id: 'pizzas',
      name: 'Pizzas',
      items: [
        {
          id: 'pizza1',
          name: 'Margherita',
          description: 'Fresh mozzarella, tomato sauce, and basil on our signature thin crust',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop',
          category: 'pizzas'
        },
        {
          id: 'pizza2',
          name: 'Pepperoni',
          description: 'Tomato sauce, mozzarella, and zesty pepperoni',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1000&auto=format&fit=crop',
          category: 'pizzas'
        },
        {
          id: 'pizza3',
          name: 'Vegetarian',
          description: 'Tomato sauce, mozzarella, bell peppers, mushrooms, olives, and onions',
          price: 13.99,
          image: 'https://images.unsplash.com/photo-1576458088097-2de4ab593f9e?q=80&w=1000&auto=format&fit=crop',
          category: 'pizzas'
        }
      ]
    },
    {
      id: 'pasta',
      name: 'Pasta',
      items: [
        {
          id: 'pasta1',
          name: 'Spaghetti Bolognese',
          description: 'Spaghetti with our house-made meat sauce, slow-cooked for rich flavor',
          price: 11.99,
          image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000&auto=format&fit=crop',
          category: 'pasta'
        },
        {
          id: 'pasta2',
          name: 'Fettuccine Alfredo',
          description: 'Fettuccine pasta in a creamy parmesan sauce',
          price: 10.99,
          image: 'https://images.unsplash.com/photo-1645112515309-d11378392865?q=80&w=1000&auto=format&fit=crop',
          category: 'pasta'
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      items: [
        {
          id: 'dessert1',
          name: 'Tiramisu',
          description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
          price: 6.99,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop',
          category: 'desserts'
        },
        {
          id: 'dessert2',
          name: 'Cannoli',
          description: 'Crispy pastry shells filled with sweet ricotta and chocolate chips',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1000&auto=format&fit=crop',
          category: 'desserts'
        }
      ]
    }
  ];
};

export const getSushiSupremeMenu = (): MenuCategory[] => {
  return [
    {
      id: 'sushi',
      name: 'Sushi Rolls',
      items: [
        {
          id: 'sushi1',
          name: 'California Roll',
          description: 'Crab, avocado, and cucumber wrapped in seaweed and rice',
          price: 6.99,
          image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop',
          category: 'sushi'
        },
        {
          id: 'sushi2',
          name: 'Spicy Tuna Roll',
          description: 'Spicy tuna and cucumber wrapped in seaweed and rice',
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1581781870027-04212e231e96?q=80&w=1000&auto=format&fit=crop',
          category: 'sushi'
        },
        {
          id: 'sushi3',
          name: 'Dragon Roll',
          description: 'Eel and cucumber topped with avocado and eel sauce',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1000&auto=format&fit=crop',
          category: 'sushi'
        }
      ]
    },
    {
      id: 'sashimi',
      name: 'Sashimi',
      items: [
        {
          id: 'sashimi1',
          name: 'Salmon Sashimi',
          description: 'Fresh slices of premium salmon',
          price: 9.99,
          image: 'https://images.unsplash.com/photo-1603536413117-6930e5cf44a8?q=80&w=1000&auto=format&fit=crop',
          category: 'sashimi'
        },
        {
          id: 'sashimi2',
          name: 'Tuna Sashimi',
          description: 'Fresh slices of premium tuna',
          price: 10.99,
          image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1000&auto=format&fit=crop',
          category: 'sashimi'
        }
      ]
    },
    {
      id: 'appetizers',
      name: 'Appetizers',
      items: [
        {
          id: 'app1',
          name: 'Edamame',
          description: 'Steamed soybeans sprinkled with sea salt',
          price: 4.99,
          image: 'https://images.unsplash.com/photo-1561626430-bbf0a22daa53?q=80&w=1000&auto=format&fit=crop',
          category: 'appetizers'
        },
        {
          id: 'app2',
          name: 'Gyoza',
          description: 'Pan-fried pork dumplings served with dipping sauce',
          price: 6.99,
          image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1000&auto=format&fit=crop',
          category: 'appetizers'
        }
      ]
    }
  ];
};

export const getRestaurantMenu = (restaurantId: string): MenuCategory[] => {
  switch (restaurantId) {
    case '1':
      return getBurgerHavenMenu();
    case '2':
      return getPizzaParadiseMenu();
    case '3':
      return getSushiSupremeMenu();
    default:
      return [];
  }
};
