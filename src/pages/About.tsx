import StatCard from "@/components/StatCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Users, Calendar, Check } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  const stats = [
    { icon: Calendar, value: 25, label: "Years in Business", suffix: "+" },
    { icon: Users, value: 5000, label: "Satisfied Customers", suffix: "+" },
    { icon: Award, value: 15, label: "Certified Technicians" },
    { icon: Check, value: 10000, label: "Vehicles Serviced", suffix: "+" },
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe in honest, transparent service. We'll never recommend unnecessary repairs and always explain your options clearly.",
    },
    {
      title: "Quality",
      description: "Using only quality parts and proven techniques, we ensure every repair meets or exceeds manufacturer specifications.",
    },
    {
      title: "Service",
      description: "Your satisfaction is our priority. We go above and beyond to provide exceptional customer service and reliable automotive care.",
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
            <h1 className="heading-display text-white mb-4 md:mb-6 text-clean-shadow">
              About Us
            </h1>
            <p className="text-fluid text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in automotive care since 1998
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 100 as 100 | 200 | 300 | 400}>
                <StatCard {...stat} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="heading-hero text-gray-900 mb-6 md:mb-8 text-balance">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Founded in 1998 by Jonas, our shop began with a simple mission: to provide honest, reliable automotive service to our community. What started as a small two-bay garage has grown into a full-service automotive facility, but our core values remain unchanged.
                  </p>
                  <p className="text-sm md:text-base">
                    Over the past 25 years, we've built our reputation on integrity, quality workmanship, and exceptional customer service. Our team of ASE-certified technicians brings decades of combined experience and stays current with the latest automotive technology and repair techniques.
                  </p>
                  <p className="text-sm md:text-base">
                    We're not just mechanics—we're automotive care professionals who take pride in our work. Whether you drive a compact car, luxury sedan, or heavy-duty truck, we treat every vehicle as if it were our own. Our commitment to excellence has earned us thousands of loyal customers and a reputation as the most trusted auto shop in the area.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    When you choose Jonas Auto & Truck, you're choosing a partner who genuinely cares about keeping you safe on the road.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative mt-8 lg:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-primary-red to-primary-red-dark text-white p-4 md:p-6 rounded-xl shadow-red-lg max-w-xs">
                  <p className="text-base md:text-lg font-bold font-heading">
                    "Quality service and customer satisfaction are at the heart of everything we do."
                  </p>
                  <p className="text-xs md:text-sm mt-2 text-red-100">- Jonas, Founder</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="heading-hero text-gray-900 mb-4 md:mb-6 text-balance">
                Our Core Values
              </h2>
              <p className="text-fluid text-gray-600 max-w-2xl mx-auto text-balance">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={(i + 1) * 100 as 100 | 200 | 300 | 400}>
                <div className="group card-modern p-6 md:p-8 lg:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-red-50 to-primary-red-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-subtle group-hover:shadow-red transition-all duration-500 group-hover:scale-105">
                    <Check className="h-5 w-5 md:h-6 md:w-6 text-primary-red group-hover:text-white transition-all duration-500" />
                  </div>
                  <h3 className="heading-clean text-lg md:text-xl text-gray-900 mb-3 md:mb-4 group-hover:text-primary-red transition-colors duration-300 text-balance">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-balance">
                    {value.description}
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

export default About;
