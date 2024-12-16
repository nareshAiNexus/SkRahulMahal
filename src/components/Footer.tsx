import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SK Ragul Mahal</h3>
            <p className="text-orange-200">
              Creating unforgettable memories for your special day. Your dream wedding venue awaits.
            </p>
            <div className="mt-4">
              <a href="mailto:skrahulmahal@gmail.com" className="text-orange-200 hover:text-white flex items-center gap-2">
                <Mail className="w-4 h-4" />
                skrahulmahal@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-orange-200 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-orange-200 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61568929118376&mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-200 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/sk_rahul_mahal_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-200 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-500">
          <p className="text-orange-500">&copy; {new Date().getFullYear()} SK Rahul Mahal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
