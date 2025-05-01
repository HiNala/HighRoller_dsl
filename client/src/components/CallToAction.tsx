import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Building2, Users, Award, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'wouter';

// Glow effect component for background
const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "top" | "above" | "bottom" | "below" | "center" }
>(({ className, variant = "bottom", ...props }, ref) => {
  const variantClasses = {
    top: "top-0",
    above: "-top-[128px]",
    bottom: "bottom-0",
    below: "-bottom-[128px]",
    center: "top-[50%]",
  };

  return (
    <div
      ref={ref}
      className={cn("absolute w-full", variantClasses[variant], className)}
      {...props}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(216,143,44,0.3)_10%,_rgba(0,0,0,0)_60%)] sm:h-[512px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(216,143,44,0.2)_10%,_rgba(0,0,0,0)_60%)] sm:h-[256px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  );
});
Glow.displayName = "Glow";

// Stats card component for displaying metrics
const StatCard = ({ 
  icon, 
  value, 
  label, 
  delay 
}: { 
  icon: React.ReactNode; 
  value: number; 
  label: string; 
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur-sm"
    >
      <div className="mb-2 rounded-full bg-accent/10 p-3 text-accent">
        {icon}
      </div>
      <h3 className="mb-1 text-3xl font-bold text-white">{value}+</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </motion.div>
  );
};

export default function CallToAction() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Stats data
  const stats = {
    projects: 300,
    years: 18,  // Since 2005
    clients: 250,
  };

  return (
    <section 
      id="cta"
      ref={ref}
      className="group relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="construction-pattern"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <rect width="100%" height="100%" fill="none" />
              <path d="M0 20 H40 M20 0 V40" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#construction-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold font-display tracking-tight text-white sm:text-5xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-2 text-lg font-semibold text-accent">
            Your Vision, Our Expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Let's discuss how Morrison Construction can bring your project to life with quality craftsmanship, attention to detail, and a commitment to excellence that exceeds expectations.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <StatCard 
            icon={<Building2 size={24} />} 
            value={stats.projects} 
            label="Projects Completed" 
            delay={0.2} 
          />
          <StatCard 
            icon={<Award size={24} />} 
            value={stats.years} 
            label="Years Experience" 
            delay={0.3} 
          />
          <StatCard 
            icon={<Users size={24} />} 
            value={stats.clients} 
            label="Happy Clients" 
            delay={0.4} 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="#contact">
            <button className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-white font-medium px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              Get a Free Estimate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="#projects">
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              View Our Projects
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" className="animate-pulse" />
      </div>
    </section>
  );
}
