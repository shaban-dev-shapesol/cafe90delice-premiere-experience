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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl heading-premium mb-8 text-shadow animate-fade-in-up">
              Cafe90Delice
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-6 text-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
              <button className="w-full sm:w-auto btn-premium hover:scale-105 transition-all duration-300">
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto glass-effect text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
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