import React from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Clock, CreditCard, Users, SquareCheckBig, MessageSquare } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, className, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn("", className)}
    >
      <Card className="h-full overflow-hidden border border-gray-100 bg-white p-6 transition-all duration-200 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-display font-semibold text-primary">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality checks at each stage of construction to ensure lasting results that stand the test of time."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "We understand the importance of timelines and consistently deliver projects on schedule without compromising on quality or attention to detail."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Transparent Pricing",
      description: "No hidden costs or surprises. We provide detailed estimates upfront and maintain clear communication about your project's financial aspects."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Our crew of skilled professionals brings decades of combined experience to every project, ensuring superior craftsmanship in all we do."
    },
    {
      icon: <SquareCheckBig className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "We tailor our approach to meet your specific needs, creating personalized solutions that perfectly align with your vision and requirements."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Clear Communication",
      description: "We believe in keeping you informed every step of the way, with responsive communication and regular updates throughout your project."
    }
  ];

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-neutral py-20 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-md mb-4">
            <span className="text-sm font-medium tracking-wider text-accent uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary mb-4">
            The Morrison <span className="text-accent">Advantage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality craftsmanship, transparent communication, and attention to detail sets us apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg font-medium text-primary mb-6">
            Ready to experience the Morrison Construction difference?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-md bg-accent hover:bg-accent/90 px-8 py-3 text-white font-medium shadow-md transition-all hover:shadow-lg"
          >
            Get Your Free Estimate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
