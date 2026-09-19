import React, { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';
import { vitaMilestones } from '../data/stephanKatteData';
import { Calendar, MapPin, Award, BookOpen, Music, CheckCircle2 } from 'lucide-react';

interface VitaTimelineProps {
  currentLang: Language;
  theme: ThemeMode;
}

export const VitaTimeline: React.FC<VitaTimelineProps> = ({ currentLang, theme }) => {
  const t = translations[currentLang];
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(vitaMilestones[0].id);

  return (
    <section id="vita" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059] block mb-2">
            {t.vita.tag}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.vita.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.vita.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-code text-[#C5A059]/90">
            <span>•</span>
            <span>{t.vita.sourceNotice}</span>
          </div>
        </div>

        {/* Modern Vertical Timeline Grid */}
        <div className="relative border-l-2 border-[#C5A059]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {vitaMilestones.map((m) => {
            const isSelected = selectedMilestoneId === m.id;

            return (
              <div 
                key={m.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedMilestoneId(m.id)}
              >
                {/* Timeline Bullet Anchor */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#C5A059] border-[#C5A059] scale-125 shadow-md shadow-[#C5A059]/40'
                      : theme === 'dark'
                        ? 'bg-[#0F1115] border-gray-600 group-hover:border-[#C5A059]'
                        : 'bg-white border-gray-400 group-hover:border-[#C5A059]'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-black' : 'bg-[#C5A059]'}`} />
                </div>

                {/* Milestone Card */}
                <div 
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? theme === 'dark'
                        ? 'bg-[#151821] border-[#C5A059]/50 shadow-xl'
                        : 'bg-white border-[#C5A059]/60 shadow-lg'
                      : theme === 'dark'
                        ? 'bg-[#12141B]/70 border-gray-800/80 hover:border-gray-700'
                        : 'bg-white/80 border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {/* Top Meta Line: Year, Badge, Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-code text-sm sm:text-base font-bold text-[#C5A059]">
                        {m.year}
                      </span>
                      {m.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                          {m.badge[currentLang]}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{m.location}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-foreground mb-1.5">
                    {m.title[currentLang]}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-[#C5A059] mb-4">
                    {m.subtitle[currentLang]}
                  </div>

                  {/* Narrative Body */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {m.description[currentLang]}
                  </p>

                  {/* Additional Milestone Bullet Details */}
                  {m.details && (
                    <div className="pt-4 border-t border-gray-800/20 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {m.details[currentLang].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
