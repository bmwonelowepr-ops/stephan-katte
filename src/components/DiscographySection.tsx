import React from 'react';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';
import { keyCollaborations, discographyProductions } from '../data/stephanKatteData';
import { Disc, Music2, Users, Radio, ExternalLink, Award } from 'lucide-react';

interface DiscographySectionProps {
  currentLang: Language;
  theme: ThemeMode;
}

export const DiscographySection: React.FC<DiscographySectionProps> = ({ currentLang, theme }) => {
  const t = translations[currentLang];

  return (
    <section id="discography" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059] block mb-2">
            {t.discography.tag}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.discography.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.discography.subtitle}
          </p>
        </div>

        {/* Major Collaborations Strip */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-1">
              {t.discography.collaborationsTitle}
            </span>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.discography.collaborationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyCollaborations.map((c) => (
              <div
                key={c.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  theme === 'dark'
                    ? 'bg-[#141720] border-gray-800 hover:border-[#C5A059]/40'
                    : 'bg-white border-gray-200 hover:border-[#C5A059]/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                      {c.city}
                    </span>
                    <Users className="w-4 h-4 text-[#C5A059] opacity-70" />
                  </div>
                  <h4 className="font-serif-display text-lg sm:text-xl font-bold text-foreground mb-1">
                    {c.ensemble}
                  </h4>
                  <div className="text-xs italic text-gray-400 mb-3">
                    {c.directorOrFocus}
                  </div>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {c.description[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected CD Productions & Label Releases */}
        <div>
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-1">
              {t.discography.cdProductionsTitle}
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
              Dokumentierte CD-Einspielungen
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {discographyProductions.map((p) => (
              <div
                key={p.id}
                className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  theme === 'dark'
                    ? 'bg-[#13161F] border-gray-800/90 hover:border-[#C5A059]/40 shadow-lg'
                    : 'bg-white border-gray-200 hover:border-[#C5A059]/40 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Meta Line: Year & Label */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-code font-bold bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                      {p.year}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {p.label}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-foreground mb-1 leading-snug">
                    {p.title}
                  </h4>
                  <div className="text-xs italic text-gray-400 mb-4">
                    {p.subtitle}
                  </div>

                  {/* Ensemble & Repertoire */}
                  <div className="space-y-3 pt-3 border-t border-gray-800/20 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-400 block text-xs">Klangkörper / Orchester:</span>
                      <strong className="text-foreground">{p.ensemble}</strong>
                    </div>

                    <div>
                      <span className="text-gray-400 block text-xs">{t.discography.repertoireBadge}:</span>
                      <span className="text-[#C5A059] font-medium">{p.repertoire}</span>
                    </div>

                    <div>
                      <span className="text-gray-400 block text-xs">{t.discography.instrumentBadge}:</span>
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                        {p.hornInstrument}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/20 flex items-center justify-between text-xs">
                  <span className="text-xs font-semibold text-[#C5A059]">
                    {p.role[currentLang]}
                  </span>
                  <span className="text-gray-400 italic">
                    Historische Referenzeinspielung
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
