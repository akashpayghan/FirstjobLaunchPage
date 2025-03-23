
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className, 
  iconClassName,
  delay = 0
}) => {
  return (
    <motion.div 
      className={cn(
        "p-6 rounded-xl bg-white border border-border/50 shadow-sm",
        "hover:shadow-md transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="flex flex-col items-start">
        <div className={cn(
          "mb-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F3FF] text-[#8B5CF6]",
          iconClassName
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
