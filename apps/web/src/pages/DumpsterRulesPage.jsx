import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function DumpsterRulesPage() {
  const prohibitedItems = [
    {
      item: 'Paint',
      reason: 'Liquid paint is considered hazardous waste and requires special disposal'
    },
    {
      item: 'Tires',
      reason: 'Tires must be recycled through specialized facilities'
    },
    {
      item: 'Dirt',
      reason: 'Soil and dirt are extremely heavy and require separate disposal methods'
    },
    {
      item: 'Concrete',
      reason: 'Concrete is extremely heavy and requires specialized disposal'
    },
    {
      item: 'Rocks',
      reason: 'Heavy materials that exceed weight limits and require special handling'
    },
    {
      item: 'Hazardous Materials',
      reason: 'Chemicals, asbestos, medical waste, and other hazardous materials are strictly prohibited'
    },
    {
      item: 'Toxic Materials',
      reason: 'Any materials classified as toxic require specialized disposal facilities'
    },
    {
      item: 'Flammable Materials',
      reason: 'Gasoline, propane tanks, and other flammable items pose safety risks'
    },
    {
      item: 'Appliances Containing Freon',
      reason: 'Refrigerators, air conditioners, and freezers require freon removal before disposal'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Dumpster Rules - Barrel Man Logistics | Prohibited Items & Guidelines</title>
        <meta name="description" content="Important dumpster rental rules and prohibited items. Learn what you cannot dispose of in our dumpsters including paint, tires, hazardous materials, and appliances with freon." />
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
                Dumpster Rules & Guidelines
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Important information about what you can and cannot dispose of
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Alert Section */}
        <section className="py-12 bg-destructive/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Important Notice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Disposing of prohibited items may result in additional fees, fines, or refusal of service. Please review this list carefully before loading your dumpster. If you're unsure about an item, contact us before disposal.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Prohibited Items */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Prohibited Items
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The following items are strictly prohibited from disposal in our dumpsters
              </p>
            </div>
            
            <div className="space-y-4">
              {prohibitedItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-6 shadow-sm border-l-4 border-destructive"
                >
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.item}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.reason}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Acceptable Items */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              What You Can Dispose Of
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Household Items</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Furniture and household goods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Appliances (without freon)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Carpeting and flooring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">General household trash</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Construction Debris</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Wood and lumber</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Drywall and plaster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Roofing shingles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Metal and scrap materials</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Yard Waste</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Branches and tree limbs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Leaves and grass clippings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Shrubs and bushes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">General landscaping debris</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Other Materials</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Cardboard and paper</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Plastic and packaging materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">Glass (properly contained)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-foreground leading-relaxed">General renovation waste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Phone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Questions about what you can dispose of?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you're unsure whether an item is acceptable, contact us before loading your dumpster. We're here to help ensure proper disposal.
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

export default DumpsterRulesPage;