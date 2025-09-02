"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
      {/* Shimmer Gradient BG */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-900 via-indigo-900 to-cyan-800">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] animate-[shimmer_6s_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="HouseySpaces Logo"
            width={100}
            height={70}
            className="scale-125 drop-shadow-[0_0_10px_#22d3ee]" // cyan glow
          />
          <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            HouseySpaces
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-cyan-300 transition"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="/rentals"
          className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
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
          className="md:hidden bg-gradient-to-b from-sky-900 via-indigo-900 to-cyan-800 border-t border-white/10"
        >
          <ul className="flex flex-col p-6 gap-4 font-medium text-white">
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
                className="block w-full text-center px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Book Now
              </a>
            </li>
          </ul>
        </motion.nav>
      )}

      {/* Shimmer Animation Keyframes */}
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
    </header>
  );
}
