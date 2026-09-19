import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { 
  ArrowLeft, 
  MapPin, 
  Hammer, 
  ShieldCheck, 
  Music, 
  Calendar, 
  Check, 
  Layers, 
  Sparkles, 
  Mail,
  ChevronRight
} from 'lucide-react';

interface InstrumentDetailPageProps {
  currentLang: Language;
}

export const InstrumentDetailPage: React.FC<InstrumentDetailPageProps> = ({ currentLang }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const t = translations[currentLang];
  const { instruments, events } = useData();

  const instrument = instruments.find(item => item.id === id);

  if (!instrument) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="font-serif-display text-3xl font-bold text-foreground">
          Instrument nicht gefunden
        </h1>
        <p className="text-gray-400">
          Das angeforderte historische Horn existiert nicht oder wurde im System verschoben.
        </p>
        <Link
          to="/instruments"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] text-black font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.backToInstruments}</span>
        </Link>
      </div>
    );
  }

  // Find upcoming concerts where this instrument is used
  const relatedConcerts = events.filter(e => 
    e.instrumentUsed.toLowerCase().includes(instrument.name.toLowerCase().split(' ')[0]) ||
    (instrument.id === 'leichamschneider-1723' && e.instrumentUsed.toLowerCase().includes('leichamschneider')) ||
    (instrument.id.startsWith('kerner') && e.instrumentUsed.toLowerCase().includes('kerner'))
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Top Breadcrumbs & Back link */}
      <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-4 text-xs">
        <button
          onClick={() => navigate('/instruments')}
          className="inline-flex items-center gap-2 text-[#C5A059] hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.backToInstruments}</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-gray-400">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/instruments" className="hover:text-foreground">Instrumentenbau</Link>
          <span>/</span>
          <span className="text-[#C5A059] truncate max-w-xs">{instrument.name}</span>
        </div>
      </div>

      {/* Main Title Banner */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-semibold">
            {instrument.originEra}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% lochfrei (ventless)</span>
          </span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          {instrument.name}
        </h1>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>{instrument.historicalOriginalLocation}</span>
          </div>
          <div className="flex items-center gap-2">
            <Hammer className="w-4 h-4 text-[#C5A059]" />
            <span>{instrument.builderPartner}</span>
          </div>
        </div>
      </div>

      {/* Acoustical Character Quote Box */}
      <div className="p-6 sm:p-8 rounded-3xl border border-[#C5A059]/40 bg-gradient-to-br from-[#1d1a14] to-[#121215] text-white space-y-3 shadow-xl">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059]">
          Klangliche Charakteristik & Intonation
        </span>
        <p className="font-serif text-base sm:text-lg italic leading-relaxed text-gray-200">
          "{instrument.acousticalCharacter[currentLang]}"
        </p>
      </div>

      {/* Technical Specifications Table */}
      <div className="rounded-3xl border border-border bg-foreground/[0.02] p-6 sm:p-8 space-y-6">
        <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-[#C5A059]" />
          <span>{t.common.specs}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-border/60 bg-background">
            <span className="text-gray-400 text-xs block mb-1">Mensur (Bohrung):</span>
            <strong className="text-foreground font-mono">{instrument.specs.bore}</strong>
          </div>

          <div className="p-4 rounded-xl border border-border/60 bg-background">
            <span className="text-gray-400 text-xs block mb-1">Schallbecher & Taper:</span>
            <strong className="text-foreground">{instrument.specs.bellTaper}</strong>
          </div>

          <div className="p-4 rounded-xl border border-border/60 bg-background">
            <span className="text-gray-400 text-xs block mb-1">Überblaslöcher:</span>
            <strong className="text-emerald-400">{instrument.specs.vents}</strong>
          </div>

          <div className="p-4 rounded-xl border border-border/60 bg-background">
            <span className="text-gray-400 text-xs block mb-1">Legierung & Material:</span>
            <strong className="text-foreground">{instrument.specs.metalAlloy}</strong>
          </div>

          <div className="p-4 rounded-xl border border-border/60 bg-background">
            <span className="text-gray-400 text-xs block mb-1">Empfohlenes Mundstück:</span>
            <strong className="text-foreground">{instrument.specs.mouthpieceRecomm}</strong>
          </div>

          <div className="p-4 rounded-xl border border-border/60 bg-background">
            <span className="text-gray-400 text-xs block mb-1">Gewicht ca.:</span>
            <strong className="text-foreground">{instrument.specs.weight || 'ca. 1.100 g'}</strong>
          </div>
        </div>

        {/* Crooks */}
        <div className="pt-2">
          <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block mb-2">
            Lieferbare historische Stimmbögen (Crooks):
          </span>
          <div className="flex flex-wrap gap-2">
            {instrument.keyCrooks.map((cr) => (
              <span 
                key={cr}
                className="px-3 py-1.5 rounded-lg border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] font-mono text-xs font-bold"
              >
                {cr}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Background & Workshop Documentation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: History & Provenance */}
        <div className="rounded-3xl border border-border bg-foreground/[0.02] p-6 sm:p-8 space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            Historisches Vorbild & Sammlung
          </span>
          <h3 className="font-serif-display text-xl font-bold text-foreground">
            Originale Vorlage & Forschung
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {instrument.description[currentLang]}
          </p>
          <div className="p-4 rounded-xl border border-border/60 bg-background/50 text-xs text-gray-300 space-y-2">
            <strong>Wissenschaftliche Notiz:</strong>
            <p>{instrument.historicalNotes[currentLang]}</p>
          </div>
        </div>

        {/* Right: Craftsmanship Journey */}
        <div className="rounded-3xl border border-border bg-foreground/[0.02] p-6 sm:p-8 space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            Werkstatt & Fertigungsprozess
          </span>
          <h3 className="font-serif-display text-xl font-bold text-foreground">
            Reine Handhämmerung über Stahldorn
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {instrument.craftsmanshipJourney[currentLang]}
          </p>
          <div className="space-y-2 pt-2 text-xs text-gray-300">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Nahtlötung mit traditionellem Hart-/Weichlot nach sächsischem Vorbild.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Verjüngung der Blechwandung zur Stürze für freies Schwingungsverhalten.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Documented Repertoire */}
      <div className="rounded-3xl border border-border bg-foreground/[0.02] p-6 sm:p-8 space-y-4">
        <h3 className="font-serif-display text-xl font-bold text-foreground flex items-center gap-2.5">
          <Music className="w-5 h-5 text-[#C5A059]" />
          <span>{t.common.repertoireTitle}</span>
        </h3>
        <p className="text-xs text-gray-400">
          Werke, für deren historische Aufführung dieses Instrument prädestiniert ist:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {instrument.repertoire.map((rep, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-xl border border-border/60 bg-background flex items-center gap-3 text-xs sm:text-sm text-gray-200"
            >
              <div className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0" />
              <span>{rep}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Concerts Teaser */}
      {relatedConcerts.length > 0 && (
        <div className="rounded-3xl border border-[#C5A059]/30 bg-[#C5A059]/5 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
            <Calendar className="w-4 h-4" />
            <span>Dieses Instrument live im Konzert erleben</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedConcerts.map(concert => (
              <div key={concert.id} className="p-4 rounded-xl border border-border bg-background flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs font-bold text-[#C5A059]">{concert.date} ({concert.city})</span>
                  <h4 className="font-serif-display text-base font-bold text-foreground mt-1">
                    {concert.eventTitle[currentLang]}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{concert.venue}</p>
                </div>
                <Link
                  to={`/events/${concert.id}`}
                  className="text-xs font-semibold text-[#C5A059] hover:underline flex items-center gap-1 pt-2"
                >
                  <span>Konzertdetails ansehen</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/instruments"
          className="px-5 py-2.5 rounded-xl border border-border text-xs font-medium text-gray-400 hover:text-foreground"
        >
          {t.common.backToInstruments}
        </Link>

        <a
          href="mailto:kontakt@stephan-katte.de?subject=Anfrage%20zu%20Instrumentenbau"
          className="px-6 py-3 rounded-xl bg-[#C5A059] text-black font-semibold text-xs sm:text-sm hover:bg-[#d8b46b] transition-all flex items-center gap-2 shadow-md"
        >
          <Mail className="w-4 h-4" />
          <span>Fachberatung & Nachbau anfragen</span>
        </a>
      </div>

    </div>
  );
};
