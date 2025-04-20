
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">SOWIS</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/shop" className="font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link to="/blog" className="font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* User and Cart Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </Link>
          {user ? (
            <div className="flex items-center space-x-2">
              <Link to={user.role !== "customer" ? "/dashboard" : "/profile"}>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  {user.name}
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="p-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/shop" className="p-2" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/blog" className="p-2" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/about" className="p-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="p-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <Link to="/cart" className="relative p-2" onClick={() => setIsMenuOpen(false)}>
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white rounded-full text-xs flex items-center justify-center">
                  0
                </span>
              </Link>
              {user ? (
                <div className="flex flex-col space-y-2">
                  <Link 
                    to={user.role !== "customer" ? "/dashboard" : "/profile"} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="ghost" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
