import { Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground py-20 overflow-hidden animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fade-in">
          Ready to Visit Us?
        </h2>
        <p className="text-xl sm:text-2xl mb-10 leading-relaxed text-muted-foreground animate-fade-in delay-200">
          Reserve your table today or get in touch for any inquiries.<br className="hidden sm:block" />
          We can't wait to serve you the perfect coffee experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-400">
          <a 
            href="tel:+442012345678"
            className="group relative bg-primary text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 group-hover:from-primary/90 group-hover:to-primary transition-all duration-300"></div>
            <Phone className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Call to Reserve</span>
          </a>
          <a 
            href="mailto:hello@cafe90delice.co.uk"
            className="group relative border-2 border-primary text-primary bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;