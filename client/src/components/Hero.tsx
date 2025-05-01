import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center bg-image-overlay" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
      <div className="absolute inset-0 bg-dark/50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building Boise Better
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We specialize in high-quality residential and commercial construction across Idaho.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#contact">
            <button className="bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200">
              Get a Free Estimate
            </button>
          </Link>
          <Link href="#projects">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200">
              View Our Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
