import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <ImageSlider />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white" // Added text-white class
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to SK Ragul Mahal
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white" // Added text-white class
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create Unforgettable Memories in Our Elegant Wedding Hall
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="booking"
              smooth={true}
              duration={500}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold cursor-pointer transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;