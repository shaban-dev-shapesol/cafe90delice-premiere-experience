import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Award, Users, Leaf } from 'lucide-react';
import cafeInterior from '@/assets/cafe-interior.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every cup is crafted with dedication and attention to detail, ensuring exceptional quality in every sip.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest beans and ingredients, working with trusted suppliers who share our commitment to quality.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building connections and creating a welcoming space where everyone feels at home is at the heart of what we do.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We are committed to environmental responsibility, supporting fair trade and implementing eco-friendly practices.'
    }
  ];

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
                Where It All Began
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-body-elegant space-y-6">
                  <p>
                    Founded in 2018, Cafe90Delice emerged from a simple yet profound vision: 
                    to create a space where exceptional coffee meets genuine human connection. 
                    Our founders, passionate about the art of coffee and the warmth of community, 
                    set out to establish more than just a café.
                  </p>
                  <p>
                    Located in the heart of the UK, we have become a beloved gathering place 
                    for coffee enthusiasts, remote workers, friends catching up, and anyone 
                    seeking a moment of respite in their day. Our commitment to quality extends 
                    beyond our beverages to every aspect of the experience we provide.
                  </p>
                  <p>
                    From our carefully sourced beans to our thoughtfully designed space, 
                    every element reflects our dedication to creating something truly special. 
                    We believe that great coffee is an art form, and our skilled baristas 
                    are the artists who bring this vision to life.
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
        <section className="py-20 bg-accent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These principles guide everything we do, from selecting our beans 
                to creating memorable experiences for our guests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-elegant p-6 text-center hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body-elegant">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
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
              <button className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground/90 transition-[var(--transition-smooth)]">
                Visit Our Café
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-lg font-medium transition-[var(--transition-smooth)]">
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