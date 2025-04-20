
import { MOCK_USERS, MOCK_PRODUCTS } from '@/constants/mockData';
import { User } from '@/contexts/AuthContext';
import { Product } from '@/data/products';

// Utility function for simulating network delay
const simulateNetworkDelay = (ms = 300) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Authentication service
export const authService = {
  /**
   * Authenticate user with email and password
   * @param email User's email
   * @param password User's password
   * @returns User object without password
   */
  async login(email: string, password: string) {
    await simulateNetworkDelay();
    
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error("Invalid credentials");
    }
    
    // Remove password before returning
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  /**
   * Logout current user
   */
  async logout() {
    await simulateNetworkDelay();
    localStorage.removeItem("sowisUser");
  }
};

// Product service
export const productService = {
  /**
   * Get all products
   */
  async getAll(): Promise<Product[]> {
    await simulateNetworkDelay();
    return MOCK_PRODUCTS;
  },

  /**
   * Get product by ID
   * @param id Product identifier
   */
  async getById(id: string): Promise<Product | undefined> {
    await simulateNetworkDelay();
    return MOCK_PRODUCTS.find(product => product.id === id);
  }
};
