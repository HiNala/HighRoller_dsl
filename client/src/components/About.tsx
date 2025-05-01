import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Users, Gem, Building, BadgeCheck, Award, Calendar } from 'lucide-react';

export default function About() {
  const companyValues = [
    {
      icon: <Gem className="h-6 w-6 text-accent" />,
      title: "Excellence",
      description: "We strive for excellence in every detail, from planning to final touches."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Collaboration",
      description: "We believe in true partnerships with our clients throughout the construction process."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-accent" />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty, transparency and accountability."
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Craftsmanship",
      description: "We take pride in our workmanship and attention to detail on every project."
    }
  ];

  const teamMembers = [
    {
      name: "Micah Morrison",
      role: "President & Construction Manager",
      bio: "From swinging his first hammer at 16 to leading complex residential and commercial projects, Micah combines hands-on expertise with a Construction Management degree. His obsession with structural integrity and craftsmanship means your project is in capable, detail-driven hands.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jacci Morrison",
      role: "Vice President & Award-Winning Interior Designer",
      bio: "With over 20 years of interior design accolades, Jacci transforms spaces into personalized sanctuaries. She listens, inspires, and collaborates—ensuring every color, material, and layout aligns with your vision and enhances your daily life.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral overflow-hidden bg-texture-paper">
      {/* Subtle background pattern - replaced with class-based pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-accent/[0.03] blur-3xl"></div>
        <div className="absolute -top-20 left-0 w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto relative">
        {/* Company Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary mb-6">
              Building <span className="text-accent">Dreams</span> into Lasting Homes
            </h2>
            
            <p className="text-gray-600 mb-5 leading-relaxed">
              At Morrison Construction, where family values meet professional excellence. For over two decades, we've been crafting 
              and revitalizing homes throughout the Treasure Valley, ensuring each project reflects the unique spirit of Idaho living.
            </p>
            
            <div className="flex items-start space-x-3 mb-5">
              <Building className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                From the first blueprint to the final walkthrough, our mission is to deliver an experience defined by integrity, 
                collaboration, and exceptional workmanship.
              </p>
            </div>
            
            <div className="flex items-start space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                Whether you're starting fresh with a custom build or reimagining your current space, our team is here to 
                guide you every step of the way—bringing your vision to life on time, on budget, and beyond expectations.
              </p>
            </div>
            
            <div className="flex items-center space-x-5 mb-8 py-4 px-6 bg-white rounded-xl shadow-sm">
              <div className="flex space-x-1">
                <div className="bg-accent w-1.5 h-12 rounded-full"></div>
                <div className="bg-accent/60 w-1.5 h-12 rounded-full"></div>
                <div className="bg-accent/30 w-1.5 h-12 rounded-full"></div>
              </div>
              <blockquote className="text-primary italic font-medium text-lg">
                "We don't just build structures, we build relationships and communities."
              </blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#contact">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      window.history.pushState(null, '', '#contact');
                    }
                  }}
                  className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                >
                  Get in Touch
                </button>
              </Link>
              <Link href="#team">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    const teamSection = document.getElementById('team');
                    if (teamSection) {
                      teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      window.history.pushState(null, '', '#team');
                    }
                  }}
                  className="border border-primary/20 bg-white text-primary hover:border-primary/50 font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center"
                >
                  Meet Our Team
                </button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]">
              <div className="col-span-7 row-span-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Construction team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-5 row-span-3 col-start-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Construction planning meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-5 row-span-3 row-start-4 col-start-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Completed modern home" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="col-span-7 row-span-2 row-start-5 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Commercial building project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-accent/10 rounded-full z-0"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full z-0"></div>
          </motion.div>
        </div>
        
        {/* Our Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values define how we operate and reflect what's truly important to us as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Our Leadership Team */}
        <motion.div
          id="team"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              Meet Your Dedicated Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experienced professionals who will bring your vision to life with expertise and passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
