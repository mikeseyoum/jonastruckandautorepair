import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in automotive care since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase tracking-tighter text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 by Jonas Martinez, our shop began with a simple mission: to provide honest, reliable automotive service to our community. What started as a small two-bay garage has grown into a full-service automotive facility, but our core values remain unchanged.
                </p>
                <p>
                  Over the past 25 years, we've built our reputation on integrity, quality workmanship, and exceptional customer service. Our team of ASE-certified technicians brings decades of combined experience and stays current with the latest automotive technology and repair techniques.
                </p>
                <p>
                  We're not just mechanics—we're automotive care professionals who take pride in our work. Whether you drive a compact car, luxury sedan, or heavy-duty truck, we treat every vehicle as if it were our own. Our commitment to excellence has earned us thousands of loyal customers and a reputation as the most trusted auto shop in the area.
                </p>
                <p className="font-semibold text-gray-900">
                  When you choose Jonas Auto & Truck, you're choosing a partner who genuinely cares about keeping you safe on the road.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-red text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-lg font-bold font-heading">
                  "Quality service and customer satisfaction are at the heart of everything we do."
                </p>
                <p className="text-sm mt-2 text-red-100">- Jonas Martinez, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary-red" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
