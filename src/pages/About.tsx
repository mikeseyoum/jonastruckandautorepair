import StatCard from "@/components/StatCard";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { breadcrumbStructuredData } from "@/lib/structuredData";
import { Award, Users, Calendar, Check } from "lucide-react";
import heroImage from "@/assets/banner.jpg";

const About = () => {
  const stats = [
    { icon: Calendar, value: 20, label: "Years of Experience", suffix: "+" },
    { icon: Users, value: 120, label: "Satisfied Customers", suffix: "+" },
    { icon: Award, value: 10, label: "Certified Technicians" },
    { icon: Check, value: 100, label: "Vehicles Serviced", suffix: "+" },
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

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ];

  return (
    <div>
      <SEO
        title="About Jonas Auto & Truck | 20+ Years of Trusted Service"
        description="Learn about Jonas Auto & Truck's 20+ years of automotive service excellence in Calgary. Certified technicians, quality workmanship, and customer satisfaction."
        keywords="about Jonas Auto, automotive service Calgary, certified technicians, 20 years experience, trusted auto repair"
        canonicalUrl="/about"
        structuredData={breadcrumbStructuredData(breadcrumbItems)}
      />
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
              Your trusted partner in automotive care with over 20 years of experience
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
                    I’m Jonas Hila, owner of Jonas Truck & Auto Repair. From a young age, I loved riding along on road trips with my father and was fascinated by how a well‑maintained vehicle feels—confident, quiet, and safe. That early passion for the road grew into a commitment to keep families and businesses moving with honest, reliable service.
                  </p>
                  <p className="text-sm md:text-base">
                    In the early 2000s, seeing the need in Calgary for an auto shop that puts people first, I started Jonas Truck & Auto Repair. We began as a small garage and have grown into a full‑service facility serving cars, SUVs, light‑duty trucks, and work fleets—without ever compromising on integrity.
                  </p>
                  <p className="text-sm md:text-base">
                    Our motto is safety first and quality always. We use proven diagnostics, quality parts, and manufacturer‑backed procedures. We explain your options clearly, never push unnecessary repairs, and stand behind our work. It’s a straightforward approach that has earned us long‑term relationships and steady word‑of‑mouth.
                  </p>
                  <p className="text-sm md:text-base">
                    The most rewarding moments for me are seeing a customer drive away the same day with confidence—whether it’s a family vehicle ready for winter or a small business fleet back on schedule. I credit our success to a dedicated team that treats every customer with respect and every vehicle like their own.
                  </p>
                  <p className="text-sm md:text-base">
                    When I’m not at the shop, I spend time with my family and stay active. Calgary is home, and serving our community with honest work is what drives us.
                  </p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    If you need dependable maintenance or repair, Jonas Truck & Auto Repair is here to help—professional service, clear communication, and workmanship you can trust.
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
