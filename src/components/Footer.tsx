import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/cafe_delice_/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61560319606863', label: 'Facebook' },
  ];

  const quickLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Reservations', href: '/contact' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-light mb-4 tracking-tight">
              Cafe90Delice
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Your neighborhood café where every cup is crafted with care and every guest is treated like family. 
              Join us for an unforgettable coffee experience in the heart of the UK.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-[var(--transition-quick)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-[var(--transition-quick)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  3-5 Keepers Quay<br />
                  Ancoats, Manchester M4 6GL<br />
                  United Kingdom
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="tel:+442012345678" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  +44 20 1234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="mailto:hello@cafe90delice.co.uk" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  hello@cafe90delice.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Mon-Fri: 7:00 AM - 8:00 PM</div>
                  <div>Sat-Sun: 8:00 AM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Cafe90Delice. All rights reserved. | Crafted with love in the UK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;