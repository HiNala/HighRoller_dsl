import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  initials: string;
  rating?: number;
  project?: string;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  location, 
  initials, 
  rating = 5,
  project
}: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <Quote className="h-8 w-8 text-accent/20 absolute top-6 right-6" />
      
      <div className="flex items-center space-x-1 text-accent mb-5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5" 
            fill={i < rating ? "currentColor" : "none"} 
            strokeWidth={i < rating ? 0 : 2}
            opacity={i < rating ? 1 : 0.3}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      {project && (
        <div className="mb-4 text-sm">
          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">
            {project}
          </span>
        </div>
      )}
      
      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shadow-sm">
          <span className="text-accent font-semibold">{initials}</span>
        </div>
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
