import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GraphicDesignProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Graphic Design Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Premium design templates, logos, brand kits, and social media graphics
        </p>
        {/* Add Graphic Design specific content here */}
        <Link to="/digital-products" className="text-indigo-600 hover:underline">
          ← Back to Digital Products
        </Link>
      </div>
    </div>
  );
};

export default GraphicDesignProducts;