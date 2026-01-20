// Static data for client-side operations (Netlify deployment)
export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  image: string;
}

export const STATIC_ITEMS: Item[] = [
  // Audio Category
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360-degree sound and 12-hour battery',
    price: 89.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop'
  },
  {
    id: '8',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation',
    price: 149.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop'
  },
  {
    id: '13',
    name: 'Gaming Headset',
    description: 'Professional gaming headset with 7.1 surround sound and RGB lighting',
    price: 159.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop'
  },
  {
    id: '14',
    name: 'Studio Monitor Speakers',
    description: 'High-fidelity studio monitors for professional audio production',
    price: 349.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop'
  },
  {
    id: '15',
    name: 'Soundbar',
    description: 'Premium soundbar with wireless subwoofer and Dolby Atmos',
    price: 299.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  },

  // Wearables Category
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced fitness tracking smartwatch with heart rate monitoring',
    price: 299.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
  },
  {
    id: '18',
    name: 'Fitness Tracker',
    description: 'Waterproof fitness band with sleep tracking and GPS',
    price: 99.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop'
  },
  {
    id: '19',
    name: 'Smart Ring',
    description: 'Titanium smart ring with health monitoring and NFC payments',
    price: 199.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop'
  },

  // Electronics Category
  {
    id: '10',
    name: 'Webcam HD',
    description: '1080p HD webcam with auto-focus and built-in microphone',
    price: 69.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop'
  },
  {
    id: '11',
    name: 'Power Bank',
    description: '20000mAh portable charger with fast charging and LED display',
    price: 34.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1609592806787-3d9c1b8e5e8e?w=500&h=500&fit=crop'
  },
  {
    id: '23',
    name: 'Smartphone Pro',
    description: 'Latest flagship smartphone with triple camera and 5G connectivity',
    price: 899.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
  },

  // Accessories Category
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for improved posture and cooling',
    price: 79.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop'
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    description: 'Precision wireless mouse with ergonomic design and long battery life',
    price: 49.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop'
  },
  {
    id: '6',
    name: 'USB-C Hub',
    description: 'Multi-port hub with 4K HDMI, USB 3.0, and fast charging support',
    price: 59.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop'
  },
  {
    id: '7',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with tactile switches',
    price: 129.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop'
  },
  {
    id: '9',
    name: 'Tablet Stand',
    description: 'Adjustable tablet stand for desk or bedside use',
    price: 39.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop'
  },
  {
    id: '12',
    name: 'Gaming Mouse Pad',
    description: 'Large RGB gaming mouse pad with smooth surface',
    price: 24.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop'
  }
];

// Client-side storage for new items (localStorage)
const STORAGE_KEY = 'ministore_items';

export const getStoredItems = (): Item[] => {
  if (typeof window === 'undefined') return STATIC_ITEMS;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsedItems = JSON.parse(stored);
      return [...STATIC_ITEMS, ...parsedItems];
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  
  return STATIC_ITEMS;
};

export const addItemToStorage = (item: Omit<Item, 'id'>): Item => {
  const newItem: Item = {
    ...item,
    id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  };

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const existingItems = stored ? JSON.parse(stored) : [];
      const updatedItems = [...existingItems, newItem];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  return newItem;
};

export const getItemById = (id: string): Item | null => {
  const allItems = getStoredItems();
  return allItems.find(item => item.id === id) || null;
};

export const getItemsByCategory = (category?: string): Item[] => {
  const allItems = getStoredItems();
  if (!category || category === 'all') {
    return allItems;
  }
  return allItems.filter(item => 
    item.category && item.category.toLowerCase() === category.toLowerCase()
  );
};

export const getPaginatedItems = (page: number = 1, limit: number = 6, category?: string) => {
  const filteredItems = getItemsByCategory(category);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);
  
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / limit);
  
  return {
    items: paginatedItems,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: endIndex < totalItems,
      hasPrevPage: page > 1
    }
  };
};