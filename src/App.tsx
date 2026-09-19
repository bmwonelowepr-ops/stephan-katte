import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Language, ThemeMode } from './types';
import { DataProvider } from './context/DataContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Multi-Page Views
import { HomePage } from './pages/HomePage';
import { InstrumentsPage } from './pages/InstrumentsPage';
import { InstrumentDetailPage } from './pages/InstrumentDetailPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { AboutPage } from './pages/AboutPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [theme, setTheme] = useState<ThemeMode>('dark');

  // Synchronize theme with HTML document root & body background
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#0F1115';
      document.body.style.color = '#F3F4F6';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#FAFAFA';
      document.body.style.color = '#111827';
    }
  }, [theme]);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div 
          className={`min-h-screen flex flex-col transition-colors duration-300 font-sans-ui ${
            theme === 'dark' ? 'dark bg-[#0F1115] text-[#F3F4F6]' : 'light bg-[#FAFAFA] text-[#111827]'
          }`}
        >
          {/* Persistent Header Navigation */}
          <Navbar
            currentLang={currentLang}
            onLanguageChange={setCurrentLang}
            theme={theme}
            onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />

          {/* Dedicated Page Route Container */}
          <main className="flex-1">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage currentLang={currentLang} />} />

              {/* Instrumentenbau & Historical Craftsmanship */}
              <Route path="/instruments" element={<InstrumentsPage currentLang={currentLang} />} />
              <Route path="/instruments/:id" element={<InstrumentDetailPage currentLang={currentLang} />} />

              {/* Events & Concert Calendar */}
              <Route path="/events" element={<EventsPage currentLang={currentLang} />} />
              <Route path="/events/:id" element={<EventDetailPage currentLang={currentLang} />} />

              {/* Biography, Academic Chairs & Discography */}
              <Route path="/about" element={<AboutPage currentLang={currentLang} />} />

              {/* Integrated Admin Panel / CMS */}
              <Route path="/admin" element={<AdminPage currentLang={currentLang} />} />

              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Persistent Footer */}
          <Footer currentLang={currentLang} />
        </div>
      </Router>
    </DataProvider>
  );
}
