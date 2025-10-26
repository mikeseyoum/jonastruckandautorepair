import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { breadcrumbStructuredData } from "@/lib/structuredData";
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, Car, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ];

  return (
    <div>
      <SEO
        title="Contact Jonas Auto & Truck | Schedule Service in Calgary"
        description="Contact Jonas Auto & Truck for professional automotive service in Calgary. Call (403) 123-4567 or book online. Located at 5235 28 Ave SE."
        keywords="contact Jonas Auto, auto repair Calgary, schedule service, automotive service Calgary, book appointment"
        canonicalUrl="/contact"
        structuredData={breadcrumbStructuredData(breadcrumbItems)}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="text-center">
            <ScrollReveal direction="up">
              <div className="max-w-4xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                  <span className="block">Ready to Get Your</span>
                  <span className="block text-primary-red mt-2">Vehicle Back on the Road?</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
                  Professional automotive service and repair. Schedule your appointment today and experience the difference of quality workmanship.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-2xl mx-auto">
                  <a 
                    href="#contact-form" 
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-primary-red/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Book Service Now</span>
                  </a>
                  <a 
                    href="tel:403-123-4567" 
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Call (403) 123-4567</span>
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section id="contact-form" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                Schedule Your Service
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                Fill out the form below with your vehicle details and service needs. We'll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-red to-primary-red/90 px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Service Request Form</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Information */}
            <ScrollReveal direction="left">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed">
                    We're here to help with all your automotive needs. Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:403-123-4567"
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-red group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary-red group-hover:text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</h3>
                      <p className="text-gray-600 group-hover:text-primary-red transition-colors text-sm sm:text-base">(403) 123-4567</p>
                      <p className="text-xs sm:text-sm text-gray-500">Call us for immediate assistance</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@jonastruckandautorepair.com"
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-red group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary-red group-hover:text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                      <p className="text-gray-600 group-hover:text-primary-red transition-colors text-sm sm:text-base break-all">info@jonastruckandautorepair.com</p>
                      <p className="text-xs sm:text-sm text-gray-500">Send us your questions or concerns</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-red" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Address</h3>
                      <address className="text-gray-600 not-italic leading-relaxed text-sm sm:text-base">
                        5235 28 Ave SE<br />
                        Calgary, AB T2B 3W3<br />
                        Canada
                      </address>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary-red" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Business Hours</h3>
                      <div className="space-y-1.5 sm:space-y-2 text-gray-600">
                        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2">
                          <span className="text-xs sm:text-sm">Monday - Friday</span>
                          <span className="font-medium text-gray-900 text-xs sm:text-sm">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2">
                          <span className="text-xs sm:text-sm">Saturday</span>
                          <span className="font-medium text-gray-900 text-xs sm:text-sm">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2">
                          <span className="text-xs sm:text-sm">Sunday</span>
                          <span className="font-medium text-gray-900 text-xs sm:text-sm">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="right">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                    Visit Our Shop
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed">
                    Located in Calgary, we're easily accessible and ready to serve your automotive needs.
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 sm:h-72 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center px-4">
                      <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-primary-red mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">5235 28 Ave SE, Calgary, AB T2B 3W3</p>
                      <a 
                        href="https://maps.google.com/?q=5235+28+Ave+SE+Calgary+AB+T2B+3W3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-red text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-red/90 transition-colors text-sm sm:text-base"
                      >
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Car className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary-red mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">20+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Wrench className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary-red mx-auto mb-2 sm:mb-3" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">120+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
