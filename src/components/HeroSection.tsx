import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-surf-shop.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Surf, Yoga et Détente
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            - Maroc -
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez l'expérience authentique du surf camp au cœur de Taghazout. 
            Entre vagues légendaires et traditions berbères.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 animate-float hover:scale-105 transition-transform duration-300"
          >
            RÉSERVEZ VOTRE SÉJOUR
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-sunset/20 rounded-full animate-wave hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;