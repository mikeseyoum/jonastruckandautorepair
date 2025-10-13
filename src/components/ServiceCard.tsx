import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <div className="group card-modern p-6 md:p-8 lg:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
      <div className="relative mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-red-50 to-primary-red-100 rounded-2xl flex items-center justify-center shadow-subtle group-hover:shadow-red transition-all duration-500 group-hover:scale-105">
          <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary-red group-hover:text-white transition-all duration-500" />
        </div>
        <div className="absolute -inset-2 bg-gradient-to-br from-primary-red/3 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="heading-clean text-lg md:text-xl text-gray-900 mb-3 md:mb-4 group-hover:text-primary-red transition-colors duration-300 text-balance">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-balance">
        {description}
      </p>
      <div className="mt-6 md:mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
        <div className="w-10 md:w-12 h-0.5 bg-gradient-to-r from-primary-red-light to-primary-red rounded-full" />
      </div>
    </div>
  );
};

export default ServiceCard;
