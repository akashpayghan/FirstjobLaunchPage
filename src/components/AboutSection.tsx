
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What is FirstJob?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            FirstJob is a platform designed specifically for students and recent graduates who are looking to start their career journey.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            We understand that finding your first professional job can be overwhelming, which is why we're creating a simplified job search experience that focuses on entry-level positions and internships.
          </p>
          
          <motion.div 
            className="py-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="#services" 
              className="inline-flex items-center text-[#3B82F6] font-medium hover:text-[#2563EB] transition-colors"
            >
              <span>Learn about our services</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
        
        <div className="lg:pl-10">
          <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] p-8 rounded-2xl shadow-sm">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-md mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-[#3B82F6]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
              </motion.div>
            </div>
            <p className="text-center font-medium text-xl mb-2">Coming Soon</p>
            <p className="text-center text-muted-foreground">Our platform is under development and will be launching soon. Subscribe to be the first to know when we go live.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
