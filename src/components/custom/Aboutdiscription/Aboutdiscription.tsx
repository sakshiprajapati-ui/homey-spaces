"use client"


import { motion } from "framer-motion";
import { Home, Shield, Users } from "lucide-react";



export default function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-10 py-30 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
        >
          About <span className="text-blue-600">Housey Spaces</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We help you find your dream rental home with ease. From modern apartments
          to cozy family houses, Housey Spaces connects you with trusted listings
          and makes renting stress-free.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            At Housey Spaces, our mission is simple: to provide people with a safe,
            reliable, and convenient way to find rental homes. We believe everyone
            deserves a space that feels like home.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6 text-center"
        >
          <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Comfortable Homes</h3>
          <p className="text-gray-600 text-sm">
            We list homes that meet modern living standards, ensuring you always
            feel comfortable and at ease.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6 text-center"
        >
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Listings</h3>
          <p className="text-gray-600 text-sm">
            Every property is verified to give you peace of mind when searching
            for your next rental.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-2xl p-6 text-center"
        >
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community First</h3>
          <p className="text-gray-600 text-sm">
            We value people above all. Our platform fosters connections between
            renters, owners, and neighborhoods.
          </p>
        </motion.div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to find your new home?
        </motion.h2>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/rentals"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100"
        >
          Browse Rentals
        </motion.a>
      </section>
    </div>
  );
}
