
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative px-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background/80 z-0" />
      
      <div className="relative z-10 text-center max-w-md animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg transition-all duration-300 hover:bg-accent/90"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
