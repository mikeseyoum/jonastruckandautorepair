import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const headerBg = isScrolled
    ? "bg-white/95 backdrop-blur-lg shadow-md"
    : isHome
    ? "bg-transparent"
    : "bg-white shadow-md";

  const textColor = isScrolled || !isHome ? "text-gray-900" : "text-white";
  const logoFilter = isScrolled || !isHome ? "" : "brightness-0 invert";

  return (
    <>
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-dark-900 text-gray-300 py-2">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:555-123-4567" className="flex items-center gap-2 hover:text-primary-red transition-colors">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
            <a href="mailto:info@jonasauto.com" className="flex items-center gap-2 hover:text-primary-red transition-colors">
              <Mail className="h-4 w-4" />
              info@jonasauto.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Mon-Fri: 8AM-6PM | Sat: 9AM-4PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${isHome && !isScrolled ? 'lg:top-[36px]' : ''}`}>
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Jonas Auto & Truck" 
                className={`h-12 w-auto transition-all duration-300 ${logoFilter}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${textColor} hover:text-primary-red transition-colors font-medium ${
                    location.pathname === link.path ? "text-primary-red" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${textColor} p-2`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
            <div className="p-6 space-y-6 mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl font-medium ${
                    location.pathname === link.path ? "text-primary-red" : "text-gray-900"
                  } hover:text-primary-red transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t space-y-4">
                <a href="tel:555-123-4567" className="flex items-center gap-3 text-gray-600 hover:text-primary-red">
                  <Phone className="h-5 w-5" />
                  (555) 123-4567
                </a>
                <a href="mailto:info@jonasauto.com" className="flex items-center gap-3 text-gray-600 hover:text-primary-red">
                  <Mail className="h-5 w-5" />
                  info@jonasauto.com
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <div className="text-sm">
                    <div>Mon-Fri: 8AM-6PM</div>
                    <div>Sat: 9AM-4PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
