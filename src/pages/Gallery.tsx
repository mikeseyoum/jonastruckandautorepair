import ScrollReveal from "@/components/ScrollReveal";
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
              Our Work
            </h1>
            <p className="text-fluid text-gray-200 max-w-3xl mx-auto text-balance">
              Take a look at our facilities, team, and the quality of our work
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={i} delay={((i % 3) + 1) * 100 as 100 | 200 | 300 | 400}>
                <div className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${item.span} shadow-subtle hover:shadow-card-hover transition-all duration-500`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-red/0 via-transparent to-primary-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="heading-clean text-lg md:text-2xl text-white mb-2 md:mb-3 group-hover:text-primary-red-light transition-colors duration-300 text-balance">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-sm md:text-base text-balance">
                      {item.description}
                    </p>
                    <div className="mt-3 md:mt-4 w-0 group-hover:w-8 md:group-hover:w-10 h-0.5 bg-gradient-to-r from-primary-red-light to-primary-red transition-all duration-500" />
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
