
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Perfect T-Shirt: A Guide to Fit and Fabric',
    slug: 'perfect-tshirt-guide',
    excerpt: 'Finding the perfect t-shirt can be challenging. We break down everything you need to know about fit, fabric, and care.',
    content: `
      <p>A great t-shirt is the foundation of any wardrobe. But with so many options available, finding the perfect tee can feel overwhelming. In this guide, we'll explore everything you need to know about finding t-shirts that fit well and last longer.</p>
      
      <h2>Understanding Fabric Quality</h2>
      
      <p>The fabric is the most important component of a quality t-shirt. Look for these characteristics:</p>
      
      <ul>
        <li><strong>Cotton Quality:</strong> Long-staple cotton like Pima or Egyptian cotton creates softer, more durable t-shirts.</li>
        <li><strong>Weight:</strong> Fabric weight is measured in GSM (grams per square meter). Lightweight tees range from 130-150 GSM, while heavyweight options go above 180 GSM.</li>
        <li><strong>Weave:</strong> Jersey is the standard t-shirt weave, but variations like slub (textured) or piqué (more structured) offer different looks and feels.</li>
      </ul>
      
      <h2>Finding Your Perfect Fit</h2>
      
      <p>The right fit depends on your body type and personal style preference:</p>
      
      <ul>
        <li><strong>Slim Fit:</strong> Contours to your body without being tight. Ideal for leaner frames.</li>
        <li><strong>Regular Fit:</strong> The versatile middle ground that works for most body types.</li>
        <li><strong>Relaxed Fit:</strong> Offers more room throughout for comfort and a casual look.</li>
      </ul>
      
      <p>Pay special attention to shoulder seams (should align with your shoulder edge), sleeve length, and overall length.</p>
      
      <h2>Care Tips to Make Your Tees Last Longer</h2>
      
      <ul>
        <li>Wash in cold water and turn inside-out to prevent fading</li>
        <li>Avoid using fabric softener, which breaks down cotton fibers over time</li>
        <li>Air dry when possible, or use low heat in the dryer</li>
        <li>Store folded rather than on hangers to prevent neck stretching</li>
      </ul>
      
      <p>At SOWIS, we carefully source the finest materials for our t-shirts and design them with the perfect balance of style and comfort. Browse our collection to find your new favorite tee.</p>
    `,
    author: 'Emma Rodriguez',
    date: '2025-03-10',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Style Guide',
    featured: true
  },
  {
    id: '2',
    title: 'The Evolution of Bags: From Function to Fashion',
    slug: 'evolution-of-bags',
    excerpt: 'How bags transformed from purely practical items to essential fashion accessories that define personal style.',
    content: `
      <p>Bags have been essential tools for humans for thousands of years. From early pouches made of animal skins to today's luxury designer offerings, the evolution of bags reflects changes in society, technology, and fashion.</p>
      
      <h2>Historical Perspective</h2>
      
      <p>The earliest bags were purely functional, designed to carry food, tools, and other necessities. As civilizations developed, so did the complexity and purposes of bags:</p>
      
      <ul>
        <li>Ancient Egyptians used pouches worn around the waist</li>
        <li>Medieval Europeans carried small drawstring bags called "hamondeys"</li>
        <li>The 16th century saw the rise of pockets sewn into clothing</li>
        <li>By the 19th century, women's hand bags became popular fashion accessories</li>
      </ul>
      
      <h2>Form Meets Function</h2>
      
      <p>Modern bags blend practicality with style in countless ways. Today's most popular styles include:</p>
      
      <ul>
        <li><strong>Tote Bags:</strong> Spacious and versatile for daily use</li>
        <li><strong>Crossbody Bags:</strong> Hands-free convenience with security</li>
        <li><strong>Backpacks:</strong> Ergonomic design for carrying heavier loads</li>
        <li><strong>Briefcases:</strong> Professional option for business settings</li>
      </ul>
      
      <h2>Sustainability in Bag Design</h2>
      
      <p>As environmental concerns grow, bag design has begun to emphasize sustainability:</p>
      
      <ul>
        <li>Plant-based leathers from mushrooms, cactus, and pineapple</li>
        <li>Recycled materials from ocean plastic and industrial waste</li>
        <li>Biodegradable components that reduce environmental impact</li>
      </ul>
      
      <p>At SOWIS, our bag collection combines timeless design with modern functionality and sustainable practices. Each piece is created to enhance your style while standing up to daily use.</p>
    `,
    author: 'Marcus Chen',
    date: '2025-03-18',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Fashion History',
    featured: true
  },
  {
    id: '3',
    title: 'Timepiece Trends: The Return of Classic Watch Design',
    slug: 'timepiece-trends',
    excerpt: 'In a digital age, traditional analog watches are making a surprising comeback. We explore the enduring appeal of classic timepieces.',
    content: `
      <p>In an era where time is displayed on every digital device we own, traditional watches are experiencing a renaissance. More than just timekeeping tools, watches have become statements of personal style, craftsmanship appreciation, and even investment pieces.</p>
      
      <h2>The Enduring Appeal of Analog</h2>
      
      <p>Despite smartphones and smartwatches, traditional analog watches offer unique benefits:</p>
      
      <ul>
        <li>A distinctive aesthetic that complements personal style</li>
        <li>Craftsmanship that represents centuries of horological tradition</li>
        <li>Disconnection from the constant notifications of digital life</li>
        <li>Longevity that often spans generations</li>
      </ul>
      
      <h2>Current Watch Trends</h2>
      
      <p>Today's watch market shows several interesting developments:</p>
      
      <ul>
        <li><strong>Minimalist Design:</strong> Clean dials with simple indices and fewer complications</li>
        <li><strong>Vintage Inspiration:</strong> Modern watches with design elements from the 1950s-1970s</li>
        <li><strong>Sustainable Materials:</strong> Recycled metals, vegan leathers, and responsibly sourced components</li>
        <li><strong>Versatile Sizing:</strong> Moving away from oversized cases toward more moderate dimensions</li>
      </ul>
      
      <h2>Choosing the Right Watch</h2>
      
      <p>When selecting a timepiece, consider these factors:</p>
      
      <ul>
        <li>Movement type (mechanical, automatic, or quartz)</li>
        <li>Case material and size proportionate to your wrist</li>
        <li>Dial legibility and design that matches your style</li>
        <li>Strap options and versatility</li>
        <li>Water resistance appropriate for your lifestyle</li>
      </ul>
      
      <p>SOWIS watches combine timeless design principles with modern sensibilities, creating pieces that feel both contemporary and enduring. Explore our collection to find a watch that tells your time in style.</p>
    `,
    author: 'Sophia Kim',
    date: '2025-04-02',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D',
    category: 'Style Guide',
    featured: true
  }
];

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category === category);
};
