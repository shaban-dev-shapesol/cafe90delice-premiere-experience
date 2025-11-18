import coffeeCup from '@/assets/coffee-cup-logo.jpg';
import tiffanyBag from '@/assets/tiffany-bag-logo.jpg';
import dessertCounter from '@/assets/dessert-counter.jpg';
import cafeSeating from '@/assets/cafe-seating.jpg';
import cakesDisplay from '@/assets/cakes-display.jpg';

const GallerySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
            Experience Parisian Elegance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From our signature Tiffany blue and gold branding to our beautifully designed interior, 
            every detail reflects our commitment to creating a memorable experience.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Feature - Cakes Display */}
          <div className="lg:col-span-2 lg:row-span-2 animate-on-scroll opacity-0 translate-y-8">
            <div className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] h-full">
              <img 
                src={cakesDisplay} 
                alt="Artisan cakes and pastries display at Café 90 Délice"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-medium mb-2">Artisan Cakes</h3>
                  <p className="text-sm">Handcrafted delights with Parisian flair</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coffee Cup */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] aspect-square bg-muted">
              <img 
                src={coffeeCup} 
                alt="Café 90 Délice branded coffee cup with gold logo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <h3 className="text-lg font-medium">Our Signature Cup</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Tiffany Bag */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] aspect-square bg-muted">
              <img 
                src={tiffanyBag} 
                alt="Elegant Tiffany blue branded gift bag from Café 90 Délice"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-foreground">
                  <h3 className="text-lg font-medium">Elegant Packaging</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Dessert Counter */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-350">
            <div className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] aspect-video">
              <img 
                src={dessertCounter} 
                alt="Elegant dessert counter with Tiffany blue décor and gold accents at Café 90 Délice"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-medium mb-2">Our Dessert Counter</h3>
                  <p className="text-sm">A showcase of handcrafted pastries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cafe Seating */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <div className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] aspect-video">
              <img 
                src={cafeSeating} 
                alt="Interior seating area at Café 90 Délice with Parisian-inspired décor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-foreground">
                  <h3 className="text-2xl font-medium mb-2">Welcoming Interior</h3>
                  <p className="text-sm">Parisian elegance meets Manchester charm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500">
          <p className="text-lg text-muted-foreground mb-6">
            Every visit is a journey to Paris, right by the canal.
          </p>
          <a 
            href="/about"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
