import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Sunday from 7:00 AM to 9:00 PM. We serve breakfast, lunch, and dinner, as well as coffee and pastries throughout the day."
    },
    {
      question: "Do you offer vegan and gluten-free options?",
      answer: "Yes! We have a variety of vegan options including our Vegan Chocolate Mousse and plant-based milk alternatives. We also offer gluten-free pastries and can accommodate most dietary requirements with advance notice."
    },
    {
      question: "Can I make a reservation?",
      answer: "Absolutely! We recommend making reservations for groups of 4 or more, especially during weekends and peak hours. You can call us or use our online booking system."
    },
    {
      question: "Do you host private events?",
      answer: "Yes, we offer private event hosting for birthdays, corporate meetings, and special celebrations. We can customize our menu and space to suit your needs. Please contact us for more details."
    },
    {
      question: "Do you offer takeaway and delivery?",
      answer: "Yes, we offer both takeaway and delivery services. Our full menu is available for takeaway, and we partner with local delivery services to bring our food and drinks directly to you."
    },
    {
      question: "What makes your coffee special?",
      answer: "We source our beans from premium suppliers and offer unique blends like our signature Dragon, Unicorn, and Phoenix coffees. Each cup is carefully crafted by our experienced baristas using traditional and modern brewing techniques."
    }
  ];

  return (
    <section className="section-padding bg-warm animate-on-scroll">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-premium mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-premium text-xl max-w-2xl mx-auto">
            Find answers to common questions about our cafe, menu, and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline px-6 py-4 text-lg font-medium text-foreground hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-premium leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;