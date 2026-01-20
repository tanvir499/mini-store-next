import { NextRequest, NextResponse } from 'next/server';
import { items } from '../route';

// GET /api/items/[id] - fetch single item by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return NextResponse.json(
      { error: 'Item not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(item);
}