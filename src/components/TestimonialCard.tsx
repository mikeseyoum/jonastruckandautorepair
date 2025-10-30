// src/components/TestimonialCard.tsx
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  service: string;
  rating: number;
  index?: number;
}

const TestimonialCard = ({ quote, author, service, rating }: TestimonialCardProps) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;