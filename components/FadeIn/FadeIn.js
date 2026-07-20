"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './FadeIn.module.css';

export default function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef); // Only animate once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const directionClass = 
    direction === 'up' ? styles.up :
    direction === 'down' ? styles.down :
    direction === 'left' ? styles.left :
    direction === 'right' ? styles.right : '';

  return (
    <div
      className={`${styles.fadeIn} ${directionClass} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      ref={domRef}
    >
      {children}
    </div>
  );
}
