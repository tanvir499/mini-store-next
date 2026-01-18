const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage
let items = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced fitness tracking smartwatch with heart rate monitoring',
    price: 299.99,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for improved posture and cooling',
    price: 79.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop'
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
    id: '8',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation',
    price: 149.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop'
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
    id: '12',
    name: 'Gaming Mouse Pad',
    description: 'Large RGB gaming mouse pad with smooth surface',
    price: 24.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop'
  }
];

// Routes
// GET /items - fetch items with pagination
app.get('/items', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const category = req.query.category;
  
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
  
  res.json({
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
});

// GET /items/:id - fetch single item
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  res.json(item);
});

// POST /items - add new item
app.post('/items', (req, res) => {
  const { name, description, price, category, image } = req.body;
  
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Name, description, and price are required' });
  }
  
  const newItem = {
    id: uuidv4(),
    name,
    description,
    price: parseFloat(price),
    category: category || 'Electronics',
    image: image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop'
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});