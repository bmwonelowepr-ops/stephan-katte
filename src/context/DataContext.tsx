import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ConcertDateEntry,
  InstrumentCraftsmanshipModel,
  SiteBioConfig
} from '../types';
import {
  upcomingDates as defaultEvents,
  craftsmanshipModels as defaultInstruments,
  defaultBioConfig
} from '../data/stephanKatteData';

interface DataContextType {
  events: ConcertDateEntry[];
  instruments: InstrumentCraftsmanshipModel[];
  bioConfig: SiteBioConfig;
  addEvent: (event: ConcertDateEntry) => void;
  updateEvent: (id: string, updated: Partial<ConcertDateEntry>) => void;
  deleteEvent: (id: string) => void;
  addInstrument: (instrument: InstrumentCraftsmanshipModel) => void;
  updateInstrument: (id: string, updated: Partial<InstrumentCraftsmanshipModel>) => void;
  deleteInstrument: (id: string) => void;
  updateBioConfig: (newBio: Partial<SiteBioConfig>) => void;
  resetToDefaults: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;
  hasCustomChanges: boolean;
}

const STORAGE_KEYS = {
  EVENTS: 'stephan_katte_cms_events_v2',
  INSTRUMENTS: 'stephan_katte_cms_instruments_v2',
  BIO: 'stephan_katte_cms_bio_v2',
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<ConcertDateEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
      return saved ? JSON.parse(saved) : defaultEvents;
    } catch {
      return defaultEvents;
    }
  });

  const [instruments, setInstruments] = useState<InstrumentCraftsmanshipModel[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INSTRUMENTS);
      return saved ? JSON.parse(saved) : defaultInstruments;
    } catch {
      return defaultInstruments;
    }
  });

  const [bioConfig, setBioConfig] = useState<SiteBioConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BIO);
      return saved ? JSON.parse(saved) : defaultBioConfig;
    } catch {
      return defaultBioConfig;
    }
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
    } catch (e) {
      console.error('Failed to persist events to localStorage', e);
    }
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INSTRUMENTS, JSON.stringify(instruments));
    } catch (e) {
      console.error('Failed to persist instruments to localStorage', e);
    }
  }, [instruments]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BIO, JSON.stringify(bioConfig));
    } catch (e) {
      console.error('Failed to persist bioConfig to localStorage', e);
    }
  }, [bioConfig]);

  const addEvent = (newEvent: ConcertDateEntry) => {
    setEvents(prev => [newEvent, ...prev]);
  };

  const updateEvent = (id: string, updated: Partial<ConcertDateEntry>) => {
    setEvents(prev => prev.map(e => (e.id === id ? { ...e, ...updated } : e)));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addInstrument = (newInstrument: InstrumentCraftsmanshipModel) => {
    setInstruments(prev => [...prev, newInstrument]);
  };

  const updateInstrument = (id: string, updated: Partial<InstrumentCraftsmanshipModel>) => {
    setInstruments(prev => prev.map(inst => (inst.id === id ? { ...inst, ...updated } : inst)));
  };

  const deleteInstrument = (id: string) => {
    setInstruments(prev => prev.filter(inst => inst.id !== id));
  };

  const updateBioConfig = (newBio: Partial<SiteBioConfig>) => {
    setBioConfig(prev => ({ ...prev, ...newBio }));
  };

  const resetToDefaults = () => {
    setEvents(defaultEvents);
    setInstruments(defaultInstruments);
    setBioConfig(defaultBioConfig);
    try {
      localStorage.removeItem(STORAGE_KEYS.EVENTS);
      localStorage.removeItem(STORAGE_KEYS.INSTRUMENTS);
      localStorage.removeItem(STORAGE_KEYS.BIO);
    } catch (e) {
      console.error(e);
    }
  };

  const exportDataJSON = (): string => {
    return JSON.stringify({ events, instruments, bioConfig }, null, 2);
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.events && Array.isArray(parsed.events)) {
        setEvents(parsed.events);
      }
      if (parsed.instruments && Array.isArray(parsed.instruments)) {
        setInstruments(parsed.instruments);
      }
      if (parsed.bioConfig) {
        setBioConfig(parsed.bioConfig);
      }
      return true;
    } catch (e) {
      console.error('Invalid JSON import', e);
      return false;
    }
  };

  const hasCustomChanges = 
    JSON.stringify(events) !== JSON.stringify(defaultEvents) ||
    JSON.stringify(instruments) !== JSON.stringify(defaultInstruments) ||
    JSON.stringify(bioConfig) !== JSON.stringify(defaultBioConfig);

  return (
    <DataContext.Provider
      value={{
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
        hasCustomChanges,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
