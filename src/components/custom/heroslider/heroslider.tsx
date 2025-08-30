"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function HeroSlider() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const slides = [
    {
      id: 1,
      img: "/images/slide1.jpg",
      title: "Find Your Dream Space",
      desc: "Browse from thousands of verified rentals."
    },
    {
      id: 2,
      img: "/images/slide2.jpg",
      title: "Modern Living Made Easy",
      desc: "Book your next stay in just a few clicks."
    },
    {
      id: 3,
      img: "/images/slide3.jpg",
      title: "Trusted by Thousands",
      desc: "We connect people with the right spaces."
    }
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 pt-30">
      <Carousel
        plugins={[plugin.current]}
        className="w-full overflow-hidden rounded-2xl shadow-lg"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[70vh] flex items-center justify-center">
                {/* Background image */}
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text + Search */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 text-center text-white px-6 flex flex-col items-center gap-6"
                >
                  <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    {slide.desc}
                  </p>

                  {/* Search Bar */}
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg flex items-center w-full max-w-xl overflow-hidden mt-6">
                    <input
                      type="text"
                      placeholder="Search rentals, locations..."
                      className="flex-1 px-4 py-3 text-gray-700 focus:outline-none bg-transparent"
                    />
                    <button className="bg-indigo-600 text-white px-5 py-3 flex items-center gap-2 font-medium hover:bg-indigo-700 transition">
                      <Search size={18} />
                      Search
                    </button>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
