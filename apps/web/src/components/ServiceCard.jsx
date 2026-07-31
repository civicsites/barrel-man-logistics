import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ textWrap: 'balance' }}>
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;