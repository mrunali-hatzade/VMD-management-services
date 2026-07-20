"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import styles from './LightboxModal.module.css';

export default function LightboxModal({ isOpen, image, onClose }) {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={styles.modalContent}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close image">
            <X size={24} />
          </button>
          
          <div className={styles.imageContainer}>
            <Image 
              src={image.src} 
              alt={image.title || 'Gallery Image'} 
              width={1000} 
              height={700}
              className={styles.lightboxImage}
            />
          </div>
          
          {(image.title || image.category) && (
            <div className={styles.caption}>
              {image.category && <span className={styles.category}>{image.category}</span>}
              {image.title && <h3>{image.title}</h3>}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
