import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  index?: number;
}

const StatCard = ({ icon: Icon, value, label, suffix = "", index = 0 }: StatCardProps) => {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-red-50 to-primary-red-100 rounded-2xl mb-4 md:mb-6 shadow-subtle group-hover:shadow-red transition-all duration-500 group-hover:scale-105">
        <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary-red group-hover:text-white transition-all duration-500" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-3 font-heading group-hover:text-primary-red transition-colors duration-300">
        {value}{suffix}
      </div>
      <p className="text-sm md:text-base text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300 text-balance">{label}</p>
      <div className="mt-4 md:mt-6 w-10 md:w-12 h-0.5 bg-gradient-to-r from-primary-red-light to-primary-red rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default StatCard;
