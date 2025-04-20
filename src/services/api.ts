
// Simulated delay to mimic API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Import mock data
import { products, Product } from '@/data/products';

// Products API
export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    await delay(500); // Simulate network delay
    return products;
  },
  
  getById: async (id: string): Promise<Product | undefined> => {
    await delay(300);
    return products.find(product => product.id === id);
  },
  
  getByCategory: async (category: Product['category']): Promise<Product[]> => {
    await delay(300);
    return products.filter(product => product.category === category);
  },
  
  getFeatured: async (): Promise<Product[]> => {
    await delay(300);
    return products.filter(product => product.featured);
  }
};

// Auth API
interface LoginCredentials {
  email: string;
  password: string;
}

export const authApi = {
  login: async ({ email, password }: LoginCredentials) => {
    await delay(500);
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );
    
    if (!user) {
      throw new Error("Invalid credentials");
    }
    
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },
  
  logout: async () => {
    await delay(300);
    localStorage.removeItem("sowisUser");
  }
};

// Mock users (moved from AuthContext)
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@sowis.com",
    password: "admin123",
    name: "Admin User",
    role: "admin" as const,
  },
  {
    id: "2",
    email: "manager@sowis.com",
    password: "manager123",
    name: "Manager User",
    role: "manager" as const,
  },
  {
    id: "3",
    email: "customer@sowis.com",
    password: "customer123",
    name: "Customer User",
    role: "customer" as const,
  },
];
