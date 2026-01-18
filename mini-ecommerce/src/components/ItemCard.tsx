import Link from 'next/link';
import Image from 'next/image';
import { Item } from '@/lib/api';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">${item.price}</span>
            <span className="text-blue-600 hover:text-blue-800 font-medium">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}