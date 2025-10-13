import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-extrabold font-heading text-gradient opacity-20">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="heading-clean text-4xl md:text-5xl text-gray-900 mb-6 text-balance">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500">
            The URL <code className="bg-gray-100 px-2 py-1 rounded text-sm">{location.pathname}</code> could not be found.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="card-modern p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Search className="h-6 w-6 text-primary-red mr-2" />
            <h3 className="heading-clean text-lg text-gray-900 text-balance">
              Popular Pages
            </h3>
          </div>
          <div className="space-y-2">
            <Link to="/services" className="block text-primary-red hover:text-primary-red-dark transition-colors">
              Our Services
            </Link>
            <Link to="/about" className="block text-primary-red hover:text-primary-red-dark transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="block text-primary-red hover:text-primary-red-dark transition-colors">
              Contact Us
            </Link>
            <Link to="/gallery" className="block text-primary-red hover:text-primary-red-dark transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
