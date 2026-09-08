import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Home, Building2, Truck, Calendar } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Dumpster Rentals',
      description:
        'Dumpster rental service for homeowners throughout Virginia Beach and Hampton Roads for cleanouts, remodeling, roofing, moving projects, yard cleanup, and household junk removal.',
      features: [
        'Home cleanouts and decluttering',
        'Garage organization projects',
        'Estate cleanups and downsizing',
        'Moving and relocation waste',
        'Roofing projects and shingle removal',
        'Remodeling and renovation debris',
        'Yard cleanup and landscaping waste'
      ],
      image: '...'
    },
    {
      icon: Building2,
      title: 'Commercial & Construction Dumpster Rentals',
      description:
        'Reliable dumpster rental service for contractors, construction sites, businesses, property managers, retail renovations, and ongoing commercial cleanup projects throughout Hampton Roads.',
      features: [
        'Construction sites and new builds',
        'Property management waste solutions',
        'Retail renovations and store updates',
        'Office cleanouts and relocations',
        'Contractor project support',
        'Business relocations and expansions',
        'Multi-unit property maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1619888496520-480b024edd44'
    },
    {
      icon: Truck,
      title: 'Construction Debris Hauling & Cleanup',
      description:
        'Professional hauling and cleanup for construction debris, renovation waste, property cleanouts, landscaping debris, and project-specific removal throughout Virginia Beach and Hampton Roads.',
      features: [
        'Construction debris removal',
        'Renovation waste hauling',
        'Project-specific support',
        'Timely pickup and disposal',
        'Safe and efficient handling',
        'Flexible scheduling options'
      ],
      image: '/images/hauling-service.jpg'
    },
    {
      icon: Calendar,
      title: 'Recurring Dumpster Service for Businesses',
      description:
        'Recurring dumpster service for contractors, property managers, tree service companies, commercial facilities, and businesses throughout Virginia Beach and Hampton Roads.',
      features: [
        'Tree service company packages',
        'Contractor recurring programs',
        'Commercial facility maintenance',
        'Property management solutions',
        'Daily or weekly service options',
        'Custom scheduling to fit your needs',
        'Dedicated account support'
      ],
      image: 'https://images.unsplash.com/photo-1682627100541-2ab451e70601'
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Dumpster Rental Services Virginia Beach | Barrel Man Logistics
        </title>
        <meta
          name="description"
          content="Residential, commercial, construction, hauling, and recurring dumpster rental services in Virginia Beach and Hampton Roads. Serving homeowners, contractors, property managers, and businesses."
        />
        <link
          rel="canonical"
          href="https://barrelmandumpsters.com/services"
        />
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
                Dumpster Rental Services in Virginia Beach & Hampton Roads
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Residential, commercial, construction, hauling, and recurring dumpster service for homeowners, contractors, property managers, and businesses throughout Hampton Roads.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2
                      className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                      style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover object-center rounded-2xl shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Not sure which service you need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact us and we'll help you find the right solution for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:7576180273" className="btn-primary text-lg px-8 py-4">
                Call Now: (757) 618-0273
              </a>
              <a href="/contact" className="btn-outline text-lg px-8 py-4">
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

export default ServicesPage;