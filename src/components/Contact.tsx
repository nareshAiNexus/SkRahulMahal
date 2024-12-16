import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with us for any inquiries or to schedule a visit.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center text-orange-500 mb-4">
                <MapPin className="w-6 h-6 mr-2" />
               <a href="https://maps.app.goo.gl/AQKZS884n8P6wyEbA" ><h4 className="text-xl font-semibold">Location</h4></a>
              </div>
              <a href="https://maps.app.goo.gl/AQKZS884n8P6wyEbA" className="text-gray-600">SK Ragul Mahal , Arasur Main Road, Pudupettai (po), panruti (tlk) Cuddalore-607108</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center text-orange-500 mb-4">
                <Phone className="w-6 h-6 mr-2" />
                <h4 className="text-xl font-semibold">Phone</h4>
              </div>
              <p className="text-gray-600">
                Owner: +91 9688399398<br />
                Manager: +91 9244413422
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center text-orange-500 mb-4">
                <Mail className="w-6 h-6 mr-2" />
                <h4 className="text-xl font-semibold">Email</h4>
              </div>
              <a href="skrahulmahal@gmail.com"><p className="text-gray-600">skragulmahal@gmail.com</p></a>

            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center text-orange-500 mb-4">
                <Clock className="w-6 h-6 mr-2" />
                <h4 className="text-xl font-semibold">Business Hours</h4>
              </div>
              <p className="text-gray-600">Monday - Sunday: 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;