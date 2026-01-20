import React from 'react';
import ItemDetailsClient from './ItemDetailsClient';

export default function ItemDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  return <ItemDetailsClient params={params} />;
}