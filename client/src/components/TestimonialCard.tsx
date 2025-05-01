import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  initials: string;
}

export default function TestimonialCard({ quote, author, location, initials }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-1 text-accent mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5" fill="currentColor" />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-4">{quote}</blockquote>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-primary font-semibold">{initials}</span>
        </div>
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
