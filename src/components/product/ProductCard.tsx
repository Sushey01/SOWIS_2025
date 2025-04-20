
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/shop/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg card-hover">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.featured && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs py-1 px-2 rounded-md">
            Featured
          </div>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-foreground">{product.name}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="font-medium text-primary">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 capitalize">{product.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
