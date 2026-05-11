import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import CountUp from '@/components/CountUp';

export interface StatItem {
  icon: LucideIcon;
  /** valor de exibição padrão (ex: '24h', 'Nova') usado quando countUpTo não é definido */
  value: string;
  /** se definido, anima de 0 até este valor quando entra na viewport */
  countUpTo?: number;
  countUpPrefix?: string;
  countUpSuffix?: string;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  subtitle?: string;
  items: StatItem[];
  primaryColor?: string;
  accentColor?: string;
  bgColor?: string;
  textOnBg?: 'light' | 'dark';
}

export default function Stats({
  title,
  subtitle,
  items,
  primaryColor = '#5A9EA8',
  accentColor = '#F59E0B',
  bgColor = '#ffffff',
  textOnBg = 'dark',
}: StatsProps) {
  const isDark = textOnBg === 'light';
  const headingColor = isDark ? '#ffffff' : primaryColor;
  const valueColor = isDark ? '#ffffff' : primaryColor;
  const labelColor = isDark ? 'rgba(255,255,255,0.95)' : '#0F172A';
  const descColor = isDark ? 'rgba(255,255,255,0.7)' : '#475569';

  return (
    <section className="py-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-14 max-w-2xl mx-auto">
            {title && (
              <h2
                className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
                style={{ color: headingColor }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base md:text-lg" style={{ color: descColor }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                className="relative rounded-2xl p-6 md:p-8 text-center shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid #E2E8F0',
                  backdropFilter: isDark ? 'blur(12px)' : 'none',
                }}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.12)' : `${accentColor}1A`,
                    color: isDark ? '#ffffff' : accentColor,
                  }}
                >
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1 tracking-tight"
                  style={{ color: valueColor }}
                >
                  {item.countUpTo !== undefined ? (
                    <CountUp
                      to={item.countUpTo}
                      prefix={item.countUpPrefix}
                      suffix={item.countUpSuffix}
                    />
                  ) : (
                    item.value
                  )}
                </div>
                <div
                  className="font-semibold text-sm md:text-base"
                  style={{ color: labelColor }}
                >
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs mt-1.5" style={{ color: descColor }}>
                    {item.description}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
