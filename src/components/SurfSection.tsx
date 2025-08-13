import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Users, MapPin } from "lucide-react";
import surfImage from "@/assets/surf-session.jpg";

const SurfSection = () => {
  return (
    <section id="surf" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Waves className="w-8 h-8 text-accent animate-wave" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">LE SURF</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Azul Guesthouse est sans aucun doute votre meilleur choix lorsque vous recherchez un 
              <span className="font-semibold text-primary"> surf camp au Maroc</span> dans la région de Taghazout.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nous sommes nés et avons grandi à Tamraght et nous surfons ici depuis notre enfance. 
              <span className="font-semibold text-foreground"> Nous connaissons notre littoral comme personne.</span> 
              Et nous sommes impatients de <span className="font-semibold text-accent">partager nos connaissances avec vous</span>!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground">Instructeurs locaux expérimentés</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">8 minutes de marche de la plage d'Imourane</span>
              </div>
              <div className="flex items-center gap-3">
                <Waves className="w-5 h-5 text-primary" />
                <span className="text-foreground">Accès aux vagues légendaires de Taghazout</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Il existe un package pour chaque surfeur: du <span className="font-semibold text-primary">package surf school</span> 
              pour les débutants au <span className="font-semibold text-accent">package surf guiding</span> pour les explorateurs. 
              Nous avons ce qu'il vous faut !
            </p>
            
            <Button variant="ocean" size="lg" className="animate-surf-slide">
              Découvrir nos packages surf
            </Button>
          </div>
          
          {/* Image */}
          <div className="animate-fade-up">
            <Card className="overflow-hidden shadow-surf hover:shadow-glow transition-all duration-500">
              <CardContent className="p-0">
                <img 
                  src={surfImage} 
                  alt="Session de surf au coucher du soleil à Azul Guesthouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfSection;