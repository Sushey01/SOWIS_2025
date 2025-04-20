
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import { getFeaturedPosts } from "@/data/blog";
import ProductCard from "@/components/product/ProductCard";
import BlogCard from "@/components/blog/BlogCard";
import { ShoppingBag, Watch, Shirt, BookOpen, ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Elevate Your Style</span>
              <span className="block text-primary">With SOWIS</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Premium clothing and accessories for the modern lifestyle.
              Discover our collection of t-shirts, bags, and watches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our collections and find your perfect style companion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* T-Shirts Category */}
            <Link 
              to="/shop/tshirts" 
              className="group relative rounded-lg overflow-hidden aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="T-Shirts" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Shirt size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1">T-Shirts</h3>
                <p className="mb-4 text-white/80">Comfortable and stylish designs</p>
                <span className="flex items-center font-medium">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>

            {/* Bags Category */}
            <Link 
              to="/shop/bags" 
              className="group relative rounded-lg overflow-hidden aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Bags" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1">Bags</h3>
                <p className="mb-4 text-white/80">Functional and fashionable</p>
                <span className="flex items-center font-medium">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>

            {/* Watches Category */}
            <Link 
              to="/shop/watches" 
              className="group relative rounded-lg overflow-hidden aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" 
                alt="Watches" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Watch size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1">Watches</h3>
                <p className="mb-4 text-white/80">Timeless elegance on your wrist</p>
                <span className="flex items-center font-medium">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground mt-2">
                Our most popular items, hand-selected for you
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/shop">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="SOWIS Brand Story"
                className="rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Brand Story</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                SOWIS was founded with a simple mission: to create high-quality, 
                timeless pieces that seamlessly blend into your life while 
                elevating your everyday style.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                We believe in sustainable practices, ethical manufacturing, and 
                creating products that stand the test of time in both quality and design.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">From Our Blog</h2>
              <p className="text-muted-foreground mt-2">
                Styling tips, product features, and fashion insights
              </p>
            </div>
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link to="/blog">
                <BookOpen size={16} />
                <span>View Blog</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-8">
              Subscribe to our newsletter for exclusive offers, new product announcements, 
              and styling tips delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md bg-white/90 text-foreground"
                required
              />
              <Button type="submit" variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
