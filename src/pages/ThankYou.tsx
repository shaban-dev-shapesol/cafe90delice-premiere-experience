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
      
      <main className="flex-1 flex items-center justify-center px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-xl w-full">
          <div className="bg-card/80 backdrop-blur-sm border-0 rounded-2xl shadow-xl p-8 sm:p-12 text-center space-y-8 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <CheckCircle className="w-14 h-14 text-primary" strokeWidth={2.5} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Your message has been received. We'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild size="lg" className="min-w-[160px] shadow-md hover:shadow-lg transition-shadow">
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px] border-2 hover:bg-primary/5">
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
