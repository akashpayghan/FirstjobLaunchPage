
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [animatedDigit, setAnimatedDigit] = useState<string | null>(null);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        // Check which value changed to animate it
        if (timeLeft.seconds !== seconds) {
          setAnimatedDigit('seconds');
          setTimeout(() => setAnimatedDigit(null), 600);
        } else if (timeLeft.minutes !== minutes) {
          setAnimatedDigit('minutes');
          setTimeout(() => setAnimatedDigit(null), 600);
        } else if (timeLeft.hours !== hours) {
          setAnimatedDigit('hours');
          setTimeout(() => setAnimatedDigit(null), 600);
        } else if (timeLeft.days !== days) {
          setAnimatedDigit('days');
          setTimeout(() => setAnimatedDigit(null), 600);
        }
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    calculateTimeLeft(); // Calculate immediately on mount
    
    const timerId = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timerId);
  }, [targetDate, timeLeft]);
  
  // Format number to always have 2 digits
  const formatNumber = (num: number, digits = 2) => {
    return num.toString().padStart(digits, '0');
  };

  const renderTimeUnit = (value: number, label: string, unit: string, digits = 2) => (
    <div className="countdown-box group">
      <div className={cn(
        "text-2xl md:text-4xl font-mono font-bold transition-all duration-300",
        animatedDigit === unit ? "text-accent scale-110" : "text-primary"
      )}>
        {formatNumber(value, digits)}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{label}</div>
    </div>
  );

  return (
    <div className={cn("flex items-center justify-center gap-2 md:gap-4", className)}>
      {renderTimeUnit(timeLeft.days, "Days", "days", timeLeft.days > 99 ? 3 : 2)}
      <div className="text-lg md:text-2xl font-medium text-muted-foreground">:</div>
      {renderTimeUnit(timeLeft.hours, "Hours", "hours")}
      <div className="text-lg md:text-2xl font-medium text-muted-foreground">:</div>
      {renderTimeUnit(timeLeft.minutes, "Mins", "minutes")}
      <div className="text-lg md:text-2xl font-medium text-muted-foreground">:</div>
      {renderTimeUnit(timeLeft.seconds, "Secs", "seconds")}
    </div>
  );
};

export default CountdownTimer;
