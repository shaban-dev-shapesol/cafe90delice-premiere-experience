import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & James Mitchell',
      event: 'Anniversary Celebration',
      rating: 5,
      text: 'Cafe90Delice made our 10th anniversary absolutely magical. The attention to detail was incredible - from the rose petals to the personalized menu cards. The staff went above and beyond to make our evening special.',
      image: '/api/placeholder/80/80',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Emma Thompson',
      event: 'Birthday Party',
      rating: 5,
      text: 'My daughter\'s 16th birthday party was perfect! The team decorated the space beautifully, the custom cake was stunning, and all our guests couldn\'t stop talking about the amazing coffee and atmosphere.',
      image: '/api/placeholder/80/80',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'David Richardson',
      event: 'Corporate Event',
      rating: 5,
      text: 'Outstanding service for our quarterly team meeting. The private space was perfect, the food was excellent, and the staff were incredibly professional. Will definitely be booking again.',
      image: '/api/placeholder/80/80',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'Louise & Mark Chen',
      event: 'Engagement Party',
      rating: 5,
      text: 'From the initial consultation to the day of our engagement party, everything was flawless. The team understood our vision perfectly and created an evening we\'ll never forget.',
      image: '/api/placeholder/80/80',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Amanda Foster',
      event: 'Baby Shower',
      rating: 5,
      text: 'The most beautiful baby shower! The décor was elegant, the afternoon tea was delicious, and the staff made sure every detail was perfect. Highly recommend for special occasions.',
      image: '/api/placeholder/80/80',
      date: 'November 2023'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-background to-accent">
      <div className="container-premium">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl heading-premium text-foreground mb-8">
            What Our Guests Say
          </h2>
          <p className="text-xl text-premium max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our guests have to say about their 
            celebration experiences at Cafe90Delice.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="card-premium p-12 text-center relative overflow-hidden animate-on-scroll">
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-premium mb-8 leading-relaxed font-light italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentTestimonial].event}
                  </div>
                  <div className="text-sm text-premium">
                    {testimonials[currentTestimonial].date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-[var(--transition-smooth)] z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-[var(--transition-smooth)] z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>

        {/* Review Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
          <div className="text-center card-premium p-8">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <div className="text-premium">Average Rating</div>
          </div>
          
          <div className="text-center card-premium p-8">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-premium">Celebrations Hosted</div>
          </div>
          
          <div className="text-center card-premium p-8">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-premium">Return Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;