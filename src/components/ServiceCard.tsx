// src/components/ServiceCard.tsx
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 h-full">
      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-red-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;