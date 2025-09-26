import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialMediaSection from '@/components/SocialMediaSection';
import { Calendar, Music, Users, Coffee, Phone, Mail } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      date: '2024-01-15',
      title: 'Live Jazz Evening',
      time: '7:00 PM - 10:00 PM',
      description: 'Join us for an intimate evening of live jazz music with local artists.',
      icon: Music,
      type: 'Music'
    },
    {
      date: '2024-01-20',
      title: 'Coffee Cupping Workshop',
      time: '2:00 PM - 4:00 PM',
      description: 'Learn the art of coffee tasting with our expert baristas.',
      icon: Coffee,
      type: 'Workshop'
    },
    {
      date: '2024-01-25',
      title: 'Community Art Exhibition',
      time: 'All Day',
      description: 'Featuring works from local artists. Exhibition runs for two weeks.',
      icon: Users,
      type: 'Exhibition'
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
              Events & Experiences
            </h1>
            <p className="text-xl leading-relaxed slide-up delay-300">
              Discover our calendar of special events, workshops, and community gatherings 
              that make Cafe90Delice more than just a café.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium text-foreground mb-6">
                Upcoming Events
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join us for these special occasions that bring our community together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.title}
                  className="card-elegant p-6 hover-lift fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                    <event.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center mb-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-GB', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-4">
                    {event.time}
                  </div>
                  
                  <p className="text-body-elegant mb-6">
                    {event.description}
                  </p>
                  
                  <button className="btn-outline-premium w-full hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Events */}
        <section className="py-20 bg-accent">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-foreground mb-6">
              Host Your Private Event
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Looking for the perfect venue for your special occasion? Our cozy café 
              can be reserved for private events, corporate meetings, and celebrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center fade-in delay-100">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Corporate Events</h3>
                <p className="text-body-elegant">Perfect for meetings, workshops, and team building.</p>
              </div>
              <div className="text-center fade-in delay-200">
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Celebrations</h3>
                <p className="text-body-elegant">Birthdays, anniversaries, and special occasions.</p>
              </div>
              <div className="text-center fade-in delay-300">
                <Music className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Cultural Events</h3>
                <p className="text-body-elegant">Art exhibitions, book launches, and performances.</p>
              </div>
            </div>
            <a 
              href="mailto:reservations@cafe90delice.co.uk"
              className="btn-primary-elegant hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Inquire About Private Events
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium mb-6">
              Ready to Join Our Events?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Reserve your spot at our upcoming events or inquire about hosting your own private event.
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
                href="mailto:reservations@cafe90delice.co.uk"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Event Inquiry
              </a>
            </div>
          </div>
        </section>
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Events;