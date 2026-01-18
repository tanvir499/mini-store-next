import Cookies from 'js-cookie';

// Mock credentials
export const MOCK_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'Admin123'
};

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Mock user data
const MOCK_USER: User = {
  id: '1',
  email: 'admin@example.com',
  name: 'Admin User',
  role: 'admin'
};

// Cookie configuration
const COOKIE_OPTIONS = {
  expires: 7, // 7 days
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const
};

export const login = (email: string, password: string): { success: boolean; user?: User } => {
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    // Store authentication status
    Cookies.set('isAuthenticated', 'true', COOKIE_OPTIONS);
    
    // Store user data (in production, this would be a JWT token)
    Cookies.set('userData', JSON.stringify(MOCK_USER), COOKIE_OPTIONS);
    
    // Store login timestamp
    Cookies.set('loginTime', new Date().toISOString(), COOKIE_OPTIONS);
    
    return { success: true, user: MOCK_USER };
  }
  return { success: false };
};

export const register = (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): { success: boolean; message: string } => {
  // In a real app, this would make an API call to create the user
  // For demo purposes, we'll just simulate success
  
  // Basic validation
  if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
    return { success: false, message: 'All fields are required' };
  }
  
  if (userData.password.length < 6) {
    return { success: false, message: 'Password must be at least 6 characters long' };
  }
  
  // Simulate successful registration
  return { success: true, message: 'Account created successfully! Please sign in.' };
};

export const logout = (): void => {
  Cookies.remove('isAuthenticated');
  Cookies.remove('userData');
  Cookies.remove('loginTime');
};

export const isAuthenticated = (): boolean => {
  const authStatus = Cookies.get('isAuthenticated');
  const loginTime = Cookies.get('loginTime');
  
  if (!authStatus || authStatus !== 'true' || !loginTime) {
    return false;
  }
  
  // Check if login is still valid (7 days)
  const loginDate = new Date(loginTime);
  const now = new Date();
  const daysDiff = (now.getTime() - loginDate.getTime()) / (1000 * 3600 * 24);
  
  if (daysDiff > 7) {
    logout(); // Auto-logout after 7 days
    return false;
  }
  
  return true;
};

export const getCurrentUser = (): User | null => {
  if (!isAuthenticated()) {
    return null;
  }
  
  const userDataStr = Cookies.get('userData');
  if (!userDataStr) {
    return null;
  }
  
  try {
    return JSON.parse(userDataStr) as User;
  } catch (error) {
    console.error('Error parsing user data:', error);
    logout(); // Clear invalid data
    return null;
  }
};

export const refreshSession = (): void => {
  if (isAuthenticated()) {
    // Update login timestamp to extend session
    Cookies.set('loginTime', new Date().toISOString(), COOKIE_OPTIONS);
  }
};