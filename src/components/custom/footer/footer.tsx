import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Page content wrapper */}
      <div className="pb-60"> {/* extra bottom padding so footer doesn't overlap */}
        {/* Your main page content goes here */}
      </div>

      {/* Sticky Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16  left-0 right-0 w-full z-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Housey Spaces</h2>
            <p className="mt-3 text-sm">
              Find your perfect rental home with ease. Modern spaces, trusted listings,
              and a seamless experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/rentals" className="hover:text-white">Browse Rentals</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-center sm:justify-start items-center gap-2">
                <Mail className="w-4 h-4" />
                support@houseyspaces.com
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Main Street, New York, NY
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Housey Spaces. All rights reserved.
        </div>
      </footer>
    </>
  );
}
