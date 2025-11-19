import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TopHeader from '@/components/TopHeader';
import Footer from '@/components/Footer';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-on-scroll">
          <div className="flex justify-center">
            <CheckCircle className="w-24 h-24 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We've received your message and will get back to you as soon as possible. 
              We look forward to serving you at Café 90 Délice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg">
              <Link to="/">
                Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/menu">
                View Our Menu
              </Link>
            </Button>
          </div>

          <div className="pt-12 border-t border-border/50 max-w-md mx-auto">
            <p className="text-sm text-muted-foreground">
              Have questions? Call us at{' '}
              <a href="tel:+441615555555" className="text-primary hover:underline">
                (0161) 555-5555
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
