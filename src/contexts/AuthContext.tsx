
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define user roles
export type UserRole = "admin" | "manager" | "customer";

// Define user type
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

// Define Auth context type
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
  isManager: () => boolean;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@sowis.com",
    password: "admin123",
    name: "Admin User",
    role: "admin" as UserRole,
  },
  {
    id: "2",
    email: "manager@sowis.com",
    password: "manager123",
    name: "Manager User",
    role: "manager" as UserRole,
  },
  {
    id: "3",
    email: "customer@sowis.com",
    password: "customer123",
    name: "Customer User",
    role: "customer" as UserRole,
  },
];

// Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("sowisUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );
    
    if (!foundUser) {
      setIsLoading(false);
      throw new Error("Invalid credentials");
    }
    
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem("sowisUser", JSON.stringify(userWithoutPassword));
    setIsLoading(false);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("sowisUser");
  };

  // Helper functions for role checks
  const isAdmin = () => user?.role === "admin";
  const isManager = () => user?.role === "manager" || user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAdmin, isManager }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
