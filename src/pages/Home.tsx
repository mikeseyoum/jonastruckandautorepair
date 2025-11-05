// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { businessStructuredData } from "@/lib/structuredData";
import { Wrench, Shield, Clock, Award, Check } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import ctaBackground from "@/assets/banner.jpg";

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "Oil Change & Maintenance",
      description: "Keep your vehicle running smoothly with oil changes, filter replacements, and fluid checks.",
    },
    {
      icon: Shield,
      title: "Brake Services",
      description: "Expert brake inspection, repair, and replacement using quality parts for maximum safety.",
    },
    {
      icon: Clock,
      title: "Engine Diagnostics",
      description: "Fast, accurate diagnostics with advanced tools to resolve engine issues efficiently.",
    },
  ];

  const features = [
    { icon: Shield, title: "Certified Technicians", description: "ASE-certified mechanics with years of experience" },
    { icon: Award, title: "Quality Parts", description: "OEM and trusted aftermarket components" },
    { icon: Clock, title: "Fast Service", description: "Quick turnaround without sacrificing quality" },
    { icon: Check, title: "Satisfaction Guaranteed", description: "100% satisfaction on all repairs" },
  ];

  const testimonials = [
    {
      quote: "Best auto service I've ever had. Professional, honest, and fixed my engine issue quickly at a fair price.",
      author: "Michael Rodriguez",
      service: "Engine Repair",
      rating: 5,
    },
    {
      quote: "I've trusted them with my truck for years. Clear communication and excellent care every time.",
      author: "Sarah Johnson",
      service: "Regular Maintenance",
      rating: 5,
    },
    {
      quote: "They caught issues other shops missed. My car runs like new. Highly recommend!",
      author: "David Chen",
      service: "Brake Service",
      rating: 5,
    },
  ];

  const heroFeatures = ["Certified Technicians", "Quality Service", "Competitive Pricing"];

  return (
    <>
      <SEO
        title="Professional Truck & Auto Service | Jonas Auto Calgary"
        description="Expert automotive repair and maintenance in Calgary. Certified technicians, quality parts, and trusted service for over 20 years."
        keywords="auto repair Calgary, truck service, brake repair, oil change, engine diagnostics, certified mechanics"
        canonicalUrl="/"
        structuredData={businessStructuredData}
      />

     {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImage})` }}
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* CONTENT – left-aligned on every breakpoint */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
    <div className="max-w-2xl">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        <span className="block">Professional</span>
        <span className="text-red-500">Auto & Truck Service</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 mb-8">
        Expert maintenance and repair you can trust. Certified technicians,
        quality workmanship, and fair pricing.
      </p>

      {/* Refactored Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {[
          {
            to: "/contact",
            text: "Schedule Service",
            className: "bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg",
            variant: undefined,
          },
          {
            to: "/services",
            text: "View Services",
            className: "border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg",
            variant: "outline",
          },
        ].map(({ to, text, className, variant }, idx) => (
          <Button
            asChild
            key={to}
            size="lg"
            {...(variant ? { variant: variant as any } : {})}
            className={className}
          >
            <Link to={to}>{text}</Link>
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-3 text-white">
        {heroFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-base md:text-lg">
            <Check className="h-5 w-5 text-red-500" />
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive care for all vehicle makes and models
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <ServiceCard {...service} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Jonas Auto & Truck?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience professional service built on trust and expertise
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 bg-red-50 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real feedback from drivers who trust us
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <TestimonialCard {...testimonial} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <ScrollReveal>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Book your appointment today and experience the Jonas Auto difference
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Book Online</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-black px-8 py-6 text-lg">
                <a href="tel:403-470-4897">Call (403) 470-4897</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Home;