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
    <div className="group card-modern p-6 md:p-8 lg:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-red/3 to-transparent rounded-bl-3xl" />
      <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary-red/20 mb-4 md:mb-6 group-hover:text-primary-red/40 transition-colors duration-300" />
      <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300 text-balance">
        "{quote}"
      </p>
      <div className="flex items-center gap-1 mb-4 md:mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 md:h-4 md:w-4 transition-all duration-300 ${
              i < rating 
                ? "text-yellow-400 fill-yellow-400 group-hover:scale-110" 
                : "text-gray-200"
            }`}
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        ))}
      </div>
      <div className="relative">
        <p className="heading-clean text-base md:text-lg text-gray-900 group-hover:text-primary-red transition-colors duration-300">
          {author}
        </p>
        {service && (
          <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 mt-1">
            {service}
          </p>
        )}
        <div className="absolute -bottom-2 left-0 w-8 md:w-10 h-0.5 bg-gradient-to-r from-primary-red-light to-primary-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default TestimonialCard;
