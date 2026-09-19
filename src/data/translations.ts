import { Language } from '../types';

export const translations: Record<Language, {
  nav: {
    home: string;
    instruments: string;
    events: string;
    about: string;
    admin: string;
    vita: string;
    instrumentenbau: string;
    discography: string;
    contact: string;
    themeDark: string;
    themeLight: string;
  };
  common: {
    viewDetails: string;
    backToEvents: string;
    backToInstruments: string;
    bookOrInquire: string;
    specs: string;
    originalModel: string;
    builder: string;
    crooks: string;
    materials: string;
    ventsGuarantee: string;
    repertoireTitle: string;
    workshopNotes: string;
    upcomingFeatured: string;
    exploreGallery: string;
    allRightsReserved: string;
  };
  hero: {
    tag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaCraftsmanship: string;
    ctaEvents: string;
    ctaVita: string;
    ctaContact: string;
    statExperience: string;
    statExperienceLabel: string;
    statStaatskapelle: string;
    statStaatskapelleLabel: string;
    statAcademies: string;
    statAcademiesLabel: string;
    statVentless: string;
    statVentlessLabel: string;
  };
  eventsPage: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterUpcoming: string;
    filterPast: string;
    filterMasterclass: string;
    novFeaturedBadge: string;
    ticketNotice: string;
    venueLabel: string;
    conductorLabel: string;
    ensembleLabel: string;
    programLabel: string;
    instrumentLabel: string;
    eventDetailTitle: string;
    directTicketLink: string;
    calendarNote: string;
  };
  instrumentsPage: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterBaroque: string;
    filterClassical: string;
    filterTromba: string;
    filterHunting: string;
    searchPlaceholder: string;
    resultsCount: string;
    resetFilter: string;
    noResultsFound: string;
    museumResearchTitle: string;
    museumResearchDesc: string;
    viewInstrumentBtn: string;
    noFingerHolesCredo: string;
    deepDiveTitle: string;
  };
  vita: {
    tag: string;
    title: string;
    subtitle: string;
    sourceNotice: string;
    eraFilterAll: string;
    milestoneTitle: string;
    orchestraTitle: string;
    conductTitle: string;
    acadTitle: string;
    pressKitBtn: string;
    pressKitSubtitle: string;
  };
  craftsmanship: {
    tag: string;
    title: string;
    subtitle: string;
    philosophyTag: string;
    modelsTag: string;
    principlesTag: string;
    syhreJungwirthBadge: string;
    museumResearchTitle: string;
    museumResearchDesc: string;
    specsTitle: string;
    boreLabel: string;
    bellLabel: string;
    ventsLabel: string;
    mouthpieceLabel: string;
    crooksAvailable: string;
    originalMuseum: string;
    makerPartner: string;
    orvalTechniqueTitle: string;
    orvalTechniqueDesc: string;
    acousticChartTitle: string;
    acousticChartDesc: string;
  };
  discography: {
    tag: string;
    title: string;
    subtitle: string;
    collaborationsTitle: string;
    collaborationsSubtitle: string;
    cdProductionsTitle: string;
    labelRelease: string;
    instrumentBadge: string;
    repertoireBadge: string;
  };
  admin: {
    tag: string;
    title: string;
    subtitle: string;
    tabEvents: string;
    tabInstruments: string;
    tabBio: string;
    tabSystem: string;
    addEvent: string;
    addInstrument: string;
    saveChanges: string;
    savedSuccessfully: string;
    resetDefaults: string;
    resetSuccess: string;
    exportJSON: string;
    importJSON: string;
    hasChangesNote: string;
    editItem: string;
    deleteItem: string;
    deletedEvent: string;
    deletedInstrument: string;
    deleteConfirmEvent: string;
    deleteConfirmInstrument: string;
    editLanguageLabel: string;
    cancel: string;
    fieldTitle: string;
    fieldDate: string;
    fieldTime: string;
    fieldCity: string;
    fieldVenue: string;
    fieldEnsemble: string;
    fieldProgram: string;
    fieldInstrument: string;
    fieldName: string;
    fieldEra: string;
    fieldBore: string;
    fieldBell: string;
    fieldMaterials: string;
    fieldDescription: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    locationWeimarTitle: string;
    locationWeimarDesc: string;
    emailLabel: string;
    institutesTitle: string;
    bookingTitle: string;
    bookingDesc: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formCategory: string;
    catConcert: string;
    catConducting: string;
    catMasterclass: string;
    catInstrumentConsult: string;
    formMessage: string;
    formSend: string;
    formSending: string;
    successMessage: string;
    datesTitle: string;
    datesSubtitle: string;
  };
  footer: {
    tagline: string;
    rights: string;
    imprint: string;
    privacy: string;
    top: string;
  };
}> = {
  de: {
    nav: {
      home: 'Startseite',
      instruments: 'Instrumentenbau',
      events: 'Konzerte & Termine',
      about: 'Vita & Diskografie',
      admin: 'Admin CMS',
      vita: 'Vita & Werdegang',
      instrumentenbau: 'Instrumentenbau',
      discography: 'Diskografie',
      contact: 'Kontakt & Termine',
      themeDark: 'Dunkel',
      themeLight: 'Hell'
    },
    common: {
      viewDetails: 'Details ansehen',
      backToEvents: '← Zurück zu allen Konzerten',
      backToInstruments: '← Zurück zur Instrumenten-Galerie',
      bookOrInquire: 'Konzert buchen / Anfrage',
      specs: 'Technische Spezifikationen',
      originalModel: 'Historische Vorlage & Sammlung',
      builder: 'Werkstatt & Rekonstruktion',
      crooks: 'Verfügbare Stimmbögen (Crooks)',
      materials: 'Material & Blech-Legierung',
      ventsGuarantee: '100% lochfrei (ventless) ohne Überblaslöcher',
      repertoireTitle: 'Klang- und Werkauswahl',
      workshopNotes: 'Werkstatt-Dokumentation & Hämmerung',
      upcomingFeatured: 'Nächstes Konzerthighlight',
      exploreGallery: 'Instrumente entdecken',
      allRightsReserved: 'Alle Rechte vorbehalten.'
    },
    hero: {
      tag: 'Historische Aufführungspraxis · Hornvirtuose & Instrumentenbauer',
      title: 'Stephan Katte',
      titleHighlight: 'Historische Hörner, Instrumentenbau & Dirigieren',
      subtitle: 'Ehemaliger Solohornist der Staatskapelle Weimar, Dozent an den Musikhochschulen Weimar, Leipzig und Rostock sowie Pionier kompromisslos lochfreier Naturhörner nach barocken und klassischen Originalen.',
      ctaCraftsmanship: 'Instrumentenbau entdecken',
      ctaEvents: 'Konzertkalender (14. Nov)',
      ctaVita: 'Vita & Werdegang',
      ctaContact: 'Konzert buchen / Kontakt',
      statExperience: '30+',
      statExperienceLabel: 'Jahre Konzert- & Lehrerfahrung',
      statStaatskapelle: '1992–2002',
      statStaatskapelleLabel: 'Solohornist Staatskapelle Weimar',
      statAcademies: '3',
      statAcademiesLabel: 'Musikhochschulen (Weimar, Rostock, Leipzig)',
      statVentless: '100%',
      statVentlessLabel: 'Lochfreie historische Naturhörner'
    },
    eventsPage: {
      tag: 'Konzertkalender & Engagements',
      title: 'Konzerte & Termine',
      subtitle: 'Solistische Auftritte, Oratorienabende und hochkarätige Meisterkurse für Naturhorn und historische Aufführungspraxis.',
      filterAll: 'Alle Termine',
      filterUpcoming: 'Kommende Konzerte',
      filterPast: 'Archiv & Vergangenes',
      filterMasterclass: 'Meisterkurse',
      novFeaturedBadge: 'Highlight: 14. November in der Thomaskirche Leipzig',
      ticketNotice: 'Tickets & Eintrittsinformationen',
      venueLabel: 'Konzertsaal / Kirche',
      conductorLabel: 'Musikalische Leitung',
      ensembleLabel: 'Ensemble / Orchester',
      programLabel: 'Programm & Solopartien',
      instrumentLabel: 'Gespieltes historisches Instrument',
      eventDetailTitle: 'Konzertdetails & Programm',
      directTicketLink: 'Zum Vorverkauf / Veranstalter',
      calendarNote: 'Termine können sich kurzfristig ändern. Für Engagements wenden Sie sich bitte direkt an das Management.'
    },
    instrumentsPage: {
      tag: 'Originalgetreue Rekonstruktionen',
      title: 'Instrumentenbau & Horn-Galerie',
      subtitle: 'Eigene Meisterstücke und wissenschaftliche Rekonstruktionen historischer Naturhörner ohne künstliche Überblaslöcher.',
      filterAll: 'Alle Modelle',
      filterBaroque: 'Barockhörner',
      filterClassical: 'Klassische Inventionshörner',
      filterTromba: 'Tromba da caccia',
      filterHunting: 'Jagdhörner (Bern)',
      searchPlaceholder: 'Modell, Epoche, Stimmung (F, D, C) oder Partner suchen...',
      resultsCount: 'Modelle gefunden',
      resetFilter: 'Filter zurücksetzen',
      noResultsFound: 'Keine Instrumente entsprechen Ihren Kriterien.',
      museumResearchTitle: 'Akribische Forschung in europäischen Sammlungen',
      museumResearchDesc: 'Jedes Modell basiert auf millimetergenauen Originalvermessungen im Bernischen Historischen Museum sowie im Mährischen Landesmuseum Brünn.',
      viewInstrumentBtn: 'Werkstattbericht & Specs',
      noFingerHolesCredo: '100% lochfrei: Keine künstlichen Überblasbohrungen nach Otto/Haas.',
      deepDiveTitle: 'Handwerkliche Perfektion & Akustik'
    },
    vita: {
      tag: 'Biografie & Stationen',
      title: 'Vita & Künstlerischer Werdegang',
      subtitle: 'Von den Wurzeln in Bleicherode über zehn Jahre Solohorn der Staatskapelle Weimar bis zur Professur und internationalem Spezialistentum.',
      sourceNotice: 'Quelle: Offizielle Dokumentation www.stephan-katte.de',
      eraFilterAll: 'Alle Epochen',
      milestoneTitle: 'Ausbildung & Stationen',
      orchestraTitle: 'Staatskapelle Weimar',
      conductTitle: 'Dirigierstudium',
      acadTitle: 'Dozenturen an drei Musikhochschulen',
      pressKitBtn: 'Pressemappe & Biografie (PDF)',
      pressKitSubtitle: 'Offizielle Biografie, Repertoire und Instrumentenliste für Konzertveranstalter'
    },
    craftsmanship: {
      tag: 'Akustik & Werkstatt',
      title: 'Instrumentenbau & Akustische Forschung',
      subtitle: 'Die kompromisslose Rückkehr zum genuinen Naturklang: Rekonstruktionen nach historischen Originalen ohne unhistorische Grifflöcher.',
      philosophyTag: 'Philosophie & Physik',
      modelsTag: 'Meistermodelle',
      principlesTag: 'Klangforschung',
      syhreJungwirthBadge: 'In enger Kooperation mit Meisterwerkstatt Friedbert Syhre (Leipzig) & Andreas Jungwirth',
      museumResearchTitle: 'Museums-Recherchen in Bern & Brünn (Brno)',
      museumResearchDesc: 'Stephan Katte erforschte und vermaß die erhaltenen Originale von Michael Leichamschneider (Bern 1723) und Anton Kerner (Brünn 1760/1810) direkt in den Museumsmagazinen.',
      specsTitle: 'Technische Parameter & Mensur',
      boreLabel: 'Mensur (Bohrung)',
      bellLabel: 'Schallbecher & Taper',
      ventsLabel: 'Überblaslöcher',
      mouthpieceLabel: 'Empfohlenes Mundstück',
      crooksAvailable: 'Lieferbare Stimmbögen (Crooks)',
      originalMuseum: 'Original-Standort',
      makerPartner: 'Werkstattpartner',
      orvalTechniqueTitle: 'Francis Orval Handtechnik',
      orvalTechniqueDesc: 'Vollchromatische Handstopftechnik ohne mechanische Ventile.',
      acousticChartTitle: 'Naturtonreihe & Luftsäule',
      acousticChartDesc: 'Reine akustische Obertöne von der fundamentalen Schwingung bis zum 16. Teilton.'
    },
    discography: {
      tag: 'Einspielungen & Ensembles',
      title: 'Diskografie & Zusammenarbeit',
      subtitle: 'Historisch informierte Einspielungen mit europäischen Spitzenensembles auf Barock- und Naturhörnern.',
      collaborationsTitle: 'Führende Klangkörper & Partner',
      collaborationsSubtitle: 'Stephan Katte musiziert regelmäßig mit renommierten Barockorchestern und Ensembles.',
      cdProductionsTitle: 'Ausgewählte CD-Produktionen',
      labelRelease: 'Label-Veröffentlichung',
      instrumentBadge: 'Instrument',
      repertoireBadge: 'Repertoire'
    },
    admin: {
      tag: 'Stephan Katte Content Management',
      title: 'CMS & Website Dashboard',
      subtitle: 'Verwalten Sie Konzerte, Galerie-Exponate und Biografie-Texte direkt im Browser.',
      tabEvents: 'Konzerte & Termine',
      tabInstruments: 'Instrumenten-Galerie',
      tabBio: 'Biografie & Profil',
      tabSystem: 'System & Backup',
      addEvent: 'Neues Konzert anlegen',
      addInstrument: 'Neues Instrument hinzufügen',
      saveChanges: 'Änderungen speichern',
      savedSuccessfully: 'Änderungen erfolgreich gespeichert!',
      resetDefaults: 'Auf Werkseinstellungen zurücksetzen',
      resetSuccess: 'Standarddaten wiederhergestellt.',
      exportJSON: 'Daten als JSON exportieren',
      importJSON: 'JSON-Daten importieren',
      hasChangesNote: 'Sie haben benutzerdefinierte Änderungen im Browser gespeichert.',
      editItem: 'Bearbeiten',
      deleteItem: 'Löschen',
      deletedEvent: 'Konzert erfolgreich entfernt',
      deletedInstrument: 'Instrument erfolgreich entfernt',
      deleteConfirmEvent: 'Möchten Sie dieses Konzert wirklich löschen?',
      deleteConfirmInstrument: 'Möchten Sie dieses Instrument wirklich löschen?',
      editLanguageLabel: 'Bearbeitungs-Sprache',
      cancel: 'Abbrechen',
      fieldTitle: 'Titel des Konzerts',
      fieldDate: 'Datum (z.B. 14. November 2026)',
      fieldTime: 'Uhrzeit',
      fieldCity: 'Stadt',
      fieldVenue: 'Spielort / Kirche',
      fieldEnsemble: 'Ensemble / Orchester',
      fieldProgram: 'Programm & Stücke',
      fieldInstrument: 'Gespieltes Instrument',
      fieldName: 'Instrumenten-Name',
      fieldEra: 'Epoche / Jahrgang',
      fieldBore: 'Mensur (z.B. 11.5 mm)',
      fieldBell: 'Schallbecher-Durchmesser',
      fieldMaterials: 'Material / Legierung',
      fieldDescription: 'Beschreibung & Historie'
    },
    contact: {
      tag: 'Dialog & Engagements',
      title: 'Kontakt & Konzertanfragen',
      subtitle: 'Für solistische Konzertengagements, Dirigate, Meisterkurse und organologische Fachberatung zum historischen Naturhorn.',
      locationWeimarTitle: 'Atelier & Wirkungsort Weimar',
      locationWeimarDesc: 'Zentral in Thüringen ansässig mit direkter Anbindung an die mitteldeutschen Musikzentren Leipzig, Dresden und Berlin.',
      emailLabel: 'Offizielle E-Mail-Adresse',
      institutesTitle: 'Dozenturen an den Hochschulen',
      bookingTitle: 'Direkte Anfrage senden',
      bookingDesc: 'Gerne können Sie Stephan Katte direkt für Konzerte, Dirigierprojekte oder Meisterkurse kontaktieren.',
      formName: 'Ihr Name / Institution',
      formEmail: 'Ihre E-Mail-Adresse',
      formSubject: 'Betreff',
      formCategory: 'Art der Anfrage',
      catConcert: 'Solistisches Konzert / Oratorienmitwirkung',
      catConducting: 'Dirigierprojekt / Orchesterleitung',
      catMasterclass: 'Meisterkurs / Hochschul-Workshop',
      catInstrumentConsult: 'Instrumentenbau / Horn-Fachberatung',
      formMessage: 'Ihre Nachricht & Projektdetails',
      formSend: 'Anfrage absenden',
      formSending: 'Wird gesendet...',
      successMessage: 'Vielen Dank für Ihre Nachricht! Ihre Anfrage wird schnellstmöglich beantwortet.',
      datesTitle: 'Kommende Termine & Spielplan',
      datesSubtitle: 'Ausgewählte Konzerte und Meisterkurse in Mitteldeutschland'
    },
    footer: {
      tagline: 'Solohornist, Dirigent und Meisterbauer lochfreier historischer Naturhörner.',
      rights: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      top: 'Nach oben'
    }
  },
  en: {
    nav: {
      home: 'Home',
      instruments: 'Craftsmanship',
      events: 'Concerts & Events',
      about: 'Vita & Discography',
      admin: 'Admin CMS',
      vita: 'Vita & Career',
      instrumentenbau: 'Instrument Making',
      discography: 'Discography',
      contact: 'Contact & Dates',
      themeDark: 'Dark',
      themeLight: 'Light'
    },
    common: {
      viewDetails: 'View Details',
      backToEvents: '← Back to All Concerts',
      backToInstruments: '← Back to Instrument Gallery',
      bookOrInquire: 'Book / Send Inquiry',
      specs: 'Technical Specifications',
      originalModel: 'Historical Model & Provenance',
      builder: 'Workshop & Reconstruction',
      crooks: 'Available Crooks',
      materials: 'Metal Alloy & Construction',
      ventsGuarantee: '100% ventless without artificial finger holes',
      repertoireTitle: 'Repertoire & Key Pieces',
      workshopNotes: 'Workshop Notes & Hand-Hammering',
      upcomingFeatured: 'Featured Upcoming Concert',
      exploreGallery: 'Explore Handcrafted Horns',
      allRightsReserved: 'All rights reserved.'
    },
    hero: {
      tag: 'Historical Performance Practice · Virtuoso Hornist & Master Maker',
      title: 'Stephan Katte',
      titleHighlight: 'Historical Horns, Instrument Making & Conducting',
      subtitle: 'Former Principal Solo Hornist of the Staatskapelle Weimar, faculty professor in Weimar, Leipzig, and Rostock, and master craftsman reconstructing genuinely ventless natural horns based on 18th-century originals.',
      ctaCraftsmanship: 'Explore Instrument Making',
      ctaEvents: 'Concert Calendar (Nov 14)',
      ctaVita: 'Biography & Career',
      ctaContact: 'Book Concert / Inquire',
      statExperience: '30+',
      statExperienceLabel: 'Years of Performance & Teaching',
      statStaatskapelle: '1992–2002',
      statStaatskapelleLabel: 'Solo Hornist Staatskapelle Weimar',
      statAcademies: '3',
      statAcademiesLabel: 'Music Conservatories (Weimar, Rostock, Leipzig)',
      statVentless: '100%',
      statVentlessLabel: 'Ventless Historical Natural Horns'
    },
    eventsPage: {
      tag: 'Performance Calendar & Engagements',
      title: 'Concerts & Events',
      subtitle: 'Solo appearances, sacred oratorios, and prestigious masterclasses for natural horn and historically informed practice.',
      filterAll: 'All Events',
      filterUpcoming: 'Upcoming Concerts',
      filterPast: 'Archive & Past Events',
      filterMasterclass: 'Masterclasses',
      novFeaturedBadge: 'Highlight: November 14 at St. Thomas Church Leipzig',
      ticketNotice: 'Tickets & Admission',
      venueLabel: 'Venue / Hall',
      conductorLabel: 'Music Director',
      ensembleLabel: 'Ensemble / Orchestra',
      programLabel: 'Program & Solos',
      instrumentLabel: 'Historical Instrument Used',
      eventDetailTitle: 'Concert Details & Program',
      directTicketLink: 'Box Office & Ticket Link',
      calendarNote: 'Dates are subject to update. For professional bookings, please contact management.'
    },
    instrumentsPage: {
      tag: 'Authentic Museum Reconstructions',
      title: 'Instrument Making & Gallery',
      subtitle: 'Handcrafted master instruments and scholarly replicas of historical natural horns without artificial finger holes.',
      filterAll: 'All Models',
      filterBaroque: 'Baroque Horns',
      filterClassical: 'Classical Inventionshorns',
      filterTromba: 'Tromba da caccia',
      filterHunting: 'Hunting Horns (Bern)',
      searchPlaceholder: 'Search models, eras, crooks (F, D, C) or partners...',
      resultsCount: 'models found',
      resetFilter: 'Reset Filters',
      noResultsFound: 'No instruments match your criteria.',
      museumResearchTitle: 'Meticulous Research in European Collections',
      museumResearchDesc: 'Each model is based on millimeter-precision measurements taken at the Bern Historical Museum and the Moravian Museum in Brno.',
      viewInstrumentBtn: 'Workshop Specs & Deep Dive',
      noFingerHolesCredo: '100% ventless: No artificial venting holes (Otto/Haas system).',
      deepDiveTitle: 'Acoustic Authenticity & Physics'
    },
    vita: {
      tag: 'Biography & Career',
      title: 'Vita & Artistic Trajectory',
      subtitle: 'From his beginnings in Bleicherode through a decade as principal hornist of the Staatskapelle Weimar to faculty professorships and international early-music acclaim.',
      sourceNotice: 'Source: Official archive www.stephan-katte.de',
      eraFilterAll: 'All Eras',
      milestoneTitle: 'Education & Career Stations',
      orchestraTitle: 'Staatskapelle Weimar',
      conductTitle: 'Conducting Master Degree',
      acadTitle: 'Faculty Chairs at Three Conservatories',
      pressKitBtn: 'Download Press Kit (PDF)',
      pressKitSubtitle: 'Official artist biography, repertoire and instrument portfolio for concert organizers'
    },
    craftsmanship: {
      tag: 'Acoustics & Workshop',
      title: 'Instrument Making & Acoustic Research',
      subtitle: 'The uncompromising return to authentic resonance: historical replicas made without modern compromise finger holes.',
      philosophyTag: 'Philosophy & Physics',
      modelsTag: 'Master Models',
      principlesTag: 'Acoustic Research',
      syhreJungwirthBadge: 'In close collaboration with Master Workshop Friedbert Syhre (Leipzig) & Andreas Jungwirth',
      museumResearchTitle: 'Museum Research in Bern & Brno',
      museumResearchDesc: 'Stephan Katte examined and measured preserved originals by Michael Leichamschneider (Bern 1723) and Anton Kerner (Brno 1760/1810) directly on site.',
      specsTitle: 'Technical Parameters & Calibrations',
      boreLabel: 'Bore Diameter',
      bellLabel: 'Bell Flare & Taper',
      ventsLabel: 'Finger / Vent Holes',
      mouthpieceLabel: 'Recommended Mouthpiece',
      crooksAvailable: 'Available Terminal Crooks',
      originalMuseum: 'Original Museum Location',
      makerPartner: 'Workshop Partners',
      orvalTechniqueTitle: 'Francis Orval Hand Technique',
      orvalTechniqueDesc: 'Full chromatic facility achieved without mechanical valves.',
      acousticChartTitle: 'Harmonic Series & Air Column',
      acousticChartDesc: 'Pure acoustic harmonics from the fundamental to the 16th partial.'
    },
    discography: {
      tag: 'Recordings & Ensembles',
      title: 'Discography & Collaborations',
      subtitle: 'Historically informed recordings with premier European early music orchestras on Baroque and natural horns.',
      collaborationsTitle: 'Leading Ensembles & Partners',
      collaborationsSubtitle: 'Stephan Katte performs regularly with celebrated Baroque orchestras and ensembles across Europe.',
      cdProductionsTitle: 'Selected CD Productions',
      labelRelease: 'Label Release',
      instrumentBadge: 'Instrument',
      repertoireBadge: 'Repertoire'
    },
    admin: {
      tag: 'Stephan Katte Content Management',
      title: 'CMS & Site Dashboard',
      subtitle: 'Manage upcoming concerts, handcrafted horns, and biography details directly in your browser.',
      tabEvents: 'Concerts & Events',
      tabInstruments: 'Instrument Gallery',
      tabBio: 'Biography & Profile',
      tabSystem: 'System & Backup',
      addEvent: 'Add New Concert',
      addInstrument: 'Add New Instrument',
      saveChanges: 'Save Changes',
      savedSuccessfully: 'Changes saved successfully!',
      resetDefaults: 'Reset to Historical Defaults',
      resetSuccess: 'Default data restored.',
      exportJSON: 'Export Data (JSON)',
      importJSON: 'Import JSON Data',
      hasChangesNote: 'You have customized content saved in your browser localStorage.',
      editItem: 'Edit',
      deleteItem: 'Delete',
      deletedEvent: 'Concert successfully removed',
      deletedInstrument: 'Instrument successfully removed',
      deleteConfirmEvent: 'Are you sure you want to delete this concert?',
      deleteConfirmInstrument: 'Are you sure you want to delete this instrument?',
      editLanguageLabel: 'Editing Language',
      cancel: 'Cancel',
      fieldTitle: 'Concert Title',
      fieldDate: 'Date (e.g. November 14, 2026)',
      fieldTime: 'Time',
      fieldCity: 'City',
      fieldVenue: 'Venue / Church',
      fieldEnsemble: 'Ensemble / Orchestra',
      fieldProgram: 'Program & Works',
      fieldInstrument: 'Instrument Used',
      fieldName: 'Instrument Name',
      fieldEra: 'Origin Era',
      fieldBore: 'Bore Size (e.g. 11.5 mm)',
      fieldBell: 'Bell Diameter',
      fieldMaterials: 'Materials & Alloy',
      fieldDescription: 'Description & History'
    },
    contact: {
      tag: 'Dialogue & Booking',
      title: 'Contact & Engagements',
      subtitle: 'For solo performances, conducting projects, academic masterclasses, and organological consultations on historical natural brass.',
      locationWeimarTitle: 'Studio & Base in Weimar',
      locationWeimarDesc: 'Centrally based in Thuringia with direct access to Central Germany’s musical hubs: Leipzig, Dresden, and Berlin.',
      emailLabel: 'Official Email',
      institutesTitle: 'Academic Faculty Chairs',
      bookingTitle: 'Send Booking Inquiry',
      bookingDesc: 'Inquire directly with Stephan Katte regarding concert engagements, conducting appearances, or masterclasses.',
      formName: 'Your Name / Organization',
      formEmail: 'Your Email Address',
      formSubject: 'Subject',
      formCategory: 'Inquiry Category',
      catConcert: 'Solo Concert / Sacred Oratorio',
      catConducting: 'Conducting / Orchestral Direction',
      catMasterclass: 'Masterclass / Academic Workshop',
      catInstrumentConsult: 'Instrument Making / Brass Consultation',
      formMessage: 'Message & Project Details',
      formSend: 'Send Inquiry',
      formSending: 'Sending...',
      successMessage: 'Thank you for your message! Your inquiry will be answered promptly.',
      datesTitle: 'Upcoming Engagements',
      datesSubtitle: 'Selected concerts and masterclasses across Central Germany'
    },
    footer: {
      tagline: 'Principal solo hornist, conductor, and master builder of ventless natural horns.',
      rights: 'All rights reserved.',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      top: 'Scroll to top'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      instruments: 'Инструменты',
      events: 'Концерты и события',
      about: 'Биография и дискография',
      admin: 'CMS Панель',
      vita: 'Биография',
      instrumentenbau: 'Инструментостроение',
      discography: 'Дискография',
      contact: 'Контакты и концерты',
      themeDark: 'Тёмная',
      themeLight: 'Светлая'
    },
    common: {
      viewDetails: 'Подробнее',
      backToEvents: '← Назад ко всем концертам',
      backToInstruments: '← Назад в галерею инструментов',
      bookOrInquire: 'Заказать / Запрос',
      specs: 'Технические характеристики',
      originalModel: 'Исторический оригинал',
      builder: 'Мастерская и реконструкция',
      crooks: 'Сменные кроны',
      materials: 'Материалы и сплав',
      ventsGuarantee: '100% без отверстий (аутентичный строй)',
      repertoireTitle: 'Репертуар и произведения',
      workshopNotes: 'Заметки мастерской и ковка',
      upcomingFeatured: 'Ближайший главный концерт',
      exploreGallery: 'Перейти в галерею',
      allRightsReserved: 'Все права защищены.'
    },
    hero: {
      tag: 'Историческое исполнительство · Солист-валторнист и мастер',
      title: 'Стефан Катте',
      titleHighlight: 'Исторические валторны, инструмент и дирижирование',
      subtitle: 'Бывший первый солист Веймарской капеллы, доцент консерваторий Веймара, Лейпцига и Ростока, создатель уникальных аутентичных натуральных валторн без клапанных отверстий.',
      ctaCraftsmanship: 'Инструментостроение',
      ctaEvents: 'Концерты (14 ноября)',
      ctaVita: 'Биография',
      ctaContact: 'Организация концертов',
      statExperience: '30+',
      statExperienceLabel: 'Лет на сцене и преподавания',
      statStaatskapelle: '1992–2002',
      statStaatskapelleLabel: 'Солист Веймарской капеллы',
      statAcademies: '3',
      statAcademiesLabel: 'Консерватории (Веймар, Росток, Лейпциг)',
      statVentless: '100%',
      statVentlessLabel: 'Аутентичные рога без отверстий'
    },
    eventsPage: {
      tag: 'Календарь концертов и гастроли',
      title: 'Концерты и события',
      subtitle: 'Сольные выступления, оратории и международные мастер-классы старинного духового исполнительства.',
      filterAll: 'Все события',
      filterUpcoming: 'Предстоящие',
      filterPast: 'Архив концертов',
      filterMasterclass: 'Мастер-классы',
      novFeaturedBadge: 'Главное событие: 14 ноября в церкви Святого Фомы, Лейпциг',
      ticketNotice: 'Билеты и бронирование',
      venueLabel: 'Зал / Церковь',
      conductorLabel: 'Дирижер',
      ensembleLabel: 'Оркестр / Хор',
      programLabel: 'Программа',
      instrumentLabel: 'Инструмент',
      eventDetailTitle: 'Детали концерта и программа',
      directTicketLink: 'Купить билеты',
      calendarNote: 'Даты могут уточняться. Для организации выступлений свяжитесь с менеджментом.'
    },
    instrumentsPage: {
      tag: 'Аутентичные музейные реконструкции',
      title: 'Инструментостроение и галерея',
      subtitle: 'Авторские работы и научные реконструкции старинных валторн без современных вспомогательных отверстий.',
      filterAll: 'Все модели',
      filterBaroque: 'Барочные валторны',
      filterClassical: 'Инвенционные рога',
      filterTromba: 'Tromba da caccia',
      filterHunting: 'Охотничьи рога (Берн)',
      searchPlaceholder: 'Поиск моделей, эпох, строев (F, D, C) или мастеров...',
      resultsCount: 'найдено моделей',
      resetFilter: 'Сбросить фильтры',
      noResultsFound: 'По вашему запросу инструменты не найдены.',
      museumResearchTitle: 'Исследования в европейских музеях',
      museumResearchDesc: 'Каждая модель воссоздана на основе точнейших замеров оригиналов в музеях Берна и Брно.',
      viewInstrumentBtn: 'Параметры и отчет',
      noFingerHolesCredo: '100% без отверстий: сохранение подлинного акустического резонанса.',
      deepDiveTitle: 'Мастерство и акустическая физика'
    },
    vita: {
      tag: 'Биография',
      title: 'Творческий путь',
      subtitle: 'От истоков в Блайхероде через десятилетие в Веймарской капелле к преподаванию и возрождению старинного звука.',
      sourceNotice: 'Источник: официальный сайт www.stephan-katte.de',
      eraFilterAll: 'Все периоды',
      milestoneTitle: 'Образование и этапы карьеры',
      orchestraTitle: 'Веймарская капелла',
      conductTitle: 'Дирижерская аспирантура',
      acadTitle: 'Преподавание в консерваториях',
      pressKitBtn: 'Скачать пресс-кит (PDF)',
      pressKitSubtitle: 'Официальная биография, репертуар и реестр инструментов для организаторов'
    },
    craftsmanship: {
      tag: 'Акустика и мастерская',
      title: 'Инструментостроение и акустика',
      subtitle: 'Бескомпромиссный возврат к подлинному натуральному звуку: реконструкции без искусственных отверстий.',
      philosophyTag: 'Философия и физика',
      modelsTag: 'Модели мастера',
      principlesTag: 'Акустика',
      syhreJungwirthBadge: 'В сотрудничестве с мастерской Фридберта Зире (Лейпциг) и Андреаса Юнгвирта',
      museumResearchTitle: 'Исследования в Берне и Брно',
      museumResearchDesc: 'Стефан Катте лично исследовал оригиналы Михаэля Лейхамшнейдера (1723) и Антона Кернера (1760/1810).',
      specsTitle: 'Технические характеристики',
      boreLabel: 'Мензура (диаметр)',
      bellLabel: 'Диаметр раструба',
      ventsLabel: 'Клапанные отверстия',
      mouthpieceLabel: 'Рекомендуемый мундштук',
      crooksAvailable: 'Сменные кроны',
      originalMuseum: 'Музейный оригинал',
      makerPartner: 'Партнеры мастерской',
      orvalTechniqueTitle: 'Метод Франсиса Орваля',
      orvalTechniqueDesc: 'Полная хроматика исключительно положением руки в раструбе.',
      acousticChartTitle: 'Обертоновый ряд',
      acousticChartDesc: 'Естественный гармонический ряд от основного тона до 16-го обертона.'
    },
    discography: {
      tag: 'Записи и ансамбли',
      title: 'Дискография и сотрудничество',
      subtitle: 'Записи с ведущими европейскими оркестрами старинной музыки на исторических инструментах.',
      collaborationsTitle: 'Оркестры и партнеры',
      collaborationsSubtitle: 'Постоянное сотрудничество с известными ансамблями барочной музыки.',
      cdProductionsTitle: 'Избранные компакт-диски',
      labelRelease: 'Релиз лейбла',
      instrumentBadge: 'Инструмент',
      repertoireBadge: 'Репертуар'
    },
    admin: {
      tag: 'Управление контентом',
      title: 'Панель управления CMS',
      subtitle: 'Управляйте концертами, инструментами и биографией прямо в браузере.',
      tabEvents: 'Концерты и события',
      tabInstruments: 'Галерея инструментов',
      tabBio: 'Биография и профиль',
      tabSystem: 'Резервная копия и сброс',
      addEvent: 'Добавить концерт',
      addInstrument: 'Добавить инструмент',
      saveChanges: 'Сохранить изменения',
      savedSuccessfully: 'Изменения успешно сохранены!',
      resetDefaults: 'Сбросить к исходным данным',
      resetSuccess: 'Стандартные данные восстановлены.',
      exportJSON: 'Экспорт данных (JSON)',
      importJSON: 'Импорт данных из JSON',
      hasChangesNote: 'В браузере сохранены пользовательские изменения.',
      editItem: 'Редактировать',
      deleteItem: 'Удалить',
      deletedEvent: 'Концерт успешно удален',
      deletedInstrument: 'Инструмент успешно удален',
      deleteConfirmEvent: 'Вы уверены, что хотите удалить этот концерт?',
      deleteConfirmInstrument: 'Вы уверены, что хотите удалить этот инструмент?',
      editLanguageLabel: 'Язык редактирования',
      cancel: 'Отмена',
      fieldTitle: 'Название концерта',
      fieldDate: 'Дата (напр. 14 ноября 2026)',
      fieldTime: 'Время',
      fieldCity: 'Город',
      fieldVenue: 'Зал / Церковь',
      fieldEnsemble: 'Оркестр / Хор',
      fieldProgram: 'Программа',
      fieldInstrument: 'Используемый инструмент',
      fieldName: 'Название инструмента',
      fieldEra: 'Эпоха / Дата создания',
      fieldBore: 'Мензура (напр. 11.5 мм)',
      fieldBell: 'Диаметр раструба',
      fieldMaterials: 'Материалы и сплав',
      fieldDescription: 'Описание и история'
    },
    contact: {
      tag: 'Контакты и бронирование',
      title: 'Контакты и приглашения',
      subtitle: 'Для приглашений на концерты, дирижирования, мастер-классов и консультаций по старинным инструментам.',
      locationWeimarTitle: 'Веймар, Тюрингия',
      locationWeimarDesc: 'Веймар — удобная база с быстрым доступом к Лейпцигу, Дрездену и Берлину.',
      emailLabel: 'Официальный e-mail',
      institutesTitle: 'Преподавание в академиях',
      bookingTitle: 'Отправить запрос',
      bookingDesc: 'Свяжитесь со Стефаном Катте для организации концертов или мастер-классов.',
      formName: 'Ваше имя / организация',
      formEmail: 'Ваш e-mail',
      formSubject: 'Тема сообщения',
      formCategory: 'Тип запроса',
      catConcert: 'Концерт / Оратория',
      catConducting: 'Дирижерский проект',
      catMasterclass: 'Мастер-класс',
      catInstrumentConsult: 'Консультация по инструментам',
      formMessage: 'Сообщение и подробности',
      formSend: 'Отправить сообщение',
      formSending: 'Отправка...',
      successMessage: 'Спасибо за сообщение! Вам ответят в ближайшее время.',
      datesTitle: 'Предстоящие события',
      datesSubtitle: 'Избранные концерты и мастер-классы'
    },
    footer: {
      tagline: 'Солист-валторнист, дирижер и мастер аутентичных натуральных валторн.',
      rights: 'Все права защищены.',
      imprint: 'Выходные данные',
      privacy: 'Конфиденциальность',
      top: 'Наверх'
    }
  }
};
