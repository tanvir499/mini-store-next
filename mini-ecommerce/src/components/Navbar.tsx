'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { isAuthenticated, logout, getCurrentUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      setIsAuth(authStatus);
      if (authStatus) {
        setUser(getCurrentUser());
      } else {
        setUser(null);
      }
    };

    checkAuth();
    // Check auth status on page focus
    window.addEventListener('focus', checkAuth);
    return () => window.removeEventListener('focus', checkAuth);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setUser(null);
    setIsMobileMenuOpen(false);
    router.push('/');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center -space-x-6 sm:-space-x-8" onClick={closeMobileMenu}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="MiniStore Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                MiniStore
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              href="/items" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Products
            </Link>
            <Link 
              href="/categories" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Categories
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link 
              href="/support" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Support
            </Link>
            
            {/* Desktop Authenticated User Menu */}
            {isAuth ? (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/add-item" 
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  Add Product
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 text-sm text-gray-600">
                    Welcome, {user?.name || 'User'}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              /* Desktop Guest User Menu */
              <div className="flex items-center space-x-2">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Home
              </Link>
              <Link 
                href="/items" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                About
              </Link>
              <Link 
                href="/support" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Support
              </Link>
              
              {/* Mobile Authenticated User Menu */}
              {isAuth ? (
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="px-3 py-2">
                    <p className="text-sm text-gray-600 mb-2">Welcome, {user?.name || 'User'}</p>
                  </div>
                  <Link 
                    href="/add-item" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    Add Product
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                /* Mobile Guest User Menu */
                <div className="border-t border-gray-100 pt-3 mt-3 space-y-1">
                  <Link 
                    href="/login" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/register" 
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-sm"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}