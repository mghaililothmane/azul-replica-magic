import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SurfSection from "@/components/SurfSection";
import YogaSection from "@/components/YogaSection";
import GuesthouseSection from "@/components/GuesthouseSection";
import PackagesSection from "@/components/PackagesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SurfSection />
        <YogaSection />
        <GuesthouseSection />
        <PackagesSection />
      </main>
    </div>
  );
};

export default Index;