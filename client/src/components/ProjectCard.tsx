import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type ProjectType = 'residential' | 'commercial' | 'remodel';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  completedDate: string;
  type: ProjectType;
}

export default function ProjectCard({ image, title, description, completedDate, type }: ProjectCardProps) {
  const typeLabels = {
    residential: 'Residential',
    commercial: 'Commercial',
    remodel: 'Remodel'
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-[1.01]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-accent text-white text-xs px-2 py-1 rounded-full">
          {typeLabels[type]}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Completed: {completedDate}</span>
          <a href="#" className="text-accent hover:text-primary flex items-center text-sm">
            View Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
