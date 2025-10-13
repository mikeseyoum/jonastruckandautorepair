import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Wrench, Shield, Gauge, Droplet, Battery, CircleDot, Thermometer, Zap, Settings, Truck } from "lucide-react";
import heroImage from "@/assets/hero-services.jpg";

const Services = () => {
  const allServices = [
    {
      icon: Wrench,
      title: "Oil Change & Maintenance",
      description: "Regular oil changes, filter replacements, and fluid checks to keep your vehicle running smoothly and efficiently.",
    },
    {
      icon: Shield,
      title: "Brake Services",
      description: "Complete brake system inspection, repair, and replacement including pads, rotors, calipers, and brake fluid service.",
    },
    {
      icon: Gauge,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify engine problems, check engine lights, and performance issues.",
    },
    {
      icon: Droplet,
      title: "Transmission Service",
      description: "Transmission fluid changes, repairs, and complete transmission replacement services for all vehicle types.",
    },
    {
      icon: Battery,
      title: "Electrical Systems",
      description: "Battery testing and replacement, alternator service, starter repair, and complete electrical system diagnostics.",
    },
    {
      icon: CircleDot,
      title: "Tire Services",
      description: "Tire rotation, balancing, alignment, repair, and replacement with quality tires from leading manufacturers.",
    },
    {
      icon: Thermometer,
      title: "Cooling System",
      description: "Radiator service, coolant flush, thermostat replacement, and complete cooling system maintenance and repair.",
    },
    {
      icon: Zap,
      title: "Performance Upgrades",
      description: "Engine tuning, exhaust systems, air intake modifications, and performance enhancement services.",
    },
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Comprehensive vehicle inspections, scheduled maintenance packages, and preventive care to avoid costly repairs.",
    },
    {
      icon: Truck,
      title: "Truck & Fleet Service",
      description: "Specialized maintenance and repair services for trucks, commercial vehicles, and fleet management support.",
    },
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
              Our Services
            </h1>
            <p className="text-fluid text-gray-200 max-w-3xl mx-auto text-balance">
              Comprehensive automotive maintenance and repair services for all makes and models
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                Complete Auto Care Solutions
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                From routine maintenance to complex repairs, we've got you covered
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allServices.map((service, i) => (
              <ScrollReveal key={i} delay={((i % 3) + 1) * 100 as 100 | 200 | 300 | 400}>
                <ServiceCard {...service} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
