import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, Cake, Sandwich, Wine } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: 'Coffee & Beverages',
      items: [
        { name: 'Signature Espresso', price: '£3.50', description: 'Rich, full-bodied espresso with notes of chocolate and caramel' },
        { name: 'Artisan Cappuccino', price: '£4.20', description: 'Perfectly steamed milk with beautiful latte art' },
        { name: 'Cold Brew Special', price: '£4.80', description: 'Smooth, refreshing cold brew with a hint of vanilla' },
        { name: 'Golden Turmeric Latte', price: '£4.50', description: 'Warming spices with oat milk and honey' },
      ]
    },
    {
      icon: Cake,
      title: 'Pastries & Sweets',
      items: [
        { name: 'Fresh Croissants', price: '£3.20', description: 'Buttery, flaky pastries baked fresh daily' },
        { name: 'Artisan Sourdough', price: '£4.80', description: 'House-made sourdough with seasonal spreads' },
        { name: 'Chocolate Éclair', price: '£4.50', description: 'Delicate choux pastry filled with rich chocolate cream' },
        { name: 'Seasonal Fruit Tart', price: '£5.20', description: 'Fresh seasonal fruits on vanilla custard base' },
      ]
    },
    {
      icon: Sandwich,
      title: 'Light Meals',
      items: [
        { name: 'Avocado Toast Deluxe', price: '£8.50', description: 'Smashed avocado, poached egg, sourdough, microgreens' },
        { name: 'Gourmet Panini', price: '£9.20', description: 'Selection of artisanal fillings on freshly baked bread' },
        { name: 'Mediterranean Bowl', price: '£10.80', description: 'Quinoa, roasted vegetables, feta, herb dressing' },
        { name: 'Soup of the Day', price: '£6.50', description: 'Homemade soup served with artisan bread' },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in">
              Our Menu
            </h1>
            <p className="text-xl leading-relaxed slide-up delay-300">
              Discover our carefully curated selection of artisanal coffee, fresh pastries, 
              and light meals crafted with premium ingredients and attention to detail.
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {menuCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-16 last:mb-0">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <category.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-medium text-foreground tracking-tight">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="card-elegant p-6 hover-lift"
                      style={{ animationDelay: `${(categoryIndex * 200) + (itemIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-medium text-foreground">
                          {item.name}
                        </h3>
                        <span className="text-lg font-medium text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-body-elegant">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-accent py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-foreground mb-6">
              Ready to Experience Our Menu?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Reserve your table today and let us craft the perfect café experience for you.
            </p>
            <button className="btn-primary-elegant">
              Reserve Your Table
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;