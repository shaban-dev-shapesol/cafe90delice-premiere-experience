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
import croissantPlain from "@/assets/menu/croissant-plain-1.jpg";
import croissantTowerBerries from "@/assets/menu/croissant-tower-berries-1.jpg";
import croissantCreamTower from "@/assets/menu/croissant-cream-tower.jpg";
import croissantMiniPlain from "@/assets/menu/croissant-mini-plain.jpg";
import croissantSandwich from "@/assets/menu/croissant-sandwich.jpg";
import cakeRedVelvet from "@/assets/menu/cake-red-velvet-1.jpg";
import cakeRedVelvetBerries from "@/assets/menu/cake-red-velvet-berries-1.jpg";
import cakeRedVelvet5 from "@/assets/menu/cake-red-velvet-5.jpg";
import cakeChocolateMousse from "@/assets/menu/cake-chocolate-mousse-1.jpg";
import cakeFerrero4 from "@/assets/menu/cake-ferrero-4.jpg";
import cakeChocolateDrip from "@/assets/menu/cake-chocolate-drip-1.jpg";
import cakeCaramel from "@/assets/menu/cake-caramel-1.jpg";
import cakeFerrero from "@/assets/menu/cake-ferrero-1.jpg";
import cakeBiscoff from "@/assets/menu/cake-biscoff-drip.jpg";
import cakeKunafaChocolate from "@/assets/menu/cake-kunafa-chocolate.jpg";
import cheesecakeOreo from "@/assets/menu/cheesecake-oreo-1.jpg";
import cheesecakeStrawberry from "@/assets/menu/cheesecake-strawberry.jpg";
import cakePistachioChocolateDrip from "@/assets/menu/cake-pistachio-chocolate-drip.jpg";
import cakePistachioDrip from "@/assets/menu/cake-pistachio-drip-1.jpg";
import cakeVanillaPearl from "@/assets/menu/cake-vanilla-pearl-1.jpg";
import cakeBananaCream from "@/assets/menu/cake-banana-cream.jpg";
import dessertVanillaNapoleon from "@/assets/menu/dessert-vanilla-napoleon-1.jpg";
import dessertTiramisuMini from "@/assets/menu/dessert-tiramisu-mini.jpg";
import eclairChocolate from "@/assets/menu/eclair-chocolate.jpg";
import tartMixedBerries from "@/assets/menu/tart-mixed-berries-1.jpg";
import tartStrawberry from "@/assets/menu/tart-strawberry-1.jpg";
import cookieChocolateChip from "@/assets/menu/cookie-chocolate-chip-1.jpg";
import cookieRedVelvetWhiteChocolate from "@/assets/menu/cookie-red-velvet-white-chocolate.jpg";
import cakePistachioBundt from "@/assets/menu/cake-pistachio-bundt.jpg";
import cakeMarbleBundt from "@/assets/menu/cake-marble-bundt.jpg";
import cakeLemonBundt from "@/assets/menu/cake-lemon-bundt-1.jpg";
import cakeStrawberryBundtAction from "@/assets/menu/cake-strawberry-bundt-action-1.jpg";
import cakeCaramelBundtAction from "@/assets/menu/cake-caramel-bundt-action-1.jpg";
import cappuccinoLatteArt from "@/assets/menu/cappuccino-latte-art-1.jpg";
import lattePistachio from "@/assets/menu/latte-pistachio-1.jpg";
import lattePistachioFront from "@/assets/menu/latte-pistachio-front.jpg";
import lattePistachioSprinkle from "@/assets/menu/latte-pistachio-sprinkle-1.jpg";
import hotChocolate from "@/assets/menu/hot-chocolate-1.jpg";
import latteMatchaStrawberry from "@/assets/menu/latte-matcha-strawberry-1.jpg";
import latteMatchaPistachio from "@/assets/menu/latte-matcha-pistachio.jpg";
import drinkLemonLimeMojito from "@/assets/menu/drink-lemon-lime-mojito.jpg";
import drinkStrawberryLime from "@/assets/menu/drink-strawberry-lime.jpg";
import drinkBlueGradientIce from "@/assets/menu/drink-blue-gradient-ice-action.jpg";
import drinkOrangeGradient from "@/assets/menu/drink-orange-gradient-1.jpg";
import milkshakeStrawberry from "@/assets/menu/milkshake-strawberry-1.jpg";
import milkshakeChocolate from "@/assets/menu/milkshake-chocolate-1.jpg";
import teaMoroccanSet from "@/assets/menu/tea-moroccan-set-1.jpg";
import teaSetFlowers from "@/assets/menu/tea-set-flowers-1.jpg";
import teaMoroccanPour from "@/assets/menu/tea-moroccan-pour-action-1.jpg";
import cupcakeCherry from "@/assets/menu/cupcake-cherry-1.jpg";
import cupcakeCream from "@/assets/menu/cupcake-cream.jpg";
import donutChocolate from "@/assets/menu/donut-chocolate.jpg";
import donutOreo from "@/assets/menu/donut-oreo-1.jpg";
import donutCrumbCaramel from "@/assets/menu/donut-crumb-caramel-action-1.jpg";
import pavlovaMixedFruit from "@/assets/menu/pavlova-mixed-fruit-1.jpg";
import meringueStrawberry from "@/assets/menu/meringue-strawberry-1.jpg";
// import Seo from "@/components/Seo";
const Menu = () => {
  const menuCategories = [
    {
      icon: Croissant,
      title: "SWEET CROISSANTS",
      items: [
        { name: "Pain Au chocolate", price: "£4.99", description: "", image: painAuChocolat },
        { name: "Biscoff Croissant", price: "£7.50", description: "", image: croissantCreamTower },
        { name: "Strawberry Cream Croissant", price: "£7.70", description: "", image: croissantTowerBerries },
        { name: "Almond Croissant", price: "£5.70", description: "", image: croissantPlain },
        { name: "Croissant", price: "£4.20", description: "", image: croissantMiniPlain },
        { name: "Cinnamon Roll", price: "£7.50", description: "", image: croissantCreamTower },
        { name: "Raspberry Rain Du Chocolate", price: "£7.50", description: "", image: painAuChocolat },
        { name: "Raspberry Cream Croissant", price: "£7.50", description: "", image: croissantTowerBerries },
        { name: "Pistachio Croissant", price: "£7.50", description: "", image: croissantPlain },
        { name: "Blueberry Croissant", price: "£7.50", description: "", image: croissantCreamTower },
        { name: "Oreo Croissant", price: "£7.50", description: "", image: croissantPlain },
        { name: "Dubai Kunafa Croissant", price: "£7.50", description: "", image: croissantCreamTower },
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "SAVOURY CROISSANTS",
      items: [
        { name: "Croissant Turkey", price: "£8.20", description: "", image: croissantSandwich },
        { name: "Quiche", price: "£7.50", description: "", image: croissantSandwich },
        { name: "Mozzarella Croissant", price: "£8.20", description: "", image: croissantSandwich },
        { name: "Tuna Croissant", price: "£8.20", description: "", image: croissantSandwich },
        { name: "Salami Croissant (served with crisps)", price: "£8.20", description: "", image: croissantSandwich },
      ],
    },
    {
      icon: Cake,
      title: "CAKES & DESSERTS",
      items: [
        { name: "Carrot Cake", price: "£6.70", description: "", image: cakeCaramel },
        { name: "Chocolate Cake", price: "£6.70", description: "", image: cakeChocolateMousse },
        { name: "Coffee Walnut Cake", price: "£6.70", description: "", image: cakeFerrero },
        { name: "Red Velvet Cake", price: "£6.70", description: "", image: cakeRedVelvet },
        { name: "Chocolate Fudge", price: "£6.70", description: "", image: cakeChocolateDrip },
        { name: "Victoria Sponge Cake", price: "£6.70", description: "", image: cakeVanillaPearl },
        { name: "Orange Chocolate", price: "£6.70", description: "", image: cakeChocolateMousse },
        { name: "Oreo Cake", price: "£6.70", description: "", image: cheesecakeOreo },
        { name: "Biscoff Cake", price: "£6.70", description: "", image: cakeCaramel },
        { name: "Vanilla Slice", price: "£6.70", description: "", image: dessertVanillaNapoleon },
        { name: "Tiramisu", price: "£6.70", description: "", image: dessertTiramisuMini },
        { name: "Vanilla Jam", price: "£6.70", description: "", image: cakeVanillaPearl },
        { name: "Eclair", price: "£6.70", description: "", image: eclairChocolate },
        { name: "Pistachio Cake", price: "£6.70", description: "", image: cakePistachioChocolateDrip },
        { name: "Rainbow Cake", price: "£6.70", description: "", image: cakeRedVelvet },
        { name: "Lemon Blueberry", price: "£6.70", description: "", image: cakeBananaCream },
      ],
    },
    {
      icon: CakeSlice,
      title: "TARTS & PIES",
      items: [
        { name: "Mixed Berry Tart", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Tortrau Citron", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Chocolate Tart", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Eccles Fechan Tart", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Sticky Toffee", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Strawberry  Tart", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Key Lime Tart", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Pear & Almond Tart", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Mini Salted Caramel ", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Pecan Pie", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Mixed Berries Tart", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Manchester Tart", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Raspberry Delight", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Chocolate Salted Caramel", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Bakewell Tart", price: "£6.70", description: "", image: tartMixedBerries },
        { name: "Apple & Caramel Tart", price: "£6.70", description: "", image: tartStrawberry },
        { name: "Lemon Meringue ", price: "£6.70", description: "", image: meringueStrawberry },
      ],
    },

    {
      icon: Cookie,
      title: "BROWNIES & TREATS",
      items: [
        { name: "Cookies &  Brownies", price: "£4.80", description: "", image: cookieChocolateChip },
        { name: "Chocolate Brownies", price: "£4.90", description: "", image: cookieChocolateChip },
        { name: "White Cornflakes Brownies", price: "£4.90", description: "", image: cookieChocolateChip },
        { name: "Big Chocolate Muffin", price: "£4.80", description: "", image: cupcakeCream },
      ],
    },
    {
      icon: Cookie,
      title: "COOKIES",
      items: [
        { name: "Triple Chocolate Cookies", price: "£4.90", description: "", image: cookieChocolateChip },
        { name: "Red Velvet Cookies", price: "£4.90", description: "", image: cookieRedVelvetWhiteChocolate },
        { name: "Pistachio Cookies", price: "£4.90", description: "", image: cookieChocolateChip },
        { name: "Nutella Cookies", price: "£4.90", description: "", image: cookieChocolateChip },
        { name: "Biscoff Cookies", price: "£4.90", description: "", image: cookieChocolateChip },
      ],
    },
    {
      icon: CakeSlice,
      title: "LOAF BAR CAKES",
      items: [
        { name: "Loaf Bar Cake", price: "£4.80", description: "", image: cakeCaramelBundtAction },
        { name: "Pistachio Loaf Bar Cake", price: "£4.80", description: "", image: cakePistachioBundt },
        { name: "Chocolate Marble Loaf Bar Cake", price: "£4.80", description: "", image: cakeMarbleBundt },
        { name: "Lemon Loaf Bar Cake", price: "£4.80", description: "", image: cakeLemonBundt },
        { name: "Lemon Strawberry Loaf Bar Cake", price: "£4.80", description: "", image: cakeStrawberryBundtAction },
        { name: "Ginger Cinnamon Loaf Bar Cake", price: "£4.80", description: "", image: cakeCaramelBundtAction },
      ],
    },
    {
      icon: Cake,
      title: "SPECIAL PARTY CAKES",
      items: [
        { name: "Red Velvet", price: "£75.00", description: "", image: cakeRedVelvet5 },
        { name: "Pistachio", price: "£80.00", description: "", image: cakePistachioDrip },
        { name: "Chocolate", price: "£75.00", description: "", image: cakeFerrero4 },
        { name: "Biscoff", price: "£75.00", description: "", image: cakeBiscoff },
        { name: "Kunafa Chocolate", price: "£80.00", description: "", image: cakeKunafaChocolate },
        { name: "Vanilla & Strawberry", price: "£75.00", description: "", image: cakeVanillaPearl },
        { name: "Carrot Cake", price: "£75.00", description: "", image: cakeFerrero },
      ],
    },
    {
      icon: Cake,
      title: "FRAPPES",
      items: [
        { name: "Caramel", price: "£5.50", description: "", image: lattePistachioSprinkle },
        { name: "Mocha Hazelnut ", price: "£5.50", description: "", image: hotChocolate },
        { name: "Choc Chip ", price: "£5.50", description: "", image: milkshakeChocolate },
        { name: "Pistachio ", price: "£5.90", description: "", image: lattePistachio },
        { name: "Vanilla ", price: "£5.50", description: "", image: milkshakeStrawberry },
      ],
    },

    {
      icon: Coffee,
      title: "TEAS",
      items: [
        { name: "Moroccan Tea", price: "£4.50", description: "", image: teaMoroccanSet },
        { name: "Karak Tea", price: "£3.90", description: "", image: teaMoroccanPour },
        { name: "English Tea", price: "£3.50", description: "", image: teaSetFlowers },
        { name: "Earl Grey Tea", price: "£3.50", description: "", image: teaSetFlowers },
        { name: "Pink Tea", price: "£4.50", description: "", image: teaMoroccanSet },
        { name: "Green Tea", price: "£3.50", description: "", image: teaSetFlowers },
        { name: "Peppermint Tea", price: "£3.50", description: "", image: teaMoroccanPour },
      ],
    },
    {
      icon: Coffee,
      title: "COFFEE & HOT DRINKS",
      items: [
        { name: "Cappuccino", price: "£3.90", description: "", image: cappuccinoLatteArt },
        { name: "Flat White", price: "£3.70", description: "", image: cappuccinoLatteArt },
        { name: "Americano", price: "£3.50", description: "", image: cappuccinoLatteArt },
        { name: "Mocha", price: "£4.20", description: "", image: hotChocolate },
        { name: "Espresso", price: "£3.20", description: "", image: cappuccinoLatteArt },
        { name: "Latte", price: "£3.80", description: "", image: cappuccinoLatteArt },
        { name: "Pistachio Latte", price: "£5.50", description: "", image: lattePistachio },
        { name: "Spanish Latte", price: "£5.20", description: "", image: cappuccinoLatteArt },
        { name: "Hot Chocolate", price: "£4.20", description: "", image: hotChocolate },
      ],
    },

    {
      icon: CupSoda,
      title: "ICED MATCHA",
      items: [
        { name: "Strawberry Matcha", price: "£5.70", description: "", image: latteMatchaStrawberry },
        { name: "Blueberry Matcha", price: "£5.70", description: "", image: latteMatchaPistachio },
        { name: "Mango Matcha", price: "£5.70", description: "", image: latteMatchaStrawberry },
        { name: "White Chocolate Matcha", price: "£5.70", description: "", image: latteMatchaPistachio },
      ],
    },

    {
      icon: CupSoda,
      title: "ICED DRINKS",
      items: [
        { name: "Spanish Latte", price: "£5.50", description: "", image: cappuccinoLatteArt },
        { name: "Pistachio Latte", price: "£5.50", description: "", image: lattePistachioFront },
        { name: "Americano", price: "£4.00", description: "", image: cappuccinoLatteArt },
        { name: "Mocha", price: "£5.20", description: "", image: hotChocolate },
        { name: " Latte", price: "£4.50", description: "", image: cappuccinoLatteArt },
      ],
    },
    {
      icon: CupSoda,
      title: "MOCKTAILS",
      items: [
        { name: "Mojito", price: "£7.50", description: "", image: drinkLemonLimeMojito },
        { name: "Strawberry Lemonade", price: "£7.50", description: "", image: drinkStrawberryLime },
        { name: "Blue Lagoon", price: "£7.50", description: "", image: drinkBlueGradientIce },
        { name: "Pina Colada", price: "£7.50", description: "", image: drinkOrangeGradient },
      ],
    },
    {
      icon: CupSoda,
      title: "MILKSHAKES",
      items: [
        { name: "Vanilla", price: "£5.99", description: "", image: milkshakeStrawberry },
        { name: "Strawberry ", price: "£6.20", description: "", image: milkshakeStrawberry },
        { name: "Chocolate ", price: "£5.99", description: "", image: milkshakeChocolate },
        { name: "Caramel ", price: "£5.99", description: "", image: milkshakeChocolate },
        { name: "Oreo  ", price: "£5.99", description: "", image: milkshakeChocolate },
        { name: "Biscoff  ", price: "£5.99", description: "", image: milkshakeStrawberry },
        { name: "Pistachio", price: "£6.50", description: "", image: lattePistachio },
      ],
    },
    {
      icon: Wine,
      title: "OTHER BEVERAGES",
      items: [
        { name: "Soft Drinks", price: "£3.00", description: "", image: drinkOrangeGradient },
        { name: "Juice ", price: "£4.30", description: "", image: drinkStrawberryLime },
        { name: "Water ", price: "£2.00", description: "", image: drinkBlueGradientIce },
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
