import { Coffee, Croissant, Users } from 'lucide-react';
import coffeeHero from '@/assets/coffee-hero.jpg';
import pastries from '@/assets/pastries.jpg';
const FeaturedSection = () => {
  const features = [{
    icon: Coffee,
    title: 'Artisanal Coffee',
    description: 'Carefully sourced beans roasted to perfection, crafted by expert baristas who understand the art of coffee.',
    image: coffeeHero
  }, {
    icon: Croissant,
    title: 'Fresh Pastries',
    description: 'Daily baked pastries and treats made with premium ingredients and traditional techniques.',
    image: pastries
  }, {
    icon: Users,
    title: 'Warm Community',
    description: 'A welcoming space where locals and visitors come together to share moments and create connections.',
    image: coffeeHero
  }];
  return <section className="py-16 bg-muted/30">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Choose Cafe90Delice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Great coffee is more than just a beverage—it's a moment of connection 
            and a celebration of craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={feature.title} className="card-elegant p-8 text-center hover-lift group" style={{
          animationDelay: `${index * 200}ms`
        }}>
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-[var(--transition-smooth)]"></div>
              </div>
              
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              
              <h3 className="text-2xl font-medium text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-body-elegant leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default FeaturedSection;