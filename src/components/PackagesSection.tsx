import { Calendar, Users, Utensils, Gift, Building, Heart, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PackagesSection = () => {
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
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl heading-premium mb-6">
            Celebration Packages
          </h2>
          <p className="text-lg text-premium max-w-2xl mx-auto">
            From intimate anniversaries to grand celebrations, we create unforgettable experiences 
            tailored to your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="package-card animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-premium mb-4 text-sm leading-relaxed">
                {pkg.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
                <div className="flex items-center gap-1 text-premium">
                  <Users className="w-3 h-3 text-primary" />
                  <span>{pkg.capacity}</span>
                </div>
                <div className="flex items-center gap-1 text-premium">
                  <Calendar className="w-3 h-3 text-primary" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-premium">
                  <Utensils className="w-3 h-3 text-primary" />
                  <span>{pkg.price}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3 text-sm">Package Includes:</h4>
                <ul className="space-y-1">
                  {pkg.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-premium text-xs">
                      <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                  {pkg.features.length > 3 && (
                    <li className="text-primary text-xs font-medium">
                      +{pkg.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 btn-premium text-sm">
                  Book Package
                </Button>
                <Button variant="outline" className="flex-1 btn-outline-premium text-sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center card-premium animate-on-scroll">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Need Something Custom?
          </h3>
          <p className="text-premium mb-6 max-w-xl mx-auto text-sm">
            Every celebration is unique. Our team specializes in creating bespoke packages 
            tailored to your specific needs and vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="btn-gold-premium">
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </Button>
            <Button variant="outline" className="btn-outline-premium">
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;