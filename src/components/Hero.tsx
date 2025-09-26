import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import cafeHeroMain from '@/assets/cafe-hero-main.jpg';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"
          style={{ backgroundImage: `url(${cafeHeroMain})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white section-padding w-full">
        <div className="container-premium">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl heading-premium mb-8 text-shadow animate-fade-in-up bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                Cafe90Delice
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light mb-6 text-shadow animate-fade-in-up text-accent-foreground" style={{ animationDelay: '0.2s' }}>
                Coffee & Desserts
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-4 font-light" style={{ animationDelay: '0.4s' }}>
                Where every cup tells a story of craftsmanship and every dessert is a work of art
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
                <button className="w-full sm:w-auto btn-premium hover:scale-105 transition-all duration-500 shadow-elegant text-lg px-8 py-4">
                  Discover Our Story
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="w-full sm:w-auto glass-effect text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:bg-white/25 hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3 border border-white/20 text-lg">
                  <Play className="w-6 h-6" />
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce z-40">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;