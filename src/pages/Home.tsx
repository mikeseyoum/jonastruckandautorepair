import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Wrench, Shield, Clock, Award, Check } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import ctaBackground from "@/assets/cta-background.jpg";

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "Oil Change & Maintenance",
      description: "Keep your vehicle running smoothly with our comprehensive maintenance services including oil changes, filter replacements, and fluid checks.",
    },
    {
      icon: Shield,
      title: "Brake Services",
      description: "Expert brake inspection, repair, and replacement services to ensure your safety on the road with quality parts and workmanship.",
    },
    {
      icon: Clock,
      title: "Engine Diagnostics",
      description: "Advanced diagnostic tools and experienced technicians to quickly identify and resolve any engine issues or warning lights.",
    },
  ];

  const features = [
    { icon: Shield, title: "Certified Technicians", description: "ASE certified mechanics with years of experience" },
    { icon: Award, title: "Quality Parts", description: "OEM and aftermarket parts from trusted suppliers" },
    { icon: Clock, title: "Fast Service", description: "Quick turnaround without compromising quality" },
    { icon: Check, title: "Satisfaction Guaranteed", description: "100% satisfaction guarantee on all services" },
  ];

  const testimonials = [
    {
      quote: "Best auto service I've ever experienced. The team is professional, honest, and their work is top-notch. They diagnosed my engine issue quickly and fixed it at a fair price.",
      author: "Michael Rodriguez",
      service: "Engine Repair",
      rating: 5,
    },
    {
      quote: "I've been bringing my truck here for years. They always take great care of my vehicle and explain everything clearly. Highly recommend for both personal and commercial vehicles.",
      author: "Sarah Johnson",
      service: "Regular Maintenance",
      rating: 5,
    },
    {
      quote: "Exceptional service and attention to detail. They found issues other shops missed and fixed them properly. My car runs better than ever. Will definitely be back!",
      author: "David Chen",
      service: "Brake Service",
      rating: 5,
    },
  ];

  const heroFeatures = [
    "Certified Technicians",
    "Quality Service",
    "Competitive Pricing",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading uppercase tracking-tighter mb-6">
              <span className="text-white block mb-2">Professional</span>
              <span className="bg-gradient-to-r from-primary-red-light to-primary-red bg-clip-text text-transparent">
                Auto & Truck Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Expert maintenance and repair services you can trust. Quality workmanship, certified technicians, and competitive pricing.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule Service</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-white">
              {heroFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary-red" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase tracking-tighter text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive care for all makes and models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase tracking-tighter text-gray-900 mb-4">
              Why Choose Jonas Auto & Truck?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference of professional automotive care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-red/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary-red" />
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase tracking-tighter text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase tracking-tighter text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Schedule your appointment today and experience professional automotive care
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Online</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <a href="tel:555-123-4567">Call (555) 123-4567</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
