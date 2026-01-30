import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Phone, FileText } from 'lucide-react';
import HeroTrustIndicators from './HeroTrustIndicators';
import HeroReviewsPreview from './HeroReviewsPreview';

const HeroContent = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center lg:text-left space-y-6 lg:space-y-8">
      <div className="space-y-4 lg:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-arial font-bold leading-tight">
          Expert Trenchless & <span className="text-accent animate-text-glow animate-best-bounce relative inline-block bg-gradient-to-r from-accent to-primary bg-clip-text">Plumbing Solutions</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Innovative Solutions. Lasting Results. Available 24/7.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
        <Button
          size="lg"
          onClick={() => navigate('/contact')}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse group-hover:animate-glow" />
          <span className="hidden sm:inline">Get Free Estimate</span>
          <span className="sm:hidden">Free Estimate</span>
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => navigate('/services')}
          className="border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg group"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-flash" />
          <span className="hidden sm:inline">Our Services</span>
          <span className="sm:hidden">Services</span>
        </Button>
      </div>

      <HeroTrustIndicators />
      <HeroReviewsPreview />
    </div>
  );
};

export default HeroContent;
