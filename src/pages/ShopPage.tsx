import React from 'react';

const ShopPage = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$25.99", image: "https://via.placeholder.com/300x300?text=Product+1" },
    { id: 2, name: "Product 2", price: "$40.00", image: "https://via.placeholder.com/300x300?text=Product+2" },
    { id: 3, name: "Product 3", price: "$15.99", image: "https://via.placeholder.com/300x300?text=Product+3" },
    { id: 4, name: "Product 4", price: "$60.00", image: "https://via.placeholder.com/300x300?text=Product+4" },
    { id: 5, name: "Product 5", price: "$30.00", image: "https://via.placeholder.com/300x300?text=Product+5" },
    { id: 6, name: "Product 6", price: "$55.99", image: "https://via.placeholder.com/300x300?text=Product+6" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Shop</h1>
        <p className="text-gray-600">Browse through our amazing collection of products!</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-lg font-semibold text-gray-600">{product.price}</p>
              <button className="mt-4 w-full py-2 px-4 bg-brown-400 text-white rounded-lg hover:bg-brown-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
