import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ArrowRight, Filter } from 'lucide-react';

// Define a shared type that matches the ProjectCard component's type
type ProjectCategory = 'residential' | 'commercial' | 'remodel' | 'outdoor';
type FilterType = 'all' | ProjectCategory;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Farmhouse Estate',
      description: 'A 4,500 sq ft custom home with premium finishes and sustainable features, completed in Eagle, ID.',
      completedDate: 'Jan 2025',
      location: 'Eagle, ID',
      type: 'residential'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Downtown Business Center',
      description: 'A modern 3-story office complex with sustainable design and collaborative workspaces in Boise.',
      completedDate: 'Nov 2024',
      location: 'Boise, ID',
      type: 'commercial'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Historic Home Renovation',
      description: 'Complete restoration of a 1920s craftsman home, preserving character while modernizing amenities.',
      completedDate: 'Mar 2025',
      location: 'Meridian, ID',
      type: 'remodel'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Riverfront Restaurant',
      description: 'A stunning dining establishment featuring panoramic views of the Boise River, with indoor and outdoor seating.',
      completedDate: 'Feb 2025',
      location: 'Boise, ID',
      type: 'commercial'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Backyard Retreat',
      description: 'A complete outdoor living space with custom pool, outdoor kitchen, fire pit, and covered patio areas.',
      completedDate: 'Apr 2025',
      location: 'Nampa, ID',
      type: 'outdoor'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Open Concept Kitchen Remodel',
      description: 'Transformed a closed-off kitchen into a bright, open concept space with custom cabinetry and high-end finishes.',
      completedDate: 'Dec 2024',
      location: 'Boise, ID',
      type: 'remodel'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'remodel', label: 'Remodels' },
    { value: 'outdoor', label: 'Outdoor' }
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral/30 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute -left-24 top-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -right-24 bottom-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      
      {/* Diagonal pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#D88F2C" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" opacity="0.05" />
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary mb-4">
              Our <span className="text-accent">Showcase</span> Projects
            </h2>
            <p className="text-lg text-gray-600">
              Browse our portfolio of exceptional residential and commercial construction projects across Idaho, 
              featuring stunning designs, quality craftsmanship, and satisfied clients.
            </p>
          </motion.div>
          
          <motion.div 
            className="order-first md:order-last self-start md:self-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 bg-white shadow-sm rounded-lg p-2 inline-flex">
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400 ml-2 mr-1 hidden sm:block" />
                {filters.map((filter) => (
                  <button 
                    key={filter.value}
                    className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.value 
                        ? 'bg-accent text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-neutral'
                    }`}
                    onClick={() => setActiveFilter(filter.value as FilterType)}
                    aria-label={`Filter by ${filter.label}`}
                    aria-pressed={activeFilter === filter.value}
                  >
                    {filter.label}
                    {activeFilter === filter.value && (
                      <motion.span
                        className="absolute inset-0 rounded-md"
                        layoutId="activeFilterBubble"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  completedDate={project.completedDate}
                  location={project.location}
                  type={project.type as ProjectCategory}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => {
              // This would typically link to a full portfolio page
              // For now, just scroll to top of projects section
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group bg-primary hover:bg-accent text-white font-medium px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center"
            aria-label="View all projects in our portfolio"
          >
            View Full Portfolio
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
