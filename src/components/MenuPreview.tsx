import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const featuredItems = [
    {
      name: 'Dragon Coffee',
      price: '£4.00',
      description: 'Cloudy & Spicy coffee creation',
      image: '/placeholder.svg'
    },
    {
      name: 'Chocolate Churros',
      price: '£7.00',
      description: 'Crispy churros with chocolate dipping sauces',
      image: '/placeholder.svg'
    },
    {
      name: 'Affogato Double Shot',
      price: '£3.00',
      description: 'Double espresso shot over vanilla ice cream',
      image: '/placeholder.svg'
    },
    {
      name: 'Lemon Meringue Pie',
      price: '£6.50',
      description: 'Tangy lemon pie with fluffy meringue topping',
      image: '/placeholder.svg'
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featuredItems.map((item) => (
            <Card key={item.name} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-sm md:text-base text-foreground mb-1 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-sm md:text-base font-semibold text-primary">
                  {item.price}
                </p>
              </CardContent>
            </Card>
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