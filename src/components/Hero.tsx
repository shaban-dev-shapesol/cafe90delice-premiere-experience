import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroCafeSpread from '@/assets/hero-cafe-spread.jpg';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-preview');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCafeSpread})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl heading-premium mb-8 text-shadow animate-fade-in-up">
              Cafe90Delice
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-6 text-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Exceptional Coffee & Artisanal Treats
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
              Where every cup tells a story of craftsmanship and passion, served in our beautiful cafe
            </p>
            
            <div className="flex justify-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
              <Button onClick={scrollToMenu} className="btn-premium hover:scale-105 transition-all duration-300">
                Explore Our Menu
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;