"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Shimmer gradient background
function ShimmerBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-indigo-900 to-cyan-800 opacity-95" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%)]" />
      {/* Shimmer sweep */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)] animate-[shimmer_6s_infinite]" />
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rentals", href: "/rentals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      <ShimmerBG />
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="HouseySpaces Logo"
            width={110}
            height={80}
            className="drop-shadow-[0_0_14px_rgba(56,189,248,0.9)] hover:scale-110 transition-transform"
          />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="text-gray-200 hover:text-cyan-300 transition"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="/rentals"
          className="hidden md:block px-5 py-2 rounded-2xl bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-400 transition"
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/20 text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gradient-to-b from-indigo-900 to-sky-900 text-white shadow-lg border-t border-white/20"
        >
          <ul className="flex flex-col p-6 gap-4 font-medium">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href={link.href} className="hover:text-cyan-300 transition">
                  {link.name}
                </a>
              </motion.li>
            ))}
            <li>
              <a
                href="/rentals"
                className="block w-full text-center px-5 py-2 rounded-xl bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-400 transition"
              >
                Book Now
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
