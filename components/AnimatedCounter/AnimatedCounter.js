"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let start = 0;
    const end = targetNumber;
    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // ms
    const steps = Math.ceil(totalMiliseconds / incrementTime);
    const stepValue = end / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(stepValue * currentStep));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix || value.replace(/[0-9]/g, '')}
    </span>
  );
}
