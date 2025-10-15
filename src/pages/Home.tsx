import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";
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
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl sm:mx-auto container-padding section-padding">
          <div className="max-w-5xl lg:max-w-4xl lg:ml-0 lg:mr-auto">
            <h1 className="text-fluid-xl font-display uppercase tracking-tight mb-6 md:mb-8 text-clean-shadow">
              <span className="text-white block mb-2 md:mb-3 heading-display">Professional</span>
              <span className="text-gradient-animated heading-display">
                Auto & Truck Service
              </span>
            </h1>
            <p className="text-fluid text-gray-200 mb-8 md:mb-10 leading-relaxed text-balance max-w-3xl">
              Expert maintenance and repair services you can trust. Quality workmanship, certified technicians, and competitive pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8">
              <Button variant="hero" size="lg" asChild className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                <Link to="/contact">Schedule Service</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6 text-white">
              {heroFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary-red flex-shrink-0" />
                  <span className="font-semibold text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                Our Core Services
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                Comprehensive automotive care for all makes and models
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 100 as 100 | 200 | 300 | 400}>
                <ServiceCard {...service} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                Why Choose Jonas Auto & Truck?
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                Experience the difference of professional automotive care
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 100 as 100 | 200 | 300 | 400}>
                <div className="group card-modern p-6 md:p-8 lg:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-red-50 to-primary-red-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-subtle group-hover:shadow-red transition-all duration-500 group-hover:scale-105">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-red group-hover:text-white transition-all duration-500" />
                  </div>
                  <h3 className="heading-clean text-base md:text-lg text-gray-900 mb-3 md:mb-4 group-hover:text-primary-red transition-colors duration-300 text-balance">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-balance">
                    {feature.description}
                  </p>
                  <div className="mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                    <div className="w-8 md:w-10 h-0.5 bg-gradient-to-r from-primary-red-light to-primary-red rounded-full" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                What Our Customers Say
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                Real experiences from our valued customers
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 100 as 100 | 200 | 300 | 400}>
                <TestimonialCard {...testimonial} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <ScrollReveal direction="scale">
          <div className="relative z-10 max-w-screen-xl mx-auto container-padding text-center">
            <div>
              <h2 className="heading-hero text-white mb-6 md:mb-8 text-balance text-clean-shadow">
                Ready to Get Started?
              </h2>
              <p className="text-fluid text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto text-balance">
                Schedule your appointment today and experience professional automotive care
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Button variant="hero" size="lg" asChild className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                  <Link to="/contact">Book Online</Link>
                </Button>
                <Button variant="outline-light" size="lg" asChild className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                  <a href="tel:403-123-4567">Call (403) 123-4567</a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
