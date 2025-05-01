import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CallToAction() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-display font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Start Your Project?
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-200 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's discuss your vision and how Morrison Construction can bring it to life with quality craftsmanship.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="#contact">
            <button className="bg-accent hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-200">
              Get in Touch
            </button>
          </Link>
          <Link href="#projects">
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-200">
              View Recent Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
