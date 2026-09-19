import React, { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';
import { upcomingDates } from '../data/stephanKatteData';
import { ClickToCopy } from './ClickToCopy';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  Sparkles 
} from 'lucide-react';

interface ContactAndDatesProps {
  currentLang: Language;
  theme: ThemeMode;
}

export const ContactAndDates: React.FC<ContactAndDatesProps> = ({ currentLang, theme }) => {
  const t = translations[currentLang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'concert',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'concert',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 8000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C5A059] block mb-2">
            {t.contact.tag}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.contact.subtitle}
          </p>
        </div>

        {/* Upcoming Dates & Engagements Section */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] block mb-1">
              {t.contact.datesTitle}
            </span>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.contact.datesSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {upcomingDates.map((item) => (
              <div
                key={item.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  theme === 'dark'
                    ? 'bg-[#13161F] border-gray-800/80 hover:border-[#C5A059]/40'
                    : 'bg-white border-gray-200 hover:border-[#C5A059]/40 shadow-sm'
                }`}
              >
                {/* Date & Time Column */}
                <div className="flex items-center gap-4 min-w-[220px]">
                  <div className="w-12 h-12 rounded-xl border border-[#C5A059]/30 bg-[#C5A059]/10 flex flex-col items-center justify-center text-center shrink-0">
                    <Calendar className="w-4 h-4 text-[#C5A059] mb-0.5" />
                    <span className="text-[10px] uppercase font-bold text-[#C5A059]">2026/27</span>
                  </div>
                  <div>
                    <div className="font-serif-display font-bold text-base text-foreground">
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30">
                      {item.role[currentLang]}
                    </span>
                    <span className="text-xs text-gray-400">{item.ensemble}</span>
                  </div>
                  <h4 className="font-serif-display text-lg font-bold text-foreground">
                    {item.eventTitle[currentLang]}
                  </h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.program[currentLang]}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-[#C5A059] pt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.venue}, {item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Cards & Direct Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic Locations & Direct Email */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Weimar Card */}
            <div 
              className={`p-6 sm:p-8 rounded-3xl border space-y-3 ${
                theme === 'dark' ? 'bg-[#13161F] border-gray-800' : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                <MapPin className="w-4 h-4" />
                <span>{t.contact.locationWeimarTitle}</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t.contact.locationWeimarDesc}
              </p>
              <div className="pt-2 border-t border-gray-800/20 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">{t.contact.emailLabel}:</span>
                  <a
                    href="mailto:kontakt@stephan-katte.de"
                    className="font-code text-sm sm:text-base text-[#C5A059] hover:underline font-bold"
                  >
                    kontakt@stephan-katte.de
                  </a>
                </div>
                <ClickToCopy text="kontakt@stephan-katte.de" currentLang={currentLang} />
              </div>
            </div>

            {/* Academic Chairs Card */}
            <div 
              className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
                theme === 'dark' ? 'bg-[#13161F] border-gray-800' : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                <GraduationCap className="w-4 h-4" />
                <span>{t.contact.institutesTitle}</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl border border-gray-800/40 bg-background/40">
                  <strong className="block text-foreground text-sm font-serif">
                    HfM Franz Liszt Weimar
                  </strong>
                  <span className="text-gray-400 block mt-0.5">
                    Lehrauftrag Horn / Naturhorn (seit 2006)
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-gray-800/40 bg-background/40">
                  <strong className="block text-foreground text-sm font-serif">
                    HMT Felix Mendelssohn Bartholdy Leipzig
                  </strong>
                  <span className="text-gray-400 block mt-0.5">
                    Fachrichtung Alte Musik (seit 2015)
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-gray-800/40 bg-background/40">
                  <strong className="block text-foreground text-sm font-serif">
                    HMT Rostock
                  </strong>
                  <span className="text-gray-400 block mt-0.5">
                    Institut für Orchesterspiel & Blasinstrumente (seit 2009)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Booking & Inquiry Form */}
          <div className="lg:col-span-7">
            <div 
              className={`p-6 sm:p-10 rounded-3xl border relative ${
                theme === 'dark' 
                  ? 'bg-[#141720] border-[#C5A059]/30 shadow-xl' 
                  : 'bg-white border-[#C5A059]/30 shadow-lg'
              }`}
            >
              <div className="mb-6">
                <h3 className="font-serif-display text-2xl font-bold text-foreground">
                  {t.contact.bookingTitle}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.contact.bookingDesc}
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#C5A059]/15 border border-[#C5A059] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {t.contact.successMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {t.contact.formCategory}
                  </label>
                  <select
                    id="contact-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors ${
                      theme === 'dark'
                        ? 'bg-[#181C26] border-gray-700 text-gray-200 focus:border-[#C5A059]'
                        : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-[#C5A059]'
                    } focus:outline-none`}
                  >
                    <option value="concert">{t.contact.catConcert}</option>
                    <option value="conducting">{t.contact.catConducting}</option>
                    <option value="masterclass">{t.contact.catMasterclass}</option>
                    <option value="consulting">{t.contact.catInstrumentConsult}</option>
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      {t.contact.formName} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Name / Veranstalter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors ${
                        theme === 'dark'
                          ? 'bg-[#181C26] border-gray-700 text-gray-200 focus:border-[#C5A059]'
                          : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-[#C5A059]'
                      } focus:outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      {t.contact.formEmail} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="kontakt@ensemble.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors ${
                        theme === 'dark'
                          ? 'bg-[#181C26] border-gray-700 text-gray-200 focus:border-[#C5A059]'
                          : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-[#C5A059]'
                      } focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    {t.contact.formSubject}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="z.B. Bach Jagdkantate BWV 208 / Solist Naturhorn"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors ${
                      theme === 'dark'
                        ? 'bg-[#181C26] border-gray-700 text-gray-200 focus:border-[#C5A059]'
                        : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-[#C5A059]'
                    } focus:outline-none`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Details zum Konzertort, Besetzung, Wunschrepertoire oder Meisterkurs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-colors ${
                      theme === 'dark'
                        ? 'bg-[#181C26] border-gray-700 text-gray-200 focus:border-[#C5A059]'
                        : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-[#C5A059]'
                    } focus:outline-none resize-y`}
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#C5A059] text-black hover:bg-[#d6b26d] transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.contact.formSending : t.contact.formSend}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
