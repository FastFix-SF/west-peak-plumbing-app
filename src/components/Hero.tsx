import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 opacity-20 bg-white/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                Expert Trenchless &
                <span className="block text-accent">Plumbing Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Innovative solutions with lasting results. Available 24/7 for all your plumbing needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Estimate
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/services')}
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-xl"
              >
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-2 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded opacity-80"></div>
              </div>
              <div className="text-xs text-foreground font-medium">Trenchless Repair</div>
              <div className="text-xs text-muted-foreground">CIPP & SIPP</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-2 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded opacity-80"></div>
              </div>
              <div className="text-xs text-foreground font-medium">Sewer Services</div>
              <div className="text-xs text-muted-foreground">Full Service</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-2 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded opacity-80"></div>
              </div>
              <div className="text-xs text-foreground font-medium">Hydro Jetting</div>
              <div className="text-xs text-muted-foreground">High Pressure</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-2 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded opacity-80"></div>
              </div>
              <div className="text-xs text-foreground font-medium">Drain Cleaning</div>
              <div className="text-xs text-muted-foreground">Commercial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
