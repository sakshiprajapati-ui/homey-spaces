"use client"

import ApartmentCard from "@/components/custom/apartmentcard/Apartmentcard";


type Apartment = {
  image: string;
  title: string;
  location: string;
  price: number;
};

export default function ApartmentsSection() {
  const apartments: Apartment[] = [
    {
      image: "/images/apartment.jpg",
      title: "Modern 2BHK Apartment",
      location: "Banglore,KA",
      price: 25000,
    },
    {
      image: "/images/buildings.jpg",
      title: "Luxury Studio Flat",
      location: "Lucknow,UP",
      price: 8500,
    },
    {
      image: "/images/house-model.jpg",
      title: "Cozy Family Home",
      location: "Delhi,UP",
      price: 6700,
    },
    {
      image: "/images/livingroom.jpg",
      title: "Penthouse Suite",
      location: "Mumbai,MP",
      price: 56000,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-sky-500 via-blue-500 to-slate-500 bg-clip-text text-transparent animate-pulse">
        Featured Apartments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {apartments.map((apt, idx) => (
          <ApartmentCard key={idx} {...apt} />
        ))}
      </div>
    </section>
  );
}
