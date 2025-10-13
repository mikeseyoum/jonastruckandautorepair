import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
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
              Get In Touch
            </h1>
            <p className="text-fluid text-gray-200 max-w-3xl mx-auto text-balance">
              Schedule your appointment or reach out with any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="card-modern shadow-card-hover p-6 md:p-8">
                <h2 className="heading-hero text-gray-900 mb-6 md:mb-8 text-balance">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Location Info */}
            <ScrollReveal direction="right">
              <div className="space-y-6 md:space-y-8">
                <div className="card-modern shadow-card-hover p-6 md:p-8">
                  <h2 className="heading-hero text-gray-900 mb-6 md:mb-8 text-balance">
                    Contact Information
                  </h2>

                  <div className="space-y-4 md:space-y-6">
                    <a
                      href="tel:403-123-4567"
                      className="flex items-start gap-3 md:gap-4 group hover:text-primary-red transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-red/20 transition-colors">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary-red" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-sm md:text-base">Phone</p>
                        <p className="text-gray-600 text-sm md:text-base">(403) 123-4567</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@jonasauto.com"
                      className="flex items-start gap-3 md:gap-4 group hover:text-primary-red transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-red/20 transition-colors">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary-red" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-sm md:text-base">Email</p>
                        <p className="text-gray-600 text-sm md:text-base">info@jonasauto.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary-red" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1 text-sm md:text-base">Address</p>
                        <address className="text-gray-600 not-italic text-sm md:text-base">
                          5235 28 Ave SE<br />
                          Calgary, AB T2B 3W3<br />
                          Canada
                        </address>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary-red" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-3 text-sm md:text-base">Business Hours</p>
                        <div className="space-y-2 text-gray-600 text-sm md:text-base">
                          <div className="flex justify-between gap-4">
                            <span>Monday - Friday:</span>
                            <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>Saturday:</span>
                            <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>Sunday:</span>
                            <span className="font-medium text-gray-900">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="card-modern shadow-card-hover overflow-hidden h-48 md:h-64">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 text-primary-red" />
                      <p className="font-medium text-sm md:text-base">Map Location</p>
                      <p className="text-xs md:text-sm">5235 28 Ave SE, Calgary, AB T2B 3W3</p>
                    </div>
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
