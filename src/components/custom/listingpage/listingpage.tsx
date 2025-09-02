"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home, Building2, Hotel, Bed } from "lucide-react";

const categories = {
  pg: {
    title: "PG Accommodation",
    description: "Affordable PG with all facilities like WiFi, laundry, and meals.",
    icon: Bed,
    image: "/images/buildings.jpg",
    bg: "bg-blue-50", // pastel blue
  },
  hostel: {
    title: "Hostel",
    description: "Safe and budget-friendly hostel for students and professionals.",
    icon: Hotel,
    image: "/images/livingroom.jpg",
    bg: "bg-green-50", // pastel green
  },
  apartment: {
    title: "Apartment",
    description: "Fully furnished apartments with modern amenities.",
    icon: Building2,
    image: "/images/apartment.jpg",
    bg: "bg-orange-50", // pastel orange
  },
  house: {
    title: "House",
    description: "Spacious houses for rent with garden and parking facilities.",
    icon: Home,
    image: "/images/house-model.jpg",
    bg: "bg-purple-50", // pastel purple
  },
};

const listings = Array.from({ length: 25 }).map((_, i) => {
  const keys = Object.keys(categories);
  const category = categories[keys[i % keys.length] as keyof typeof categories];
  return {
    id: i + 1,
    ...category,
    price: 5000 + (i % 5) * 2000,
  };
});

export default function ListingsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [maxPrice, setMaxPrice] = useState(20000);

  const filteredListings = listings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.title === filter;
    const matchesPrice = item.price <= maxPrice;
    return matchesSearch && matchesFilter && matchesPrice;
  });

  const sections = ["PG Accommodation", "Hostel", "Apartment", "House"];

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-28">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
        🏠 Available Listings
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-5 rounded-2xl shadow-md">
        <input
          type="text"
          placeholder="Search listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Types</option>
          {sections.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2 w-full md:w-1/3">
          <label className="text-sm font-medium">Max Price: ₹{maxPrice}</label>
          <input
            type="range"
            min="5000"
            max="20000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-l-4 border-blue-500 pl-3">
            {section}s
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredListings
              .filter((item) => item.title === section)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 10) * 0.1, duration: 0.6 }}
                >
                  <Card
                    className={`rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-200 ${item.bg}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title} #{item.id}
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                      <p className="text-lg font-bold text-green-600 mb-4">
                        ₹{item.price.toLocaleString("en-IN")}/month
                      </p>
                      <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition">
                        Explore
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
