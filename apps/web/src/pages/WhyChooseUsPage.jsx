import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Clock, Building2, DollarSign, FileCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';

function WhyChooseUsPage() {
  const features = [
    {
      number: '01',
      title: 'Veteran-Owned SDVOSB',
      description: 'Service-Disabled Veteran-Owned Small Business certified and ready to serve government contracts, SWaM opportunities, and private sector clients with military precision and integrity.'
    },
    {
      number: '02',
      title: 'Reliable Delivery & Pickup',
      description: 'We show up when we say we will. On-time delivery and pickup are not just promises - they are commitments we keep every single time. Your schedule matters to us.'
    },
    {
      number: '03',
      title: 'Residential & Commercial Service',
      description: 'From home renovations to large construction sites, we handle projects of all sizes. Homeowners, contractors, property managers, and businesses trust us for dependable service.'
    },
    {
      number: '04',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. Clear, upfront pricing with special discounts for veterans, law enforcement, and first responders. You will know exactly what you are paying before we start.'
    },
    {
      number: '05',
      title: 'Government & SWaM Opportunities',
      description: 'Our SDVOSB certification qualifies us for government contracts and Virginia SWaM (Small, Women-owned, and Minority-owned) business programs. We are ready to support your procurement needs.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Why Choose Us - Barrel Man Logistics | Veteran-Owned Dumpster Rental</title>
        <meta name="description" content="Discover why businesses and homeowners choose Barrel Man Logistics for dumpster rentals. SDVOSB certified, reliable service, transparent pricing, and government contract ready." />
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
                Why Choose Barrel Man Logistics
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Military values meet civilian service excellence
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  number={feature.number}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Grid */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                What Sets Us Apart
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-xl p-6"
              >
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">SDVOSB Certified</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Officially certified Service-Disabled Veteran-Owned Small Business
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-xl p-6"
              >
                <Clock className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Same-Day Service Available</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Emergency and after-hours service when you need it most
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-xl p-6"
              >
                <Building2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Local to Hampton Roads</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based in Virginia Beach, serving all surrounding communities
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-xl p-6"
              >
                <DollarSign className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Special Discounts</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  10% off for veterans, law enforcement, and first responders
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-card rounded-xl p-6"
              >
                <FileCheck className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Government Ready</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Qualified for government contracts and SWaM programs
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card rounded-xl p-6"
              >
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Recurring Programs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Flexible daily, weekly, or custom service packages available
                </p>
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
              Experience the difference
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join the businesses and homeowners who trust Barrel Man Logistics for reliable dumpster rental service
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

export default WhyChooseUsPage;