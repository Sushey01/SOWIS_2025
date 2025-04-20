
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h1 className="text-2xl font-bold text-primary">SOWIS</h1>
            </Link>
            <p className="mb-4 text-sm">
              Premium clothing brand offering stylish t-shirts, bags, and watches with a focus on quality and design.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop/tshirts" className="hover:text-primary transition-colors">T-Shirts</Link>
              </li>
              <li>
                <Link to="/shop/bags" className="hover:text-primary transition-colors">Bags</Link>
              </li>
              <li>
                <Link to="/shop/watches" className="hover:text-primary transition-colors">Watches</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/80"
              />
              <Button type="submit" variant="default" size="icon">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SOWIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
