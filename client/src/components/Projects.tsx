import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ChevronRight } from 'lucide-react';

type ProjectType = 'all' | 'residential' | 'commercial' | 'remodel';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Farmhouse Estate',
      description: 'A 4,500 sq ft custom home with premium finishes and sustainable features, completed in Eagle, ID.',
      completedDate: 'Jan 2025',
      type: 'residential'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Downtown Business Center',
      description: 'A modern 3-story office complex with sustainable design and collaborative workspaces in Boise.',
      completedDate: 'Nov 2024',
      type: 'commercial'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Historic Home Renovation',
      description: 'Complete restoration of a 1920s craftsman home, preserving character while modernizing amenities.',
      completedDate: 'Mar 2025',
      type: 'remodel'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Riverfront Restaurant',
      description: 'A stunning dining establishment featuring panoramic views of the Boise River, with indoor and outdoor seating.',
      completedDate: 'Feb 2025',
      type: 'commercial'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our portfolio of exceptional residential and commercial construction projects across Idaho.</p>
        </motion.div>
        
        <div className="mb-8 flex justify-center flex-wrap gap-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'all' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-accent hover:text-white'} transition-all duration-200`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'residential' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-accent hover:text-white'} transition-all duration-200`}
            onClick={() => setActiveFilter('residential')}
          >
            Residential
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'commercial' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-accent hover:text-white'} transition-all duration-200`}
            onClick={() => setActiveFilter('commercial')}
          >
            Commercial
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${activeFilter === 'remodel' ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-accent hover:text-white'} transition-all duration-200`}
            onClick={() => setActiveFilter('remodel')}
          >
            Remodels
          </button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              completedDate={project.completedDate}
              type={project.type as ProjectType}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button className="inline-flex items-center bg-primary hover:bg-accent text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200">
            View All Projects
            <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
