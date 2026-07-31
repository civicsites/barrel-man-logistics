import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function PricingCard({ 
  planName, 
  price, 
  period, 
  features, 
  highlighted = false, 
  cta,
  index = 0 
}) {
  return (
    <div className={`h-full ${highlighted ? 'md:scale-105' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
          highlighted 
            ? 'bg-primary text-primary-foreground shadow-2xl ring-2 ring-accent' 
            : 'bg-card text-card-foreground shadow-lg hover:shadow-xl'
        }`}
      >
        {highlighted && (
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
              Recommended
            </span>
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-2" style={{ textWrap: 'balance' }}>
          {planName}
        </h3>
        
        <div className="mb-6">
          <span className="text-5xl font-bold" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {price}
          </span>
          {period && (
            <span className={`text-lg ml-2 ${highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {period}
            </span>
          )}
        </div>
        
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlighted ? 'text-accent' : 'text-primary'}`} />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          {cta}
        </div>
      </motion.div>
    </div>
  );
}

export default PricingCard;
