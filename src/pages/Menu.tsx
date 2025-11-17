import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Hot Drinks',
      items: [
        { name: 'Hot Chocolate', price: '£3.00', description: 'Rich and creamy hot chocolate', image: '/placeholder.svg' },
        { name: 'Mocha', price: '£3.00', description: 'Perfect blend of coffee and chocolate', image: '/placeholder.svg' },
        { name: 'English Tea', price: '£3.00', description: 'Traditional English breakfast tea', image: '/placeholder.svg' },
        { name: 'Pink Tea', price: '£3.00', description: 'Aromatic and colorful tea blend', image: '/placeholder.svg' },
        { name: 'Karak/Desi Tea', price: '£3.00', description: 'Spiced tea with milk', image: '/placeholder.svg' },
        { name: 'Moroccan Tea', price: '£3.00', description: 'Mint-infused Moroccan tea', image: '/placeholder.svg' },
        { name: 'Green/Mint Tea', price: '£3.00', description: 'Refreshing green tea with mint', image: '/placeholder.svg' },
      ]
    },
    {
      title: 'Coffee Menu',
      items: [
        { name: 'Rich (Intense) Coffee', price: '£3.00', description: 'Bold and intense coffee blend', image: '/placeholder.svg' },
        { name: 'Arabian Coffee', price: '£3.00', description: 'Traditional Arabian coffee', image: '/placeholder.svg' },
        { name: 'English Coffee', price: '£3.00', description: 'Classic English coffee blend', image: '/placeholder.svg' },
        { name: 'Brazilian Coffee', price: '£3.00', description: 'Smooth Brazilian coffee beans', image: '/placeholder.svg' },
        { name: 'Turkish Coffee', price: '£3.00', description: 'Strong traditional Turkish coffee', image: '/placeholder.svg' },
        { name: 'Columbian Coffee', price: '£3.00', description: 'Premium Columbian coffee', image: '/placeholder.svg' },
        { name: 'Dragon', price: '£4.00', description: 'Cloudy & Spicy coffee creation', image: '/placeholder.svg' },
        { name: 'Unicorn', price: '£4.00', description: 'Cloudy & Sweet coffee delight', image: '/placeholder.svg' },
        { name: 'Phoenix', price: '£4.00', description: 'Freshness of coffee perfection', image: '/placeholder.svg' },
      ]
    },
    {
      title: 'Signature Drinks',
      items: [
        { name: 'Infusion', price: '£3.00', description: 'Coffee, Ice Cream, Chocolate, Cream, Chocolate Shavings', image: '/placeholder.svg' },
        { name: 'Berry Rich', price: '£3.00', description: 'Crushed Berries, Ice Cream, Coffee, Biscuit', image: '/placeholder.svg' },
        { name: 'AFFOGATO Single Shot', price: '£3.00', description: 'Espresso shot over vanilla ice cream', image: '/placeholder.svg' },
        { name: 'AFFOGATO Double Shot', price: '£3.00', description: 'Double espresso shot over vanilla ice cream', image: '/placeholder.svg' },
        { name: 'Fruit Berry Shake', price: '£3.50', description: 'Fresh berry blend shake', image: '/placeholder.svg' },
        { name: 'Ice Cream Shake', price: '£4.00', description: 'Blended with your flavour of ice cream', image: '/placeholder.svg' },
      ]
    },
    {
      title: 'Cold Drinks',
      items: [
        { name: 'Iced Tea', price: '£3.00', description: 'Refreshing iced tea', image: '/placeholder.svg' },
        { name: 'Chocolate Chip Frappe', price: '£3.00', description: 'Chocolate chip frappe delight', image: '/placeholder.svg' },
        { name: 'Hazelnut & Cream Frappe', price: '£3.00', description: 'Creamy hazelnut frappe', image: '/placeholder.svg' },
        { name: 'Cream Frappe', price: '£3.00', description: 'Classic cream frappe', image: '/placeholder.svg' },
        { name: 'Caramel Frappe', price: '£3.00', description: 'Sweet caramel frappe', image: '/placeholder.svg' },
        { name: 'Karak Coffee', price: '£3.00', description: 'Spiced iced coffee', image: '/placeholder.svg' },
        { name: 'Strawberry Daiquiri', price: '£5.00', description: 'Fresh strawberry blend', image: '/placeholder.svg' },
        { name: 'Wild Forest', price: '£5.00', description: 'Wild berry forest blend', image: '/placeholder.svg' },
        { name: 'Exotic Palm', price: '£5.00', description: 'Tropical palm fruit blend', image: '/placeholder.svg' },
        { name: 'Gold Dust', price: '£5.00', description: 'Golden fruit creation', image: '/placeholder.svg' },
        { name: 'Night Fog', price: '£5.00', description: 'Mysterious smoky blend', image: '/placeholder.svg' },
        { name: 'Frozen Enchantment', price: '£5.00', description: 'Magical frozen creation', image: '/placeholder.svg' },
        { name: 'Storm Breeze', price: '£5.00', description: 'Refreshing storm blend', image: '/placeholder.svg' },
        { name: 'Sunset Silk', price: '£5.00', description: 'Creamy sunset creation', image: '/placeholder.svg' },
        { name: 'Cloud Coconut', price: '£5.00', description: 'Coconut cloud delight', image: '/placeholder.svg' },
      ]
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Red Velvet Cake', price: '£3.00', description: 'Luxurious red velvet cake', image: '/placeholder.svg' },
        { name: 'Carrot Cake', price: '£3.00', description: 'Moist carrot cake with cream cheese frosting', image: '/placeholder.svg' },
        { name: 'Cheese Cake', price: '£3.00', description: 'Creamy cheesecake slice', image: '/placeholder.svg' },
        { name: 'Chocolate Mousse', price: '£4.00', description: 'Decadent chocolate mousse', image: '/placeholder.svg' },
        { name: 'Raspberry Mousse', price: '£4.00', description: 'Fresh raspberry mousse', image: '/placeholder.svg' },
        { name: 'Lemon Mousse', price: '£4.00', description: 'Zesty lemon mousse', image: '/placeholder.svg' },
        { name: 'Vegan Chocolate Mousse', price: '£4.00', description: 'Plant-based chocolate mousse', image: '/placeholder.svg' },
        { name: 'Chocolate Pudding', price: '£5.00', description: 'Classic chocolate pudding', image: '/placeholder.svg' },
        { name: 'Bread Pudding', price: '£5.00', description: 'Traditional bread pudding', image: '/placeholder.svg' },
        { name: 'Flan', price: '£5.00', description: 'Creamy caramel flan', image: '/placeholder.svg' },
        { name: 'Tapioca Pudding', price: '£5.00', description: 'Traditional tapioca pudding', image: '/placeholder.svg' },
        { name: 'Pressed Croissant & Chocolate Dipped', price: '£6.00', description: 'Crispy croissant with chocolate', image: '/placeholder.svg' },
        { name: 'Lemon Meringue Pie', price: '£6.50', description: 'Tangy lemon pie with fluffy meringue', image: '/placeholder.svg' },
        { name: 'Chocolate Churros with Dipping Sauces', price: '£7.00', description: 'Crispy churros with chocolate sauce', image: '/placeholder.svg' },
      ]
    },
    {
      title: 'Sandwiches',
      items: [
        { name: 'Tuna Sandwich', price: '£5.00', description: 'Fresh tuna sandwich', image: '/placeholder.svg' },
        { name: 'Onion Sandwich', price: '£5.00', description: 'Caramelized onion sandwich', image: '/placeholder.svg' },
        { name: 'Sweet Corn Sandwich', price: '£5.00', description: 'Sweet corn delight', image: '/placeholder.svg' },
        { name: 'Pepper Sandwich', price: '£5.00', description: 'Bell pepper sandwich', image: '/placeholder.svg' },
        { name: 'Cheese Sandwich', price: '£5.00', description: 'Classic cheese sandwich', image: '/placeholder.svg' },
        { name: 'Green Chilli Sandwich', price: '£5.00', description: 'Spicy green chilli sandwich', image: '/placeholder.svg' },
      ]
    },
    {
      title: 'Acai Bowls',
      items: [
        { name: 'Oatmeal Bowl', price: '£5.00', description: 'Nutritious oatmeal acai bowl', image: '/placeholder.svg' },
        { name: 'Green Matcha Bowl', price: '£5.00', description: 'Energizing matcha acai bowl', image: '/placeholder.svg' },
        { name: 'Blue Island Bowl', price: '£5.00', description: 'Tropical blue spirulina bowl', image: '/placeholder.svg' },
        { name: 'Coconut Bowl', price: '£5.00', description: 'Creamy coconut acai bowl', image: '/placeholder.svg' },
        { name: 'Gold Coast Bowl', price: '£5.00', description: 'Golden turmeric acai bowl', image: '/placeholder.svg' },
        { name: 'Earthy Nut Bowl', price: '£5.00', description: 'Nutty protein acai bowl', image: '/placeholder.svg' },
        { name: 'Pink Pitaya Bowl', price: '£5.00', description: 'Vibrant dragon fruit bowl', image: '/placeholder.svg' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-light text-center text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of artisanal drinks and treats
            </p>
          </div>
        </section>

        {/* Menu Categories with Tabs */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={menuCategories[0].title} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center mb-12 h-auto gap-2 bg-transparent border-b border-border pb-2">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.title}
                    value={category.title}
                    className="text-sm md:text-base px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary bg-transparent text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuCategories.map((category) => (
                <TabsContent key={category.title} value={category.title} className="mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {category.items.map((item) => (
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;