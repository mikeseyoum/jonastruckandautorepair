import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home.jpg";
import servicesImage from "@/assets/hero-services.jpg";
import aboutImage from "@/assets/hero-about.jpg";
import contactImage from "@/assets/hero-contact.jpg";
import ctaImage from "@/assets/cta-background.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Modern Workshop",
      description: "State-of-the-art facility with advanced diagnostic tools",
      span: "col-span-2 row-span-2",
    },
    {
      image: servicesImage,
      title: "Expert Technicians",
      description: "ASE certified mechanics at work",
      span: "col-span-1 row-span-1",
    },
    {
      image: aboutImage,
      title: "Professional Team",
      description: "Our dedicated staff ready to help",
      span: "col-span-1 row-span-1",
    },
    {
      image: contactImage,
      title: "Clean Facilities",
      description: "Welcoming and professional environment",
      span: "col-span-1 row-span-2",
    },
    {
      image: ctaImage,
      title: "Quality Results",
      description: "Vehicles serviced to perfection",
      span: "col-span-2 row-span-1",
    },
    {
      image: heroImage,
      title: "Advanced Equipment",
      description: "Latest technology for all repairs",
      span: "col-span-1 row-span-1",
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Take a look at our facilities, team, and the quality of our work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl ${item.span}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
