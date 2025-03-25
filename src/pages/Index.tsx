
import React, { useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, Twitter, FileText, BookOpen, Briefcase, ShieldCheck, Users, Eye, BadgeCheck, Lock } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Launch date: April 2, 2025 at 11:11 AM
const launchDate = new Date('2025-04-02T11:11:00');

const Index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f9ff] via-background to-background/80 z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2LTZoNnY2em0tNiAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 z-0" />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 pt-6 md:pt-10 pb-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="text-foreground">FIRST</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6]">
              JOB
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#0077B5] animate-fade-in"
              style={{ animationDelay: '200ms' }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#1DA1F2] animate-fade-in"
              style={{ animationDelay: '250ms' }}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/firstjobindia.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#E1306C] animate-fade-in"
              style={{ animationDelay: '300ms' }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 pt-10 md:pt-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6 opacity-80 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-muted-foreground/20">
              <span className="mr-1 w-2 h-2 rounded-full bg-[#0EA5E9]"></span>
              Launching Soon
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight mb-4 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            Your first step towards
            <span className="relative block mt-2">
              your <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">dream job</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#3B82F6]/10 rounded-full -z-10 hidden md:block"></span>
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            We're building a platform that helps recent graduates and students find their perfect first job.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <CountdownTimer targetDate={launchDate} />
          </div>
          
          {/* Learn More Button */}
          <div className="flex justify-center mb-24 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors">
              <span className="mb-2">Learn more</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                <path d="M8 12L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33334 7.33334L8.00001 12L12.6667 7.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative z-10 container mx-auto px-4 py-16">
        <AboutSection />
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-4 py-8">
        <StatsSection />
      </section>

      {/* Services Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-[#f8faff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in"
              style={{ animationDelay: '700ms' }}
            >
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              icon={FileText}
              title="ATS-Friendly Resume Templates"
              description="Get professionally designed resume templates that will help you pass through Applicant Tracking Systems."
              delay={900}
            />
            
            <ServiceCard 
              icon={BookOpen}
              title="Aptitude Preparation"
              description="Comprehensive practice tests and learning materials to help you ace aptitude assessments."
              delay={1100}
            />
            
            <ServiceCard 
              icon={Briefcase}
              title="Direct Jobs from Employers"
              description="Apply directly to positions posted by employers without intermediaries or extra steps."
              delay={1300}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in"
              style={{ animationDelay: '1400ms' }}
            >
              Key Features
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={ShieldCheck}
              title="No Login, No Spam"
              description="Access our resources without registering, and we promise a spam-free experience."
              delay={1600}
            />
            
            <FeatureCard 
              icon={Users}
              title="Career Guidance"
              description="Get advice directly from employees of top companies across various industries."
              delay={1700}
            />
            
            <FeatureCard 
              icon={BadgeCheck}
              title="Quality Opportunities"
              description="All job listings are verified to ensure they are suitable for entry-level candidates."
              delay={1800}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 mt-10">
        <div className="container mx-auto px-4 py-8">
          <div 
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm animate-fade-in"
            style={{ animationDelay: '2000ms' }}
          >
            <div>
              &copy; {new Date().getFullYear()} FirstJob. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.linkedin.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0077B5]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#1DA1F2]"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/firstjobindia.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#E1306C]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <Link 
                to="/admin"
                className="transition-colors duration-300 hover:text-primary ml-2"
                aria-label="Admin Dashboard"
              >
                <Lock className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
