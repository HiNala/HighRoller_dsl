import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
            <span className="text-sm font-medium tracking-wider text-accent uppercase">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary mb-4">
            Ready to <span className="text-accent">Build Your Dream?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's transform your home into the sanctuary you deserve. Connect with Morrison Construction, LLC—and build a legacy you'll love.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">1</div>
            <h3 className="text-xl font-display font-semibold text-primary mb-3 mt-2">Tell us about your vision</h3>
            <p className="text-gray-600">
              Complete a brief questionnaire so we can understand your style, needs, and budget.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">2</div>
            <h3 className="text-xl font-display font-semibold text-primary mb-3 mt-2">Receive your personalized estimate</h3>
            <p className="text-gray-600">
              Our transparent bid breaks down every detail—empowering you to prioritize what matters most.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">3</div>
            <h3 className="text-xl font-display font-semibold text-primary mb-3 mt-2">Watch your project unfold</h3>
            <p className="text-gray-600">
              From ground-breaking to ribbon-cutting, we keep you informed and in control.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-3">Send Us a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"  
                        placeholder="john@example.com" 
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="(123) 456-7890" 
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
                        required 
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                      <select 
                        id="projectType" 
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white appearance-none" 
                        required
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="custom">Custom Home Build</option>
                        <option value="whole-home">Whole-Home Remodel</option>
                        <option value="kitchen">Kitchen Transformation</option>
                        <option value="bathroom">Bathroom Retreat</option>
                        <option value="basement">Basement Finish</option>
                        <option value="outdoor">Outdoor Kitchen & Living</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your vision..." 
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Start Your Dream Project
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-green-700">Thank you for contacting us. We'll be in touch soon.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2.5 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-base mb-1">Address</h4>
                    <address className="not-italic text-gray-600 text-sm">
                      13601 W McMillan Rd Suite#102-268<br />
                      Boise, ID 83713
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2.5 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-base mb-1">Phone</h4>
                    <p className="text-sm">
                      <a href="tel:+12089990030" className="text-gray-600 hover:text-accent transition-colors">
                        (208) 999-0030
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2.5 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-base mb-1">Email</h4>
                    <p className="text-sm">
                      <a href="mailto:info@morrisonconstruction.com" className="text-gray-600 hover:text-accent transition-colors break-all">
                        info@morrisonconstruction.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2.5 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-base mb-1">Business Hours</h4>
                    <div className="text-gray-600 text-sm">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-accent/10 hover:bg-accent p-2.5 rounded-lg transition-colors duration-300 text-accent hover:text-white" 
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-accent/10 hover:bg-accent p-2.5 rounded-lg transition-colors duration-300 text-accent hover:text-white" 
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-accent/10 hover:bg-accent p-2.5 rounded-lg transition-colors duration-300 text-accent hover:text-white" 
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map as a standalone card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-100">
            <h3 className="text-2xl font-display font-semibold text-primary mb-2 sm:mb-0">Find Us</h3>
            <a 
              href="https://maps.google.com/?q=13601+W+McMillan+Rd+Suite+102-268+Boise+ID+83713" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-accent hover:text-accent/80 text-sm font-medium"
            >
              Open in Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          <div className="h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9681532576507!2d-116.30849242345045!3d43.61513905433177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae56bc1fb5b5d9%3A0x77f9f13ffb44b2c!2s13601%20W%20McMillan%20Rd%2C%20Boise%2C%20ID%2083713!5e0!3m2!1sen!2sus!4v1714605348905!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Morrison Construction Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
