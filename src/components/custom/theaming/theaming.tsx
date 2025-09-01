'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Hotel, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const variants = [
  {
    title: "PG Living",
    description: "Affordable shared accommodations with meals and utilities included.",
    icon: <Home className="w-10 h-10 text-indigo-600" />,
    color: "from-indigo-100 to-indigo-50",
    category: "Budget",
  },
  {
    title: "Hostel Rooms",
    description: "Budget-friendly options for students and working professionals.",
    icon: <Building2 className="w-10 h-10 text-green-600" />,
    color: "from-green-100 to-green-50",
    category: "Economy",
  },
  {
    title: "Apartments",
    description: "Spacious private apartments with full independence and amenities.",
    icon: <Hotel className="w-10 h-10 text-orange-600" />,
    color: "from-orange-100 to-orange-50",
    category: "Premium",
  },
];

export default function ThemingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredVariants = variants.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || v.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-white text-gray-900"} min-h-screen px-6 py-12 transition-colors`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Theming for PG / Hostel / Apartment Variants
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300"
        >
          Explore different accommodation styles with unique themes, facilities, and experiences.
        </motion.p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <Input
            placeholder="Search variants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/3"
          />

          <Select onValueChange={setFilter} defaultValue="all">
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Budget">Budget</SelectItem>
              <SelectItem value="Economy">Economy</SelectItem>
              <SelectItem value="Premium">Premium</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVariants.map((variant, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className={`rounded-2xl shadow-lg bg-gradient-to-b ${variant.color} hover:shadow-2xl transition dark:bg-gray-800`}>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  {variant.icon}
                  <h3 className="text-xl font-semibold">{variant.title}</h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">{variant.description}</p>
                  <Button className="mt-4">Explore</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
