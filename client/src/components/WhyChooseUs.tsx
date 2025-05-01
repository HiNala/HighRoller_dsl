import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';
import { ShieldCheck, Clock, CreditCard } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality checks at each stage of construction to ensure lasting quality."
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "On-Time Delivery",
      description: "We pride ourselves on delivering projects within agreed timelines without compromising on quality."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-accent" />,
      title: "Transparent Pricing",
      description: "No hidden costs or surprises. We provide detailed estimates and stick to them throughout the project."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">Why Choose Morrison Construction</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our commitment to quality craftsmanship, transparent communication, and attention to detail sets us apart.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
