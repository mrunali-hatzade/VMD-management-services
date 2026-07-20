"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
          <button 
            className={styles.faqQuestion} 
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
          >
            <span>{item.question}</span>
            <ChevronDown className={`${styles.icon} ${activeIndex === index ? styles.iconRotate : ''}`} size={20} />
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={styles.faqAnswerWrapper}
              >
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
