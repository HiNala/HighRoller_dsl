import { useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    [
      {
        quote: "Morrison Construction transformed our outdated home into a modern masterpiece. Their attention to detail, communication throughout the process, and quality of work exceeded our expectations.",
        author: "James & Dana Wilson",
        location: "Boise, ID",
        initials: "JD"
      },
      {
        quote: "As a small business owner, I needed a contractor who understood our vision and budget. Morrison Construction delivered our retail space on time and on budget. Their team was professional and responsive.",
        author: "Sarah Rodriguez",
        location: "Meridian, ID",
        initials: "SR"
      }
    ],
    [
      {
        quote: "Morrison Construction built our dream mountain cabin with expertise and care. The craftsmanship is exceptional, and they managed the challenges of our remote location with ease.",
        author: "Michael & Tina Johnson",
        location: "McCall, ID",
        initials: "MT"
      },
      {
        quote: "I've worked with many contractors over 20 years in real estate development, and Morrison stands out for their integrity, quality, and reliable timelines. They're now our go-to construction partner.",
        author: "David Patterson",
        location: "Eagle, ID",
        initials: "DP"
      }
    ]
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Read testimonials from our satisfied clients across Idaho.</p>
        </motion.div>
        
        <div className="testimonial-carousel">
          <div className="flex overflow-x-hidden">
            {testimonials.map((slide, slideIndex) => (
              <motion.div 
                key={slideIndex} 
                className="testimonial-slide min-w-full"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeSlide === slideIndex ? 1 : 0,
                  display: activeSlide === slideIndex ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {slide.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      quote={testimonial.quote}
                      author={testimonial.author}
                      location={testimonial.location}
                      initials={testimonial.initials}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-accent' : 'bg-gray-300'}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Testimonial page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
