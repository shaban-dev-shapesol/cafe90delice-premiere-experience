import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cafeInterior from '@/assets/cafe-interior.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={cafeInterior}
              alt="Cafe90Delice story and heritage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in">
              Our Story
            </h1>
            <p className="text-xl leading-relaxed slide-up delay-300">
              Born from a passion for exceptional coffee and warm hospitality, 
              Cafe90Delice represents the perfect blend of tradition and innovation.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-medium text-foreground mb-8 text-center">
                The Story Behind Café 90 Délice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-body-elegant space-y-6">
                  <p>
                    Café 90 Délice was born from Fatima's lifelong love of flavour, hospitality, and Parisian elegance. 
                    Growing up in Paris, she was surrounded by the artistry of fresh pastries, rich coffee, and warm café 
                    culture — experiences that shaped her vision and passion.
                  </p>
                  <p>
                    When she moved to Manchester, Fatima dreamed of bringing a slice of Paris to the city. Inspired by 
                    the beauty of canal-side living and the vibrant local community, she created a space where people could 
                    enjoy authentic flavours, relaxed atmosphere, and exceptional service — all in one elegant setting.
                  </p>
                  <p>
                    Every detail of the café reflects her dedication: from the golden tones and Tiffany blue palette to 
                    the carefully curated menu and welcoming vibe. It's more than just coffee — it's a celebration of taste, 
                    tradition, and timeless style.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <img
                    src={cafeInterior}
                    alt="The story behind Cafe90Delice"
                    className="w-full h-80 object-cover rounded-xl shadow-[var(--shadow-elegant)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        {/* Fatima's Vision Section */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-medium text-foreground mb-6">
              A Vision Brought to Life
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From the golden tones inspired by Parisian cafés to the calming Tiffany blue accents, 
              every element of Café 90 Délice tells a story. It's a place where French elegance meets 
              Manchester's warmth — where every visit feels like a journey to Paris, right by the canal.
            </p>
            <p className="text-xl font-light text-foreground/90 italic">
              "It's more than just coffee — it's a celebration of taste, tradition, and timeless style."
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium mb-6">
              Experience Our Story
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Visit us today and become part of our growing community. 
              We can't wait to share our passion for exceptional coffee with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300">
                Visit Our Café
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                View Our Menu
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;