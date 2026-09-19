export type Language = 'de' | 'en' | 'ru';
export type ThemeMode = 'dark' | 'light';

export interface TimelineMilestone {
  id: string;
  year: string;
  period?: string;
  location: string;
  badge?: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  details?: Record<Language, string[]>;
}

export interface InstrumentCraftsmanshipModel {
  id: string;
  name: string;
  originEra: string;
  category: 'baroque' | 'classical' | 'hunting' | 'tromba';
  historicalOriginalLocation: string; // e.g., "Bernisches Historisches Museum", "Mährisches Landesmuseum Brünn (Brno)"
  builderPartner: string; // e.g., "Friedbert Syhre (Leipzig)", "Andreas Jungwirth", "Stephan Katte"
  acousticalCharacter: Record<Language, string>;
  description: Record<Language, string>;
  historicalNotes: Record<Language, string>;
  craftsmanshipJourney: Record<Language, string>;
  keyCrooks: string[];
  specs: {
    bore: string; // Mensur
    bellTaper: string; // Becher-Durchmesser
    metalAlloy: string; // Material
    vents: string; // "100% lochfrei (ventless) - ohne Überblasbohrungen"
    mouthpieceRecomm: string;
    weight?: string;
  };
  repertoire: string[];
  featuredImage?: string;
}

export interface CraftsmanshipPrinciple {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  technicalSpecs: Record<Language, string[]>;
}

export interface CollaborationEntry {
  id: string;
  ensemble: string;
  city: string;
  directorOrFocus: string;
  description: Record<Language, string>;
}

export interface DiscographyEntry {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  label: string;
  ensemble: string;
  repertoire: string;
  hornInstrument: string;
  role: Record<Language, string>;
}

export interface ConcertDateEntry {
  id: string;
  date: string; // e.g. "14. November 2026"
  isoDate: string; // e.g. "2026-11-14"
  time: string;
  city: string;
  venue: string;
  address?: string;
  eventTitle: Record<Language, string>;
  program: Record<Language, string>;
  programDetails?: Record<Language, string[]>;
  ensemble: string;
  conductor?: string;
  role: Record<Language, string>;
  instrumentUsed: string;
  ticketInfo: Record<Language, string>;
  ticketUrl?: string;
  isFeatured?: boolean;
  status: 'upcoming' | 'past';
}

export interface SiteBioConfig {
  headline: Record<Language, string>;
  subheadline: Record<Language, string>;
  heroBio: Record<Language, string>;
  quickBio: Record<Language, string>;
  craftsmanshipPhilosophy: Record<Language, string>;
  contactEmail: string;
  contactLocation: string;
  institutes: {
    name: string;
    role: string;
    since: string;
  }[];
}
