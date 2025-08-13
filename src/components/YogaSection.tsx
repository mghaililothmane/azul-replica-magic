import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sunrise, Mountain } from "lucide-react";
import yogaImage from "@/assets/yoga-rooftop.jpg";

const YogaSection = () => {
  return (
    <section id="yoga" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-up order-2 lg:order-1">
            <Card className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500">
              <CardContent className="p-0">
                <img 
                  src={yogaImage} 
                  alt="Session de yoga sur le rooftop avec vue océan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>
          </div>
          
          {/* Text Content */}
          <div className="animate-fade-up order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-sunset animate-float" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">LE YOGA</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Que vous désiriez effectuer une <span className="font-semibold text-sunset">retraite yoga</span> dédiée, 
              profiter de notre <span className="font-semibold text-primary">package surf & yoga au Maroc</span>, 
              ou encore pratiquer le yoga par vous même, Azul Guesthouse offrira 
              <span className="font-semibold text-foreground"> un cadre idéal pour vivre votre passion</span>!
            </p>
            
            <div className="bg-card/50 rounded-lg p-6 mb-8 shadow-warm">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Notre Rooftop Unique</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Notre <span className="font-semibold text-foreground">rooftop calme et sa vue à 360°</span> 
                est un lieu parfait pour pratiquer! Imaginez-vous en posture du guerrier face à l'océan Atlantique, 
                avec les montagnes de l'Atlas en arrière-plan.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Sunrise className="w-5 h-5 text-sunset" />
                <span className="text-foreground">Sessions yoga au lever et coucher du soleil</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-sunset" />
                <span className="text-foreground">Instructeurs certifiés et bienveillants</span>
              </div>
              <div className="flex items-center gap-3">
                <Mountain className="w-5 h-5 text-sunset" />
                <span className="text-foreground">Vue panoramique à 360° sur l'océan</span>
              </div>
            </div>
            
            <Button variant="sunset" size="lg" className="animate-surf-slide">
              Explorer yoga & détente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSection;