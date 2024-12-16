import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['home', 'booking', 'services', 'about', 'contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm shadow-lg z-50"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-orange-600 font-serif"
            whileHover={{ scale: 1.05 }}
          >
            SK Ragul Mahal
          </motion.h1>
          
          {/* Navbar items (hidden in mobile view) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item} 
                to={item}
                smooth={true}
                duration={500}
                className="text-orange-800 hover:text-yellow-600 cursor-pointer capitalize font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Menu button (hamburger icon) */}
          <div className="md:hidden ml-auto">
            <button 
              className="text-orange-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="block py-2 text-orange-800 hover:text-yellow-600 cursor-pointer capitalize font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
