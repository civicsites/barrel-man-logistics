import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Shield, Target, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Barrel Man Logistics | Veteran-Owned Dumpster Rental</title>
        <meta name="description" content="Learn about Barrel Man Logistics, a Service-Disabled Veteran-Owned Small Business providing reliable dumpster rental services in Virginia Beach and Hampton Roads." />
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
                Built on Service. Driven by Reliability.
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A veteran-owned company committed to serving our community with integrity and excellence
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Barrel Man Logistics, we bring the same dedication and discipline from military service to every dumpster rental project. As a Service-Disabled Veteran-Owned Small Business (SDVOSB), we understand the importance of reliability, punctuality, and clear communication.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is simple: provide dependable dumpster rental services that our customers can count on. Whether you're a homeowner tackling a renovation, a contractor managing a construction site, or a business handling ongoing waste management, we deliver on time and stand behind our commitments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve Virginia Beach and the surrounding Hampton Roads communities with pride, offering transparent pricing, professional service, and the peace of mind that comes from working with a company built on military values.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Our Core Values
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
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
                  Veteran-Owned Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a Service-Disabled Veteran-Owned Small Business, we bring military precision and commitment to every project. Our SDVOSB certification opens doors for government contracts and demonstrates our dedication to quality service.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
                  Reliability You Can Trust
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We show up when we say we will. Our customers depend on us for timely delivery and pickup, and we take that responsibility seriously. No excuses, no delays—just dependable service.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
                  Transparent Pricing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hidden fees or surprise charges. We provide clear, upfront pricing so you know exactly what to expect. Our veteran and first responder discounts show our appreciation for those who serve.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
                  Community Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Virginia Beach and Hampton Roads are our home. We're proud to serve our neighbors with the same dedication we brought to serving our country. Your success is our success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* SDVOSB Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground rounded-2xl p-12 text-center"
            >
              <Award className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                Service-Disabled Veteran-Owned Small Business
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-6">
                Our SDVOSB certification demonstrates our commitment to excellence and opens opportunities for government contracts and SWaM (Small, Women-owned, and Minority-owned) business programs.
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                We're proud to bring military values of integrity, discipline, and service to the civilian sector, serving both private and government clients with the same level of dedication.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default AboutPage;