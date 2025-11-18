import { Button } from '@/components/ui/button';
import { Sparkles, ExternalLink } from 'lucide-react';

const SisterBusinessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Side */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://marinasalonbyfkz.co.uk/assets/HeroImage-BLunKFJY.jpg"
                alt="Marina Salon by FKZ Interior"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">From the Same Founder</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Discover Marina Salon by FKZ
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience luxury beauty and hair transformations at our sister salon in Manchester. 
                Founded by Fatima, Marina Salon by FKZ offers the same commitment to excellence, 
                elegance, and personalized service you've come to love.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center border-x border-border">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5★</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722', '_blank')}
                >
                  Book Appointment
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open('https://marinasalonbyfkz.co.uk/', '_blank')}
                >
                  Visit Salon Website
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic">
                Located at Keepers Quay, Manchester
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SisterBusinessSection;
