import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQPage() {
  const faqs = [
    {
      question: 'Do you offer discounts?',
      answer: 'Yes! We offer a 10% discount for veterans, law enforcement officers, and first responders. Simply show your ID or credentials when booking. We also provide repeat customer specials and volume discounts for recurring service programs.'
    },
    {
      question: 'Do you offer emergency or after-hours service?',
      answer: 'Yes, we understand that project needs don\'t always follow a 9-to-5 schedule. We offer emergency and after-hours service by arrangement. Call us at (757) 618-0273 to discuss your urgent needs and we\'ll work with you to find a solution.'
    },
    {
      question: 'How long can I keep my dumpster?',
      answer: 'Rental periods vary based on your project needs. Standard rentals typically include a reasonable timeframe, and we can arrange extended rentals for longer projects. Contact us to discuss your specific timeline and we\'ll create a rental schedule that works for you.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Virginia Beach and all surrounding Hampton Roads communities, including Norfolk, Chesapeake, Portsmouth, Suffolk, Hampton, and Newport News. If you\'re unsure whether we service your area, give us a call and we\'ll let you know.'
    },
    {
      question: 'What can I put in the dumpster?',
      answer: 'You can dispose of most household junk, construction debris, renovation waste, yard waste, and general trash. However, we cannot accept paint, tires, dirt, concrete, rocks, hazardous materials, toxic materials, flammable materials, or appliances containing freon. See our Rules page for a complete list of prohibited items.'
    },
    {
      question: 'How do I know which dumpster size I need?',
      answer: 'We offer 10-yard dumpsters for smaller projects like garage cleanouts and small renovations, and 30-yard dumpsters for major renovations and construction projects. If you\'re unsure, call us at (757) 618-0273 and we\'ll help you choose the right size based on your project details.'
    },
    {
      question: 'What happens if I exceed the weight limit?',
      answer: 'Our standard rental includes up to 2 tons of waste. If you exceed this limit, overage fees apply: $80 per ton or $20 per quarter ton. We\'ll weigh your load and notify you of any overage charges before final billing.'
    },
    {
      question: 'Do you offer recurring service for businesses?',
      answer: 'Yes! We offer flexible recurring service programs with daily, weekly, or custom schedules. These programs are perfect for tree service companies, contractors, commercial facilities, and property management companies. Pricing starts at $120+ per dump depending on your needs.'
    },
    {
      question: 'Are you qualified for government contracts?',
      answer: 'Yes, we are a certified Service-Disabled Veteran-Owned Small Business (SDVOSB), which qualifies us for government contracts and Virginia SWaM (Small, Women-owned, and Minority-owned) business programs. We\'re ready to support your procurement needs.'
    },
    {
      question: 'How quickly can you deliver a dumpster?',
      answer: 'We offer same-day service when available. Contact us as early as possible and we\'ll work to accommodate your timeline. For guaranteed delivery on a specific date, we recommend booking in advance.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>FAQ - Barrel Man Logistics | Dumpster Rental Questions Answered</title>
        <meta name="description" content="Frequently asked questions about dumpster rentals in Virginia Beach. Learn about pricing, discounts, service areas, rental periods, and what you can dispose of." />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Find answers to common questions about our dumpster rental services
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-xl px-6 shadow-sm border-none"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're here to help. Give us a call and we'll answer any questions you have about our services.
            </p>
            <a href="tel:7576180273" className="btn-primary text-lg px-8 py-4">
              Call Now: (757) 618-0273
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default FAQPage;