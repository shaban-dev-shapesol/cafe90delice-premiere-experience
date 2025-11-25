import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactInfo = [{
    icon: MapPin,
    title: 'Visit Us',
    details: ['3-5 Keepers Quay', 'Ancoats, Manchester M4 6GL', 'United Kingdom']
  }, {
    icon: Phone,
    title: 'Call Us',
    details: ['+44 20 1234 5678']
  }, {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@cafe90delice.co.uk', 'reservations@cafe90delice.co.uk']
  }, {
    icon: Clock,
    title: 'Opening Hours',
    details: ['Mon-Sun: 9:00 AM - 7:00 PM']
  }];
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in">
              Get In Touch
            </h1>
            <p className="text-xl leading-relaxed slide-up delay-300">
              We'd love to hear from you. Whether you have questions, feedback, 
              or want to make a reservation, we're here to help.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => <div key={info.title} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                   <div className="space-y-2">
                     {info.details.map((detail, idx) => {
                  // Make phone numbers and emails clickable
                  if (info.title === 'Call Us' && detail.startsWith('+')) {
                    return <a key={idx} href={`tel:${detail}`} className="text-gray-600 text-sm leading-relaxed break-words overflow-wrap-anywhere hover:text-primary transition-colors duration-200 cursor-pointer">
                             {detail}
                           </a>;
                  }
                  if (info.title === 'Email Us' && detail.includes('@')) {
                    return <a key={idx} href={`mailto:${detail}`} className="text-gray-600 text-sm leading-relaxed break-words overflow-wrap-anywhere hover:text-primary transition-colors duration-200 cursor-pointer">
                             {detail}
                           </a>;
                  }
                  return <p key={idx} className="text-gray-600 text-sm leading-relaxed break-words overflow-wrap-anywhere">
                           {detail}
                         </p>;
                })}
                   </div>
                </div>)}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-quick)]" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-quick)]" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-quick)]" placeholder="+44 20 1234 5678" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-quick)]">
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="event">Private Event</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-[var(--transition-quick)] resize-vertical" placeholder="Tell us how we can help you..." />
                  </div>

                  <button type="submit" className="btn-primary-elegant w-full flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-medium text-foreground mb-6">
                  Find Us
                </h2>
                <div className="rounded-lg overflow-hidden h-80 mb-6 shadow-md">
                  <iframe
                    src="https://www.google.com/maps?q=3-5+Keepers+Quay,+Ancoats,+Manchester+M4+6GL&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Café 90 Délice Location"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Getting Here</h3>
                    <p className="text-body-elegant">
                      We're conveniently located in the heart of Manchester, 
                      just a 5-minute walk from Manchester Piccadilly Station. 
                      Street parking and nearby car parks available.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Public Transport</h3>
                    <p className="text-body-elegant">
                      Bus routes 42, 43, and 44 stop directly outside. 
                      Manchester Metrolink accessible via Market Street tram stop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        
      </main>
      <Footer />
    </div>;
};
export default Contact;