"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Home, Sparkles, Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Aarav Sharma",
      role: "Founder & CEO",
      img: "/images/aarav.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Priya Mehta",
      role: "Operations Head",
      img: "/images/priya.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Rahul Iyer",
      role: "Tech Lead",
      img: "/images/rahul.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sneha Kapoor",
      role: "Community Manager",
      img: "/images/sneha.jpg",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-5xl">
            About <span className="text-sky-500">Housey Spaces</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            We help you find <span className="font-semibold">PGs</span>,{" "}
            <span className="font-semibold">Apartments</span>, and{" "}
            <span className="font-semibold">Hostels</span> that suit your
            lifestyle, budget, and comfort.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-slate-800">
              Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At Housey Spaces, our goal is simple — to make house-hunting
              stress-free. We connect tenants with verified rental spaces and
              provide landlords a platform to reach genuine tenants. Whether
              you’re a student, a working professional, or a family, we’ve got
              you covered.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md hover:opacity-90">
              Explore Listings
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/images/logo.png"
              alt="About Housey Spaces"
              className="mx-auto w-full max-w-md"
            />
            <Sparkles className="absolute right-8 top-8 h-8 w-8 text-yellow-400 animate-pulse" />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-semibold text-slate-800 sm:text-3xl">
            Why Choose Us?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div whileHover={{ scale: 1.05 }} className="transition">
              <Card className="shadow-md">
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <Users className="h-10 w-10 text-blue-600" />
                  <h3 className="font-medium text-slate-800">Community First</h3>
                  <p className="text-sm text-slate-600">
                    We connect like-minded people, making your living
                    experience more social and comfortable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="transition">
              <Card className="shadow-md">
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <Building2 className="h-10 w-10 text-blue-600" />
                  <h3 className="font-medium text-slate-800">Verified Listings</h3>
                  <p className="text-sm text-slate-600">
                    Say goodbye to fake listings. We ensure every property is
                    checked and verified.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="transition">
              <Card className="shadow-md">
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <Home className="h-10 w-10 text-blue-600" />
                  <h3 className="font-medium text-slate-800">Flexible Options</h3>
                  <p className="text-sm text-slate-600">
                    From short stays to long-term rentals, we provide housing
                    solutions that match your needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-semibold text-slate-800 sm:text-3xl">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-medium text-slate-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500">{member.role}</p>
                    <div className="mt-3 flex justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="text-slate-400 hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.twitter}
                        className="text-slate-400 hover:text-sky-500"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
