// src/app/page.tsx
import HeroSlider from "@/components/custom/heroslider/heroslider";
import ApartmentsSection from "@/components/custom/apartmentsection/ApartmentsSection";
import AmenitiesSelector from "@/components/custom/amenitiesselector/amenitiesselector";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ✅ Hero Slider */}
      <HeroSlider />
      <ApartmentsSection />
      <AmenitiesSelector/>
      

      {/* ✅ Example content */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to HouseySpaces
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find your dream rental home with ease. Browse through thousands of
          verified properties and book instantly.
        </p>
      </section>
    </main>
  );
}

