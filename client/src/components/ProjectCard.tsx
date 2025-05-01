import { motion } from 'framer-motion';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';

type ProjectType = 'residential' | 'commercial' | 'remodel' | 'outdoor';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  completedDate: string;
  location?: string;
  type: ProjectType;
}

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  completedDate, 
  location = "Boise, ID", 
  type 
}: ProjectCardProps) {
  const typeLabels = {
    residential: 'Residential',
    commercial: 'Commercial',
    remodel: 'Remodel',
    outdoor: 'Outdoor'
  };

  const typeColors = {
    residential: 'bg-blue-500',
    commercial: 'bg-purple-500',
    remodel: 'bg-accent',
    outdoor: 'bg-green-500'
  };

  return (
    <motion.div 
      className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-video relative overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className={`absolute top-4 left-4 ${typeColors[type]} text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm`}>
          {typeLabels[type]}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-accent mr-2" />
              <span>Completed: {completedDate}</span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-accent mr-2" />
              <span>{location}</span>
            </div>
          </div>
          
          <motion.a 
            href="#" 
            className="mt-2 inline-flex items-center text-accent font-medium group/btn"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label={`View details for ${title} project`}
          >
            View Details
            <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
