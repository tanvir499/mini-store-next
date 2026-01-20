'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createItem } from '@/lib/api';

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Electronics',
    image: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.description.trim() || !formData.price) {
        throw new Error('Please fill in all required fields');
      }

      const priceNum = parseFloat(formData.price);
      if (isNaN(priceNum) || priceNum <= 0) {
        throw new Error('Please enter a valid price');
      }

      // Create the item
      const newItem = await createItem({
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: priceNum,
        category: formData.category,
        image: formData.image.trim() || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop'
      });

      // Show success message
      setSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        category: 'Electronics',
        image: ''
      });

      // Redirect to items page after a short delay
      setTimeout(() => {
        router.push('/items');
      }, 2000);

    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('401') || err.message.includes('Authentication required')) {
          // Redirect to login if authentication failed
          router.push('/login?redirect=/add-item');
          return;
        }
        setError(err.message);
      } else {
        setError('Failed to add product. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-6 sm:py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Add New Product</h1>
          <p className="text-lg sm:text-xl text-slate-600">Create a new product for your store</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-sm sm:text-base">Product added successfully! Redirecting to items page...</span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
            <div className="flex items-center">
              <span className="text-red-500 mr-2">⚠️</span>
              <span className="text-sm sm:text-base">{error}</span>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Item Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading || success}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                placeholder="Enter product name"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                disabled={isLoading || success}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                placeholder="Describe your product..."
              />
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-2">
                  Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  disabled={isLoading || success}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  disabled={isLoading || success}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Audio">Audio</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                disabled={isLoading || success}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                disabled={isLoading || success}
                className="w-full bg-gradient-to-r from-sky-400 to-sky-100 text-slate-900 py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:from-sky-500 hover:to-sky-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? 'Adding Product...' : success ? 'Product Added!' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}