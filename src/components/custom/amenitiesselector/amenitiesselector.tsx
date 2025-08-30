"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  Building as BuildingIcon,
  Users as UsersIcon,
  MapPin as MapPinIcon,
} from "lucide-react";

export type AmenityType = "pg" | "hostel" | "home" | "apartment";

export interface AmenitiesSelectorProps {
  value?: AmenityType | null;
  onChange?: (value: AmenityType | null) => void;
  /** Optional small label above the selector */
  label?: string;
}

const AMENITIES: {
  key: AmenityType;
  title: string;
  points: string[];
  Icon: any;
  bg: string;
  image?: string;
}[] = [
  {
    key: "pg",
    title: "PG / Paying Guest",
    points: ["Furnished rooms", "Shared kitchen", "Affordable"],
    Icon: UsersIcon,
    bg: "bg-gradient-to-r from-sky-100 to-sky-200",
    image: "https://source.unsplash.com/400x300/?room,pg",
  },
  {
    key: "hostel",
    title: "Hostel",
    points: ["Budget-friendly", "Community living", "Meals included"],
    Icon: BuildingIcon,
    bg: "bg-gradient-to-r from-green-100 to-green-200",
    image: "https://source.unsplash.com/400x300/?hostel",
  },
  {
    key: "home",
    title: "Home",
    points: ["Independent house", "Spacious rooms", "Privacy"],
    Icon: HomeIcon,
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
    image: "https://source.unsplash.com/400x300/?house",
  },
  {
    key: "apartment",
    title: "Apartment",
    points: ["Modern amenities", "Security", "Clubhouse access"],
    Icon: MapPinIcon,
    bg: "bg-gradient-to-r from-purple-100 to-purple-200",
    image: "https://source.unsplash.com/400x300/?apartment",
  },
];

export default function AmenitiesSelector({ value = null, onChange, label }: AmenitiesSelectorProps) {
  const [selected, setSelected] = useState<AmenityType | null>(value ?? null);

  function handleSelect(key: AmenityType) {
    const next = selected === key ? null : key;
    setSelected(next);
    onChange?.(next);
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-3 tracking-tight bg-gradient-to-r from-sky-500 via-blue-500 to-slate-500 bg-clip-text text-transparent animate-pulse">
        Amenities
      </h2>
      <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto">
        Explore the different types of accommodations we provide, each designed to
        match your lifestyle — from budget-friendly hostels to spacious homes and
        modern apartments.
      </p>

      {label && <div className="mb-4 text-lg font-semibold text-slate-700 text-center">{label}</div>}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
      >
        {AMENITIES.map(({ key, title, points, Icon, bg, image }) => {
          const isActive = selected === key;

          return (
            <motion.div
              key={key}
              layout
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.04 }}
              animate={{ scale: isActive ? 1.07 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative rounded-2xl overflow-hidden border shadow-lg cursor-pointer group ${bg} transition-all ${
                isActive ? "ring-4 ring-sky-400 animate-pulse" : ""
              }`}
              onClick={() => handleSelect(key)}
            >
              {/* background image */}
              {image && (
                <div className="absolute inset-0">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition duration-300"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-40 transition duration-300"></div>
                </div>
              )}

              <motion.div
                layout
                className={`relative flex flex-col p-5 h-full transition-colors backdrop-blur-sm ${
                  isActive ? "bg-white/85" : "bg-white/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center rounded-xl p-3 h-14 w-14 transition-colors shadow-md ${
                      isActive ? "bg-sky-300" : "bg-slate-100"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <div className="flex-1 text-left">
                    <div className={`text-lg font-bold tracking-wide ${isActive ? "text-sky-900" : "text-slate-800"}`}>{title}</div>
                  </div>

                  {/* selection indicator */}
                  <motion.span
                    layout
                    initial={false}
                    animate={{ scale: isActive ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-sky-600 text-white text-sm font-semibold shadow-md"
                  >
                    ✓
                  </motion.span>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 space-y-2 text-lg font-semibold text-slate-800 pl-4"
                    >
                      {points.map((p, i) => (
                        <li
                          key={i}
                          className="text-xl leading-snug tracking-wide text-slate-700 hover:text-sky-700 transition font-bold"
                        >
                        ⁍ 
                          {p}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-8 text-lg text-slate-700 text-center">
        Selected: <span className="font-semibold">{selected ?? "None"}</span>
      </div>
    </div>
  );
}
