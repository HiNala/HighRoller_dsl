import React from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Sparkles, MessageSquare, LightbulbIcon } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bulletPoints?: string[];
  className?: string;
  delay?: number;
}

const BenefitCard = ({ icon, title, description, bulletPoints = [], className, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn("", className)}
    >
      <Card className="h-full overflow-hidden border border-gray-100 bg-white p-6 transition-all duration-200 hover:shadow-md relative">
        {/* Card highlight effects */}
        <div className="absolute -top-1 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-0 group-hover:opacity-40"></div>
        
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-display font-semibold text-primary">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        
        {bulletPoints.length > 0 && (
          <ul className="space-y-2">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-accent mr-2 mt-1 text-lg">•</span>
                <span className="text-gray-600 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Unmatched Craftsmanship",
      description: "Every home we build or remodel is a testament to precision, durability, and timeless design.",
      bulletPoints: [
        "Meticulous framing, flawless finishes, and premium materials ensure your investment stands strong for generations.",
        "Our in-house experts treat every nail, joint, and surface as if it were their own home."
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Transparent Communication",
      description: "Feel confident at every step with clear, consistent updates.",
      bulletPoints: [
        "Project milestones delivered on schedule—no surprises, just satisfaction.",
        "Your questions answered promptly by the team behind the tools, not an automated line."
      ]
    },
    {
      icon: <LightbulbIcon className="h-6 w-6" />,
      title: "Tailored Value",
      description: "Get the highest return on your investment with honest pricing and zero hidden fees.",
      bulletPoints: [
        "Detailed, line-item bids let you customize scope and budget with full clarity.",
        "We leverage local partnerships for cost savings—and pass those savings directly to you."
      ]
    }
  ];

  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-neutral py-20 md:py-24 bg-texture-concrete">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-0 left-10 w-48 h-48 rounded-full bg-primary/[0.02] blur-2xl"></div>
        <div className="hidden md:block absolute bottom-0 right-10 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl"></div>
        
        {/* Mobile-visible decorative elements */}
        <div className="md:hidden absolute top-1/4 left-0 w-32 h-32 rounded-full bg-primary/[0.03] blur-2xl"></div>
        <div className="md:hidden absolute bottom-1/4 right-0 w-40 h-40 rounded-full bg-accent/[0.03] blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative">
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
            Why Choose <span className="text-accent">Morrison Construction?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the first blueprint to the final walkthrough, our mission is to deliver an experience defined 
            by integrity, collaboration, and exceptional workmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              bulletPoints={benefit.bulletPoints}
              delay={index}
              className="group"
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
            Ready to transform your home into the sanctuary you deserve?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', '#contact');
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-md bg-accent hover:bg-accent/90 px-8 py-3 text-white font-medium shadow-md transition-all hover:shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
