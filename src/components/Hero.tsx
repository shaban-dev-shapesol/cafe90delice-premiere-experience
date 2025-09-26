import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import coffeeHero from '@/assets/coffee-hero.jpg';
import cafeInterior from '@/assets/cafe-interior.jpg';
import pastries from '@/assets/pastries.jpg';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: coffeeHero,
      title: "Exceptional Coffee Experience",
      subtitle: "Where every cup tells a story of craftsmanship and passion"
    },
    {
      image: cafeInterior,
      title: "Perfect for Every Celebration",
      subtitle: "From intimate gatherings to corporate events, we create unforgettable moments"
    },
    {
      image: pastries,
      title: "Artisanal Desserts & Treats",
      subtitle: "Handcrafted with premium ingredients and traditional techniques"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in-up">
              Cafe90Delice
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 text-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg sm:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button className="btn-premium">
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="glass-effect text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
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