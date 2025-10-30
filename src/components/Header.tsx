import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Simple scroll handler
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  // Add scroll listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Simple header styling
  const headerBg = isScrolled
    ? "glass bg-white/95 backdrop-blur-md shadow-glass"
    : isHome
    ? "bg-transparent backdrop-blur-none"
    : "glass bg-white/95 backdrop-blur-md shadow-glass";

  const textColor = isScrolled || !isHome ? "text-gray-900" : "text-white";
  const logoFilter = isScrolled || !isHome ? "" : "brightness-0 invert";

  return (
    <>
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-dark-900 text-gray-300 py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex justify-between items-center text-xs md:text-sm">
          <div className="flex gap-4 md:gap-6">
            <a href="tel:403-123-4567" className="flex items-center gap-2 hover:text-primary-red transition-colors">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              (403) 470-4897
            </a>
            <a href="mailto:info@jonastruckandautorepair.com" className="flex items-center gap-2 hover:text-primary-red transition-colors">
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              info@jonastruckandautorepair.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden xl:inline">Mon-Sun: 7:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${isHome && !isScrolled ? 'lg:top-[36px] top-0' : 'top-0'}`}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Jonas Auto & Truck" 
                className={`h-16 md:h-20 w-auto ${logoFilter}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${textColor} hover:text-primary-red transition-colors font-medium text-sm xl:text-base ${
                    location.pathname === link.path ? "text-primary-red" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" asChild className="hidden xl:inline-flex">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 relative z-50 ${isMobileMenuOpen ? 'text-gray-900' : textColor}`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            
            {/* Menu Panel */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <img 
                  src={logo} 
                  alt="Jonas Auto & Truck" 
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-5">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        location.pathname === link.path 
                          ? "bg-primary-red text-white shadow-sm" 
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* CTA Button */}
              <div className="px-5 pb-5">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="px-5 pb-5 mt-auto">
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</h3>
                  <div className="space-y-2">
                    <a href="tel:403-123-4567" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-red transition-colors">
                      <Phone className="h-4 w-4 text-primary-red" />
                      <span>(403) 123-4567</span>
                    </a>
                    <a href="mailto:info@jonastruckandautorepair.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-red transition-colors">
                      <Mail className="h-4 w-4 text-primary-red" />
                      <span>info@jonastruckandautorepair.com</span>
                    </a>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-primary-red mt-0.5" />
                      <div>
                        <div>Mon-Fri: 8AM-6PM</div>
                        <div>Sat: 9AM-4PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Header;
