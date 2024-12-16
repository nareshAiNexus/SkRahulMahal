import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Crown, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Spacious Venue',
      description: 'Our grand hall can accommodate up to 1000 guests comfortably'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Professional Staff',
      description: 'Dedicated team to ensure your event runs smoothly'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Premium Amenities',
      description: 'State-of-the-art facilities and modern conveniences'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Customization',
      description: 'Flexible arrangements to match your vision'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">About SK Ragul Mahal</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our Legacy
          Since its inauguration by M.C. Sambath in 2018, SK Ragul Mahal has been a cherished venue for countless celebrations. Rooted in tradition and enhanced by modern amenities, we take pride in hosting unforgettable events. Our commitment to excellence and hospitality has earned us the trust of our community. At SK Ragul Mahal, every moment becomes a beautiful memory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Legacy</h3>
          <p className="text-gray-600 leading-relaxed">
          Welcome to SK Ragul Mahal, your perfect destination for memorable celebrations. Established in 2018 and inaugurated by M.C. Sambath, our venue blends tradition with modern elegance. From weddings to grand events, we offer unmatched facilities and impeccable service. Celebrate your special moments with us and create timeless memories!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;