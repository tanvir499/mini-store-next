import Link from "next/link";

export default function CategoriesPage() {
  const categories = [
    {
      name: "Audio",
      description: "Premium headphones, speakers, and audio accessories",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-100",
      itemCount: 45,
      featured: ["Wireless Headphones", "Bluetooth Speakers", "Gaming Headsets"]
    },
    {
      name: "Wearables", 
      description: "Advanced smartwatches and fitness trackers",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-100",
      itemCount: 32,
      featured: ["Smart Watches", "Fitness Trackers", "Health Monitors"]
    },
    {
      name: "Electronics",
      description: "Latest gadgets and electronic devices",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-violet-600", 
      bgGradient: "from-purple-50 to-violet-100",
      itemCount: 78,
      featured: ["Laptops", "Tablets", "Smartphones"]
    },
    {
      name: "Accessories",
      description: "Essential tech accessories and peripherals",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-100",
      itemCount: 156,
      featured: ["Cables & Chargers", "Cases & Covers", "Stands & Mounts"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Product Categories</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our carefully curated selection of premium electronics organized by category. 
              Find exactly what you're looking for with ease.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`group bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900">{category.itemCount}</div>
                    <div className="text-slate-600 text-sm">Products</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Featured Items:</h4>
                  <div className="space-y-2">
                    {category.featured.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  href={`/items?category=${category.name.toLowerCase()}`}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${category.gradient} text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 group-hover:shadow-xl`}
                >
                  Browse {category.name}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Popular Products Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular This Week</h2>
              <p className="text-xl text-slate-600">Trending products across all categories</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Wireless Headphones Pro</h3>
                <p className="text-slate-600 text-sm mb-3">Premium noise-cancelling with 30-hour battery</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900">$199.99</span>
                  <span className="text-sm text-emerald-600 font-medium">In Stock</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Watch Series X</h3>
                <p className="text-slate-600 text-sm mb-3">Advanced health tracking and GPS</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900">$299.99</span>
                  <span className="text-sm text-emerald-600 font-medium">In Stock</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Ultra Laptop Stand</h3>
                <p className="text-slate-600 text-sm mb-3">Ergonomic aluminum design with cooling</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-slate-900">$79.99</span>
                  <span className="text-sm text-emerald-600 font-medium">In Stock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Browse All Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Browse our complete product catalog or use our search feature to find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/items"
                className="bg-gradient-to-r from-sky-400 to-sky-100 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:from-sky-500 hover:to-sky-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse All Products
              </Link>
              <Link
                href="/support"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}