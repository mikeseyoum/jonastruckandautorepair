import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
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
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading uppercase tracking-tighter text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive automotive maintenance and repair services for all makes and models
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading uppercase tracking-tighter text-gray-900 mb-4">
              Complete Auto Care Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
