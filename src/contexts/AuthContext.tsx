
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi } from "@/services/api";

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
    try {
      const user = await authApi.login({ email, password });
      setUser(user);
      localStorage.setItem("sowisUser", JSON.stringify(user));
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    await authApi.logout();
    setUser(null);
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
