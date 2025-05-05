import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-brown-800">About SOWIS</h1>
        
        <p className="text-lg mb-4">
          <strong>SOWIS</strong> stands for <em>Style Of World In Simplicity</em>. We are a modern fashion brand focused on delivering
          stylish, inclusive, and minimalistic clothing and accessories to people all over the world.
        </p>

        <p className="text-lg mb-4">
          At SOWIS, we believe fashion should be accessible, globally inspired, and above all—simple. Our core mission is to empower individuals
          through design that reflects elegance without complexity.
        </p>

        <p className="text-lg mb-4">
          Our product line currently includes unisex T-shirts, fashion bags, and watches, carefully selected to maintain a balance between
          aesthetics, comfort, and affordability. Each item is designed with a global audience in mind, staying true to our motto:
          <strong> “Style of the World, in Simplicity.”</strong>
        </p>

        <p className="text-lg mb-4">
          Looking ahead, SOWIS is built to scale—from a humble store to a dynamic e-commerce brand. With features like role-based
          dashboards (Admin & Manager), customer reviews, feature blogs, and real-time chatbot interaction, we are committed to
          delivering an exceptional user experience.
        </p>

        <p className="text-lg font-semibold text-center mt-8 text-brown-700">
          Welcome to SOWIS — Where the world finds its style, in simplicity.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
