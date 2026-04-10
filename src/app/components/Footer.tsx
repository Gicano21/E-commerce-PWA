import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import images from "../assets/IMG_20260409_110623_999.webp";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TechStore
            </h3>
            <h4 className="text-sm text-gray-400 leading-relaxed">
              Your one-stop shop for premium electronics and tech accessories.
            </h4>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <img src={images} className="h-50 w-auto rounded-[5%] shadow-xl"></img>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}