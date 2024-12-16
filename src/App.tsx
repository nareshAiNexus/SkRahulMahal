import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Booking from './components/Booking';

// Import the BookingStatus component
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="booking">
        <Booking />
        {/* Add BookingStatus below Booking component */}
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;