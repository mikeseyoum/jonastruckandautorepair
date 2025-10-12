import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  service?: string;
  rating?: number;
  index?: number;
}

const TestimonialCard = ({ quote, author, service, rating = 5, index = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Quote className="h-10 w-10 text-primary-red/20 mb-4" />
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <div>
        <p className="font-bold text-gray-900 font-heading">{author}</p>
        {service && <p className="text-sm text-gray-500">{service}</p>}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
