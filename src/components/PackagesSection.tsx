import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Compass, Heart, Star } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      icon: GraduationCap,
      title: "Surf School",
      level: "Débutant / Intermédiaire",
      description: "Apprenez à surfer avec nos instructeurs locaux expérimentés. Cours adaptés à votre niveau avec matériel inclus.",
      features: [
        "5 cours de surf avec instructeur",
        "Matériel de surf inclus",
        "Transport vers les spots",
        "Théorie et sécurité",
        "Petit groupe (max 6 personnes)"
      ],
      price: "À partir de 350€",
      variant: "default" as const,
      popular: false
    },
    {
      icon: Compass,
      title: "Surf Guiding",
      level: "Intermédiaire / Avancé",
      description: "Explorez les meilleurs spots secrets de la côte avec nos guides locaux. Découvrez des vagues parfaites.",
      features: [
        "Guide surf expérimenté",
        "Spots secrets et cachés",
        "Transport 4x4 inclus",
        "Analyse des conditions",
        "Flexibilité totale"
      ],
      price: "À partir de 280€",
      variant: "ocean" as const,
      popular: true
    },
    {
      icon: Heart,
      title: "Surf & Yoga",
      level: "Tous Niveaux",
      description: "Combinez surf et yoga pour une expérience complète. Équilibrez votre corps et votre esprit face à l'océan.",
      features: [
        "Sessions surf + yoga",
        "Cours yoga rooftop",
        "Petit-déjeuner sain",
        "Massage relaxant",
        "Méditation coucher soleil"
      ],
      price: "À partir de 420€",
      variant: "sunset" as const,
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            DES PACKS POUR TOUTES VOS ENVIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos packages surf & yoga conçus pour tous les niveaux. 
            Une expérience unique au cœur de Taghazout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.title}
              className={`relative overflow-hidden shadow-surf hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-up ${
                pkg.popular ? 'ring-2 ring-accent border-accent' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Populaire
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center">
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </CardTitle>
                <p className="text-primary font-medium">{pkg.level}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-2xl font-bold text-foreground mb-4">{pkg.price}</p>
                  <Button 
                    variant={pkg.variant} 
                    size="lg" 
                    className="w-full"
                  >
                    Réserver ce package
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-6">
            Besoin d'un package personnalisé ? Contactez-nous pour créer votre séjour sur mesure.
          </p>
          <Button variant="hero" size="lg">
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;