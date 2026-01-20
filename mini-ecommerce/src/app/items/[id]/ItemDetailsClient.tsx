'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchItemById, Item } from '@/lib/api';

export default function ItemDetailsClient({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const itemData = await fetchItemById(resolvedParams.id);
        setItem(itemData);
      } catch (err) {
        setError('Item not found');
        console.error('Error fetching item:', err);
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading item details...</p>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Item Not Found</h2>
          <p className="text-gray-600 mb-4">The requested item could not be found.</p>
          <Link
            href="/items"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Items
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          href="/items"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          ← Back to Items
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.name}</h1>
            <p className="text-2xl font-bold text-blue-600">${item.price}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Add to Wishlist
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                High quality materials
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                30-day money-back guarantee
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Free shipping on orders over $50
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}