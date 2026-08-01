import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: '',
    _gotcha: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleServiceTypeChange = (value) => {
    setFormData({
      ...formData,
      serviceType: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType || !formData.projectDetails) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }
    
    setSubmitStatus('loading');
    
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceType: formData.serviceType,
        projectDetails: formData.projectDetails.trim(),
        _gotcha: formData._gotcha,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }
      
      setSubmitStatus('success');
      setStatusMessage("Thank you! We'll contact you within 24 hours to discuss your project.");
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        projectDetails: '',
        _gotcha: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setStatusMessage(
        error.message || 'There was an error submitting your request. Please try again or call us directly at (757) 618-0273.'
      );
    }
  };
  
  const serviceTypes = [
    'Residential Dumpster Rental',
    'Commercial Dumpster Rental',
    'Construction Project',
    'Government Contract',
    'Recurring Service Program',
    'Other'
  ];
  
  const isSubmitting = submitStatus === 'loading';

  return (
    <>
      <Helmet>
        <title>Contact Us - Barrel Man Logistics | Get a Free Quote</title>
        <meta name="description" content="Contact Barrel Man Logistics for a free dumpster rental quote. Call (757) 618-0273 or fill out our form. Serving Virginia Beach and Hampton Roads." />
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
                Get a Free Quote
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Contact us today to discuss your dumpster rental needs
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <h2 
                  className="text-3xl font-bold text-foreground mb-6"
                  style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a customized quote for your project.
                </p>
                
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field — hidden from users, traps bots */}
                  <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
                    <Label htmlFor="_gotcha">Leave this field empty</Label>
                    <Input
                      id="_gotcha"
                      name="_gotcha"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 text-foreground bg-background"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 text-foreground bg-background"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 text-foreground bg-background"
                      placeholder="(757) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="serviceType" className="text-foreground">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={handleServiceTypeChange}>
                      <SelectTrigger id="serviceType" className="mt-2 text-foreground bg-background">
                        <SelectValue placeholder="Select a service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="projectDetails" className="text-foreground">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={6}
                      className="mt-2 text-foreground bg-background"
                      placeholder="Tell us about your project, including size, timeline, and any specific requirements..."
                    />
                  </div>

                  {submitStatus === 'loading' && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="flex items-center gap-3 rounded-lg border border-border bg-muted px-4 py-3 text-foreground"
                    >
                      <Loader2 className="h-5 w-5 animate-spin text-accent" />
                      <span>Sending your quote request...</span>
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-900"
                    >
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-900"
                    >
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative z-10 pointer-events-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Quote Request
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 
                  className="text-3xl font-bold text-foreground mb-6"
                  style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
                >
                  Contact Information
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a 
                        href="tel:7576180273" 
                        className="text-lg text-accent hover:text-accent/80 transition-colors duration-200"
                      >
                        (757) 618-0273
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Monday - Saturday: 7am - 6pm
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a 
                        href="mailto:barrelmanlogistics@outlook.com" 
                        className="text-lg text-accent hover:text-accent/80 transition-colors duration-200 break-all"
                      >
                        barrelmanlogistics@outlook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Location</p>
                      <p className="text-muted-foreground">
                        Virginia Beach, Virginia<br />
                        Serving all of Hampton Roads
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Veteran-Owned SDVOSB Certified</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Same-Day Service Available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Transparent Pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>10% Veteran & First Responder Discount</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>Government Contract Ready</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Service CTAs */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
              >
                What Can We Help You With?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Residential Rentals</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Home cleanouts, renovations, moving, and yard projects
                </p>
                <a href="tel:7576180273" className="text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  Get a quote →
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Commercial Rentals</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Construction sites, property management, business relocations
                </p>
                <a href="tel:7576180273" className="text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  Get a quote →
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Construction Projects</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  New builds, major renovations, contractor support
                </p>
                <a href="tel:7576180273" className="text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  Get a quote →
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Government Contracts</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  SDVOSB certified for government and SWaM opportunities
                </p>
                <a href="tel:7576180273" className="text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  Get a quote →
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Recurring Programs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Daily, weekly, or custom schedules for ongoing needs
                </p>
                <a href="tel:7576180273" className="text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  Get a quote →
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-3">Emergency Service</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Same-day and after-hours service available
                </p>
                <a href="tel:7576180273" className="text-accent hover:text-accent/80 font-medium transition-colors duration-200">
                  Call now →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default ContactPage;
