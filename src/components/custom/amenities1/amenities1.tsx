'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Wifi, Utensils, Dumbbell, Car, Tv, Home, Building2, Hotel, House } from "lucide-react";

const categories = [
  {
    type: "PG",
    icon: <Home className="w-10 h-10 text-indigo-600" />,
    amenities: ["Shared Rooms", "Wi-Fi", "Meals Included", "Housekeeping", "Study Area"],
  },
  {
    type: "Hostel",
    icon: <Building2 className="w-10 h-10 text-green-600" />,
    amenities: ["Dorm Rooms", "Common Kitchen", "Wi-Fi", "Laundry Service", "Recreational Area"],
  },
  {
    type: "Apartment",
    icon: <Hotel className="w-10 h-10 text-orange-600" />,
    amenities: ["Private Rooms", "Kitchen", "Parking", "Air Conditioning", "24/7 Security"],
  },
  {
    type: "House",
    icon: <House className="w-10 h-10 text-purple-600" />,
    amenities: ["Entire Property", "Garden", "Garage", "Furnished Rooms", "Pet Friendly"],
  },
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-800"
        >
          Amenities for PG / Hostel / Apartment / House
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Discover the key amenities available across different accommodation types.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  {cat.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{cat.type}</h3>
                  <ul className="text-gray-600 space-y-2">
                    {cat.amenities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
