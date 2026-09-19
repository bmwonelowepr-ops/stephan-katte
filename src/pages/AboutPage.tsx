import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  vitaMilestones, 
  keyCollaborations, 
  discographyProductions 
} from '../data/stephanKatteData';
import { downloadPressKit } from '../utils/pressKit';
import { 
  BookOpen, 
  Award, 
  GraduationCap, 
  Disc, 
  MapPin, 
  Calendar, 
  ExternalLink,
  ChevronRight,
  Music,
  Download,
  FileText
} from 'lucide-react';

interface AboutPageProps {
  currentLang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-xs font-semibold text-[#C5A059]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{t.vita.tag}</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          {t.vita.title}
        </h1>

        <p className="text-base text-gray-300 leading-relaxed">
          {t.vita.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => downloadPressKit(currentLang)}
            className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-black font-semibold text-xs sm:text-sm hover:bg-[#d8b46b] transition-all flex items-center gap-2.5 shadow-md active:scale-98 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.vita.pressKitBtn}</span>
          </button>
          
          <span className="text-xs text-gray-400">
            {t.vita.pressKitSubtitle}
          </span>
        </div>

        <div className="text-xs text-gray-400 font-mono pt-1">
          {t.vita.sourceNotice}
        </div>
      </div>

      {/* 1. VITA TIMELINE */}
      <div className="space-y-8">
        <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2.5">
          <Award className="w-6 h-6 text-[#C5A059]" />
          <span>Künstlerischer & Akademischer Werdegang</span>
        </h2>

        <div className="relative border-l border-border/80 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {vitaMilestones.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#C5A059] bg-background group-hover:bg-[#C5A059] transition-colors" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#C5A059] font-bold font-mono">
                    {milestone.year}
                  </span>
                  {milestone.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-foreground/5 border border-border text-gray-400">
                      {milestone.badge[currentLang]}
                    </span>
                  )}
                  <span className="text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    {milestone.location}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-foreground">
                  {milestone.title[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
                  {milestone.subtitle[currentLang]}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                  {milestone.description[currentLang]}
                </p>

                {milestone.details && milestone.details[currentLang] && (
                  <ul className="space-y-1 pt-2 text-xs text-gray-400">
                    {milestone.details[currentLang].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-bold">·</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ACADEMIC APPOINTMENTS */}
      <div className="rounded-3xl border border-border bg-foreground/[0.02] p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            Pädagogische Verantwortung
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
            Dozenturen an drei traditionsreichen Musikhochschulen
          </h2>
          <p className="text-sm text-gray-300">
            Ausbildung des internationalen hornistischen Nachwuchses im modernen und historischen Spiel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-background space-y-3">
            <GraduationCap className="w-6 h-6 text-[#C5A059]" />
            <h3 className="font-serif-display text-lg font-bold text-foreground">
              HfM Franz Liszt Weimar
            </h3>
            <p className="text-xs text-[#C5A059] font-medium">Seit 2006: Lehrauftrag Horn & Naturhorn</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Unterricht von Studierenden im Haupt- und Nebenfach Horn sowie Spezialisierungsmodule für historische Bläserpraxis.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-background space-y-3">
            <GraduationCap className="w-6 h-6 text-[#C5A059]" />
            <h3 className="font-serif-display text-lg font-bold text-foreground">
              HMT Leipzig (Alte Musik)
            </h3>
            <p className="text-xs text-[#C5A059] font-medium">Seit 2015: Fachrichtung Alte Musik</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Spezialisierte Ausbildung an der traditionsreichen Leipziger Hochschule mit Schwerpunkt auf Bach-, Telemann- und Händel-Repertoire.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/60 bg-background space-y-3">
            <GraduationCap className="w-6 h-6 text-[#C5A059]" />
            <h3 className="font-serif-display text-lg font-bold text-foreground">
              HMT Rostock
            </h3>
            <p className="text-xs text-[#C5A059] font-medium">Seit 2009: Institut für Orchesterspiel</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Vorbereitung auf Orchesterprobespiele, Bläserkammermusik und Stilistik von der Klassik bis zur Hochromantik.
            </p>
          </div>
        </div>
      </div>

      {/* 3. KEY COLLABORATIONS */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            Kammermusik & Orchester
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
            {t.discography.collaborationsTitle}
          </h2>
          <p className="text-sm text-gray-300">
            {t.discography.collaborationsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyCollaborations.map((collab) => (
            <div
              key={collab.id}
              className="p-6 rounded-2xl border border-border/60 bg-foreground/[0.02] space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#C5A059]">{collab.city}</span>
              </div>

              <h3 className="font-serif-display text-lg font-bold text-foreground">
                {collab.ensemble}
              </h3>

              <p className="text-xs text-[#C5A059] font-medium">
                {collab.directorOrFocus}
              </p>

              <p className="text-xs text-gray-300 leading-relaxed">
                {collab.description[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. DISCOGRAPHY */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            {t.discography.tag}
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-foreground">
            {t.discography.cdProductionsTitle}
          </h2>
          <p className="text-sm text-gray-300">
            Dokumentierte CD-Einspielungen auf historischen Originalkopien lochfreier Naturhörner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {discographyProductions.map((disco) => (
            <div
              key={disco.id}
              className="p-6 rounded-3xl border border-border bg-foreground/[0.02] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#C5A059] font-mono font-bold">
                    {disco.year}
                  </span>
                  <span className="text-gray-400 font-mono text-[11px]">
                    Label: {disco.label}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl font-bold text-foreground">
                  {disco.title}
                </h3>

                <p className="text-xs text-gray-300">
                  {disco.subtitle}
                </p>

                <div className="p-3.5 rounded-xl border border-border/60 bg-background space-y-1 text-xs text-gray-400">
                  <div><strong>Ensemble:</strong> {disco.ensemble}</div>
                  <div><strong>Gespieltes Horn:</strong> <span className="text-foreground">{disco.hornInstrument}</span></div>
                  <div><strong>Rolle:</strong> <span className="text-[#C5A059]">{disco.role[currentLang]}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
