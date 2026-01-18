# MiniStore - E-Commerce Application

A modern e-commerce application built with Next.js 15/16 (App Router) and Express.js, featuring authentication, product management, and a responsive design.

## 🚀 Features

- **Landing Page**: Modern homepage with 7 sections including hero, featured products, categories, testimonials, and more
- **Authentication**: Mock login system with cookie-based session management
- **Product Catalog**: Browse and view detailed product information with pagination and filtering
- **Category Filtering**: Filter products by Audio, Wearables, Accessories, Electronics
- **Pagination**: Navigate through products with smart pagination controls
- **Protected Routes**: Add new products (authenticated users only)
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Toast Notifications**: User feedback for actions and errors
- **Express.js API**: RESTful backend with pagination support for product management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15/16 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Express.js, Node.js
- **Authentication**: Cookie-based with js-cookie
- **Notifications**: React Hot Toast
- **Image Handling**: Next.js Image component with Unsplash images (configured in next.config.ts)

## 📁 Project Structure

```
mini-ecommerce/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── items/          # Product listing and details
│   │   ├── login/          # Authentication page
│   │   ├── add-item/       # Protected add product page
│   │   └── layout.tsx      # Root layout with navbar/footer
│   ├── components/         # Reusable React components
│   ├── lib/               # Utility functions and API calls
│   └── middleware.ts      # Route protection middleware
├── server/                # Express.js backend
│   ├── server.js         # Main server file
│   └── package.json      # Server dependencies
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mini-ecommerce
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Start the Express.js server**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:3001`

5. **Start the Next.js development server**
   ```bash
   # In a new terminal, from the root directory
   npm run dev
   ```
   The application will run on `http://localhost:3000`

## 🔐 Authentication

The application uses mock authentication with hardcoded credentials:

- **Email**: `admin@example.com`
- **Password**: `Admin123`

Authentication state is stored in cookies and persists across browser sessions.

## 🛣️ Routes

### Public Routes
- `/` - Landing page with company information and featured products
- `/items` - Product catalog page
- `/items/[id]` - Individual product details page
- `/login` - Authentication page

### Protected Routes
- `/add-item` - Add new product form (requires authentication)

## 📡 API Endpoints

The Express.js server provides the following endpoints:

- `GET /items` - Fetch all products
- `GET /items/:id` - Fetch single product by ID
- `POST /items` - Create new product (requires name, description, price)

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional interface with hover effects
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: User-friendly error messages and fallbacks
- **Toast Notifications**: Success and error feedback
- **Image Optimization**: Next.js Image component for performance

## 🔒 Security Features

- **Route Protection**: Middleware-based authentication checking
- **Cookie Security**: Secure cookie handling for session management
- **Input Validation**: Form validation and sanitization
- **Error Boundaries**: Graceful error handling

## 🚀 Deployment

### Frontend (Next.js)
1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Deploy to Vercel, Netlify, or your preferred platform

### Backend (Express.js)
1. Set environment variables (PORT, etc.)
2. Start production server: `npm start`
3. Deploy to Heroku, Railway, or your preferred platform

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Customize API base URL
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues

1. **Server connection errors**: Ensure the Express.js server is running on port 3001
2. **Authentication issues**: Clear browser cookies and try logging in again
3. **Image loading problems**: 
   - Check internet connection for Unsplash images
   - Ensure `next.config.ts` includes Unsplash domain in `remotePatterns`
   - Restart Next.js server after config changes
4. **Build errors**: Ensure all dependencies are installed with `npm install`

### Development Tips

- Use `npm run dev` for hot reloading during development
- Check browser console for detailed error messages
- Ensure both frontend and backend servers are running simultaneously
- Use browser dev tools to inspect network requests and responses
