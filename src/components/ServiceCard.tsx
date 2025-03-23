
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  className 
}) => {
  return (
    <motion.div 
      className={cn(
        "p-8 rounded-xl relative",
        "border border-border bg-white shadow-sm",
        "hover:shadow-md transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="flex flex-col items-start">
        <div className="mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1]">
            <Icon className="w-6 h-6" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
