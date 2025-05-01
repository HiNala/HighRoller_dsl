import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-rotate testimonials every 5 seconds if autoplay is enabled
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts with carousel
  const handleManualNavigation = (index: number) => {
    setAutoplay(false);
    setActiveSlide(index);
  };

  const testimonials = [
    [
      {
        quote: "From our very first meeting, Micah and Emily listened to every detail. The end result—our dream kitchen—exceeded all expectations!",
        author: "Alex & Priya S.",
        location: "Boise, ID",
        initials: "AP",
        project: "Kitchen Remodel",
        rating: 5
      },
      {
        quote: "Transparent pricing, clear timelines, and top-notch craftsmanship. High Roller truly lives up to its name.",
        author: "Marcus R.",
        location: "Meridian, ID", 
        initials: "MR",
        project: "Custom Home",
        rating: 5
      }
    ],
    [
      {
        quote: "Their team turned our unfinished basement into the ultimate family hangout. Professional, punctual, and perfect execution.",
        author: "Jenna L.",
        location: "Eagle, ID",
        initials: "JL",
        project: "Basement Finish",
        rating: 5
      },
      {
        quote: "Outstanding service and relentless attention to detail. Highly recommended for any luxury build or remodel.",
        author: "Carlos & Mia V.",
        location: "Nampa, ID",
        initials: "CM",
        project: "Custom Home",
        rating: 5
      }
    ],
    [
      {
        quote: "From day one, the team was professional and detail-oriented. Our new kitchen is nothing short of spectacular.",
        author: "Alex & Priya S.",
        location: "Boise, ID",
        initials: "AP",
        project: "Kitchen Remodel",
        rating: 5
      },
      {
        quote: "They delivered on every promise—and then some. Highly recommend for anyone wanting top-tier craftsmanship.",
        author: "Marcus R.",
        location: "Meridian, ID", 
        initials: "MR",
        project: "Home Addition",
        rating: 5
      }
    ]
  ];

  // Navigation functions
  const goToPrevSlide = () => {
    handleManualNavigation((activeSlide - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextSlide = () => {
    handleManualNavigation((activeSlide + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md mb-4">
              <MessageSquare className="h-4 w-4 mr-2 text-secondary" />
              <span className="text-sm font-medium tracking-wider text-secondary uppercase">Testimonials</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4 text-white">
              What Our <span className="text-secondary">Clients</span> Say
            </h2>
            
            <p className="text-lg text-gray-200 max-w-2xl">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with High Roller Construction.
            </p>
          </motion.div>
          
          <div className="flex space-x-2">
            <button 
              onClick={goToPrevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-secondary/80 text-white transition-colors shadow-sm"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-secondary/80 text-white transition-colors shadow-sm"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="testimonial-carousel relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="testimonial-slide"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials[activeSlide].map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      quote={testimonial.quote}
                      author={testimonial.author}
                      location={testimonial.location}
                      initials={testimonial.initials}
                      project={testimonial.project}
                      rating={testimonial.rating}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-secondary w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => handleManualNavigation(index)}
                aria-label={`Go to testimonial set ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
