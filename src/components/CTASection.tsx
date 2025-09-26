import { Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-premium text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Visit Us?
        </h2>
        <p className="text-lg mb-6 text-primary-foreground/90 max-w-xl mx-auto">
          Reserve your table today or get in touch for any inquiries. 
          We can't wait to serve you the perfect coffee experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="tel:+442012345678"
            className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call to Reserve
          </a>
          <a 
            href="mailto:hello@cafe90delice.co.uk"
            className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;