import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Jonas Auto & Truck" className="h-16 md:h-20 w-auto brightness-0 invert" />
            <p className="text-sm text-gray-400">
              Professional automotive maintenance and repair services. Quality workmanship, certified technicians, and competitive pricing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-red transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-red transition-colors text-sm md:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-red transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary-red transition-colors text-sm md:text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-red transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-heading font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a href="tel:403-123-4567" className="flex items-start gap-2 md:gap-3 hover:text-primary-red transition-colors">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                  <span>(403) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@jonasauto.com" className="flex items-start gap-2 md:gap-3 hover:text-primary-red transition-colors">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                  <span>info@jonasauto.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Clock className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div className="text-gray-500">Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-heading font-bold text-base md:text-lg mb-3 md:mb-4">Visit Us</h3>
            <div className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
              <address className="not-italic">
                5235 28 Ave SE<br />
                Calgary, AB T2B 3W3<br />
                Canada
              </address>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center text-xs md:text-sm text-gray-500">
          <p>&copy; {currentYear} Jonas Auto & Truck Maintenance & Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
