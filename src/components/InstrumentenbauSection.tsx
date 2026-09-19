import React, { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';
import { craftsmanshipModels, craftsmanshipPrinciples } from '../data/stephanKatteData';
import { 
  Hammer, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Hand, 
  Wind, 
  Check, 
  Info,
  Building2
} from 'lucide-react';

interface InstrumentenbauSectionProps {
  currentLang: Language;
  theme: ThemeMode;
}

export const InstrumentenbauSection: React.FC<InstrumentenbauSectionProps> = ({ currentLang, theme }) => {
  const t = translations[currentLang];
  const [selectedModelId, setSelectedModelId] = useState<string>(craftsmanshipModels[0].id);

  const selectedModel = craftsmanshipModels.find(m => m.id === selectedModelId) || craftsmanshipModels[0];

  return (
    <section id="instrumentenbau" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059] block mb-2">
            {t.craftsmanship.tag}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.craftsmanship.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.craftsmanship.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs text-[#C5A059] font-medium">
            <Hammer className="w-3.5 h-3.5" />
            <span>{t.craftsmanship.syhreJungwirthBadge}</span>
          </div>
        </div>

        {/* Highlight Banner: Museum Research in Bern & Brno */}
        <div 
          className={`p-8 rounded-3xl border mb-16 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#151922] via-[#12141A] to-[#0E1015] border-[#C5A059]/30 shadow-xl'
              : 'bg-gradient-to-br from-amber-50/70 via-white to-gray-50 border-[#C5A059]/40 shadow-md'
          }`}
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3">
              <Building2 className="w-4 h-4" />
              <span>{t.craftsmanship.museumResearchTitle}</span>
            </div>
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t.craftsmanship.museumResearchDesc}
            </p>
          </div>
        </div>

        {/* 3 Core Acoustical & Craftsmanship Principles */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-1">
              {t.craftsmanship.principlesTag}
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
              Acoustic Authenticity & The Orval Method
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {craftsmanshipPrinciples.map((p) => {
              const icons = {
                'principle-no-finger-holes': Wind,
                'principle-mouthpiece-acoustics': Compass,
                'principle-orval-technique': Hand,
              };
              const IconComponent = icons[p.id as keyof typeof icons] || Layers;

              return (
                <div
                  key={p.id}
                  className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                    theme === 'dark'
                      ? 'bg-[#141720] border-gray-800 hover:border-[#C5A059]/50 shadow-lg'
                      : 'bg-white border-gray-200 hover:border-[#C5A059]/50 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl border border-[#C5A059]/40 bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="font-serif-display text-xl font-bold text-foreground mb-2">
                      {p.title[currentLang]}
                    </h4>

                    <div className="text-xs font-semibold text-[#C5A059] mb-4">
                      {p.summary[currentLang]}
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {p.content[currentLang]}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-800/20 space-y-2">
                    {p.technicalSpecs[currentLang].map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Historical Models & Custom Reconstructions Showcase */}
        <div>
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-1">
              {t.craftsmanship.modelsTag}
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
              Dokumentierte Originale & Rekonstruktionen
            </h3>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {craftsmanshipModels.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModelId(m.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border text-left ${
                  selectedModelId === m.id
                    ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-md font-bold'
                    : theme === 'dark'
                      ? 'bg-[#151821] border-gray-800 text-gray-300 hover:border-[#C5A059]/40'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-[#C5A059]/40 shadow-sm'
                }`}
              >
                <span className="block">{m.name}</span>
                <span className={`text-[11px] block mt-0.5 ${
                  selectedModelId === m.id ? 'text-black/80' : 'text-gray-400'
                }`}>
                  {m.originEra}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Model Detailed Specification Card */}
          <div 
            className={`p-8 sm:p-12 rounded-3xl border ${
              theme === 'dark'
                ? 'bg-[#141720] border-[#C5A059]/30 shadow-2xl'
                : 'bg-white border-[#C5A059]/30 shadow-lg'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Historical Lore & Provenance */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-code font-bold bg-[#C5A059]/15 text-[#C5A059] mb-3">
                    {selectedModel.originEra}
                  </div>
                  <h4 className="font-serif-display text-2xl sm:text-4xl font-bold text-foreground">
                    {selectedModel.name}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-1">
                      {t.craftsmanship.originalMuseum}
                    </span>
                    <span className="text-sm font-semibold text-[#C5A059]">
                      {selectedModel.historicalOriginalLocation}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-1">
                      {t.craftsmanship.makerPartner}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {selectedModel.builderPartner}
                    </span>
                  </div>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedModel.description[currentLang]}
                </p>

                <div className="p-4 rounded-2xl bg-background/50 border border-gray-800/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] block mb-1">
                    Klangcharakter & Akustik
                  </span>
                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedModel.acousticalCharacter[currentLang]}
                  </p>
                </div>
              </div>

              {/* Right Column: Physical Dimensions & Tube Parameters */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div 
                  className={`p-6 sm:p-8 rounded-2xl border space-y-5 ${
                    theme === 'dark' ? 'bg-[#101218] border-gray-800' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block">
                    {t.craftsmanship.specsTitle}
                  </span>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="pb-3 border-b border-gray-800/20">
                      <span className="text-gray-400 block text-xs">{t.craftsmanship.boreLabel}</span>
                      <strong className="text-foreground">{selectedModel.specs.bore}</strong>
                    </div>

                    <div className="pb-3 border-b border-gray-800/20">
                      <span className="text-gray-400 block text-xs">{t.craftsmanship.bellLabel}</span>
                      <strong className="text-foreground">{selectedModel.specs.bellTaper}</strong>
                    </div>

                    <div className="pb-3 border-b border-gray-800/20">
                      <span className="text-gray-400 block text-xs">{t.craftsmanship.ventsLabel}</span>
                      <strong className="text-[#C5A059]">{selectedModel.specs.vents}</strong>
                    </div>

                    <div>
                      <span className="text-gray-400 block text-xs">{t.craftsmanship.mouthpieceLabel}</span>
                      <strong className="text-foreground">{selectedModel.specs.mouthpieceRecomm}</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-800/20">
                    <span className="text-xs text-gray-400 block mb-2">
                      {t.craftsmanship.crooksAvailable}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedModel.keyCrooks.map((crk) => (
                        <span 
                          key={crk} 
                          className="px-2.5 py-1 rounded-lg text-xs font-code font-bold bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30"
                        >
                          {crk}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
