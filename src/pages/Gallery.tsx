import ScrollReveal from "@/components/ScrollReveal";
import { Wrench, Shield, Gauge, Droplet, Battery, CircleDot, Thermometer, Zap, Settings, Truck, Award, Users, Clock, Check } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import servicesImage from "@/assets/hero-services.jpg";
import aboutImage from "@/assets/hero-about.jpg";
import contactImage from "@/assets/hero-contact.jpg";
import ctaImage from "@/assets/cta-background.jpg";

const Gallery = () => {
  const facilityImages = [
    {
      image: heroImage,
      title: "Modern Workshop",
      description: "State-of-the-art facility with advanced diagnostic tools and equipment",
      category: "Facility",
      icon: Settings,
    },
    {
      image: servicesImage,
      title: "Service Bays",
      description: "Multiple service bays equipped with professional-grade lifts and tools",
      category: "Facility",
      icon: Wrench,
    },
    {
      image: aboutImage,
      title: "Professional Team",
      description: "Our dedicated staff of ASE certified technicians ready to help",
      category: "Team",
      icon: Users,
    },
    {
      image: contactImage,
      title: "Clean Facilities",
      description: "Welcoming and professional environment for all our customers",
      category: "Facility",
      icon: Award,
    },
    {
      image: ctaImage,
      title: "Quality Results",
      description: "Every vehicle serviced to perfection with attention to detail",
      category: "Work",
      icon: Check,
    },
    {
      image: heroImage,
      title: "Advanced Equipment",
      description: "Latest technology and diagnostic equipment for all types of repairs",
      category: "Equipment",
      icon: Gauge,
    },
  ];

  const serviceCategories = [
    { icon: Wrench, title: "Oil Changes", description: "Quick and efficient oil change services" },
    { icon: Shield, title: "Brake Services", description: "Complete brake system maintenance" },
    { icon: Gauge, title: "Engine Diagnostics", description: "Advanced computer diagnostics" },
    { icon: Droplet, title: "Transmission", description: "Transmission service and repair" },
    { icon: Battery, title: "Electrical", description: "Electrical system repairs" },
    { icon: CircleDot, title: "Tire Services", description: "Tire rotation and replacement" },
    { icon: Thermometer, title: "AC & Heating", description: "Climate control services" },
    { icon: Zap, title: "Exhaust Systems", description: "Exhaust repair and replacement" },
    { icon: Settings, title: "Suspension", description: "Suspension and steering work" },
    { icon: Truck, title: "Fleet Service", description: "Commercial vehicle maintenance" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto container-padding text-center">
          <div>
            <h1 className="heading-display text-white mb-4 md:mb-6 text-balance">
              Our Gallery
            </h1>
            <p className="text-fluid text-gray-200 max-w-3xl mx-auto text-balance">
              Explore our facilities, meet our team, and see the quality of our work
            </p>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                Our Facility
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                Take a virtual tour of our modern workshop and professional facilities
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilityImages.map((item, i) => (
              <ScrollReveal key={i} delay={((i % 3) + 1) * 100 as 100 | 200 | 300 | 400}>
                <div className="group card-modern overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <item.icon className="h-4 w-4 text-primary-red" />
                        <span className="text-xs font-semibold text-gray-700">{item.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="heading-clean text-lg md:text-xl text-gray-900 mb-2 md:mb-3 group-hover:text-primary-red transition-colors duration-300 text-balance">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-balance">
                      {item.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                      <div className="w-8 md:w-10 h-0.5 bg-gradient-to-r from-primary-red-light to-primary-red rounded-full" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                Our Services
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                Comprehensive automotive services for all makes and models
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {serviceCategories.map((service, i) => (
              <ScrollReveal key={i} delay={((i % 5) + 1) * 100 as 100 | 200 | 300 | 400}>
                <div className="group text-center p-4 md:p-6 card-modern transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-red-50 to-primary-red-100 rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-subtle group-hover:shadow-red transition-all duration-500 group-hover:scale-105">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-red group-hover:text-white transition-all duration-500" />
                  </div>
                  <h3 className="heading-clean text-sm md:text-base text-gray-900 mb-2 group-hover:text-primary-red transition-colors duration-300 text-balance">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-balance">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Award, title: "Certified Technicians", description: "ASE certified mechanics with years of experience" },
              { icon: Clock, title: "Fast Service", description: "Quick turnaround without compromising quality" },
              { icon: Shield, title: "Quality Parts", description: "OEM and aftermarket parts from trusted suppliers" },
              { icon: Check, title: "Satisfaction Guaranteed", description: "100% satisfaction guarantee on all services" },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 100 as 100 | 200 | 300 | 400}>
                <div className="group card-modern p-6 md:p-8 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
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
    </div>
  );
};

export default Gallery;
