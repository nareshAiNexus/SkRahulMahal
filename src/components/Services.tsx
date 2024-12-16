import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Music, Palette, Car, Coffee, 
  Users, Wifi, Shield, Wind, Hotel, 
  Utensils, Crown, Video, Image
} from 'lucide-react';
import ServiceSlider from './ServiceSlider';

const Services = () => {
  const facilities = [
    { icon: <Hotel />, title: '6 AC Rooms', description: 'Comfortable air-conditioned rooms for guests' },
    { icon: <Wifi />, title: '24/7 Electricity & WiFi', description: 'Uninterrupted power supply with generator backup and high-speed WiFi' },
    { icon: <Users />, title: '900 Seating Capacity', description: 'Spacious hall accommodating up to 900 guests' },
    { icon: <Utensils />, title: '350 Dining Capacity', description: 'Dedicated dining area for 350 people' },
    { icon: <Shield />, title: 'First Class Security', description: 'Professional security with CCTV surveillance, welcome girls, and bouncers' }
  ];

  const services = [
    { icon: <Camera />, title: 'Photography Service', description: 'Professional photography and videography' },
    { icon: <Coffee />, title: 'Catering Services', description: 'Exquisite menu options with complimentary water' },
    { icon: <Music />, title: 'DJ Services', description: 'Professional DJ and sound system' },
    { icon: <Palette />, title: 'Decoration', description: 'Customized decoration services' },
    { icon: <Car />, title: 'Extra Parking Space', description: 'Ample parking space with billboard holder' },
    { icon: <Crown />, title: 'Grand Entry', description: 'Special bride & groom entry arrangements' }
  ];

  const serviceImages = [
    {
      title: 'Professional Photography',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc'
    },
    {
      title: 'Elegant Catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033'
    },
    {
      title: 'DJ & Entertainment',
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec'
    },
    {
      title: 'Beautiful Decorations',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive facilities and services for various events:
            <br />
            Weddings • Receptions • Birthday Functions • Puberty Ceremonies
            <br />
            Friend Get-togethers • Corporate Meetings
          </p>
        </motion.div>

        <ServiceSlider images={serviceImages} />

        <div className="mb-16 mt-16">
          <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">Premium Facilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-orange-500 mb-4">{facility.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{facility.title}</h4>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;