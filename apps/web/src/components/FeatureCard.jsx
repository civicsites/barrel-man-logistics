import React from 'react';
import { motion } from 'framer-motion';

function FeatureCard({ number, icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-6 items-start"
    >
      {number && (
        <div className="flex-shrink-0">
          <span 
            className="text-6xl font-bold text-accent/20" 
            style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}
          >
            {number}
          </span>
        </div>
      )}
      
      {Icon && (
        <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-accent" />
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ textWrap: 'balance' }}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;