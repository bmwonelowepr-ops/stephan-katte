import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Globe, 
  SlidersHorizontal, 
  Calendar, 
  Hammer, 
  BookOpen, 
  Home, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  theme,
  onToggleTheme,
}) => {
  const t = translations[currentLang];
  const { hasCustomChanges } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t.nav.home, icon: Home },
    { to: '/instruments', label: t.nav.instruments, icon: Hammer },
    { to: '/events', label: t.nav.events, icon: Calendar },
    { to: '/about', label: t.nav.about, icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-200 border-b bg-background/85 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram & Title */}
          <Link 
            to="/" 
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center bg-gradient-to-br from-[#2b2417] to-[#12110e] text-[#C5A059] font-serif font-bold text-sm shadow-inner group-hover:scale-105 transition-transform">
              SK
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-[#C5A059] transition-colors">
                Stephan Katte
              </span>
              <span className="text-[11px] tracking-widest uppercase font-medium text-gray-400">
                Historische Hörner & Dirigieren
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Hauptnavigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.to === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/40 font-semibold'
                      : 'text-gray-400 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}

            {/* Admin CMS Route Link */}
            <NavLink
              to="/admin"
              className={`ml-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                location.pathname === '/admin'
                  ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-sm'
                  : 'border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059]/15'
              }`}
              title="Content Management Dashboard"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t.nav.admin}</span>
              {hasCustomChanges && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Custom CMS changes active" />
              )}
            </NavLink>
          </nav>

          {/* Right Action Bar: i18n switcher & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher */}
            <div className="flex items-center rounded-xl p-1 border border-border bg-foreground/5 text-xs font-medium">
              <Globe className="w-3.5 h-3.5 text-[#C5A059] ml-1.5 mr-1" />
              {(['de', 'en', 'ru'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 rounded-lg uppercase tracking-wider text-[11px] font-semibold transition-all ${
                    currentLang === lang
                      ? 'bg-[#C5A059] text-black shadow-sm font-bold'
                      : 'text-gray-400 hover:text-foreground'
                  }`}
                  aria-label={`Switch to ${lang.toUpperCase()}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl border border-border text-gray-400 hover:text-[#C5A059] hover:bg-foreground/5 transition-colors focus:outline-none"
              aria-label="Toggle dark/light theme"
              title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#C5A059]" />
              ) : (
                <Moon className="w-4 h-4 text-[#C5A059]" />
              )}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-border text-[#C5A059]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-border text-gray-300 hover:text-[#C5A059] hover:bg-foreground/5 transition-colors"
              aria-label="Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.to === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-[#C5A059]/15 text-[#C5A059] font-bold border border-[#C5A059]/30'
                      : 'text-gray-300 hover:text-[#C5A059] hover:bg-foreground/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C5A059]" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}

            {/* Mobile Admin Link */}
            <NavLink
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between border ${
                location.pathname === '/admin'
                  ? 'bg-[#C5A059] text-black border-[#C5A059]'
                  : 'text-[#C5A059] border-[#C5A059]/40 bg-[#C5A059]/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="w-4 h-4" />
                <span>{t.nav.admin}</span>
              </div>
              {hasCustomChanges && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
                  CMS Aktiv
                </span>
              )}
            </NavLink>
          </div>

          {/* Language Switcher in Mobile Menu */}
          <div className="pt-3 border-t border-border flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">Sprache / Language:</span>
            <div className="flex items-center gap-1">
              {(['de', 'en', 'ru'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg uppercase tracking-wider text-xs font-bold transition-all ${
                    currentLang === lang
                      ? 'bg-[#C5A059] text-black'
                      : 'text-gray-400 border border-border'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
