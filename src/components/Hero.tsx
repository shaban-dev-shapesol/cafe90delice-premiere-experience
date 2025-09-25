import { ArrowDown } from 'lucide-react';
import cafeInterior from '@/assets/cafe-interior.jpg';

const Hero = () => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('featured');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={cafeInterior}
          alt="Cafe90Delice elegant interior with warm lighting and modern design"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-hero fade-in mb-6">
          Cafe90Delice
        </h1>
        <p className="text-subtitle slide-up mb-8 delay-300">
          Where artisanal coffee meets warm hospitality
        </p>
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto slide-up delay-500 leading-relaxed">
          Experience the perfect blend of premium coffee, fresh pastries, and cozy atmosphere 
          in the heart of the UK. Every cup tells a story, every visit creates a memory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up delay-700">
          <button className="btn-primary-elegant hover-lift">
            Explore Our Menu
          </button>
          <button className="btn-outline-elegant hover-lift">
            Reserve Your Table
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;