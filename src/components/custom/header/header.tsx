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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}


 <motion.a
   href="/"
       className="flex items-center "
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
>
  {/* Logo image */}
  <Image 
    src="/logo.png" 
    alt="HouseySpaces Logo" 
    width={100} 
    height={70} 
    className="scale-125"
  />

</motion.a>


        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#4f46e5" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="/rentals"
          className="hidden md:block px-5 py-2 rounded-2xl bg-sky-600 text-white font-semibold shadow-md hover:bg-slate-700 transition"
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
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
          className="md:hidden bg-white shadow-lg border-t"
        >
          <ul className="flex flex-col p-6 gap-4 text-gray-700 font-medium">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 10, color: "#4f46e5" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
            <li>
              <a
                href="/rentals"
                className="block w-full text-center px-5 py-2 rounded-xl bg-sky-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
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
