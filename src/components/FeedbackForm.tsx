
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SendFeedback } from '@/api/subscriberApi';
import { toast } from 'sonner';

const FeedbackForm = () => {
  const [option, setOption] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!option) {
      toast.error('Please select an option');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await SendFeedback(option, suggestion);
      
      if (response.success) {
        setIsSubmitted(true);
        setOption('');
        setSuggestion('');
        toast.success(response.message);
        
        // Reset submission state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Feedback submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Do You Like this Website Idea?</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="yes-definitely" 
                name="feedback-option" 
                value="Yes, definitely!" 
                checked={option === "Yes, definitely!"}
                onChange={(e) => setOption(e.target.value)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="yes-definitely">Yes, definitely!</label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="yes-good" 
                name="feedback-option" 
                value="Yes, it's good" 
                checked={option === "Yes, it's good"}
                onChange={(e) => setOption(e.target.value)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="yes-good">Yes, it's good</label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="yes-needs-work" 
                name="feedback-option" 
                value="Yes, but needs work" 
                checked={option === "Yes, but needs work"}
                onChange={(e) => setOption(e.target.value)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="yes-needs-work">Yes, but needs work</label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="suggestion" className="block text-sm font-medium mb-1">
            Any suggestions for improvement?
          </label>
          <textarea
            id="suggestion"
            placeholder="Share your thoughts..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="w-full h-24 p-2 border rounded-md"
            disabled={isSubmitting || isSubmitted}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting || isSubmitted || !option}
          className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white shadow-md"
        >
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Thank you!' : 'Submit Feedback'}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
