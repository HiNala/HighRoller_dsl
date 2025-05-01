import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have questions or ready to discuss your project? Reach out to our team.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    className="w-full border border-border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email" 
                    className="w-full border border-border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Your phone number" 
                  className="w-full border border-border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  className="w-full border border-border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                  required
                >
                  <option value="" disabled selected>Select project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="remodel">Renovation/Remodel</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  placeholder="Tell us about your project" 
                  className="w-full border border-border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info and Map */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Address</h4>
                    <p className="text-gray-600">1234 Construction Way<br />Boise, ID 83702</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full mt-1">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Phone</h4>
                    <p className="text-gray-600">(208) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-gray-600">info@morrisonconstruction.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-2 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: By appointment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a href="#" className="bg-accent/10 hover:bg-accent/20 p-2 rounded-full transition-all" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-accent" />
                </a>
                <a href="#" className="bg-accent/10 hover:bg-accent/20 p-2 rounded-full transition-all" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-accent" />
                </a>
                <a href="#" className="bg-accent/10 hover:bg-accent/20 p-2 rounded-full transition-all" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-accent" />
                </a>
                <a href="#" className="bg-accent/10 hover:bg-accent/20 p-2 rounded-full transition-all" aria-label="YouTube">
                  <Youtube className="h-5 w-5 text-accent" />
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md h-60 md:h-80">
              {/* Google Maps embed would go here */}
              <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <span className="text-gray-500">Google Map Integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
