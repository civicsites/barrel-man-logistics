import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InteractiveServiceMap from '@/components/InteractiveServiceMap.jsx';

function ServiceAreaPage() {
  const serviceAreas = [
    {
      city: 'Virginia Beach',
      description: 'Our home base. We provide comprehensive dumpster rental services throughout Virginia Beach for residential and commercial projects.'
    },
    {
      city: 'Norfolk',
      description: 'Serving all of Norfolk with reliable dumpster rentals for construction sites, home renovations, and business needs.'
    },
    {
      city: 'Chesapeake',
      description: 'Fast, dependable dumpster delivery and pickup throughout Chesapeake for projects of all sizes.'
    },
    {
      city: 'Portsmouth',
      description: 'Professional dumpster rental services for Portsmouth residents, contractors, and businesses.'
    },
    {
      city: 'Suffolk',
      description: 'Comprehensive waste management solutions for Suffolk, including residential and commercial dumpster rentals.'
    },
    {
      city: 'Hampton',
      description: 'Reliable dumpster rental services for Hampton area projects, from home cleanouts to construction sites.'
    },
    {
      city: 'Newport News',
      description: 'Serving Newport News with professional dumpster rentals and flexible service options.'
    },
    {
      city: 'Surrounding Hampton Roads Communities',
      description: 'We also serve surrounding areas throughout Hampton Roads. Contact us to confirm service availability in your location.'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Service Area - Barrel Man Logistics | Virginia Beach & Hampton Roads</title>
        <meta name="description" content="Barrel Man Logistics serves Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, Hampton, Newport News, and surrounding Hampton Roads communities with dumpster rental services." />
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
                Service Area
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Proudly serving Virginia Beach and all of Hampton Roads
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                  style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  Serving Hampton Roads with Pride
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a locally-owned and operated business based in Virginia Beach, we're proud to serve our neighbors throughout Hampton Roads. Our Service-Disabled Veteran-Owned Small Business brings military precision and reliability to every dumpster rental.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you're in the heart of Virginia Beach or in one of the surrounding communities, we deliver the same dependable service and transparent pricing to every customer.
                </p>
                <div className="flex items-start gap-3 bg-accent/10 rounded-xl p-6">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Based in Virginia Beach</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Centrally located to provide fast, efficient service throughout the entire Hampton Roads region.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-muted rounded-2xl h-[500px] w-full"
              >
                <InteractiveServiceMap />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Cities Grid */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Communities We Serve
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-foreground">{area.city}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Coverage Details */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              What Our Service Area Means for You
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast Response Times</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Being locally based means we can respond quickly to your needs. Same-day service is often available, and we understand the local area to provide efficient delivery and pickup.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Local Knowledge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We know Hampton Roads. We understand local regulations, traffic patterns, and the unique needs of our communities. This local expertise ensures smooth, hassle-free service.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a veteran-owned business serving our home region, we're invested in the success and well-being of our community. Your satisfaction is our priority because you're our neighbor.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Phone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Not sure if we serve your area?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Give us a call and we'll let you know. We're always looking to expand our service to help more customers throughout Hampton Roads.
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

export default ServiceAreaPage;