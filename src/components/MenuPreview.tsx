import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coffee, Cake, ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const featuredItems = [
    {
      icon: Coffee,
      name: 'Dragon Coffee',
      price: '£4.00',
      description: 'Cloudy & Spicy coffee creation - our signature blend',
      category: 'Signature'
    },
    {
      icon: Cake,
      name: 'Chocolate Churros',
      price: '£7.00',
      description: 'Crispy churros with decadent chocolate dipping sauces',
      category: 'Dessert'
    },
    {
      icon: Coffee,
      name: 'Affogato Double Shot',
      price: '£3.00',
      description: 'Double espresso shot over vanilla ice cream',
      category: 'Specialty'
    },
    {
      icon: Cake,
      name: 'Lemon Meringue Pie',
      price: '£6.50',
      description: 'Tangy lemon pie with fluffy meringue topping',
      category: 'Dessert'
    }
  ];

  return (
    <section className="section-padding bg-background animate-on-scroll">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-premium mb-6">
            Featured Menu Items
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Discover our most popular creations, crafted with premium ingredients and expert technique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={item.name}
              className="card-premium card-hover p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <span className="text-sm text-primary/70 font-medium mb-2 block">
                    {item.category}
                  </span>
                </div>
              </div>
              <p className="text-premium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu">
            <Button className="btn-premium group">
              See Full Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;