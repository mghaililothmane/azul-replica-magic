import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bed, Coffee, Wifi } from "lucide-react";
import guesthouseImage from "@/assets/guesthouse-room.jpg";

const GuesthouseSection = () => {
  return (
    <section id="guesthouse" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8 text-primary animate-float" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">LA GUESTHOUSE</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nichée au coeur de Tamraght, dans la baie de Taghazout, notre 
              <span className="font-semibold text-foreground"> maison typiquement marocaine</span> vous accueillera 
              dans les meilleures conditions possibles lors de votre séjour.
            </p>
            
            <div className="bg-gradient-ocean/10 rounded-lg p-6 mb-8 border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-3">Authenticité & Confort</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parfait équilibre entre modernité et racines culturelles berbères, les 
                <span className="font-semibold text-foreground"> chambres spacieuses et aérées</span>, 
                accolées à leurs <span className="font-semibold text-primary">salons privatifs</span>, 
                vous offriront tout le confort dont vous pouvez rêver!
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-surf">
                <Bed className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Chambres spacieuses</p>
                  <p className="text-sm text-muted-foreground">Salons privatifs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-surf">
                <Coffee className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Petit-déjeuner local</p>
                  <p className="text-sm text-muted-foreground">Cuisine marocaine</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-surf">
                <Wifi className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Wifi gratuit</p>
                  <p className="text-sm text-muted-foreground">Connexion rapide</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-surf">
                <Home className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Rooftop terrasse</p>
                  <p className="text-sm text-muted-foreground">Vue à 360°</p>
                </div>
              </div>
            </div>
            
            <Button variant="default" size="lg" className="animate-surf-slide">
              Découvrir nos chambres
            </Button>
          </div>
          
          {/* Image */}
          <div className="animate-fade-up">
            <Card className="overflow-hidden shadow-surf hover:shadow-glow transition-all duration-500">
              <CardContent className="p-0">
                <img 
                  src={guesthouseImage} 
                  alt="Chambre confortable de la guesthouse Azul avec décoration marocaine"
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

export default GuesthouseSection;