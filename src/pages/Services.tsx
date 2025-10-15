import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Wrench, Shield, Gauge, Droplet, CircleDot, Thermometer, Zap, Settings, Truck, Cog, Hammer, RotateCcw, CheckCircle, Wind } from "lucide-react";
import heroImage from "@/assets/hero-services.jpg";

const Services = () => {
  const allServices = [
    {
      icon: Truck,
      title: "Heavy Equipment Repair",
      description: "Comprehensive repair services for heavy equipment and commercial vehicles. Our trained technicians handle all makes and models with the latest tooling and equipment.",
    },
    {
      icon: CheckCircle,
      title: "MVI & CVIP Inspection",
      description: "Professional Motor Vehicle Inspection (MVI) and Commercial Vehicle Inspection Program (CVIP) services to ensure your vehicle meets all safety and regulatory standards.",
    },
    {
      icon: Hammer,
      title: "Truck Collision & Body Repair",
      description: "Expert collision repair and body work services for trucks and commercial vehicles. We restore your vehicle to pre-accident condition with quality craftsmanship.",
    },
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Scheduled preventive maintenance programs designed to keep your vehicle operating at peak efficiency and avoid costly repairs down the road.",
    },
    {
      icon: CircleDot,
      title: "Truck Wheel Alignment",
      description: "Precision wheel alignment services for trucks and heavy equipment to ensure optimal tire wear, fuel efficiency, and vehicle handling.",
    },
    {
      icon: Wind,
      title: "EGR & DPF Cleaning",
      description: "Professional EGR (Exhaust Gas Recirculation) and DPF (Diesel Particulate Filter) cleaning services to maintain engine performance and emissions compliance.",
    },
    {
      icon: Cog,
      title: "Transmission & Clutch Repair",
      description: "Complete transmission and clutch repair services including rebuilds, replacements, and maintenance for all types of commercial vehicles.",
    },
    {
      icon: Thermometer,
      title: "HVAC Repair",
      description: "Heating, ventilation, and air conditioning system repair and maintenance for commercial vehicles and heavy equipment.",
    },
    {
      icon: Wrench,
      title: "Engine Repair, Overhaul & Rebuild",
      description: "Complete engine services including repairs, overhauls, rebuilds, and conversions. Our technicians are trained on all major engine manufacturers.",
    },
    {
      icon: Gauge,
      title: "Diagnostics & Electrical",
      description: "Advanced diagnostic services and electrical system repair for modern vehicles with complex electronic systems and high-tech equipment.",
    },
    {
      icon: RotateCcw,
      title: "Driveline Service",
      description: "Complete driveline maintenance and repair including driveshafts, differentials, transfer cases, and all related components.",
    },
    {
      icon: Zap,
      title: "Exhaust System",
      description: "Exhaust system repair, replacement, and modification services including mufflers, catalytic converters, and emission control systems.",
    },
    {
      icon: Droplet,
      title: "Oil & Fluid Change",
      description: "Regular oil changes and fluid service for all vehicle types including engine oil, hydraulic fluids, and specialized lubricants.",
    },
    {
      icon: Thermometer,
      title: "Coolant System",
      description: "Complete coolant system service including radiator repair, coolant flush, thermostat replacement, and cooling system maintenance.",
    },
    {
      icon: Shield,
      title: "Brake Service",
      description: "Comprehensive brake system service including inspection, repair, and replacement of pads, rotors, calipers, and brake fluid service.",
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
              Professional automotive service and repair for all makes and models. From routine maintenance to major overhauls, we keep your vehicle operating at peak efficiency.
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
                Professional Service & Repair Solutions
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                Highly trained technicians with industry-leading expertise and modern equipment to service all your automotive needs
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
