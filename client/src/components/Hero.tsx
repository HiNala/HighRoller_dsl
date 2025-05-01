import React, { useState, useEffect, useRef } from "react";
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
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-12 z-30">
      <motion.a
        href="#why-choose-us"
        onClick={handleClick}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="flex flex-col items-center text-white/80 hover:text-white cursor-pointer"
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
          <ChevronDown className="h-5 w-5 text-secondary" />
        </motion.div>
      </motion.a>
    </div>
  );
}

export default function Hero() {
  // Using verified high-quality commercial construction images from multiple reliable sources
  const backgroundImages = [
    "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1920", // Construction site
    "https://images.pexels.com/photos/3968141/pexels-photo-3968141.jpeg?auto=compress&cs=tinysrgb&w=1920", // Home construction
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920", // Modern construction
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=90&w=1920", // Commercial construction interior
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&q=90&w=1920" // Completed modern office building
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false, false, false]);
  const [imageErrors, setImageErrors] = useState<boolean[]>([false, false, false, false, false]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Fallback image if others fail
  const fallbackImage = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"; // Reliable construction backup
  
  // Preload images - improved version
  useEffect(() => {
    // Start with the first image to ensure quick initial load
    const preloadFirstImage = () => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = backgroundImages[0];
        img.onload = () => {
          setImagesLoaded(prev => {
            const newLoaded = [...prev];
            newLoaded[0] = true;
            return newLoaded;
          });
          resolve();
        };
        img.onerror = () => {
          setImageErrors(prev => {
            const newErrors = [...prev];
            newErrors[0] = true;
            return newErrors;
          });
          resolve();
        };
      });
    };

    // Then load the rest of the images
    const preloadRemainingImages = async () => {
      const promises = backgroundImages.slice(1).map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setImagesLoaded(prev => {
              const newLoaded = [...prev];
              newLoaded[index + 1] = true;
              return newLoaded;
            });
            resolve();
          };
          img.onerror = () => {
            setImageErrors(prev => {
              const newErrors = [...prev];
              newErrors[index + 1] = true;
              return newErrors;
            });
            resolve();
          };
        });
      });
      
      // Also preload the fallback image
      const fallbackPromise = new Promise<void>((resolve) => {
        const img = new Image();
        img.src = fallbackImage;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
      
      await Promise.all([...promises, fallbackPromise]);
      setInitialLoadComplete(true);
    };
    
    // Execute preloading in sequence
    const loadAllImages = async () => {
      await preloadFirstImage();
      preloadRemainingImages();
    };
    
    loadAllImages();
  }, []);
  
  // Effect to handle automatic image transition - only start after first image is loaded
  useEffect(() => {
    if (!imagesLoaded[0] && !imagesLoaded.some(loaded => loaded)) {
      return; // Don't start the slideshow until at least the first image is loaded
    }
    
    const interval = setInterval(() => {
      // Find the next valid image index
      let nextIndex = (currentImageIndex + 1) % backgroundImages.length;
      let count = 0;
      
      // If the next image has an error, skip it (but prevent infinite loop)
      while (imageErrors[nextIndex] && count < backgroundImages.length) {
        nextIndex = (nextIndex + 1) % backgroundImages.length;
        count++;
      }
      
      setCurrentImageIndex(nextIndex);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentImageIndex, imagesLoaded, imageErrors]);
  
  // Get available images (not errored)
  const availableImages = backgroundImages.filter((_, index) => !imageErrors[index]);
  
  // If no images are available, use the fallback
  const shouldUseFallback = availableImages.length === 0;

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
      className="relative h-screen w-full bg-cover bg-center overflow-hidden transition-all duration-1000" 
    >
      {/* Force immediate image preloading */}
      {backgroundImages.map((src, index) => (
        <link key={`preload-link-${index}`} rel="preload" href={src} as="image" />
      ))}
      <link rel="preload" href={fallbackImage} as="image" />
      
      {/* Hidden preload container */}
      <div className="hidden">
        {backgroundImages.map((src, index) => (
          <img 
            key={`preload-${index}`}
            ref={el => (imageRefs.current[index] = el)}
            src={src}
            alt="Preloading"
            onLoad={() => {
              const newLoaded = [...imagesLoaded];
              newLoaded[index] = true;
              setImagesLoaded(newLoaded);
            }}
            onError={() => {
              const newErrors = [...imageErrors];
              newErrors[index] = true;
              setImageErrors(newErrors);
            }}
          />
        ))}
        <img src={fallbackImage} alt="Fallback preload" />
      </div>
      
      {/* Slideshow images with smooth transitions */}
      {shouldUseFallback ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${fallbackImage}')` }}
        />
      ) : (
        backgroundImages.map((image, index) => {
          // Skip rendering errored images
          if (imageErrors[index]) return null;
          
          return (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex && imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                backgroundImage: `url('${image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
          );
        })
      )}
      
      {/* Default background as safety - improved visibility during loading */}
      <div 
        className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
          imagesLoaded.some(loaded => loaded) ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Simple loading indicator if no images are loaded */}
        {!imagesLoaded.some(loaded => loaded) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {/* Darker overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 backdrop-blur-[1px]"></div>
      
      {/* Slideshow indicator dots - moved up on mobile to avoid interference with scroll indicator */}
      <div className="absolute bottom-32 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1.5">
        {backgroundImages.map((_, index) => {
          // Skip showing indicators for errored images
          if (imageErrors[index]) return null;
          
          return (
            <button 
              key={index}
              onClick={() => {
                // Only allow changing to images that are loaded and don't have errors
                if (imagesLoaded[index] && !imageErrors[index]) {
                  setCurrentImageIndex(index);
                }
              }}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-secondary w-3 md:w-4' 
                  : 'bg-white/50 hover:bg-white/70'
              } ${!imagesLoaded[index] || imageErrors[index] ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label={`View slide ${index + 1}`}
              disabled={!imagesLoaded[index] || imageErrors[index]}
            />
          );
        })}
      </div>
      
      <div className="relative z-10 h-full w-full container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-3 md:mb-4"
          >
            <span className="inline-block bg-secondary/90 px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium tracking-wider uppercase text-white">
              High Roller Construction LLC
            </span>
          </motion.div>
          
          <motion.h1 
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 md:mb-6"
          >
            <span className="relative z-10 inline-block">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Building a</span>{" "}
              <span className="text-secondary drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]">Better</span>{" "}
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Boise</span>
              <span className="absolute -bottom-3 -left-2 -right-2 h-2 bg-secondary/40 -z-10 blur-xl"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8 text-gray-200 leading-relaxed px-1"
          >
            Premium craftsmanship meets exceptional service. We specialize in bringing your vision to life through custom home construction and luxury remodels throughout the Boise Metro area and Treasure Valley.
          </motion.p>
          
          <motion.div 
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full px-4 sm:px-0"
          >
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#contact');
                }
              }}
              className="group bg-accent hover:bg-accent/90 text-white font-medium px-5 py-3 sm:px-6 sm:py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
            >
              Start Your Dream Project
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
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-5 py-3 sm:px-6 sm:py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Explore Our Work
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - made smaller on mobile */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-6 md:pb-12 z-30">
        <motion.a
          href="#why-choose-us"
          onClick={(e) => {
            e.preventDefault();
            const whyChooseUsSection = document.getElementById('why-choose-us');
            if (whyChooseUsSection) {
              whyChooseUsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
              window.history.pushState(null, '', '#why-choose-us');
            }
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col items-center text-white/80 hover:text-white cursor-pointer"
        >
          <motion.p
            className="text-xs md:text-sm mb-1 md:mb-2"
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
            <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
          </motion.div>
        </motion.a>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
}
