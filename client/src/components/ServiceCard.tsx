import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
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
      className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
        {icon}
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-auto">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className="inline-flex items-center text-accent hover:text-accent/80 font-medium group/link transition-colors duration-200"
          aria-label={`Learn more about ${title}`}
        >
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
