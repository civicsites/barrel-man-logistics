import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Package, Warehouse, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function DumpsterSizesPage() {
  const sizes = [
    {
      icon: Package,
      size: '10 Yard',
      dimensions: '12ft L × 8ft W × 3.5ft H',
      capacity: 'Holds approximately 4 pickup truck loads',
      idealFor: [
        'Garage cleanouts',
        'Small remodeling projects',
        'Roofing projects (up to 1,500 sq ft)',
        'Household junk removal',
        'Basement or attic cleanouts',
        'Small landscaping projects'
      ],
      notRecommended: [
        'Large construction projects',
        'Whole-house renovations',
        'Major estate cleanouts'
      ]
    },
    {
      icon: Warehouse,
      size: '30 Yard',
      dimensions: '22ft L × 8ft W × 6ft H',
      capacity: 'Holds approximately 12 pickup truck loads',
      idealFor: [
        'Major home renovations',
        'Commercial construction projects',
        'Large estate cleanouts',
        'Whole-house cleanouts',
        'Large debris removal',
        'Multi-room remodeling',
        'New construction projects'
      ],
      notRecommended: [
        'Small residential projects',
        'Single-room renovations'
      ]
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Dumpster Sizes - Barrel Man Logistics | 10 & 30 Yard Dumpsters</title>
        <meta name="description" content="Choose the right dumpster size for your project. 10 yard dumpsters for small projects, 30 yard dumpsters for major renovations and construction in Virginia Beach." />
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
                Dumpster Sizes
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Choose the right size for your project
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Sizes Comparison */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sizes.map((size, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <size.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h2 
                    className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {size.size}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4">{size.dimensions}</p>
                  <p className="text-sm text-muted-foreground mb-6 font-medium">{size.capacity}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Ideal for:</h3>
                    <ul className="space-y-2">
                      {size.idealFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Not recommended for:</h3>
                    <ul className="space-y-2">
                      {size.notRecommended.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Phone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Need help selecting the right size?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our team can help you choose the perfect dumpster size for your project. Give us a call and we'll walk you through your options.
            </p>
            <a href="tel:7576180273" className="btn-primary text-lg px-8 py-4">
              Call Now: (757) 618-0273
            </a>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Sizing Tips
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">When in doubt, go bigger</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It's better to have extra space than to run out. Overage fees can add up quickly if you exceed the weight limit on a smaller dumpster.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Consider the weight, not just volume</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heavy materials like concrete, dirt, and roofing shingles can max out weight limits quickly. Let us know what you're disposing of so we can recommend the right size.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Think about access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make sure you have enough space for delivery and pickup. A 30-yard dumpster needs more clearance than a 10-yard.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default DumpsterSizesPage;