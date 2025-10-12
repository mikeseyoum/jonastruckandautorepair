import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:border-primary-red hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
        <Icon className="h-8 w-8 text-primary-red group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 font-heading">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
