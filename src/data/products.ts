
export interface Product {
  id: string;
  name: string;
  category: 'tshirt' | 'bag' | 'watch';
  price: number;
  images: string[];
  description: string;
  featured?: boolean;
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    category: 'tshirt',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
    ],
    description: 'Premium cotton t-shirt with a relaxed fit. Perfect for everyday wear.',
    featured: true,
    colors: ['White', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    id: '2',
    name: 'SOWIS Logo T-Shirt',
    category: 'tshirt',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
    ],
    description: 'Showcase your style with our signature logo t-shirt made from organic cotton.',
    featured: true,
    colors: ['Brown', 'White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Urban Tote Bag',
    category: 'bag',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    ],
    description: 'Spacious and stylish tote bag perfect for daily commutes or weekend outings.',
    featured: true,
    colors: ['Brown', 'Black', 'Beige'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Crossbody Messenger Bag',
    category: 'bag',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3Jvc3Nib2R5JTIwYmFnfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1596149615493-f0739de31c2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNyb3NzYm9keSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    ],
    description: 'A versatile messenger bag with multiple compartments for all your essentials.',
    colors: ['Brown', 'Black', 'Navy'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Minimal Analog Watch',
    category: 'watch',
    price: 129.99,
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww',
    ],
    description: 'An elegant timepiece with a minimalist design and premium leather strap.',
    featured: true,
    colors: ['Brown', 'Black', 'Tan'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Chronograph Watch',
    category: 'watch',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww',
    ],
    description: 'A sophisticated chronograph watch with multiple functions and stainless steel bracelet.',
    colors: ['Silver', 'Gold', 'Black'],
    inStock: true,
  },
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
