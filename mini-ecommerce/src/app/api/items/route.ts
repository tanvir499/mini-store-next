import { NextRequest, NextResponse } from 'next/server';

// In-memory data storage (in production, use a database)
let items = [
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
  {
    id: '16',
    name: 'Podcast Microphone',
    description: 'USB condenser microphone with pop filter and boom arm',
    price: 129.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=500&fit=crop'
  },
  {
    id: '17',
    name: 'Vinyl Record Player',
    description: 'Vintage-style turntable with built-in speakers and Bluetooth',
    price: 249.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop'
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
  {
    id: '20',
    name: 'VR Headset',
    description: 'Wireless VR headset with 4K display and hand tracking',
    price: 399.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=500&fit=crop'
  },
  {
    id: '21',
    name: 'Smart Glasses',
    description: 'AR smart glasses with voice assistant and camera',
    price: 499.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop'
  },
  {
    id: '22',
    name: 'Heart Rate Monitor',
    description: 'Chest strap heart rate monitor for accurate fitness tracking',
    price: 59.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
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
  {
    id: '24',
    name: 'Tablet 12-inch',
    description: 'Professional tablet with stylus support and keyboard attachment',
    price: 649.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop'
  },
  {
    id: '25',
    name: 'Laptop Ultrabook',
    description: '13-inch ultrabook with Intel i7, 16GB RAM, and 512GB SSD',
    price: 1299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop'
  },
  {
    id: '26',
    name: 'Gaming Monitor 4K',
    description: '27-inch 4K gaming monitor with 144Hz refresh rate and HDR',
    price: 549.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop'
  },
  {
    id: '27',
    name: 'Drone with Camera',
    description: '4K camera drone with GPS, obstacle avoidance, and 30-min flight time',
    price: 799.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop'
  },
  {
    id: '28',
    name: 'Smart TV 55-inch',
    description: '4K OLED smart TV with HDR10+ and voice control',
    price: 1199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop'
  },
  {
    id: '29',
    name: 'Action Camera',
    description: 'Waterproof 4K action camera with image stabilization',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop'
  },
  {
    id: '30',
    name: 'E-Reader',
    description: '6-inch e-ink display reader with backlight and waterproof design',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=500&h=500&fit=crop'
  },
  {
    id: '31',
    name: 'Security Camera',
    description: 'Wireless security camera with night vision and motion detection',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  },
  {
    id: '32',
    name: 'Smart Doorbell',
    description: 'Video doorbell with two-way audio and smartphone notifications',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop'
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
  },
  {
    id: '33',
    name: 'Phone Case Premium',
    description: 'Leather phone case with card slots and magnetic closure',
    price: 29.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop'
  },
  {
    id: '34',
    name: 'Wireless Charger',
    description: 'Fast wireless charging pad with LED indicator and cooling fan',
    price: 39.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop'
  },
  {
    id: '35',
    name: 'Cable Management Kit',
    description: 'Complete cable organization solution with clips, ties, and sleeves',
    price: 19.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  },
  {
    id: '36',
    name: 'Monitor Arm',
    description: 'Dual monitor arm with full articulation and cable management',
    price: 89.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop'
  },
  {
    id: '37',
    name: 'Desk Organizer',
    description: 'Bamboo desk organizer with wireless charging and USB ports',
    price: 69.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop'
  },
  {
    id: '38',
    name: 'Screen Protector Kit',
    description: 'Tempered glass screen protectors with installation kit',
    price: 14.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
  },
  {
    id: '39',
    name: 'Laptop Sleeve',
    description: 'Waterproof laptop sleeve with extra pockets for accessories',
    price: 34.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
  },
  {
    id: '40',
    name: 'Phone Grip & Stand',
    description: 'Collapsible phone grip with adjustable stand functionality',
    price: 12.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop'
  },
  {
    id: '41',
    name: 'Car Phone Mount',
    description: 'Magnetic car phone mount with 360-degree rotation',
    price: 24.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  },
  {
    id: '42',
    name: 'Bluetooth Adapter',
    description: 'USB Bluetooth 5.0 adapter for wireless connectivity',
    price: 16.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop'
  },
  {
    id: '43',
    name: 'Webcam Cover',
    description: 'Privacy webcam cover slider for laptops and tablets',
    price: 8.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop'
  },
  {
    id: '44',
    name: 'Ergonomic Wrist Rest',
    description: 'Memory foam wrist rest for keyboard and mouse comfort',
    price: 22.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop'
  },
  {
    id: '45',
    name: 'LED Strip Lights',
    description: 'Smart RGB LED strip lights with app control and music sync',
    price: 29.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
  }
];

// GET /api/items - fetch items with pagination and filtering
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');
  const category = searchParams.get('category');
  
  let filteredItems = items;
  
  // Filter by category if provided
  if (category && category !== 'all') {
    filteredItems = items.filter(item => 
      item.category && item.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedItems = filteredItems.slice(startIndex, endIndex);
  
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / limit);
  
  return NextResponse.json({
    items: paginatedItems,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: endIndex < totalItems,
      hasPrevPage: page > 1
    }
  });
}

// POST /api/items - add new item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, price, category, image } = body;
    
    if (!name || !description || !price) {
      return NextResponse.json(
        { error: 'Name, description, and price are required' },
        { status: 400 }
      );
    }
    
    const newItem = {
      id: (items.length + 1).toString(),
      name,
      description,
      price: parseFloat(price),
      category: category || 'Electronics',
      image: image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop'
    };
    
    items.push(newItem);
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}