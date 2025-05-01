import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">"Morrison Construction is a full service residential company specializing in kitchen & bathroom remodels, additions, and outdoor living spaces (decks, kitchens, etc.) as well as design services."</p>
            <p className="text-gray-600 mb-4">Micah and Jacci Morrison hold Bachelor's degrees in Construction Management & Interior Design which combined with over 30 years of experience makes them a great team ready to make their clients dreams come true.</p>
            <p className="text-gray-600 mb-6">Our team brings decades of combined experience, local knowledge, and a passion for craftsmanship to every project we undertake in the Boise area.</p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex space-x-1">
                <div className="bg-accent w-1 h-10 rounded-full"></div>
                <div className="bg-accent/50 w-1 h-10 rounded-full"></div>
                <div className="bg-accent/30 w-1 h-10 rounded-full"></div>
              </div>
              <blockquote className="text-primary italic">"We don't just build structures, we build relationships and communities."</blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#contact">
                <button className="bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 text-center">
                  Contact Us
                </button>
              </Link>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 text-center">
                Our Team
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Construction team at work" className="rounded-xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Completed modern home" className="rounded-xl h-32 w-full object-cover" />
            </div>
            <div className="space-y-4 mt-6">
              <img src="https://images.unsplash.com/photo-1628971599770-d8ba47372466?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Commercial building project" className="rounded-xl h-32 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Construction planning meeting" className="rounded-xl h-48 w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
