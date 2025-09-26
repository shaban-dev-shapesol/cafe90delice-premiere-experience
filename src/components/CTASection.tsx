import { Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium mb-6">
          Ready to Visit Us?
        </h2>
        <p className="text-xl mb-8 leading-relaxed">
          Reserve your table today or get in touch for any inquiries. 
          We can't wait to serve you the perfect coffee experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+442012345678"
            className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call to Reserve
          </a>
          <a 
            href="mailto:hello@cafe90delice.co.uk"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;