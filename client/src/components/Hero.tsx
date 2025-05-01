import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Home, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

// Scroll indicator component
function ScrollIndicator() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const whyChooseUsSection = document.getElementById('why-choose-us');
    if (whyChooseUsSection) {
      whyChooseUsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without causing a page refresh
      window.history.pushState(null, '', '#why-choose-us');
    }
  };

  return (
    <motion.a
      href="#why-choose-us"
      onClick={handleClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white cursor-pointer"
    >
      <motion.p
        className="text-sm mb-2"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Scroll to explore
      </motion.p>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronDown className="h-5 w-5 text-accent" />
      </motion.div>
    </motion.a>
  );
}

export default function Hero() {
  // Background images for the slideshow - construction-specific high-quality images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1541971897566-308cf7ad0e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80", // Completed home with construction team
    "https://images.unsplash.com/photo-1621348321688-64935e914f9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80", // Modern building construction with crane
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80", // Custom built home exterior
    "https://images.unsplash.com/photo-1554435493-93422e8d1c46?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"    // Interior renovation in progress
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Effect to handle automatic image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen bg-cover bg-center overflow-hidden transition-all duration-1000" 
    >
      {/* Slideshow images with smooth transitions */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      
      {/* Darker overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-[1px]"></div>
      
      {/* Slideshow indicator dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-accent w-4' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="relative z-10 h-full container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            <span className="inline-block bg-accent/90 px-4 py-2 rounded-md text-sm font-medium tracking-wider uppercase text-white">
              Morrison Construction LLC
            </span>
          </motion.div>
          
          <motion.h1 
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="relative z-10 inline-block">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Building</span>{" "}
              <span className="text-accent drop-shadow-[0_2px_4px_rgba(216,143,44,0.3)]">Boise</span>{" "}
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Better</span>
              <span className="absolute -bottom-3 -left-2 -right-2 h-2 bg-accent/40 -z-10 blur-xl"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 leading-relaxed"
          >
            We specialize in high-quality residential and commercial construction across Idaho, 
            delivering exceptional craftsmanship and attention to detail.
          </motion.p>
          
          <motion.div 
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#contact');
                }
              }}
              className="group bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Get a Free Estimate
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#projects');
                }
              }}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <Home className="mr-2 h-4 w-4" />
              View Our Projects
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <ScrollIndicator />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
}
