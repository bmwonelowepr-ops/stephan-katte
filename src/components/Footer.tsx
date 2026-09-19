import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ClickToCopy } from './ClickToCopy';
import { ArrowUp, Mail, MapPin, GraduationCap, Award, SlidersHorizontal } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-[#0B0C0E] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Monogram & Bio Summary (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center bg-gradient-to-br from-[#2b2417] to-[#12110e] text-[#C5A059] font-serif font-bold text-sm shadow-inner group-hover:scale-105 transition-transform">
                SK
              </div>
              <div>
                <span className="font-serif-display text-xl font-bold tracking-tight text-white group-hover:text-[#C5A059] transition-colors">
                  Stephan Katte
                </span>
                <p className="text-xs text-[#C5A059] font-medium tracking-wide">
                  Historische Hörner & Dirigieren
                </p>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Weimar / Thüringen (Mitteldeutschland)</span>
              </div>
              <div className="flex items-center justify-between gap-2 max-w-xs">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href="mailto:kontakt@stephan-katte.de" className="hover:text-[#C5A059] transition-colors truncate">
                    kontakt@stephan-katte.de
                  </a>
                </div>
                <ClickToCopy text="kontakt@stephan-katte.de" currentLang={currentLang} />
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-serif-display text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/instruments" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.instruments}
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.events}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C5A059] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#C5A059] hover:underline flex items-center gap-1.5 font-medium">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>{t.nav.admin}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Handcrafted Models */}
          <div>
            <h4 className="font-serif-display text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Instrumentenbau
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/instruments/kerner-1760-brno" className="hover:text-[#C5A059] transition-colors">
                  Anton Kerner 1760 (Brünn)
                </Link>
              </li>
              <li>
                <Link to="/instruments/kerner-1810-inventionshorn" className="hover:text-[#C5A059] transition-colors">
                  Anton Kerner 1810 Inventionshorn
                </Link>
              </li>
              <li>
                <Link to="/instruments/tromba-da-caccia-2013" className="hover:text-[#C5A059] transition-colors">
                  Tromba da caccia 2013
                </Link>
              </li>
              <li>
                <Link to="/instruments/leichamschneider-1723" className="hover:text-[#C5A059] transition-colors">
                  Leichamschneider 1723 (Bern)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Academies & Heritage */}
          <div>
            <h4 className="font-serif-display text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Institutionen
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>HfM Franz Liszt Weimar (seit 2006)</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>HMT Leipzig Alte Musik (seit 2015)</span>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>HMT Rostock (seit 2009)</span>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Award className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Staatskapelle Weimar (1992–2002)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Stephan Katte. {t.footer.rights}</span>
            <span className="text-gray-400">Authentische Dokumentation nach www.stephan-katte.de</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-gray-400 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors"
            aria-label="Scroll to top"
          >
            <span>{t.footer.top}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
