import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+212673575021" className="flex items-center gap-1 hover:text-primary-glow transition-colors">
              <Phone className="w-4 h-4" />
              +212 673 575 021
            </a>
            <a href="mailto:contact@azul-guesthouse.com" className="flex items-center gap-1 hover:text-primary-glow transition-colors">
              <Mail className="w-4 h-4" />
              contact@azul-guesthouse.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">AZUL SURF</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#surf" className="text-foreground hover:text-primary transition-colors font-medium">
              Le Surf
            </a>
            <a href="#yoga" className="text-foreground hover:text-primary transition-colors font-medium">
              Le Yoga
            </a>
            <a href="#guesthouse" className="text-foreground hover:text-primary transition-colors font-medium">
              Guesthouse
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors font-medium">
              Packages
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Galeries
            </a>
            <Button variant="hero" size="lg">
              RÉSERVEZ VOTRE SÉJOUR
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="#surf" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Le Surf
              </a>
              <a href="#yoga" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Le Yoga
              </a>
              <a href="#guesthouse" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Guesthouse
              </a>
              <a href="#packages" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Packages
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Galeries
              </a>
              <Button variant="hero" size="lg" className="mt-4">
                RÉSERVEZ VOTRE SÉJOUR
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;