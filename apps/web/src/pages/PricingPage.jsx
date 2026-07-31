import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, Award, Calendar, Briefcase } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingCard from '@/components/PricingCard.jsx';

function PricingPage() {
  const pricingPlans = [
    {
      planName: 'Standard Dumpster Rental',
      price: '$450',
      period: 'per dump',
      features: [
        'Includes up to 2 tons of waste',
        '$80 per ton overage fee',
        '$20 per quarter ton overage',
        '$75 placement and retrieval fee',
        'Flexible rental periods',
        'Same-day service available'
      ],
      highlighted: true
    },
    {
      planName: '10 Yard Monthly Rental',
      price: '$950',
      period: 'per month',
      features: [
        'Includes two hauls per month',
        'Additional hauls available',
        'Dedicated dumpster for your site',
        'Flexible scheduling',
        'Perfect for ongoing projects',
        'Commercial and residential'
      ]
    },
    {
      planName: '30 Yard Monthly Rental',
      price: '$1,400',
      period: 'per month',
      features: [
        'Includes two hauls per month',
        'Additional hauls available',
        'Large capacity for major projects',
        'Flexible scheduling',
        'Ideal for construction sites',
        'Commercial and residential'
      ]
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Pricing - Barrel Man Logistics | Transparent Dumpster Rental Rates</title>
        <meta name="description" content="Clear, upfront pricing for dumpster rentals in Virginia Beach. Standard rentals from $450, monthly programs available. Veteran and first responder discounts." />
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
                Transparent Pricing
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                No hidden fees. No surprise charges. Just honest pricing.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  planName={plan.planName}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  highlighted={plan.highlighted}
                  ctaText="Get started"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Discount Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Special Discounts Available
              </h2>
              <p className="text-xl mb-4 leading-relaxed" style={{ fontVariantNumeric: 'tabular-nums' }}>
                10% discount for veterans, law enforcement, and first responders
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                We honor those who serve. Show your ID or credentials to receive your discount.
              </p>
            </div>
          </div>
        </section>
        
        {/* Special Pricing */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Additional Pricing Options
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
                  Tree Service & Recurring Programs
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Starting at <span className="font-bold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>$120+</span> per dump
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Daily or weekly service options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Custom schedules available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Perfect for contractors and tree services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Dedicated account support</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
                  Large Projects & Custom Quotes
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Contact us for custom pricing
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Government contracts and SWaM opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Large commercial projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Multi-site property management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Long-term partnership programs</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Ready to get started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Contact us today for a free quote tailored to your specific project needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:7576180273" className="btn-primary text-lg px-8 py-4">
                Call Now: (757) 618-0273
              </a>
              <a href="/contact" className="btn-outline text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default PricingPage;