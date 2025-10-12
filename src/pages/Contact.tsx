import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Schedule your appointment or reach out with any questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:555-123-4567"
                    className="flex items-start gap-4 group hover:text-primary-red transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-red/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@jonasauto.com"
                    className="flex items-start gap-4 group hover:text-primary-red transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-red/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Email</p>
                      <p className="text-gray-600">info@jonasauto.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Address</p>
                      <address className="text-gray-600 not-italic">
                        123 Auto Service Drive<br />
                        Mechanicsville, ST 12345<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-red" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-3">Business Hours</p>
                      <div className="space-y-2 text-gray-600">
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
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-64">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-primary-red" />
                    <p className="font-medium">Map Location</p>
                    <p className="text-sm">123 Auto Service Drive, Mechanicsville, ST</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
