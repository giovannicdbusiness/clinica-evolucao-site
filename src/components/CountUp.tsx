import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  /** separador de milhares (default '.') */
  separator?: string;
  className?: string;
}

/**
 * Anima um número de 0 ao valor `to` quando entra na viewport.
 * Usa easing easeOutCubic para desaceleração natural.
 * Respeita `prefers-reduced-motion`: pula a animação se o usuário preferir.
 */
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1500,
  separator = '.',
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
