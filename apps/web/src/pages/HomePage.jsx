import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Truck, Users, Shield, DollarSign } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';

function HomePage() {
  const services = [
    {
      icon: Users,
      title: 'Residential Dumpster Rentals',
      description: 'Perfect for home cleanouts, garage organization, estate cleanups, moving projects, roofing, remodeling, and yard cleanup.'
    },
    {
      icon: Truck,
      title: 'Commercial Dumpster Rentals',
      description: 'Reliable service for construction sites, property managers, retail renovations, office cleanouts, contractor projects, and business relocations.'
    },
    {
      icon: Shield,
      title: 'Hauling Services',
      description: 'Professional hauling for construction debris, renovation waste, and comprehensive project support.'
    },
    {
      icon: DollarSign,
      title: 'Recurring Service Programs',
      description: 'Flexible daily, weekly, or custom packages designed for tree service companies, contractors, commercial facilities, and property management.'
    }
  ];
  
  const features = [
    {
      number: '01',
      title: 'Veteran-Owned SDVOSB',
      description: 'Service-Disabled Veteran-Owned Small Business committed to excellence and integrity in every project.'
    },
    {
      number: '02',
      title: 'Reliable Delivery & Pickup',
      description: 'On-time service you can count on. We respect your schedule and deliver when we say we will.'
    },
    {
      number: '03',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. Clear, upfront pricing with veteran and first responder discounts available.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Barrel Man Logistics - Reliable Dumpster Rentals in Virginia Beach & Hampton Roads</title>
        <meta name="description" content="Veteran-owned dumpster rental company serving Virginia Beach and Hampton Roads. Residential and commercial dumpster rentals with reliable service and transparent pricing." />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero.jpg" 
              alt="Professional dumpster rental service"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/logo.jpg" 
                alt="Barrel Man Logistics logo" 
                className="w-[550px] h-auto mx-auto mb-8 -mt-16"
              />
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Reliable Dumpster Rentals From A Veteran-Owned Company You Can Trust
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed">
                Serving Virginia Beach and Hampton Roads
              </p>
              
              <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Professional dumpster rental services for residential and commercial projects. Fast delivery, transparent pricing, and dependable service from a Service-Disabled Veteran-Owned Small Business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Request a Quote
                </Link>
                <a 
                  href="tel:7576180273" 
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (757) 618-0273
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Preview */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive dumpster rental solutions for every project size and type
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                View all services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Preview */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Why Choose Barrel Man Logistics
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Built on service. Driven by reliability.
              </p>
            </div>
            
            <div className="space-y-12 max-w-4xl mx-auto">
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
            
            <div className="text-center mt-12">
              <Link 
                to="/why-choose-us" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn more about us
                <ArrowRight className="w-5 h-5" />
              </Link>
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
              Contact us today for a free quote on your dumpster rental needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free Quote
              </Link>
              <Link to="/pricing" className="btn-outline text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default HomePage;