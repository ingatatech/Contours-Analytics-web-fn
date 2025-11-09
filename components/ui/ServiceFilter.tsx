'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface ServiceFilterProps {
  services: Service[];
}

export default function ServiceFilter({ services }: ServiceFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = useMemo(() => {
    return [
      'all',
      ...Array.from(new Set(services.map((s) => s.category))),
    ];
  }, [services]);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                {service.category}
              </span>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
