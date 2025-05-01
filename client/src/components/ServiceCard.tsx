import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-neutral rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.01]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-accent mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
