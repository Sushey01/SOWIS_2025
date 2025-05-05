import React from "react";

const BlogPage = () => {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-title">
          Something Great is Cooking!
        </h1>
        <p className="text-lg text-gray-600 animate-text">
          Stay tuned, we're preparing something amazing. Coming soon.
        </p>

        <p className="text-lg text-red-600 animate-text">
          Conquering the digital brand and creating a revolution ! 
        </p>

        <p className="text-lg text-red-800 animate-text">
         TEAM SOWIS ! 
        </p>

        {/* <div className="space-x-4 mt-4 animate-links">
          <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
        </div> */}
      </div>
    </div>
  );
};

export default BlogPage;
