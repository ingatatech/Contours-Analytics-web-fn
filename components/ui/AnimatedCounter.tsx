'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  label,
  suffix = '',
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    const animation = {
      duration: duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    };

    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (animation.duration * 1000), 1);
      count.set(from + (to - from) * progress);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [to, from, duration, count]);

  return (
    <div className="text-center">
      <motion.div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-secondary-600 dark:text-secondary-400 font-medium">
        {label}
      </p>
    </div>
  );
}
