import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const googleReviews = [
    {
      id: 1,
      name: 'Marie Laurent',
      rating: 5,
      text: 'Absolutely love this place! The coffee is exceptional and the pastries are fresh every morning. The staff is always friendly and the atmosphere is perfect for both work and relaxation. Highly recommend the croissants!',
      avatar: 'ML',
      date: '2 weeks ago',
      platform: 'Google'
    },
    {
      id: 2,
      name: 'Thomas Anderson',
      rating: 5,
      text: 'Best café in the area! Great coffee, cozy atmosphere, and excellent service. I come here every morning before work. The baristas know how to make the perfect espresso. Will definitely keep coming back.',
      avatar: 'TA',
      date: '1 month ago',
      platform: 'Google'
    },
    {
      id: 3,
      name: 'Sophie Martin',
      rating: 4,
      text: 'Lovely little café with a warm atmosphere. The coffee is really good and the selection of pastries is impressive. Sometimes gets a bit crowded during lunch time, but overall a great place to meet friends.',
      avatar: 'SM',
      date: '3 weeks ago',
      platform: 'Google'
    },
    {
      id: 4,
      name: 'David Chen',
      rating: 5,
      text: 'Outstanding quality! The attention to detail in both food and service is remarkable. Had their specialty latte and almond croissant - both were perfect. The place has a real authentic French café feel to it.',
      avatar: 'DC',
      date: '1 week ago',
      platform: 'Google'
    },
    {
      id: 5,
      name: 'Emma Rodriguez',
      rating: 5,
      text: 'What a gem! Discovered this place recently and it has quickly become my favorite spot for weekend brunches. The coffee is expertly crafted and the staff always makes you feel welcome. Love the interior design too!',
      avatar: 'ER',
      date: '4 days ago',
      platform: 'Google'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % googleReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [googleReviews.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % googleReviews.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-premium">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl heading-premium mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-premium max-w-2xl mx-auto">
            See what our customers are saying about Café 90 Delice on Google.
          </p>
        </div>

        {/* Google Review Carousel */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <div className="card-premium relative overflow-hidden animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium text-sm">
                {googleReviews[currentTestimonial].avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-medium text-foreground">
                    {googleReviews[currentTestimonial].name}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(googleReviews[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-premium mb-3">
                  {googleReviews[currentTestimonial].date}
                </div>
                <blockquote className="text-sm text-premium leading-relaxed mb-3">
                  {googleReviews[currentTestimonial].text}
                </blockquote>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs text-premium">Posted on Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-[var(--transition-smooth)] z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-[var(--transition-smooth)] z-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Review Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {googleReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary' 
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Review Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
          <div className="text-center card-premium">
            <div className="text-3xl font-semibold text-primary mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-current" />
              ))}
            </div>
            <div className="text-premium text-sm">Average Rating</div>
          </div>
          
          <div className="text-center card-premium">
            <div className="text-3xl font-semibold text-primary mb-2">200+</div>
            <div className="text-premium text-sm">Celebrations Hosted</div>
          </div>
          
          <div className="text-center card-premium">
            <div className="text-3xl font-semibold text-primary mb-2">95%</div>
            <div className="text-premium text-sm">Return Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;