import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  index?: number;
}

const StatCard = ({ icon: Icon, value, label, suffix = "", index = 0 }: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = Math.round(springValue.get());

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-red/10 rounded-2xl mb-4">
        <Icon className="h-8 w-8 text-primary-red" />
      </div>
      <motion.div className="text-5xl font-extrabold text-gray-900 mb-2 font-heading">
        {displayValue}{suffix}
      </motion.div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

export default StatCard;
