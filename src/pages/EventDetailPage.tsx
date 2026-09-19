import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Clock, 
  Music, 
  User, 
  ExternalLink, 
  ShieldCheck, 
  Hammer, 
  Mail,
  ChevronRight,
  Ticket
} from 'lucide-react';

interface EventDetailPageProps {
  currentLang: Language;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({ currentLang }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const t = translations[currentLang];
  const { events, instruments } = useData();

  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="font-serif-display text-3xl font-bold text-foreground">
          Konzerttermin nicht gefunden
        </h1>
        <p className="text-gray-400">
          Der angeforderte Termin existiert nicht oder ist bereits archiviert.
        </p>
        <Link
          to="/events"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] text-black font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.backToEvents}</span>
        </Link>
      </div>
    );
  }

  // Attempt to match the instrument to our instruments list
  const matchedInstrument = instruments.find(inst => 
    event.instrumentUsed.toLowerCase().includes(inst.name.toLowerCase().split(' ')[0]) ||
    (event.instrumentUsed.toLowerCase().includes('leichamschneider') && inst.id === 'leichamschneider-1723') ||
    (event.instrumentUsed.toLowerCase().includes('kerner') && inst.id.startsWith('kerner'))
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-4 text-xs">
        <button
          onClick={() => navigate('/events')}
          className="inline-flex items-center gap-2 text-[#C5A059] hover:underline font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.backToEvents}</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-gray-400">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/events" className="hover:text-foreground">Konzerte</Link>
          <span>/</span>
          <span className="text-[#C5A059] truncate max-w-xs">{event.eventTitle[currentLang]}</span>
        </div>
      </div>

      {/* Main Title Banner */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            event.status === 'upcoming' 
              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
              : 'bg-gray-500/15 text-gray-400 border border-border'
          }`}>
            {event.status === 'upcoming' ? 'Kommendes Konzert' : 'Archiviert'}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-semibold">
            {event.ensemble}
          </span>
        </div>

        <h1 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          {event.eventTitle[currentLang]}
        </h1>

        {/* Date, Time, Venue Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-gray-300">
          <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02] flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <span className="text-[11px] text-gray-400 block">Datum:</span>
              <strong className="text-foreground">{event.date}</strong>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02] flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <span className="text-[11px] text-gray-400 block">Uhrzeit:</span>
              <strong className="text-foreground">{event.time}</strong>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-border/60 bg-foreground/[0.02] flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div>
              <span className="text-[11px] text-gray-400 block">Ort:</span>
              <strong className="text-foreground">{event.venue} ({event.city})</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Program & Musical Details */}
      <div className="rounded-3xl border border-border bg-foreground/[0.02] p-6 sm:p-8 space-y-6">
        <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
          <Music className="w-5 h-5 text-[#C5A059]" />
          <span>Programm & Musikalische Gestaltung</span>
        </h2>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          {event.program[currentLang]}
        </p>

        {event.programDetails && event.programDetails[currentLang] && (
          <div className="space-y-2 pt-2 border-t border-border/60">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider block">
              Einzelsätze & Werkauswahl:
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {event.programDetails[currentLang].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/60 text-xs sm:text-sm">
          <div>
            <span className="text-gray-400 block text-xs">Rolle / Solopartie:</span>
            <strong className="text-foreground">{event.role[currentLang]}</strong>
          </div>
          <div>
            <span className="text-gray-400 block text-xs">Musikalische Leitung:</span>
            <strong className="text-foreground">{event.conductor || 'Stephan Katte / Konzertmeister'}</strong>
          </div>
        </div>
      </div>

      {/* Historical Instrument Spotlight */}
      <div className="rounded-3xl border border-[#C5A059]/40 bg-gradient-to-br from-[#1d1912] to-[#121215] p-6 sm:p-8 space-y-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
            <Hammer className="w-4 h-4" />
            <span>Gespieltes historisches Naturhorn</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
            100% lochfrei
          </span>
        </div>

        <div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
            {event.instrumentUsed}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
            Dieses Konzert wird auf einem handgehämmerten historischen Naturhorn ohne künstliche Überblaslöcher gespielt, um den ungebrochenen, warmen Naturklang des 18. Jahrhunderts authentisch zu entfalten.
          </p>
        </div>

        {matchedInstrument && (
          <div className="pt-2">
            <Link
              to={`/instruments/${matchedInstrument.id}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] hover:underline"
            >
              <span>Werkstattbericht & Spezifikationen des Instruments ansehen</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>

      {/* Ticket & Booking Information */}
      <div className="rounded-3xl border border-border bg-foreground/[0.02] p-6 sm:p-8 space-y-4">
        <h3 className="font-serif-display text-xl font-bold text-foreground flex items-center gap-2">
          <Ticket className="w-5 h-5 text-[#C5A059]" />
          <span>Tickets & Einlass</span>
        </h3>

        <p className="text-sm text-gray-300">
          {event.ticketInfo[currentLang]}
        </p>

        {event.address && (
          <div className="text-xs text-gray-400 flex items-center gap-2 pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Veranstaltungsadresse: {event.address}</span>
          </div>
        )}

        <div className="pt-3 flex flex-wrap items-center gap-3">
          {event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#C5A059] text-black font-semibold text-xs sm:text-sm hover:bg-[#d8b46b] transition-all flex items-center gap-2 shadow-md"
            >
              <span>Zum Vorverkauf / Veranstalter</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <a
            href={`mailto:kontakt@stephan-katte.de?subject=Anfrage%20zu%20Konzert%20${encodeURIComponent(event.eventTitle[currentLang])}`}
            className="px-5 py-3 rounded-xl border border-border text-xs sm:text-sm font-semibold text-foreground hover:bg-foreground/5 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#C5A059]" />
            <span>Frage zum Konzert stellen</span>
          </a>
        </div>
      </div>

    </div>
  );
};
