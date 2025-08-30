import Image from "next/image";
import { motion } from "framer-motion";

type ApartmentCardProps = {
  image: string;
  title: string;
  location: string;
  price: number;
};

export default function ApartmentCard({ image, title, location, price }: ApartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
    >
      <div className="relative w-full h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sky-600 font-bold mt-2">₹:{price} / month</p>
      </div>
    </motion.div>
  );
}
