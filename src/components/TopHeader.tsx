import { Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-2 text-sm">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-6 text-primary-foreground/90">
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-primary-foreground transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@cafe90delice.com" className="flex items-center space-x-2 hover:text-primary-foreground transition-colors">
              <Mail size={14} />
              <span className="hidden md:inline">info@cafe90delice.com</span>
            </a>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span className="hidden lg:inline">Mon-Sun: 7am - 10pm</span>
            </div>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex items-center space-x-4 text-primary-foreground/90">
            <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
