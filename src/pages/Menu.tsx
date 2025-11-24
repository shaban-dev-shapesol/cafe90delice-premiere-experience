import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee, Cake, CakeSlice, Croissant, UtensilsCrossed, Cookie, Droplet, CupSoda, Wine } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import SocialMediaSection from "@/components/SocialMediaSection";
import { useEffect } from "react";
import TopHeader from "@/components/TopHeader";

// Import menu images
import painAuChocolat from "@/assets/menu/pain-au-chocolat-1.jpg";
import croissantCreamTower from "@/assets/menu/croissant-cream-tower.jpg";
import croissantPlain from "@/assets/menu/croissant-plain-1.jpg";
import croissantBerriesTower from "@/assets/menu/croissant-tower-berries-1.jpg";
import croissantSandwich from "@/assets/menu/croissant-sandwich.jpg";
import cakeRedVelvet from "@/assets/menu/cake-red-velvet-1.jpg";
import cakeChocolateMousse from "@/assets/menu/cake-chocolate-mousse-1.jpg";
import cakePistachio from "@/assets/menu/cake-pistachio-drip-1.jpg";
import cakeCaramel from "@/assets/menu/cake-caramel-1.jpg";
import cakeVanilla from "@/assets/menu/cake-vanilla-pearl-1.jpg";
import cakeFerrero from "@/assets/menu/cake-ferrero-1.jpg";
import cakeLemonBundt from "@/assets/menu/cake-lemon-bundt-1.jpg";
import cakeMarbleBundt from "@/assets/menu/cake-marble-bundt.jpg";
import cakeStrawberryBundt from "@/assets/menu/cake-strawberry-bundt-action-1.jpg";
import cheesecakeOreo from "@/assets/menu/cheesecake-oreo-1.jpg";
import cheesecakeStrawberry from "@/assets/menu/cheesecake-strawberry.jpg";
import eclairChocolate from "@/assets/menu/eclair-chocolate.jpg";
import dessertTiramisu from "@/assets/menu/dessert-tiramisu-mini.jpg";
import dessertVanillaNapoleon from "@/assets/menu/dessert-vanilla-napoleon-1.jpg";
import tartStrawberry from "@/assets/menu/tart-strawberry-1.jpg";
import tartMixedBerries from "@/assets/menu/tart-mixed-berries-1.jpg";
import pavlovaMixedFruit from "@/assets/menu/pavlova-mixed-fruit-1.jpg";
import donutChocolate from "@/assets/menu/donut-chocolate.jpg";
import donutOreo from "@/assets/menu/donut-oreo-1.jpg";
import donutCrumbCaramel from "@/assets/menu/donut-crumb-caramel-action-1.jpg";
import cookieChocolateChip from "@/assets/menu/cookie-chocolate-chip-1.jpg";
import cookieRedVelvet from "@/assets/menu/cookie-red-velvet-white-chocolate.jpg";
import cupcakeCherry from "@/assets/menu/cupcake-cherry-1.jpg";
import cupcakeCream from "@/assets/menu/cupcake-cream.jpg";
import meringueStrawberry from "@/assets/menu/meringue-strawberry-1.jpg";
import lattePistachio from "@/assets/menu/latte-pistachio-1.jpg";
import cappuccinoLatteArt from "@/assets/menu/cappuccino-latte-art-1.jpg";
import hotChocolate from "@/assets/menu/hot-chocolate-1.jpg";
import teaMoroccan from "@/assets/menu/tea-moroccan-set-1.jpg";
import teaSetFlowers from "@/assets/menu/tea-set-flowers-1.jpg";
import latteMatchaStrawberry from "@/assets/menu/latte-matcha-strawberry-1.jpg";
import drinkMintLime from "@/assets/menu/drink-mint-lime-1.jpg";
import drinkOrangeGradient from "@/assets/menu/drink-orange-gradient-1.jpg";
import drinkBlueGradient from "@/assets/menu/drink-blue-gradient-ice-action.jpg";
import milkshakeChocolate from "@/assets/menu/milkshake-chocolate-1.jpg";
import milkshakeStrawberry from "@/assets/menu/milkshake-strawberry-1.jpg";
const Menu = () => {
  const menuCategories = [
    {
      icon: Croissant,
      title: "SWEET CROISSANTS",
      items: [
        { name: "Pain Au chocolate", price: "£4.99", description: "", image: "/placeholder.svg" },
        { name: "Biscoff Croissant", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Strawberry Cream Croissant", price: "£7.70", description: "", image: "/placeholder.svg" },
        { name: "Almond Croissant", price: "£5.70", description: "", image: "/placeholder.svg" },
        { name: "Croissant", price: "£4.20", description: "", image: "/placeholder.svg" },
        { name: "Cinnamon Roll", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Raspberry Rain Du Chocolate", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Raspberry Cream Croissant", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Pistachio Croissant", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Blueberry Croissant", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Oreo Croissant", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Dubai Kunafa Croissant", price: "£7.50", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "SAVOURY CROISSANTS",
      items: [
        { name: "Croissant Turkey", price: "£8.20", description: "", image: "/placeholder.svg" },
        { name: "Quiche", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Mozzarella Croissant", price: "£8.20", description: "", image: "/placeholder.svg" },
        { name: "Tuna Croissant", price: "£8.20", description: "", image: "/placeholder.svg" },
        { name: "Salami Croissant (served with crisps)", price: "£8.20", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: Cake,
      title: "CAKES & DESSERTS",
      items: [
        { name: "Carrot Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Chocolate Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Coffee Walnut Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Red Velvet Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Chocolate Fudge", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Victoria Sponge Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Orange Chocolate", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Oreo Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Biscoff Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Vanilla Slice", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Tiramisu", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Vanilla Jam", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Eclair", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Pistachio Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Rainbow Cake", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Lemon Blueberry", price: "£6.70", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: CakeSlice,
      title: "TARTS & PIES",
      items: [
        { name: "Mixed Berry Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Tortrau Citron", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Chocolate Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Eccles Fechan Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Sticky Toffee", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Strawberry  Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Key Lime Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Pear & Almond Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Mini Salted Caramel ", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Pecan Pie", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Mixed Berries Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Manchester Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Raspberry Delight", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Chocolate Salted Caramel", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Bakewell Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Apple & Caramel Tart", price: "£6.70", description: "", image: "/placeholder.svg" },
        { name: "Lemon Meringue ", price: "£6.70", description: "", image: "/placeholder.svg" },
      ],
    },

    {
      icon: Cookie,
      title: "BROWNIES & TREATS",
      items: [
        { name: "Cookies &  Brownies", price: "£4.80", description: "", image: "/placeholder.svg" },
        { name: "Chocolate Brownies", price: "£4.90", description: "", image: "/placeholder.svg" },
        { name: "White Cornflakes Brownies", price: "£4.90", description: "", image: "/placeholder.svg" },
        { name: "Big Chocolate Muffin", price: "£4.80", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: Cookie,
      title: "COOKIES",
      items: [
        { name: "Triple Chocolate Cookies", price: "£4.90", description: "", image: "/placeholder.svg" },
        { name: "Red Velvet Cookies", price: "£4.90", description: "", image: "/placeholder.svg" },
        { name: "Pistachio Cookies", price: "£4.90", description: "", image: "/placeholder.svg" },
        { name: "Nutella Cookies", price: "£4.90", description: "", image: "/placeholder.svg" },
        { name: "Biscoff Cookies", price: "£4.90", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: CakeSlice,
      title: "LOAF BAR CAKES",
      items: [
        { name: "Loaf Bar Cake", price: "£4.80", description: "", image: "/placeholder.svg" },
        { name: "Pistachio Loaf Bar Cake", price: "£4.80", description: "", image: "/placeholder.svg" },
        { name: "Chocolate Marble Loaf Bar Cake", price: "£4.80", description: "", image: "/placeholder.svg" },
        { name: "Lemon Loaf Bar Cake", price: "£4.80", description: "", image: "/placeholder.svg" },
        { name: "Lemon Strawberry Loaf Bar Cake", price: "£4.80", description: "", image: "/placeholder.svg" },
        { name: "Ginger Cinnamon Loaf Bar Cake", price: "£4.80", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: Cake,
      title: "SPECIAL PARTY CAKES",
      items: [
        { name: "Red Velvet", price: "£75.00", description: "", image: "/placeholder.svg" },
        { name: "Pistachio", price: "£80.00", description: "", image: "/placeholder.svg" },
        { name: "Chocolate", price: "£75.00", description: "", image: "/placeholder.svg" },
        { name: "Biscoff", price: "£75.00", description: "", image: "/placeholder.svg" },
        { name: "Kunafa Chocolate", price: "£80.00", description: "", image: "/placeholder.svg" },
        { name: "Vanilla & Strawberry", price: "£75.00", description: "", image: "/placeholder.svg" },
        { name: "Carrot Cake", price: "£75.00", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: Cake,
      title: "FRAPPES",
      items: [
        { name: "Caramel", price: "£5.50", description: "", image: "/placeholder.svg" },
        { name: "Mocha Hazelnut ", price: "£5.50", description: "", image: "/placeholder.svg" },
        { name: "Choc Chip ", price: "£5.50", description: "", image: "/placeholder.svg" },
        { name: "Pistachio ", price: "£5.90", description: "", image: "/placeholder.svg" },
        { name: "Vanilla ", price: "£5.50", description: "", image: "/placeholder.svg" },
      ],
    },

    {
      icon: Coffee,
      title: "TEAS",
      items: [
        { name: "Moroccan Tea", price: "£4.50", description: "", image: "/placeholder.svg" },
        { name: "Karak Tea", price: "£3.90", description: "", image: "/placeholder.svg" },
        { name: "English Tea", price: "£3.50", description: "", image: "/placeholder.svg" },
        { name: "Earl Grey Tea", price: "£3.50", description: "", image: "/placeholder.svg" },
        { name: "Pink Tea", price: "£4.50", description: "", image: "/placeholder.svg" },
        { name: "Green Tea", price: "£3.50", description: "", image: "/placeholder.svg" },
        { name: "Peppermint Tea", price: "£3.50", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: Coffee,
      title: "COFFEE & HOT DRINKS",
      items: [
        { name: "Cappuccino", price: "£3.90", description: "", image: "/placeholder.svg" },
        { name: "Flat White", price: "£3.70", description: "", image: "/placeholder.svg" },
        { name: "Americano", price: "£3.50", description: "", image: "/placeholder.svg" },
        { name: "Mocha", price: "£4.20", description: "", image: "/placeholder.svg" },
        { name: "Espresso", price: "£3.20", description: "", image: "/placeholder.svg" },
        { name: "Latte", price: "£3.80", description: "", image: "/placeholder.svg" },
        { name: "Pistachio Latte", price: "£5.50", description: "", image: "/placeholder.svg" },
        { name: "Spanish Latte", price: "£5.20", description: "", image: "/placeholder.svg" },
        { name: "Hot Chocolate", price: "£4.20", description: "", image: "/placeholder.svg" },
      ],
    },

    {
      icon: CupSoda,
      title: "ICED MATCHA",
      items: [
        { name: "Strawberry Matcha", price: "£5.70", description: "", image: "/placeholder.svg" },
        { name: "Blueberry Matcha", price: "£5.70", description: "", image: "/placeholder.svg" },
        { name: "Mango Matcha", price: "£5.70", description: "", image: "/placeholder.svg" },
        { name: "White Chocolate Matcha", price: "£5.70", description: "", image: "/placeholder.svg" },
      ],
    },

    {
      icon: CupSoda,
      title: "ICED DRINKS",
      items: [
        { name: "Spanish Latte", price: "£5.50", description: "", image: "/placeholder.svg" },
        { name: "Pistachio Latte", price: "£5.50", description: "", image: "/placeholder.svg" },
        { name: "Americano", price: "£4.00", description: "", image: "/placeholder.svg" },
        { name: "Mocha", price: "£5.20", description: "", image: "/placeholder.svg" },
        { name: " Latte", price: "£4.50", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: CupSoda,
      title: "MOCKTAILS",
      items: [
        { name: "Mojito", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Strawberry Lemonade", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Blue Lagoon", price: "£7.50", description: "", image: "/placeholder.svg" },
        { name: "Pina Colada", price: "£7.50", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: CupSoda,
      title: "MILKSHAKES",
      items: [
        { name: "Vanilla", price: "£5.99", description: "", image: "/placeholder.svg" },
        { name: "Strawberry ", price: "£6.20", description: "", image: "/placeholder.svg" },
        { name: "Chocolate ", price: "£5.99", description: "", image: "/placeholder.svg" },
        { name: "Caramel ", price: "£5.99", description: "", image: "/placeholder.svg" },
        { name: "Oreo  ", price: "£5.99", description: "", image: "/placeholder.svg" },
        { name: "Biscoff  ", price: "£5.99", description: "", image: "/placeholder.svg" },
        { name: "Pistachio", price: "£6.50", description: "", image: "/placeholder.svg" },
      ],
    },
    {
      icon: Wine,
      title: "OTHER BEVERAGES",
      items: [
        { name: "Soft Drinks", price: "£3.00", description: "", image: "/placeholder.svg" },
        { name: "Juice ", price: "£4.30", description: "", image: "/placeholder.svg" },
        { name: "Water ", price: "£2.00", description: "", image: "/placeholder.svg" },
      ],
    },
  ];
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <Seo
        title="Explore Our Signature Coffee Menu"
        description="Browse our handcrafted coffee blends, fresh bakes, and seasonal favourites."
      /> */}
      <div className="min-h-screen bg-background">
        <TopHeader />
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-muted/30 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-light text-center text-foreground mb-4">Our Menu</h1>
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
                        <Card
                          key={item.name}
                          className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="aspect-square bg-muted relative overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <CardContent className="p-4 text-center">
                            <h3 className="font-medium text-sm md:text-base text-foreground mb-1 line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-2 line-clamp-2">
                              {item.description}
                            </p>
                            <p className="text-sm md:text-base font-semibold text-primary">{item.price}</p>
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
    </>
  );
};

export default Menu;
