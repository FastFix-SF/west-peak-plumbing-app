import React from 'react';
import { Shield, Clock, MapPin } from 'lucide-react';

const HeroTrustIndicators = () => {
  const indicators = [
    { icon: Shield, label: "15+ Years Experience" },
    { icon: Clock, label: "24/7 Emergency Service" },
    { icon: MapPin, label: "Locally Owned & Operated" }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 border-t border-white/20">
      {indicators.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-white/80">
          <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroTrustIndicators;
