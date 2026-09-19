import React from 'react';
import { motion } from 'motion/react';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';
import { Award, Compass, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  theme: ThemeMode;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, theme }) => {
  const t = translations[currentLang];

  const stats = [
    { value: t.hero.statExperience, label: t.hero.statExperienceLabel },
    { value: t.hero.statStaatskapelle, label: t.hero.statStaatskapelleLabel },
    { value: t.hero.statAcademies, label: t.hero.statAcademiesLabel },
    { value: t.hero.statVentless, label: t.hero.statVentlessLabel },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Subtle Editorial Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A059]/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.tag}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
            <span className="block">{t.hero.title}</span>
            <span className="block brass-text-gradient italic font-normal mt-1 sm:mt-2">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className={`text-base sm:text-xl font-sans-ui font-light leading-relaxed max-w-3xl mb-10 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#instrumentenbau"
              className="px-7 py-3.5 rounded-xl font-sans-ui font-bold text-xs uppercase tracking-wider bg-[#C5A059] text-black hover:bg-[#d6b26d] transition-all shadow-md shadow-[#C5A059]/20 hover:scale-[1.02] flex items-center gap-2"
            >
              <span>{t.hero.ctaCraftsmanship}</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#vita"
              className={`px-7 py-3.5 rounded-xl font-sans-ui font-bold text-xs uppercase tracking-wider border transition-all ${
                theme === 'dark'
                  ? 'border-gray-700 text-gray-200 hover:border-[#C5A059] hover:text-[#C5A059] bg-[#15181F]/60'
                  : 'border-gray-300 text-gray-800 hover:border-[#C5A059] hover:text-[#C5A059] bg-white'
              }`}
            >
              {t.hero.ctaVita}
            </a>

            <a
              href="#contact"
              className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-[#C5A059] transition-colors"
            >
              {t.hero.ctaContact} →
            </a>
          </div>
        </div>

        {/* Real Historical Stats Bar */}
        <div className={`p-6 sm:p-8 rounded-2xl border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${
          theme === 'dark'
            ? 'bg-[#14161D] border-gray-800/80 shadow-xl'
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l-2 border-[#C5A059] pl-4 sm:pl-5">
              <span className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {stat.value}
              </span>
              <span className={`text-xs font-sans-ui mt-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
