import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* 1. Hero Carousel Section */}
      <HeroCarousel />

      {/* 2. Featured Categories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Discover Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Categories</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our premium collection of cutting-edge technology and innovative electronics
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Audio Category */}
            <Link href="/items?category=Audio" className="group block">
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Audio Excellence</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">Premium headphones, wireless speakers, and professional audio equipment</p>
                
                {/* Stats */}
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    15+ Products
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Top Rated
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Wearables Category */}
            <Link href="/items?category=Wearables" className="group block">
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.55 3.95 4.24.25-3.29 2.69 1.08 4.11z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Smart Wearables</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">Advanced smartwatches, fitness trackers, and health monitoring devices</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    12+ Products
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Trending
                  </span>
                </div>
                
                <div className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Electronics Category */}
            <Link href="/items?category=Electronics" className="group block">
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Electronics Hub</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">Latest smartphones, tablets, laptops, and cutting-edge gadgets</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    20+ Products
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Best Sellers
                  </span>
                </div>
                
                <div className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Accessories Category */}
            <Link href="/items?category=Accessories" className="group block">
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Tech Accessories</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">Essential peripherals, cases, chargers, and productivity accessories</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    25+ Products
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Essential
                  </span>
                </div>
                
                <div className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/items" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Explore All Categories</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Latest Products Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Latest Arrivals</h2>
            <p className="text-lg sm:text-xl text-slate-600 px-4">Discover the newest additions to our collection</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Wireless Audio Revolution</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Smart Health Monitoring</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Track your fitness goals with advanced health sensors, GPS tracking, and comprehensive wellness insights in real-time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Productivity Essentials</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Ergonomic accessories and high-performance peripherals designed to optimize your workspace and boost daily productivity.</p>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-r from-sky-400 to-sky-100 rounded-3xl p-6 sm:p-8 text-slate-900">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Quality Guaranteed</h3>
                  <p className="text-slate-700 mb-4 sm:mb-6 text-sm sm:text-base">Every product is carefully tested and comes with our comprehensive warranty and 30-day return policy</p>
                  <Link href="/items" className="inline-block bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors text-sm sm:text-base">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Cutting-Edge Technology</h2>
            <p className="text-lg sm:text-xl text-slate-600 px-4">Experience the future of electronics with our advanced features</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Wireless Connectivity</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">Advanced Bluetooth 5.0 and Wi-Fi 6 technology for seamless device connectivity and ultra-fast data transfer.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">AI-Powered Features</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">Smart algorithms and machine learning capabilities that adapt to your usage patterns for personalized experiences.</p>
            </div>
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Advanced Security</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">Military-grade encryption and biometric authentication to keep your data safe and secure at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose MiniStore?</h2>
            <p className="text-lg sm:text-xl text-slate-600 px-4">Experience the difference with our premium service and commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm6 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Lightning Fast Delivery</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">Free express shipping on orders over $50. Get your tech delivered within 24-48 hours with real-time tracking.</p>
            </div>
            <div className="text-center group lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Premium Quality Assurance</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">30-day money-back guarantee with comprehensive warranty coverage and rigorous quality testing on all products.</p>
            </div>
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-6h11v6zm0-7H4V9h11v2zm5 7h-4V9h4v9z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Expert Support 24/7</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base px-2">Our certified tech specialists are always available to help you choose, setup, and optimize your devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Animated Customer Testimonials */}
      <AnimatedTestimonials />

      {/* 7. Newsletter Subscription */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Stay Ahead of the Curve</h2>
            <p className="text-lg sm:text-xl text-slate-200 mb-6 sm:mb-8 leading-relaxed px-2">
              Be the first to know about new arrivals, exclusive deals, and tech insights from our experts
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 sm:mt-4">Join 50,000+ tech enthusiasts. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Ready to Upgrade Your Tech?</h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed px-4">
              Discover our complete collection of premium electronics and accessories. 
              From cutting-edge audio to smart wearables, find everything you need to stay connected and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/items"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse All Products
              </Link>
              <Link
                href="/register"
                className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-slate-50"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Have questions about our products or need assistance? We're here to help you find the perfect tech solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Visit Our Store</h4>
                      <p className="text-slate-600 text-sm sm:text-base">123 Tech Street, Digital District<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Call Us</h4>
                      <p className="text-slate-600 text-sm sm:text-base">+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">Email Support</h4>
                      <p className="text-slate-600 text-sm sm:text-base">support@ministore.com<br />We reply within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Follow Us</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 hover:bg-purple-100 rounded-lg flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a Message</h3>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a topic</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="order-status">Order Status</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-400 to-sky-100 hover:from-sky-500 hover:to-sky-200 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}