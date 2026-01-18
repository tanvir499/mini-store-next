// API functions for client-side data fetching
// Uses relative URLs for better deployment compatibility

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  image: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ItemsResponse {
  items: Item[];
  pagination: PaginationInfo;
}

export const fetchItems = async (page: number = 1, limit: number = 6, category?: string): Promise<ItemsResponse> => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    if (category && category !== 'all') {
      params.append('category', category);
    }
    
    const response = await fetch(`/api/items?${params}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const fetchItemById = async (id: string): Promise<Item> => {
  try {
    const response = await fetch(`/api/items/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Item not found');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};

export const createItem = async (item: Omit<Item, 'id'>): Promise<Item> => {
  try {
    const response = await fetch(`/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};