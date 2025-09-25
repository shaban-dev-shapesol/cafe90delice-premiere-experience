import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, Cake, Sandwich, Wine } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: 'Hot Drinks',
      items: [
        { name: 'Hot Chocolate', price: '£3.00', description: 'Rich and creamy hot chocolate' },
        { name: 'Mocha', price: '£3.00', description: 'Perfect blend of coffee and chocolate' },
        { name: 'English Tea', price: '£3.00', description: 'Traditional English breakfast tea' },
        { name: 'Pink Tea', price: '£3.00', description: 'Aromatic and colorful tea blend' },
        { name: 'Karak/Desi Tea', price: '£3.00', description: 'Spiced tea with milk' },
        { name: 'Moroccan Tea', price: '£3.00', description: 'Mint-infused Moroccan tea' },
        { name: 'Green/Mint Tea', price: '£3.00', description: 'Refreshing green tea with mint' },
      ]
    },
    {
      icon: Coffee,
      title: 'Coffee Menu',
      items: [
        { name: 'Rich (Intense) Coffee', price: '£3.00', description: 'Bold and intense coffee blend' },
        { name: 'Arabian Coffee', price: '£3.00', description: 'Traditional Arabian coffee' },
        { name: 'English Coffee', price: '£3.00', description: 'Classic English coffee blend' },
        { name: 'Brazilian Coffee', price: '£3.00', description: 'Smooth Brazilian coffee beans' },
        { name: 'Turkish Coffee', price: '£3.00', description: 'Strong traditional Turkish coffee' },
        { name: 'Columbian Coffee', price: '£3.00', description: 'Premium Columbian coffee' },
        { name: 'Dragon', price: '£4.00', description: 'Cloudy & Spicy coffee creation' },
        { name: 'Unicorn', price: '£4.00', description: 'Cloudy & Sweet coffee delight' },
        { name: 'Phoenix', price: '£4.00', description: 'Freshness of coffee perfection' },
      ]
    },
    {
      icon: Coffee,
      title: 'Signature Drinks',
      items: [
        { name: 'Infusion', price: '£3.00', description: 'Coffee, Ice Cream, Chocolate, Cream, Chocolate Shavings' },
        { name: 'Berry Rich', price: '£3.00', description: 'Crushed Berries, Ice Cream, Coffee, Biscuit' },
        { name: 'AFFOGATO Single Shot', price: '£3.00', description: 'Espresso shot over vanilla ice cream' },
        { name: 'AFFOGATO Double Shot', price: '£3.00', description: 'Double espresso shot over vanilla ice cream' },
        { name: 'Fruit Berry Shake', price: '£3.50', description: 'Fresh berry blend shake' },
        { name: 'Ice Cream Shake', price: '£4.00', description: 'Blended with your flavour of ice cream' },
      ]
    },
    {
      icon: Coffee,
      title: 'Cold Drinks',
      items: [
        { name: 'Iced Tea', price: '£3.00', description: 'Refreshing iced tea' },
        { name: 'Chocolate Chip Frappe', price: '£3.00', description: 'Chocolate chip frappe delight' },
        { name: 'Hazelnut & Cream Frappe', price: '£3.00', description: 'Creamy hazelnut frappe' },
        { name: 'Cream Frappe', price: '£3.00', description: 'Classic cream frappe' },
        { name: 'Caramel Frappe', price: '£3.00', description: 'Sweet caramel frappe' },
        { name: 'Karak Coffee', price: '£3.00', description: 'Spiced iced coffee' },
        { name: 'Strawberry Daiquiri', price: '£5.00', description: 'Fresh strawberry blend' },
        { name: 'Wild Forest', price: '£5.00', description: 'Wild berry forest blend' },
        { name: 'Exotic Palm', price: '£5.00', description: 'Tropical palm fruit blend' },
        { name: 'Gold Dust', price: '£5.00', description: 'Golden fruit creation' },
        { name: 'Night Fog', price: '£5.00', description: 'Mysterious smoky blend' },
        { name: 'Frozen Enchantment', price: '£5.00', description: 'Magical frozen creation' },
        { name: 'Storm Breeze', price: '£5.00', description: 'Refreshing storm blend' },
        { name: 'Sunset Silk', price: '£5.00', description: 'Creamy sunset creation' },
        { name: 'Cloud Coconut', price: '£5.00', description: 'Coconut cloud delight' },
      ]
    },
    {
      icon: Cake,
      title: 'Desserts',
      items: [
        { name: 'Chocolate Cake', price: '£3.00', description: 'Rich chocolate cake slice' },
        { name: 'Vanilla Cake', price: '£3.00', description: 'Classic vanilla cake slice' },
        { name: 'Red Velvet Cake', price: '£3.00', description: 'Luxurious red velvet cake' },
        { name: 'Carrot Cake', price: '£3.00', description: 'Moist carrot cake with cream cheese frosting' },
        { name: 'Cheese Cake', price: '£3.00', description: 'Creamy cheesecake slice' },
        { name: 'Chocolate Mousse', price: '£4.00', description: 'Decadent chocolate mousse' },
        { name: 'Raspberry Mousse', price: '£4.00', description: 'Fresh raspberry mousse' },
        { name: 'Lemon Mousse', price: '£4.00', description: 'Zesty lemon mousse' },
        { name: 'Vegan Chocolate Mousse', price: '£4.00', description: 'Plant-based chocolate mousse' },
        { name: 'Chocolate Pudding', price: '£5.00', description: 'Classic chocolate pudding' },
        { name: 'Bread Pudding', price: '£5.00', description: 'Traditional bread pudding' },
        { name: 'Flan', price: '£5.00', description: 'Creamy caramel flan' },
        { name: 'Tapioca Pudding', price: '£5.00', description: 'Traditional tapioca pudding' },
        { name: 'Pressed Croissant & Chocolate Dipped', price: '£6.00', description: 'Crispy croissant with chocolate' },
        { name: 'Lemon Meringue Pie', price: '£6.50', description: 'Tangy lemon pie with fluffy meringue' },
        { name: 'Chocolate Churros with Dipping Sauces', price: '£7.00', description: 'Crispy churros with chocolate sauce' },
      ]
    },
    {
      icon: Sandwich,
      title: 'Sandwiches',
      items: [
        { name: 'Tuna Sandwich', price: '£5.00', description: 'Fresh tuna sandwich' },
        { name: 'Onion Sandwich', price: '£5.00', description: 'Caramelized onion sandwich' },
        { name: 'Sweet Corn Sandwich', price: '£5.00', description: 'Sweet corn delight' },
        { name: 'Pepper Sandwich', price: '£5.00', description: 'Bell pepper sandwich' },
        { name: 'Cheese Sandwich', price: '£5.00', description: 'Classic cheese sandwich' },
        { name: 'Green Chilli Sandwich', price: '£5.00', description: 'Spicy green chilli sandwich' },
      ]
    },
    {
      icon: Wine,
      title: 'Acai Bowls',
      items: [
        { name: 'Oatmeal Bowl', price: '£5.00', description: 'Nutritious oatmeal acai bowl' },
        { name: 'Green Matcha Bowl', price: '£5.00', description: 'Energizing matcha acai bowl' },
        { name: 'Blue Island Bowl', price: '£5.00', description: 'Tropical blue spirulina bowl' },
        { name: 'Coconut Bowl', price: '£5.00', description: 'Creamy coconut acai bowl' },
        { name: 'Gold Coast Bowl', price: '£5.00', description: 'Golden turmeric acai bowl' },
        { name: 'Earthy Nut Bowl', price: '£5.00', description: 'Nutty protein acai bowl' },
        { name: 'Pink Pitaya Bowl', price: '£5.00', description: 'Vibrant dragon fruit bowl' },
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
            <button className="btn-premium hover:scale-105 transition-transform duration-300">
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