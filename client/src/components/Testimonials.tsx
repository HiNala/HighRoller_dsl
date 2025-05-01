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
        quote: "Morrison Construction transformed our outdated home into a modern masterpiece. Their attention to detail, communication throughout the process, and quality of work exceeded our expectations.",
        author: "James & Dana Wilson",
        location: "Boise, ID",
        initials: "JD",
        project: "Kitchen Remodel",
        rating: 5
      },
      {
        quote: "As a small business owner, I needed a contractor who understood our vision and budget. Morrison Construction delivered our retail space on time and on budget. Their team was professional and responsive.",
        author: "Sarah Rodriguez",
        location: "Meridian, ID", 
        initials: "SR",
        project: "Commercial Build",
        rating: 5
      }
    ],
    [
      {
        quote: "Morrison Construction built our dream mountain cabin with expertise and care. The craftsmanship is exceptional, and they managed the challenges of our remote location with ease.",
        author: "Michael & Tina Johnson",
        location: "McCall, ID",
        initials: "MT",
        project: "Custom Home",
        rating: 5
      },
      {
        quote: "I've worked with many contractors over 20 years in real estate development, and Morrison stands out for their integrity, quality, and reliable timelines. They're now our go-to construction partner.",
        author: "David Patterson",
        location: "Eagle, ID",
        initials: "DP",
        project: "Commercial Development",
        rating: 5
      }
    ],
    [
      {
        quote: "Our bathroom renovation was a fantastic experience from start to finish. The Morrison team gave us exactly what we wanted and handled a few surprises with professionalism and transparency.",
        author: "Elena & Mark Thompson",
        location: "Boise, ID",
        initials: "EM",
        project: "Bathroom Remodel",
        rating: 5
      },
      {
        quote: "Morrison Construction designed and built the most amazing outdoor living space for our family. The covered patio, fireplace, and outdoor kitchen are now where we spend most of our time.",
        author: "Robert Adams",
        location: "Nampa, ID", 
        initials: "RA",
        project: "Outdoor Living",
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
              <MessageSquare className="h-4 w-4 mr-2 text-accent" />
              <span className="text-sm font-medium tracking-wider text-accent uppercase">Testimonials</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4 text-white">
              What Our <span className="text-accent">Clients</span> Say
            </h2>
            
            <p className="text-lg text-gray-200 max-w-2xl">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with Morrison Construction.
            </p>
          </motion.div>
          
          <div className="flex space-x-2">
            <button 
              onClick={goToPrevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-accent/80 text-white transition-colors shadow-sm"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-accent/80 text-white transition-colors shadow-sm"
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
                    ? 'bg-accent w-8' 
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
