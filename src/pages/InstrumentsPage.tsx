import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { 
  Hammer, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Search,
  X,
  SlidersHorizontal,
  Compass,
  RotateCcw
} from 'lucide-react';

interface InstrumentsPageProps {
  currentLang: Language;
}

export const InstrumentsPage: React.FC<InstrumentsPageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { instruments } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: t.instrumentsPage.filterAll },
    { key: 'baroque', label: t.instrumentsPage.filterBaroque },
    { key: 'classical', label: t.instrumentsPage.filterClassical },
    { key: 'tromba', label: t.instrumentsPage.filterTromba },
    { key: 'hunting', label: t.instrumentsPage.filterHunting },
  ];

  const filteredInstruments = useMemo(() => {
    return instruments.filter(inst => {
      // Category check
      const matchesCat = activeCategory === 'all' || inst.category === activeCategory;
      if (!matchesCat) return false;

      // Search query check
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const name = inst.name.toLowerCase();
      const era = inst.originEra.toLowerCase();
      const partner = inst.builderPartner.toLowerCase();
      const location = inst.historicalOriginalLocation.toLowerCase();
      const desc = (inst.description[currentLang] || inst.description.de || '').toLowerCase();
      const crooks = inst.keyCrooks.join(' ').toLowerCase();

      return (
        name.includes(q) ||
        era.includes(q) ||
        partner.includes(q) ||
        location.includes(q) ||
        desc.includes(q) ||
        crooks.includes(q)
      );
    });
  }, [instruments, activeCategory, searchQuery, currentLang]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* 1. HEADER */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs font-semibold text-[#C5A059]">
          <Hammer className="w-3.5 h-3.5" />
          <span>{t.instrumentsPage.tag}</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          {t.instrumentsPage.title}
        </h1>

        <p className="text-base text-gray-300 leading-relaxed">
          {t.instrumentsPage.subtitle}
        </p>

        {/* 100% Ventless Guarantee Banner */}
        <div className="pt-2">
          <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span>
              <strong>100% lochfrei:</strong> Alle hier vorgestellten Instrumente werden ohne künstliche Überblasbohrungen (System Otto/Haas) gefertigt und gespielt.
            </span>
          </div>
        </div>
      </div>

      {/* 2. FILTER & SEARCH BAR SECTION */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#C5A059] text-black font-semibold shadow-md'
                    : 'border border-border text-gray-400 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative min-w-[280px] sm:min-w-[340px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.instrumentsPage.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2 rounded-xl border border-border bg-foreground/[0.02] text-foreground text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-foreground p-0.5 rounded cursor-pointer"
                aria-label="Suche löschen"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Results count & reset active indicator */}
        <div className="flex items-center justify-between text-xs text-gray-400 px-1 border-b border-border/60 pb-3">
          <span>
            <strong className="text-[#C5A059] font-mono">{filteredInstruments.length}</strong> {t.instrumentsPage.resultsCount}
            {(activeCategory !== 'all' || searchQuery) && (
              <span className="ml-1 text-gray-500">
                ({activeCategory !== 'all' ? categories.find(c => c.key === activeCategory)?.label : ''} {searchQuery ? `"${searchQuery}"` : ''})
              </span>
            )}
          </span>

          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.instrumentsPage.resetFilter}</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. INSTRUMENTS GRID */}
      {filteredInstruments.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-border/80 bg-foreground/[0.02] space-y-4 max-w-lg mx-auto">
          <Hammer className="w-8 h-8 text-[#C5A059] mx-auto opacity-70" />
          <h3 className="font-serif-display text-lg font-bold text-foreground">
            {t.instrumentsPage.noResultsFound}
          </h3>
          <p className="text-xs text-gray-400">
            Versuchen Sie einen anderen Suchbegriff oder setzen Sie die Epochenfilter zurück.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-[#C5A059] text-black font-semibold text-xs hover:bg-[#d8b46b] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.instrumentsPage.resetFilter}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInstruments.map((inst) => (
            <div
              key={inst.id}
              className="group rounded-3xl border border-border bg-foreground/[0.02] hover:border-[#C5A059]/60 hover:bg-foreground/[0.04] p-8 flex flex-col justify-between transition-all space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                
                {/* Top metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] font-medium">
                    {inst.originEra}
                  </span>
                  <span className="font-mono text-gray-400">
                    Mensur: {inst.specs.bore}
                  </span>
                </div>

                {/* Title & Origin */}
                <div>
                  <h2 className="font-serif-display text-2xl font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                    {inst.name}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{inst.historicalOriginalLocation}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {inst.description[currentLang] || inst.description.de}
                </p>

                {/* Specs Box */}
                <div className="p-4 rounded-xl border border-border/60 bg-foreground/[0.02] space-y-2 text-xs text-gray-400">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-gray-400 block text-[11px]">Schallbecher:</span>
                      <span className="text-foreground font-medium">{inst.specs.bellTaper}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Bohrungen:</span>
                      <span className="text-emerald-400 font-medium">100% lochfrei</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[11px]">Baupartner:</span>
                    <span className="text-foreground">{inst.builderPartner}</span>
                  </div>
                </div>

                {/* Crooks preview */}
                <div className="space-y-1 text-xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">
                    Stimmbögen (Crooks):
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {inst.keyCrooks.map((cr) => (
                      <span key={cr} className="px-2 py-0.5 rounded-md border border-border text-[11px] font-mono text-gray-300">
                        {cr}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-border/60">
                <Link
                  to={`/instruments/${inst.id}`}
                  className="w-full py-3 px-4 rounded-xl border border-border text-xs sm:text-sm font-semibold text-foreground group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.instrumentsPage.viewInstrumentBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* 4. MUSEUM RESEARCH & CRAFTSMANSHIP DEEP DIVE */}
      <section className="rounded-3xl border border-border bg-foreground/[0.02] p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            {t.craftsmanship.philosophyTag}
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
            {t.instrumentsPage.museumResearchTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {t.instrumentsPage.museumResearchDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl border border-border/60 bg-foreground/[0.02] space-y-3">
            <Compass className="w-6 h-6 text-[#C5A059]" />
            <h3 className="font-serif-display text-base font-bold text-foreground">
              Bernisches Historisches Museum
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Messungen am Original von Michael Leichamschneider (1723). Analyse der Wandstärke und Mensurverläufe.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-foreground/[0.02] space-y-3">
            <Compass className="w-6 h-6 text-[#C5A059]" />
            <h3 className="font-serif-display text-base font-bold text-foreground">
              Mährisches Landesmuseum Brünn
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Studium des Anton Kerner Horns von 1760. Rekonstruktion des geschweiften Becherkranzes und der Stimmbögen.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-foreground/[0.02] space-y-3">
            <Hammer className="w-6 h-6 text-[#C5A059]" />
            <h3 className="font-serif-display text-base font-bold text-foreground">
              Werkstatt Friedbert Syhre (Leipzig)
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Handwerkliche Realisierung über massiven Stahldornen nach historischem Blechzuschnitt mit Weichlötung.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
