import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonUrl: string;
  bgColor?: string;
  textColor?: string;
  buttonBg?: string;
  buttonText2?: string;
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonUrl,
  bgColor = '#F59E0B',
  textColor = '#fff',
  buttonBg = '#fff',
  buttonText2 = '#F59E0B',
}: CTABannerProps) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, rgba(255,255,255,0.5), transparent 70%)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto text-center px-4"
      >
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight tracking-tight"
          style={{ color: textColor }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg mb-8 opacity-95" style={{ color: textColor }}>
            {subtitle}
          </p>
        )}
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-base md:text-lg shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-200 cursor-pointer"
          style={{ backgroundColor: buttonBg, color: buttonText2 }}
        >
          {buttonText}
          <ArrowRight
            size={20}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </motion.div>
    </section>
  );
}
