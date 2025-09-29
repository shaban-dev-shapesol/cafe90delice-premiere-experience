import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Users, Utensils, Gift, Building, Heart, Camera, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Packages = () => {
  const packages = [
    {
      id: 'birthday',
      icon: Gift,
      title: 'Birthday Celebration Package',
      subtitle: 'Make their special day unforgettable',
      description: 'Transform your birthday celebration into a magical experience with our specially curated package.',
      image: '/api/placeholder/400/300',
      features: [
        'Custom birthday cake or dessert selection',
        'Decorated private seating area',
        'Complimentary coffee for all guests',
        'Birthday playlist and ambiance lighting',
        'Professional photography session',
        'Personalized menu cards'
      ],
      price: 'From £25 per person',
      duration: '2-3 hours',
      capacity: 'Up to 20 guests'
    },
    {
      id: 'anniversary',
      icon: Heart,
      title: 'Anniversary Package',
      subtitle: 'Celebrate love in an intimate setting',
      description: 'Create romantic memories with our carefully designed anniversary celebration package.',
      image: '/api/placeholder/400/300',
      features: [
        'Reserved romantic corner table',
        'Champagne or prosecco toast',
        'Anniversary cake or dessert platter',
        'Complimentary coffee and petit fours',
        'Rose petals and candlelit ambiance',
        'Commemorative photo'
      ],
      price: 'From £45 per couple',
      duration: '2 hours',
      capacity: 'Couples or small groups'
    },
    {
      id: 'corporate',
      icon: Building,
      title: 'Corporate Events Package',
      subtitle: 'Professional meetings with premium service',
      description: 'Elevate your business meetings and corporate events with our professional package.',
      image: '/api/placeholder/400/300',
      features: [
        'Private meeting space reservation',
        'Premium coffee and tea service',
        'Business lunch or brunch menu',
        'WiFi and presentation facilities',
        'Welcome refreshments',
        'Dedicated event coordinator'
      ],
      price: 'From £18 per person',
      duration: 'Half or full day',
      capacity: '5-40 guests'
    },
    {
      id: 'private',
      icon: Camera,
      title: 'Private Hire Package',
      subtitle: 'Exclusive venue for your special occasion',
      description: 'Have the entire café to yourself for truly exclusive celebrations and events.',
      image: '/api/placeholder/400/300',
      features: [
        'Exclusive access to entire café',
        'Customizable menu options',
        'Professional staff service',
        'Decorations and setup included',
        'Sound system and lighting control',
        'Flexible timing arrangements'
      ],
      price: 'Enquire for pricing',
      duration: 'Flexible',
      capacity: 'Up to 80 guests'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in">
              Celebration Packages
            </h1>
            <p className="text-xl leading-relaxed slide-up delay-300">
              From intimate anniversaries to grand celebrations, we create unforgettable experiences 
              tailored to your special moments. Let us turn your occasion into a cherished memory.
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="card-elegant p-8 hover-lift fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <pkg.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {pkg.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {pkg.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-body-elegant mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        {pkg.capacity}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Utensils className="w-4 h-4 text-primary" />
                        {pkg.price}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-body-elegant">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button className="w-full sm:flex-1 btn-primary-elegant hover:scale-105 transition-all duration-300">
                        Book This Package
                      </Button>
                      <Button variant="outline" className="w-full sm:flex-1 btn-outline-premium hover:scale-105 transition-all duration-300">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center card-elegant p-12 fade-in">
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                Need Something Custom?
              </h3>
              <p className="text-body-elegant mb-8 max-w-2xl mx-auto leading-relaxed">
                Every celebration is unique. Our team specializes in creating bespoke packages 
                tailored to your specific needs, budget, and vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="w-full sm:w-auto btn-primary-elegant hover:scale-105 transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full sm:w-auto btn-outline-premium hover:scale-105 transition-all duration-300">
                  View Package Gallery
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium mb-6">
              Ready to Plan Your Celebration?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contact us today to discuss your event requirements and let us create something truly special for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+442012345678"
                className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call to Book
              </a>
              <a 
                href="mailto:packages@cafe90delice.co.uk"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Package Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;