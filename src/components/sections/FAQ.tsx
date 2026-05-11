import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
  primaryColor?: string;
  surface?: string;
  whatsappUrl?: string;
}

export default function FAQ({
  title,
  subtitle,
  items,
  primaryColor = '#5A9EA8',
  surface = '#F4F4F0',
  whatsappUrl,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24" style={{ backgroundColor: surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
            >
              <HelpCircle size={12} /> FAQ
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight tracking-tight"
              style={{ color: primaryColor }}
            >
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {subtitle}
            </p>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-colors duration-200 cursor-pointer"
                style={{ backgroundColor: primaryColor, color: '#fff' }}
              >
                <MessageCircle size={16} /> Falar com um especialista
              </a>
            )}
          </div>

          <div className="lg:col-span-2 space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl shadow-elevation-1 border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-elevation-2"
                  style={{
                    borderLeft: isOpen ? `3px solid ${primaryColor}` : '3px solid transparent',
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 md:px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 flex-grow">
                      <span
                        className="font-bold text-sm tracking-widest opacity-80 flex-shrink-0"
                        style={{ color: primaryColor }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-semibold text-gray-900 text-base md:text-lg leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: isOpen ? primaryColor : '#F1F5F9',
                        color: isOpen ? '#fff' : '#475569',
                      }}
                    >
                      <ChevronDown size={18} strokeWidth={2.4} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 md:px-6 pb-6 pt-1 text-gray-600 leading-relaxed ml-8 md:ml-10 border-t border-gray-100">
                          <p className="pt-4">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
