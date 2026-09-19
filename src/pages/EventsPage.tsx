import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Music, 
  UserCheck, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';

interface EventsPageProps {
  currentLang: Language;
}

export const EventsPage: React.FC<EventsPageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { events } = useData();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'masterclass'>('all');

  const filteredEvents = events.filter(e => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return e.status === 'upcoming';
    if (filter === 'past') return e.status === 'past';
    if (filter === 'masterclass') return e.role[currentLang]?.toLowerCase().includes('meisterkurs') || e.eventTitle[currentLang]?.toLowerCase().includes('meisterkurs') || e.time.toLowerCase().includes('meisterkurs');
    return true;
  });

  const featuredConcert = events.find(e => e.id === 'date-14-nov') || events.find(e => e.isFeatured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs font-semibold text-[#C5A059]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.eventsPage.tag}</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          {t.eventsPage.title}
        </h1>

        <p className="text-base text-gray-300 leading-relaxed">
          {t.eventsPage.subtitle}
        </p>
      </div>

      {/* Featured November 14 Spotlight Banner */}
      {featuredConcert && (
        <div className="relative rounded-3xl border border-[#C5A059]/50 bg-gradient-to-br from-[#1d1912] via-[#141417] to-[#0c0d0f] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>{t.eventsPage.novFeaturedBadge}</span>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              {featuredConcert.eventTitle[currentLang]}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {featuredConcert.program[currentLang]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span className="text-white font-medium">{featuredConcert.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>{featuredConcert.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>{featuredConcert.venue} ({featuredConcert.city})</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/events/${featuredConcert.id}`}
                className="px-6 py-3 rounded-xl bg-[#C5A059] text-black font-semibold text-xs sm:text-sm hover:bg-[#d8b46b] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Konzertdetails & Tickets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {featuredConcert.ticketUrl && (
                <a
                  href={featuredConcert.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-white/20 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span>Veranstalterseite</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            filter === 'all'
              ? 'bg-[#C5A059] text-black font-bold'
              : 'border border-border text-gray-400 hover:text-foreground'
          }`}
        >
          {t.eventsPage.filterAll}
        </button>

        <button
          onClick={() => setFilter('upcoming')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            filter === 'upcoming'
              ? 'bg-[#C5A059] text-black font-bold'
              : 'border border-border text-gray-400 hover:text-foreground'
          }`}
        >
          {t.eventsPage.filterUpcoming}
        </button>

        <button
          onClick={() => setFilter('masterclass')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            filter === 'masterclass'
              ? 'bg-[#C5A059] text-black font-bold'
              : 'border border-border text-gray-400 hover:text-foreground'
          }`}
        >
          {t.eventsPage.filterMasterclass}
        </button>

        <button
          onClick={() => setFilter('past')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            filter === 'past'
              ? 'bg-[#C5A059] text-black font-bold'
              : 'border border-border text-gray-400 hover:text-foreground'
          }`}
        >
          {t.eventsPage.filterPast}
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="group rounded-3xl border border-border bg-foreground/[0.02] hover:border-[#C5A059]/50 hover:bg-foreground/[0.04] p-6 sm:p-8 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Date Column */}
              <div className="lg:col-span-3 space-y-2 border-b lg:border-b-0 lg:border-r border-border/80 pb-4 lg:pb-0 lg:pr-6">
                <div className="text-sm font-bold text-[#C5A059] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{event.city}</span>
                </div>
                <div className="text-[11px] text-gray-400 line-clamp-1">
                  {event.venue}
                </div>
              </div>

              {/* Middle Title & Program Column */}
              <div className="lg:col-span-6 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider ${
                    event.status === 'upcoming' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-gray-500/10 text-gray-400 border border-border'
                  }`}>
                    {event.status === 'upcoming' ? 'Kommend' : 'Archiv'}
                  </span>
                  <span className="text-xs text-[#C5A059] font-medium">
                    {event.ensemble}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#C5A059] transition-colors">
                  {event.eventTitle[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                  {event.program[currentLang]}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400 pt-1">
                  <span><strong>Rolle:</strong> {event.role[currentLang]}</span>
                  <span><strong>Instrument:</strong> {event.instrumentUsed}</span>
                </div>
              </div>

              {/* Right Action Column */}
              <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2 justify-center lg:items-end">
                <Link
                  to={`/events/${event.id}`}
                  className="w-full sm:w-auto lg:w-full py-2.5 px-4 rounded-xl bg-[#C5A059] text-black font-semibold text-xs hover:bg-[#d8b46b] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Details & Programm</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto lg:w-full py-2 px-4 rounded-xl border border-border text-xs text-gray-300 hover:text-foreground hover:bg-foreground/5 transition-all text-center"
                  >
                    Ticketportal
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Booking Notice Box */}
      <div className="p-6 rounded-3xl border border-border bg-foreground/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif-display text-base font-bold text-foreground">
            Konzertengagement oder Meisterkurs planen?
          </h4>
          <p className="text-xs text-gray-400 max-w-xl">
            {t.eventsPage.calendarNote}
          </p>
        </div>

        <a
          href="mailto:kontakt@stephan-katte.de?subject=Konzertanfrage"
          className="px-5 py-2.5 rounded-xl border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black font-semibold text-xs transition-all shrink-0"
        >
          Konzertanfrage stellen
        </a>
      </div>

    </div>
  );
};
