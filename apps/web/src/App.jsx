import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import WhyChooseUsPage from './pages/WhyChooseUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import DumpsterSizesPage from './pages/DumpsterSizesPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import DumpsterRulesPage from './pages/DumpsterRulesPage.jsx';
import ServiceAreaPage from './pages/ServiceAreaPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/sizes" element={<DumpsterSizesPage />} />
                <Route path="/dumpster-sizes" element={<DumpsterSizesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/rules" element={<DumpsterRulesPage />} />
                <Route path="/service-area" element={<ServiceAreaPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-background">
                        <div className="text-center px-4">
                            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
                            <p className="text-xl text-muted-foreground mb-8">Page not found</p>
                            <a href="/" className="btn-primary">
                                Back to home
                            </a>
                        </div>
                    </div>
                } />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;