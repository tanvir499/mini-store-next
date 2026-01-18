'use client';

import { useState, useEffect } from 'react';
import { fetchItems, ItemsResponse } from '@/lib/api';
import ItemCard from '@/components/ItemCard';
import Pagination from '@/components/Pagination';
import CategoryFilter from '@/components/CategoryFilter';

export default function ItemsPage() {
  const [itemsData, setItemsData] = useState<ItemsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const loadItems = async (page: number = 1, category: string = 'all') => {
    try {
      setLoading(true);
      const data = await fetchItems(page, 9, category);
      setItemsData(data);
    } catch (err) {
      setError('Failed to load items. Please make sure the server is running.');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems(currentPage, selectedCategory);
  }, [currentPage, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Items</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => loadItems(currentPage, selectedCategory)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const { items, pagination } = itemsData || { items: [], pagination: null };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600">Discover our amazing collection of electronics</p>
      </div>

      {/* Category Filter */}
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Results Info */}
      {pagination && (
        <div className="mb-6 text-center text-gray-600">
          Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to{' '}
          {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of{' '}
          {pagination.totalItems} products
          {selectedCategory !== 'all' && (
            <span className="ml-2 text-blue-600 font-medium">
              in {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </span>
          )}
        </div>
      )}

      {/* Items Grid */}
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            {selectedCategory === 'all' 
              ? 'No items available at the moment.' 
              : `No items found in ${selectedCategory} category.`
            }
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Pagination */}
          {pagination && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}