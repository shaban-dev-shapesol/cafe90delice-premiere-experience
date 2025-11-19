import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TopHeader from '@/components/TopHeader';
import Footer from '@/components/Footer';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopHeader />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-card border border-border rounded-lg shadow-lg p-12 text-center space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" strokeWidth={3} />
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="font-heading text-4xl font-bold text-foreground">
                Thank You!
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your message has been received. We'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                <Link to="/menu">
                  View Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
