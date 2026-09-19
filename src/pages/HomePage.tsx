import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { craftsmanshipPrinciples } from '../data/stephanKatteData';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Award, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Hammer, 
  Mail, 
  Music, 
  ChevronRight,
  Send,
  CheckCircle
} from 'lucide-react';

interface HomePageProps {
  currentLang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { events, instruments, bioConfig } = useData();

  // Highlight featured upcoming concert (specifically prioritizing date-14-nov or first featured)
  const featuredConcert = events.find(e => e.id === 'date-14-nov') || events.find(e => e.isFeatured) || events[0];

  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'concert',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 overflow-hidden">
        {/* Subtle brass background radial glow */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#C5A059]/10 via-[#C5A059]/5 to-transparent blur-[140px] pointer-events-none rounded-full"
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs sm:text-sm font-medium text-[#C5A059] backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.tag}</span>
            </div>

            {/* Display Headings */}
            <div className="space-y-4">
              <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {bioConfig.headline[currentLang] || 'Stephan Katte'}
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#C5A059] font-normal tracking-wide">
                {bioConfig.subheadline[currentLang] || t.hero.titleHighlight}
              </p>
            </div>

            {/* Hero Subtitle / Mission Statement */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {bioConfig.heroBio[currentLang] || t.hero.subtitle}
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/instruments"
                className="px-6 py-3.5 rounded-xl bg-[#C5A059] text-black font-semibold text-sm tracking-wide hover:bg-[#b08e4d] transition-all shadow-lg shadow-[#C5A059]/20 flex items-center gap-2 group"
              >
                <Hammer className="w-4 h-4" />
                <span>{t.hero.ctaCraftsmanship}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/events"
                className="px-6 py-3.5 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold text-sm tracking-wide transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>{t.hero.ctaEvents}</span>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-border/80">
              <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02]">
                <div className="font-serif-display text-2xl sm:text-3xl font-bold text-[#C5A059]">
                  {t.hero.statExperience}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {t.hero.statExperienceLabel}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02]">
                <div className="font-serif-display text-2xl sm:text-3xl font-bold text-[#C5A059]">
                  {t.hero.statStaatskapelle}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {t.hero.statStaatskapelleLabel}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02]">
                <div className="font-serif-display text-2xl sm:text-3xl font-bold text-[#C5A059]">
                  {t.hero.statAcademies}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {t.hero.statAcademiesLabel}
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02]">
                <div className="font-serif-display text-2xl sm:text-3xl font-bold text-[#C5A059]">
                  {t.hero.statVentless}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {t.hero.statVentlessLabel}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED UPCOMING CONCERT TEASER (Highlighting November 14) */}
      {featuredConcert && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#C5A059]/40 bg-gradient-to-br from-[#1b1915] via-[#141416] to-[#0d0e11] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
            
            {/* Ambient ornament */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.common.upcomingFeatured} · 14. November</span>
                </div>

                <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                  {featuredConcert.eventTitle[currentLang]}
                </h2>

                <p className="text-sm sm:text-base text-gray-300">
                  {featuredConcert.program[currentLang]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span className="text-white font-medium">{featuredConcert.date}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    <span>{featuredConcert.time}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>{featuredConcert.venue} ({featuredConcert.city})</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-[#C5A059] flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  <span>Gespieltes Instrument: <strong>{featuredConcert.instrumentUsed}</strong></span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  to={`/events/${featuredConcert.id}`}
                  className="w-full text-center px-6 py-3.5 rounded-xl bg-[#C5A059] text-black font-semibold text-sm hover:bg-[#d8b46b] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Konzertdetails & Tickets</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/events"
                  className="w-full text-center px-6 py-3.5 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  Alle Termine ansehen
                </Link>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 3. INSTRUMENTENBAU & CRAFTSMANSHIP TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              {t.instrumentsPage.tag}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t.instrumentsPage.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              {t.instrumentsPage.subtitle}
            </p>
          </div>

          <Link
            to="/instruments"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A059] hover:text-[#d8b46b] group"
          >
            <span>{t.common.exploreGallery}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instruments.slice(0, 4).map((inst) => (
            <div
              key={inst.id}
              className="group rounded-2xl border border-border bg-foreground/[0.02] hover:border-[#C5A059]/60 hover:bg-foreground/[0.04] p-6 flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] font-medium">
                    {inst.originEra}
                  </span>
                  <span className="text-gray-400 font-mono text-[11px]">
                    {inst.specs.bore}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-display text-lg font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                    {inst.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                    {inst.historicalOriginalLocation}
                  </p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                  {inst.description[currentLang]}
                </p>

                <div className="pt-2 border-t border-border/60 space-y-1.5 text-[11px] text-gray-400">
                  <div><strong>Becher:</strong> {inst.specs.bellTaper}</div>
                  <div><strong>Status:</strong> <span className="text-emerald-400">100% lochfrei</span></div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to={`/instruments/${inst.id}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-border text-xs font-semibold text-foreground group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Werkstattbericht & Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE ACOUSTIC PRINCIPLES (Why 100% Ventless matters) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-foreground/[0.015] p-8 sm:p-12 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              Wissenschaftliche Akustik & Philosophie
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
              Das Credo: Kompromisslos ohne Überblaslöcher
            </h2>
            <p className="text-sm text-gray-300">
              Warum moderne Hilfslöcher nach Otto/Haas den echten Klang des 18. Jahrhunderts verzerren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {craftsmanshipPrinciples.map((p) => (
              <div key={p.id} className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <h3 className="font-serif-display text-lg font-bold text-foreground">
                  {p.title[currentLang]}
                </h3>

                <p className="text-xs text-[#C5A059] font-medium">
                  {p.summary[currentLang]}
                </p>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {p.content[currentLang]}
                </p>

                <ul className="space-y-1 pt-2 border-t border-border/50 text-[11px] text-gray-400">
                  {p.technicalSpecs[currentLang]?.map((spec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#C5A059] font-bold">·</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VITA & ACADEMIC HIGHLIGHTS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              {t.vita.tag}
            </span>
            
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Drei Jahrzehnte orchestrale Exzellenz & Lehre
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {bioConfig.quickBio[currentLang] || t.vita.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <Award className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Staatskapelle Weimar (1992–2002):</strong>
                  <span className="text-gray-300"> 10 Jahre 1. Solohornist des Deutschen Nationaltheaters Weimar.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <GraduationCap className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Dozenturen an drei Musikhochschulen:</strong>
                  <span className="text-gray-300"> HfM Franz Liszt Weimar (seit 2006), HMT Rostock (seit 2009) und HMT Leipzig Alte Musik (seit 2015).</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold text-sm transition-all"
              >
                <span>Vollständige Vita & Diskografie</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl border border-border bg-foreground/[0.02] space-y-6">
              <h3 className="font-serif-display text-xl font-bold text-foreground">
                Zusammenarbeit mit führenden Ensembles
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-border/60 bg-foreground/[0.02]">
                  <strong className="text-[#C5A059] block font-serif-display text-base">Thomanerchor Leipzig</strong>
                  <span className="text-gray-300">Regelmäßiger Solohornist für Bachs h-Moll-Messe ("Quoniam") und Kantaten in der Thomaskirche.</span>
                </div>

                <div className="p-4 rounded-xl border border-border/60 bg-foreground/[0.02]">
                  <strong className="text-[#C5A059] block font-serif-display text-base">Dresdner Barockorchester</strong>
                  <span className="text-gray-300">Wiederbelebung der sächsischen Hofmusik von Heinichen, Zelenka und Telemann.</span>
                </div>

                <div className="p-4 rounded-xl border border-border/60 bg-foreground/[0.02]">
                  <strong className="text-[#C5A059] block font-serif-display text-base">Lautten Compagney Berlin</strong>
                  <span className="text-gray-300">Internationale Opern- und Oratorienprojekte auf historischen Instrumenten.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. DIRECT CONTACT & BOOKING FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-foreground/[0.02] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              {t.contact.tag}
            </span>

            <h2 className="font-serif-display text-3xl font-bold text-foreground">
              {t.contact.title}
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-3 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>{bioConfig.contactLocation}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <a href={`mailto:${bioConfig.contactEmail}`} className="hover:text-[#C5A059] transition-colors">
                  {bioConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h3 className="font-serif-display text-xl font-bold text-white">
                  Anfrage erfolgreich übermittelt!
                </h3>
                <p className="text-sm text-gray-300 max-w-md">
                  Vielen Dank für Ihre Nachricht. Stephan Katte wird sich schnellstmöglich mit Ihnen in Verbindung setzen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="z.B. Bach-Ensemble / Konzertgesellschaft"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      {t.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ihre.adresse@beispiel.de"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    {t.contact.formCategory}
                  </label>
                  <select
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="concert">{t.contact.catConcert}</option>
                    <option value="conducting">{t.contact.catConducting}</option>
                    <option value="masterclass">{t.contact.catMasterclass}</option>
                    <option value="consult">{t.contact.catInstrumentConsult}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Details zu geplantem Werk, Datum, Aufführungsort oder Meisterkurs..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#C5A059] text-black font-semibold text-sm hover:bg-[#d8b46b] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.contact.formSending : t.contact.formSend}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
