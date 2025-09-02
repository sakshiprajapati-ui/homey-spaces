"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, Building2, Hotel, House } from "lucide-react";

// Shimmer Background (same as Header)
function ShimmerBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-cyan-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] animate-[shimmer_6s_infinite]" />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

const categories = [
  {
    type: "PG",
    icon: <Home className="w-10 h-10 text-cyan-400" />,
    amenities: ["Shared Rooms", "Wi-Fi", "Meals Included", "Housekeeping", "Study Area"],
  },
  {
    type: "Hostel",
    icon: <Building2 className="w-10 h-10 text-cyan-400" />,
    amenities: ["Dorm Rooms", "Common Kitchen", "Wi-Fi", "Laundry Service", "Recreational Area"],
  },
  {
    type: "Apartment",
    icon: <Hotel className="w-10 h-10 text-cyan-400" />,
    amenities: ["Private Rooms", "Kitchen", "Parking", "Air Conditioning", "24/7 Security"],
  },
  {
    type: "House",
    icon: <House className="w-10 h-10 text-cyan-400" />,
    amenities: ["Entire Property", "Garden", "Garage", "Furnished Rooms", "Pet Friendly"],
  },
];

export default function AmenitiesPage() {
  return (
    <div className="relative min-h-screen px-6 py-16 text-white">
      <ShimmerBG />

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Amenities for PG / Hostel / Apartment / House
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Discover the key amenities available across different accommodation types.
        </motion.p>

        {/* Amenity Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 transition">
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  {cat.icon}
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                    {cat.type}
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    {cat.amenities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {item}
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
