import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Language, ConcertDateEntry, InstrumentCraftsmanshipModel } from '../types';
import { translations } from '../data/translations';
import { useData } from '../context/DataContext';
import { 
  SlidersHorizontal, 
  Calendar, 
  Hammer, 
  FileText, 
  Database, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  Eye,
  X,
  Languages
} from 'lucide-react';

interface AdminPageProps {
  currentLang: Language;
}

interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'danger' | 'info';
}

export const AdminPage: React.FC<AdminPageProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const { 
    events, 
    instruments, 
    bioConfig, 
    addEvent, 
    updateEvent, 
    deleteEvent,
    addInstrument,
    updateInstrument,
    deleteInstrument,
    updateBioConfig,
    resetToDefaults,
    exportDataJSON,
    importDataJSON,
    hasCustomChanges
  } = useData();

  const [activeTab, setActiveTab] = useState<'events' | 'instruments' | 'bio' | 'system'>('events');
  
  // Toast system
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (message: string, type: 'success' | 'danger' | 'info' = 'success') => {
    const id = Date.now();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast(current => (current?.id === id ? null : current));
    }, 3500);
  };

  // Active editing language for modals (synced with currentLang by default)
  const [modalLang, setModalLang] = useState<Language>(currentLang);

  useEffect(() => {
    setModalLang(currentLang);
  }, [currentLang]);

  // --- EVENT EDIT / CREATE MODAL STATE ---
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventFormData, setEventFormData] = useState({
    title: '',
    date: '',
    time: '',
    city: '',
    venue: '',
    ensemble: '',
    program: '',
    instrumentUsed: '',
    role: '',
    ticketInfo: '',
    ticketUrl: '',
    status: 'upcoming' as 'upcoming' | 'past'
  });

  const handleOpenAddEvent = () => {
    setEditingEventId(null);
    setModalLang(currentLang);
    setEventFormData({
      title: '',
      date: '14. November 2026',
      time: '19:30 CET',
      city: 'Leipzig',
      venue: 'Thomaskirche zu Leipzig',
      ensemble: 'Thomanerchor Leipzig',
      program: 'Corno da caccia Solo in Bach h-Moll-Messe BWV 232',
      instrumentUsed: 'Michael Leichamschneider 1723 Naturhorn in D',
      role: 'Solohornist',
      ticketInfo: 'Vorverkauf über Thomasshop und Abendkasse',
      ticketUrl: 'https://www.thomaskirche.org',
      status: 'upcoming'
    });
    setEventModalOpen(true);
  };

  const handleOpenEditEvent = (event: ConcertDateEntry) => {
    setEditingEventId(event.id);
    setModalLang(currentLang);
    setEventFormData({
      title: event.eventTitle[currentLang] || '',
      date: event.date,
      time: event.time,
      city: event.city,
      venue: event.venue,
      ensemble: event.ensemble,
      program: event.program[currentLang] || '',
      instrumentUsed: event.instrumentUsed,
      role: event.role[currentLang] || '',
      ticketInfo: event.ticketInfo[currentLang] || '',
      ticketUrl: event.ticketUrl || '',
      status: event.status
    });
    setEventModalOpen(true);
  };

  // Sync event form inputs when modalLang changes (preventing stale or overwritten translations)
  const handleSwitchEventModalLang = (lang: Language) => {
    setModalLang(lang);
    if (editingEventId) {
      const ev = events.find(e => e.id === editingEventId);
      if (ev) {
        setEventFormData(prev => ({
          ...prev,
          title: ev.eventTitle[lang] || '',
          program: ev.program[lang] || '',
          role: ev.role[lang] || '',
          ticketInfo: ev.ticketInfo[lang] || ''
        }));
      }
    }
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEventId) {
      const existing = events.find(e => e.id === editingEventId);
      updateEvent(editingEventId, {
        date: eventFormData.date,
        time: eventFormData.time,
        city: eventFormData.city,
        venue: eventFormData.venue,
        ensemble: eventFormData.ensemble,
        instrumentUsed: eventFormData.instrumentUsed,
        ticketUrl: eventFormData.ticketUrl,
        status: eventFormData.status,
        eventTitle: { ...(existing?.eventTitle || { de: '', en: '', ru: '' }), [modalLang]: eventFormData.title },
        program: { ...(existing?.program || { de: '', en: '', ru: '' }), [modalLang]: eventFormData.program },
        role: { ...(existing?.role || { de: '', en: '', ru: '' }), [modalLang]: eventFormData.role },
        ticketInfo: { ...(existing?.ticketInfo || { de: '', en: '', ru: '' }), [modalLang]: eventFormData.ticketInfo },
      });
      showToast(t.admin.savedSuccessfully, 'success');
    } else {
      const newId = `event-${Date.now()}`;
      const newEntry: ConcertDateEntry = {
        id: newId,
        date: eventFormData.date,
        isoDate: '2026-11-14',
        time: eventFormData.time,
        city: eventFormData.city,
        venue: eventFormData.venue,
        ensemble: eventFormData.ensemble,
        instrumentUsed: eventFormData.instrumentUsed,
        ticketUrl: eventFormData.ticketUrl,
        status: eventFormData.status,
        eventTitle: { de: eventFormData.title, en: eventFormData.title, ru: eventFormData.title, [modalLang]: eventFormData.title },
        program: { de: eventFormData.program, en: eventFormData.program, ru: eventFormData.program, [modalLang]: eventFormData.program },
        role: { de: eventFormData.role, en: eventFormData.role, ru: eventFormData.role, [modalLang]: eventFormData.role },
        ticketInfo: { de: eventFormData.ticketInfo, en: eventFormData.ticketInfo, ru: eventFormData.ticketInfo, [modalLang]: eventFormData.ticketInfo },
      };
      addEvent(newEntry);
      showToast(t.admin.savedSuccessfully, 'success');
    }
    setEventModalOpen(false);
  };

  // --- INSTRUMENT EDIT / CREATE MODAL STATE ---
  const [instrumentModalOpen, setInstrumentModalOpen] = useState(false);
  const [editingInstId, setEditingInstId] = useState<string | null>(null);
  const [instFormData, setInstFormData] = useState({
    name: '',
    originEra: '',
    category: 'baroque' as 'baroque' | 'classical' | 'hunting' | 'tromba',
    historicalOriginalLocation: '',
    builderPartner: '',
    bore: '',
    bellTaper: '',
    metalAlloy: '',
    description: '',
    crooksStr: 'F, D, C, Bb'
  });

  const handleOpenAddInstrument = () => {
    setEditingInstId(null);
    setModalLang(currentLang);
    setInstFormData({
      name: '',
      originEra: 'Barock (Wien, 1720)',
      category: 'baroque',
      historicalOriginalLocation: 'Historische Sammlung',
      builderPartner: 'Stephan Katte (Eigenbau)',
      bore: '11.5 mm',
      bellTaper: '260 mm handgehämmert',
      metalAlloy: 'Historisches Weichmessing (70/30)',
      description: '',
      crooksStr: 'F, D, C, Bb'
    });
    setInstrumentModalOpen(true);
  };

  const handleOpenEditInstrument = (inst: InstrumentCraftsmanshipModel) => {
    setEditingInstId(inst.id);
    setModalLang(currentLang);
    setInstFormData({
      name: inst.name,
      originEra: inst.originEra,
      category: inst.category,
      historicalOriginalLocation: inst.historicalOriginalLocation,
      builderPartner: inst.builderPartner,
      bore: inst.specs.bore,
      bellTaper: inst.specs.bellTaper,
      metalAlloy: inst.specs.metalAlloy,
      description: inst.description[currentLang] || '',
      crooksStr: inst.keyCrooks.join(', ')
    });
    setInstrumentModalOpen(true);
  };

  // Sync instrument description when modalLang switches
  const handleSwitchInstModalLang = (lang: Language) => {
    setModalLang(lang);
    if (editingInstId) {
      const inst = instruments.find(i => i.id === editingInstId);
      if (inst) {
        setInstFormData(prev => ({
          ...prev,
          description: inst.description[lang] || ''
        }));
      }
    }
  };

  const handleSaveInstrument = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCrooks = instFormData.crooksStr.split(',').map(s => s.trim()).filter(Boolean);

    if (editingInstId) {
      const existing = instruments.find(i => i.id === editingInstId);
      updateInstrument(editingInstId, {
        name: instFormData.name,
        originEra: instFormData.originEra,
        category: instFormData.category,
        historicalOriginalLocation: instFormData.historicalOriginalLocation,
        builderPartner: instFormData.builderPartner,
        keyCrooks: parsedCrooks,
        description: { ...(existing?.description || { de: '', en: '', ru: '' }), [modalLang]: instFormData.description },
        specs: {
          bore: instFormData.bore,
          bellTaper: instFormData.bellTaper,
          metalAlloy: instFormData.metalAlloy,
          vents: '100% lochfrei (ventless)',
          mouthpieceRecomm: 'Historisches Trichtermundstück'
        }
      });
      showToast(t.admin.savedSuccessfully, 'success');
    } else {
      const newId = `inst-${Date.now()}`;
      const newModel: InstrumentCraftsmanshipModel = {
        id: newId,
        name: instFormData.name,
        originEra: instFormData.originEra,
        category: instFormData.category,
        historicalOriginalLocation: instFormData.historicalOriginalLocation,
        builderPartner: instFormData.builderPartner,
        acousticalCharacter: {
          de: 'Authentische Naturresonanz mit samtigem Ton.',
          en: 'Authentic overtone resonance with velvety tone.',
          ru: 'Подлинный естественный резонанс.'
        },
        description: { de: instFormData.description, en: instFormData.description, ru: instFormData.description, [modalLang]: instFormData.description },
        historicalNotes: {
          de: 'Vermessen und rekonstruiert nach historischem Vorbild.',
          en: 'Measured and reconstructed after historical original.',
          ru: 'Реконструкция по историческому образцу.'
        },
        craftsmanshipJourney: {
          de: 'Reine Handhämmerung über Stahldorne mit Weichlötung.',
          en: 'Hand-hammered over mandrels with soft solder joints.',
          ru: 'Ручная ковка на оправках.'
        },
        keyCrooks: parsedCrooks,
        specs: {
          bore: instFormData.bore,
          bellTaper: instFormData.bellTaper,
          metalAlloy: instFormData.metalAlloy,
          vents: '100% lochfrei (ventless)',
          mouthpieceRecomm: 'Historisches Trichtermundstück'
        },
        repertoire: ['Barocke Solokonzerte & Bläsermusiken']
      };
      addInstrument(newModel);
      showToast(t.admin.savedSuccessfully, 'success');
    }
    setInstrumentModalOpen(false);
  };

  // --- BIO FORM STATE & SYNC ---
  const [bioFormData, setBioFormData] = useState({
    headline: bioConfig.headline[currentLang] || '',
    subheadline: bioConfig.subheadline[currentLang] || '',
    heroBio: bioConfig.heroBio[currentLang] || '',
    quickBio: bioConfig.quickBio[currentLang] || '',
    contactEmail: bioConfig.contactEmail || '',
    contactLocation: bioConfig.contactLocation || ''
  });

  // Automatically synchronize Bio form whenever currentLang or bioConfig changes
  useEffect(() => {
    setBioFormData({
      headline: bioConfig.headline[currentLang] || '',
      subheadline: bioConfig.subheadline[currentLang] || '',
      heroBio: bioConfig.heroBio[currentLang] || '',
      quickBio: bioConfig.quickBio[currentLang] || '',
      contactEmail: bioConfig.contactEmail || '',
      contactLocation: bioConfig.contactLocation || ''
    });
  }, [currentLang, bioConfig]);

  const handleSaveBio = (e: React.FormEvent) => {
    e.preventDefault();
    updateBioConfig({
      contactEmail: bioFormData.contactEmail,
      contactLocation: bioFormData.contactLocation,
      headline: { ...bioConfig.headline, [currentLang]: bioFormData.headline },
      subheadline: { ...bioConfig.subheadline, [currentLang]: bioFormData.subheadline },
      heroBio: { ...bioConfig.heroBio, [currentLang]: bioFormData.heroBio },
      quickBio: { ...bioConfig.quickBio, [currentLang]: bioFormData.quickBio },
    });
    showToast(t.admin.savedSuccessfully, 'success');
  };

  // --- JSON IMPORT / EXPORT STATE ---
  const [importJsonText, setImportJsonText] = useState('');

  const handleExport = () => {
    const data = exportDataJSON();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stephan-katte-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(t.admin.exportJSON, 'info');
  };

  const handleImport = () => {
    if (!importJsonText.trim()) return;
    const ok = importDataJSON(importJsonText);
    if (ok) {
      showToast(t.admin.savedSuccessfully, 'success');
      setImportJsonText('');
    } else {
      alert('Ungültiges JSON-Format. Bitte prüfen.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-xs font-bold text-[#C5A059]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{t.admin.tag}</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-foreground">
            {t.admin.title}
          </h1>

          <p className="text-sm text-gray-400">
            {t.admin.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 text-xs font-medium text-foreground flex items-center gap-2 transition-all"
          >
            <Eye className="w-4 h-4 text-[#C5A059]" />
            <span>{t.nav.home}</span>
          </Link>
          <Link
            to="/instruments"
            className="px-4 py-2 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 text-xs font-medium text-foreground flex items-center gap-2 transition-all"
          >
            <Hammer className="w-4 h-4 text-[#C5A059]" />
            <span>{t.nav.instruments}</span>
          </Link>
          <Link
            to="/events"
            className="px-4 py-2 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 text-xs font-medium text-foreground flex items-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>{t.nav.events}</span>
          </Link>
        </div>
      </div>

      {/* Persistence indicator */}
      {hasCustomChanges && (
        <div className="p-4 rounded-2xl border border-[#C5A059]/40 bg-[#C5A059]/10 text-xs sm:text-sm text-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>{t.admin.hasChangesNote}</span>
          </div>
          <button
            onClick={() => {
              if (confirm(t.admin.resetDefaults + '?')) {
                resetToDefaults();
                showToast(t.admin.resetSuccess, 'danger');
              }
            }}
            className="px-3 py-1.5 rounded-lg border border-[#C5A059]/40 hover:bg-[#C5A059]/20 text-xs text-[#C5A059] font-medium transition-colors self-start sm:self-auto"
          >
            {t.admin.resetDefaults}
          </button>
        </div>
      )}

      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
            activeTab === 'events'
              ? 'bg-[#C5A059] text-black font-semibold shadow-md'
              : 'border border-border text-gray-400 hover:text-foreground hover:bg-foreground/5'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>{t.admin.tabEvents} ({events.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('instruments')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
            activeTab === 'instruments'
              ? 'bg-[#C5A059] text-black font-semibold shadow-md'
              : 'border border-border text-gray-400 hover:text-foreground hover:bg-foreground/5'
          }`}
        >
          <Hammer className="w-4 h-4" />
          <span>{t.admin.tabInstruments} ({instruments.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bio')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
            activeTab === 'bio'
              ? 'bg-[#C5A059] text-black font-semibold shadow-md'
              : 'border border-border text-gray-400 hover:text-foreground hover:bg-foreground/5'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{t.admin.tabBio}</span>
        </button>

        <button
          onClick={() => setActiveTab('system')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
            activeTab === 'system'
              ? 'bg-[#C5A059] text-black font-semibold shadow-md'
              : 'border border-border text-gray-400 hover:text-foreground hover:bg-foreground/5'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>{t.admin.tabSystem}</span>
        </button>
      </div>

      {/* TAB 1: EVENTS MANAGER */}
      {activeTab === 'events' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-display text-xl font-bold text-foreground">
              {t.admin.tabEvents} ({events.length})
            </h2>

            <button
              onClick={handleOpenAddEvent}
              className="px-4 py-2.5 rounded-xl bg-[#C5A059] text-black font-semibold text-xs hover:bg-[#d8b46b] transition-all flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{t.admin.addEvent}</span>
            </button>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-foreground/[0.03] border-b border-border text-gray-400 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-4">{t.admin.fieldDate} & {t.admin.fieldCity}</th>
                    <th className="p-4">{t.admin.fieldTitle} & {t.admin.fieldProgram}</th>
                    <th className="p-4">{t.admin.fieldEnsemble}</th>
                    <th className="p-4">{t.admin.fieldInstrument}</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {events.map((ev) => (
                    <tr key={ev.id} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="p-4 whitespace-nowrap">
                        <strong className="text-foreground block">{ev.date}</strong>
                        <span className="text-gray-400">{ev.city} ({ev.venue})</span>
                      </td>
                      <td className="p-4 max-w-xs">
                        <strong className="text-foreground block truncate">{ev.eventTitle[currentLang] || ev.eventTitle.de}</strong>
                        <span className="text-gray-400 block truncate text-[11px]">{ev.program[currentLang] || ev.program.de}</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-gray-300">
                        {ev.ensemble}
                      </td>
                      <td className="p-4 whitespace-nowrap text-gray-400">
                        {ev.instrumentUsed}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          ev.status === 'upcoming' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-gray-500/10 text-gray-400 border border-border'
                        }`}>
                          {ev.status}
                        </span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-right space-x-2">
                        <button
                          onClick={() => handleOpenEditEvent(ev)}
                          className="p-1.5 rounded-lg border border-border hover:bg-foreground/5 text-gray-300 hover:text-[#C5A059] transition-colors"
                          title={t.admin.editItem}
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(t.admin.deleteConfirmEvent)) {
                              deleteEvent(ev.id);
                              showToast(t.admin.deletedEvent, 'danger');
                            }
                          }}
                          className="p-1.5 rounded-lg border border-border hover:bg-rose-500/10 text-gray-300 hover:text-rose-400 transition-colors"
                          title={t.admin.deleteItem}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INSTRUMENTS MANAGER */}
      {activeTab === 'instruments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-display text-xl font-bold text-foreground">
              {t.admin.tabInstruments} ({instruments.length})
            </h2>

            <button
              onClick={handleOpenAddInstrument}
              className="px-4 py-2.5 rounded-xl bg-[#C5A059] text-black font-semibold text-xs hover:bg-[#d8b46b] transition-all flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>{t.admin.addInstrument}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instruments.map((inst) => (
              <div key={inst.id} className="p-6 rounded-2xl border border-border bg-foreground/[0.02] flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-[#C5A059]/15 text-[#C5A059] font-medium">
                      {inst.originEra}
                    </span>
                    <span className="text-gray-400 font-mono text-[11px]">{inst.specs.bore}</span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-foreground">
                    {inst.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {inst.historicalOriginalLocation} · {inst.builderPartner}
                  </p>

                  <p className="text-xs text-gray-300 line-clamp-2">
                    {inst.description[currentLang] || inst.description.de}
                  </p>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-medium">
                    100% lochfrei
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenEditInstrument(inst)}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-gray-300 hover:text-[#C5A059] hover:bg-foreground/5 transition-all flex items-center gap-1"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>{t.admin.editItem}</span>
                    </button>

                    <button
                      onClick={() => {
                        if (confirm(t.admin.deleteConfirmInstrument)) {
                          deleteInstrument(inst.id);
                          showToast(t.admin.deletedInstrument, 'danger');
                        }
                      }}
                      className="p-1.5 rounded-lg border border-border text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
                      title={t.admin.deleteItem}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: BIO & PROFILE */}
      {activeTab === 'bio' && (
        <form onSubmit={handleSaveBio} className="max-w-3xl space-y-6">
          <div className="p-4 rounded-2xl border border-border bg-foreground/[0.02] flex items-center justify-between">
            <div>
              <h3 className="font-serif-display text-base font-bold text-foreground">
                {t.admin.tabBio}
              </h3>
              <p className="text-xs text-gray-400">
                {t.admin.editLanguageLabel}: <strong className="text-[#C5A059] uppercase">{currentLang}</strong>
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl border border-border bg-background text-xs font-semibold text-foreground">
              <Languages className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="uppercase">{currentLang}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Titel / Name</label>
              <input
                type="text"
                value={bioFormData.headline}
                onChange={(e) => setBioFormData({ ...bioFormData, headline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Untertitel / Spezialisierung</label>
              <input
                type="text"
                value={bioFormData.subheadline}
                onChange={(e) => setBioFormData({ ...bioFormData, subheadline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Hero-Biografie (Hauptseite)</label>
            <textarea
              rows={3}
              value={bioFormData.heroBio}
              onChange={(e) => setBioFormData({ ...bioFormData, heroBio: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059] resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Kurzbiografie (Teaser)</label>
            <textarea
              rows={3}
              value={bioFormData.quickBio}
              onChange={(e) => setBioFormData({ ...bioFormData, quickBio: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059] resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Kontakt-E-Mail</label>
              <input
                type="email"
                value={bioFormData.contactEmail}
                onChange={(e) => setBioFormData({ ...bioFormData, contactEmail: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Standort / Atelier</label>
              <input
                type="text"
                value={bioFormData.contactLocation}
                onChange={(e) => setBioFormData({ ...bioFormData, contactLocation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#C5A059] text-black font-semibold text-xs sm:text-sm hover:bg-[#d8b46b] transition-all flex items-center gap-2 shadow-md cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{t.admin.saveChanges}</span>
          </button>
        </form>
      )}

      {/* TAB 4: SYSTEM / BACKUP */}
      {activeTab === 'system' && (
        <div className="max-w-3xl space-y-8">
          <div className="p-6 rounded-2xl border border-border bg-foreground/[0.02] space-y-4">
            <h3 className="font-serif-display text-lg font-bold text-foreground">
              Daten sichern & exportieren (JSON)
            </h3>
            <p className="text-xs text-gray-400">
              Laden Sie eine vollständige Sicherungskopie aller Konzerte, Instrumente und Texte herunter.
            </p>
            <button
              onClick={handleExport}
              className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-black font-semibold text-xs flex items-center gap-2 hover:bg-[#d8b46b] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.admin.exportJSON}</span>
            </button>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-foreground/[0.02] space-y-4">
            <h3 className="font-serif-display text-lg font-bold text-foreground">
              JSON-Daten importieren
            </h3>
            <p className="text-xs text-gray-400">
              Fügen Sie hier eine gültige CMS-JSON-Struktur ein, um alle Inhalte im Browser zu aktualisieren.
            </p>
            <textarea
              rows={4}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder='{"events": [...], "instruments": [...]}'
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background font-mono text-xs text-foreground focus:outline-none focus:border-[#C5A059]"
            />
            <button
              onClick={handleImport}
              className="px-5 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-foreground/5 flex items-center gap-2 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>{t.admin.importJSON}</span>
            </button>
          </div>

          <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/5 space-y-4">
            <h3 className="font-serif-display text-lg font-bold text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>Werkseinstellungen wiederherstellen</span>
            </h3>
            <p className="text-xs text-gray-400">
              Löscht alle im Browser gespeicherten Anpassungen und stellt die authentischen Originaldaten von www.stephan-katte.de wieder her.
            </p>
            <button
              onClick={() => {
                if (confirm(t.admin.resetDefaults + '?')) {
                  resetToDefaults();
                  showToast(t.admin.resetSuccess, 'danger');
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-rose-500 text-white font-semibold text-xs hover:bg-rose-600 transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.admin.resetDefaults}</span>
            </button>
          </div>
        </div>
      )}

      {/* EVENT ADD / EDIT MODAL (FIXED CONTRAST & OPACITY) */}
      {eventModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setEventModalOpen(false)}
        >
          <div 
            className="max-w-xl w-full bg-[#161920] border border-[#374151] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl my-8 text-white relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#374151] pb-4">
              <div>
                <h3 className="font-serif-display text-xl font-bold text-white">
                  {editingEventId ? 'Konzert bearbeiten' : 'Neues Konzert anlegen'}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] text-gray-400">{t.admin.editLanguageLabel}:</span>
                  <div className="inline-flex rounded-lg border border-[#374151] p-0.5 bg-[#20242F]">
                    {(['de', 'en', 'ru'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => handleSwitchEventModalLang(lang)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                          modalLang === lang
                            ? 'bg-[#C5A059] text-black shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => setEventModalOpen(false)} 
                aria-label="Schließen"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveEvent} className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t.admin.fieldTitle} ({modalLang.toUpperCase()}) *
                </label>
                <input
                  type="text"
                  required
                  value={eventFormData.title}
                  onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })}
                  placeholder="z.B. Solohorn in Bachs h-Moll-Messe"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldDate} *</label>
                  <input
                    type="text"
                    required
                    value={eventFormData.date}
                    onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldTime} *</label>
                  <input
                    type="text"
                    required
                    value={eventFormData.time}
                    onChange={(e) => setEventFormData({ ...eventFormData, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldCity} *</label>
                  <input
                    type="text"
                    required
                    value={eventFormData.city}
                    onChange={(e) => setEventFormData({ ...eventFormData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldVenue} *</label>
                  <input
                    type="text"
                    required
                    value={eventFormData.venue}
                    onChange={(e) => setEventFormData({ ...eventFormData, venue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldEnsemble}</label>
                  <input
                    type="text"
                    value={eventFormData.ensemble}
                    onChange={(e) => setEventFormData({ ...eventFormData, ensemble: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldInstrument}</label>
                  <input
                    type="text"
                    value={eventFormData.instrumentUsed}
                    onChange={(e) => setEventFormData({ ...eventFormData, instrumentUsed: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t.admin.fieldProgram} ({modalLang.toUpperCase()})
                </label>
                <textarea
                  rows={2}
                  value={eventFormData.program}
                  onChange={(e) => setEventFormData({ ...eventFormData, program: e.target.value })}
                  placeholder="Werke, Sätze und Solopartien..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] resize-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Ticketportal URL</label>
                  <input
                    type="url"
                    value={eventFormData.ticketUrl}
                    onChange={(e) => setEventFormData({ ...eventFormData, ticketUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Status</label>
                  <select
                    value={eventFormData.status}
                    onChange={(e) => setEventFormData({ ...eventFormData, status: e.target.value as 'upcoming' | 'past' })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  >
                    <option value="upcoming">Kommend (Upcoming)</option>
                    <option value="past">Archiv (Past)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#374151]">
                <button
                  type="button"
                  onClick={() => setEventModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#374151] text-gray-300 hover:text-white hover:bg-white/5 font-medium transition-all cursor-pointer"
                >
                  {t.admin.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-black font-semibold hover:bg-[#d8b46b] transition-all shadow-md cursor-pointer"
                >
                  {t.admin.saveChanges}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* INSTRUMENT ADD / EDIT MODAL (FIXED CONTRAST & OPACITY) */}
      {instrumentModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setInstrumentModalOpen(false)}
        >
          <div 
            className="max-w-xl w-full bg-[#161920] border border-[#374151] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl my-8 text-white relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#374151] pb-4">
              <div>
                <h3 className="font-serif-display text-xl font-bold text-white">
                  {editingInstId ? 'Instrument bearbeiten' : 'Neues Instrument hinzufügen'}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] text-gray-400">{t.admin.editLanguageLabel}:</span>
                  <div className="inline-flex rounded-lg border border-[#374151] p-0.5 bg-[#20242F]">
                    {(['de', 'en', 'ru'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => handleSwitchInstModalLang(lang)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                          modalLang === lang
                            ? 'bg-[#C5A059] text-black shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => setInstrumentModalOpen(false)} 
                aria-label="Schließen"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveInstrument} className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldName} *</label>
                <input
                  type="text"
                  required
                  value={instFormData.name}
                  onChange={(e) => setInstFormData({ ...instFormData, name: e.target.value })}
                  placeholder="z.B. Anton Kerner 1760 (Brünn Modell)"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldEra} *</label>
                  <input
                    type="text"
                    required
                    value={instFormData.originEra}
                    onChange={(e) => setInstFormData({ ...instFormData, originEra: e.target.value })}
                    placeholder="z.B. Hochbarock (1723)"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Kategorie</label>
                  <select
                    value={instFormData.category}
                    onChange={(e) => setInstFormData({ ...instFormData, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  >
                    <option value="baroque">Barock</option>
                    <option value="classical">Klassisch / Inventionshorn</option>
                    <option value="tromba">Tromba da caccia</option>
                    <option value="hunting">Jagdhorn</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Originalstandort (Museum)</label>
                  <input
                    type="text"
                    value={instFormData.historicalOriginalLocation}
                    onChange={(e) => setInstFormData({ ...instFormData, historicalOriginalLocation: e.target.value })}
                    placeholder="z.B. Mährisches Landesmuseum Brünn"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Baupartner / Werkstatt</label>
                  <input
                    type="text"
                    value={instFormData.builderPartner}
                    onChange={(e) => setInstFormData({ ...instFormData, builderPartner: e.target.value })}
                    placeholder="z.B. Friedbert Syhre (Leipzig)"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldBore}</label>
                  <input
                    type="text"
                    value={instFormData.bore}
                    onChange={(e) => setInstFormData({ ...instFormData, bore: e.target.value })}
                    placeholder="11.5 mm"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">{t.admin.fieldBell}</label>
                  <input
                    type="text"
                    value={instFormData.bellTaper}
                    onChange={(e) => setInstFormData({ ...instFormData, bellTaper: e.target.value })}
                    placeholder="260 mm"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Stimmbögen (kommagetrennt)</label>
                <input
                  type="text"
                  value={instFormData.crooksStr}
                  onChange={(e) => setInstFormData({ ...instFormData, crooksStr: e.target.value })}
                  placeholder="F, D, C, Bb, G"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t.admin.fieldDescription} ({modalLang.toUpperCase()})
                </label>
                <textarea
                  rows={3}
                  value={instFormData.description}
                  onChange={(e) => setInstFormData({ ...instFormData, description: e.target.value })}
                  placeholder="Historischer Kontext und klangliche Einordnung..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#374151] bg-[#20242F] text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] resize-none transition-all"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#374151]">
                <button
                  type="button"
                  onClick={() => setInstrumentModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#374151] text-gray-300 hover:text-white hover:bg-white/5 font-medium transition-all cursor-pointer"
                >
                  {t.admin.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-black font-semibold hover:bg-[#d8b46b] transition-all shadow-md cursor-pointer"
                >
                  {t.admin.saveChanges}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION BADGE */}
      {toast && (
        <div 
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${
            toast.type === 'success'
              ? 'bg-[#121c15] border-emerald-500/50 text-emerald-100 shadow-emerald-950/40'
              : toast.type === 'danger'
              ? 'bg-[#221316] border-rose-500/50 text-rose-100 shadow-rose-950/40'
              : 'bg-[#181a20] border-[#C5A059]/50 text-gray-100 shadow-black/50'
          }`}
        >
          {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
          {toast.type === 'danger' && <Trash2 className="w-5 h-5 text-rose-400 shrink-0" />}
          {toast.type === 'info' && <AlertCircle className="w-5 h-5 text-[#C5A059] shrink-0" />}
          <span className="text-xs sm:text-sm font-medium pr-2">{toast.message}</span>
          <button
            onClick={() => setToast(null)}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
