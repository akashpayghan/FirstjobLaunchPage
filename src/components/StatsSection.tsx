
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { SendFeedback } from '@/api/subscriberApi';

const StatsSection = () => {
  const [feedbackOption, setFeedbackOption] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await SendFeedback(feedbackOption, suggestion);
      
      if (response.success) {
        toast.success('Thank you for your feedback!');
        setFeedbackOption('');
        setSuggestion('');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Feedback error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div 
        className="p-8 rounded-xl bg-gradient-to-br from-[#FFE29F] to-[#FFA99F] border border-border/30 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Do You Like this Website Idea?</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup 
            value={feedbackOption} 
            onValueChange={setFeedbackOption}
            className="flex flex-wrap gap-4 mb-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Definitely Yes!" id="option1" />
              <Label htmlFor="option1" className="text-foreground font-medium">Definitely Yes!</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes, it's promising!" id="option2" />
              <Label htmlFor="option2" className="text-foreground font-medium">Yes, it's promising!</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes, with improvements" id="option3" />
              <Label htmlFor="option3" className="text-foreground font-medium">Yes, with improvements</Label>
            </div>
          </RadioGroup>
          
          <div>
            <Label htmlFor="suggestion" className="font-medium text-foreground">
              Your suggestions (optional)
            </Label>
            <Textarea 
              id="suggestion"
              placeholder="Share your thoughts or suggestions..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="mt-1 w-full bg-white/80 border-none"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !feedbackOption}
            className="bg-gradient-to-r from-[#6E59A5] to-[#9b87f5] hover:from-[#5E49A5] hover:to-[#8B77F5] text-white w-full py-2"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default StatsSection;
