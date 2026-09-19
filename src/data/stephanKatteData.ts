import {
  TimelineMilestone,
  InstrumentCraftsmanshipModel,
  CraftsmanshipPrinciple,
  CollaborationEntry,
  DiscographyEntry,
  ConcertDateEntry,
  SiteBioConfig
} from '../types';

export const vitaMilestones: TimelineMilestone[] = [
  {
    id: 'vita-1972',
    year: '1972',
    location: 'Bleicherode am Harz (Thüringen)',
    badge: {
      de: 'Herkunft',
      en: 'Origins',
      ru: 'Происхождение'
    },
    title: {
      de: 'Geburt in Bleicherode',
      en: 'Birth in Bleicherode',
      ru: 'Рождение в Блайхероде'
    },
    subtitle: {
      de: 'Früheste musikalische Prägung im Thüringer Harzvorland',
      en: 'Early musical roots in Thuringian Harz region',
      ru: 'Музыкальные истоки в Тюрингии'
    },
    description: {
      de: 'Geboren 1972 in Bleicherode. Schon in früher Kindheit intensiver Instrumentalunterricht und Entdeckung der Leidenschaft für das Horn und historische Blasinstrumente.',
      en: 'Born 1972 in Bleicherode. Early childhood music training and discovery of a lifelong devotion to the horn and historical brass.',
      ru: 'Родился в 1972 году в Блайхероде. С раннего детства обучался музыке, открыв для себя призвание к валторне.'
    },
    details: {
      de: ['Erste solistische Auftritte im mitteldeutschen Raum', 'Frühe Begeisterung für den Naturklang des Horns'],
      en: ['Early solo appearances across Central Germany', 'Fascination with the natural overtone series'],
      ru: ['Первые сольные выступления в Тюрингии', 'Увлечение натуральным звуком рога']
    }
  },
  {
    id: 'vita-1986',
    year: '1986–1992',
    period: 'Ausbildung',
    location: 'Weimar (Schloss Belvedere & HfM)',
    badge: {
      de: 'Spezialausbildung',
      en: 'Specialist Studies',
      ru: 'Специальное образование'
    },
    title: {
      de: 'Musikgymnasium Belvedere & Musikhochschule Weimar',
      en: 'Belvedere Music Gymnasium & Weimar Conservatory',
      ru: 'Гимназия Бельведер и Веймарская консерватория'
    },
    subtitle: {
      de: 'Hornstudium bei Prof. Karl Biehlig & Prof. Rainer Heimbuch',
      en: 'Horn studies under Prof. Karl Biehlig & Prof. Rainer Heimbuch',
      ru: 'Класс валторны проф. Карла Билига и проф. Райнера Хаймбуха'
    },
    description: {
      de: 'Aufnahme an das traditionsreiche Musikgymnasium Schloss Belvedere Weimar ab 1986. Anschließend Studium des Waldhorns an der Hochschule für Musik Franz Liszt Weimar. Intensive Schulung der Blastechnik und erste Beschäftigung mit historischer Aufführungspraxis.',
      en: 'Admitted to the renowned Music Gymnasium Schloss Belvedere Weimar in 1986, followed by degree studies at the Franz Liszt University of Music in Weimar with rigorous classical and early-music training.',
      ru: 'С 1986 года обучение в музыкальной гимназии замка Бельведер, затем в Веймарской высшей школе музыки им. Листа. Фундаментальная школа звука и знакомство с историческим исполнительством.'
    },
    details: {
      de: ['Solistendiplom mit Auszeichnung', 'Grundlagen der Handstopftechnik und Quellenforschung'],
      en: ['Soloist Diploma with Distinction', 'Foundations of hand-stopping technique and source study'],
      ru: ['Диплом солиста с отличием', 'Освоение ручной техники и работа с историческими источниками']
    }
  },
  {
    id: 'vita-1992',
    year: '1992–2002',
    period: '10 Jahre',
    location: 'Deutsches Nationaltheater Weimar',
    badge: {
      de: 'Staatskapelle Weimar',
      en: 'Staatskapelle Weimar',
      ru: 'Веймарская капелла'
    },
    title: {
      de: 'Solohornist der Staatskapelle Weimar',
      en: 'Principal Solo Hornist, Staatskapelle Weimar',
      ru: 'Солист Веймарской государственной капеллы'
    },
    subtitle: {
      de: 'Engagement an einem der traditionsreichsten Orchester der Welt',
      en: 'Tenured engagement at one of Europe’s most storied opera orchestras',
      ru: 'Работа в одном из старейших оркестров Европы (основан в 1491 г.)'
    },
    description: {
      de: 'Zehn Jahre festes Orchestermitglied als Solohornist des Deutschen Nationaltheaters / der Staatskapelle Weimar. Umfassende Gestaltung des gesamten Opern- und Sinfonierepertoires unter bedeutenden Dirigenten sowie weltweite Gastspiele.',
      en: 'A decade as principal solo hornist of the Deutsches Nationaltheater / Staatskapelle Weimar, performing standard operatic and symphonic literature alongside international tours.',
      ru: 'Десять лет в качестве первого солиста группы валторн Немецкого национального театра и Государственной капеллы Веймара. Оперный и симфонический репертуар, гастроли.'
    },
    details: {
      de: ['Über 800 Vorstellungen und Sinfoniekonzerte', 'Kammermusikprojekte mit Bläsersolisten der Staatskapelle'],
      en: ['Over 800 opera and symphony performances', 'Chamber projects with Staatskapelle wind soloists'],
      ru: ['Более 800 оперных и симфонических вечеров', 'Камерные ансамбли с солистами капеллы']
    }
  },
  {
    id: 'vita-2001',
    year: '2001–2004',
    period: 'Aufbaustudium',
    location: 'Weimar',
    badge: {
      de: 'Dirigieren',
      en: 'Conducting',
      ru: 'Дирижирование'
    },
    title: {
      de: 'Aufbaustudium Orchesterdirigieren',
      en: 'Postgraduate Conducting Master Studies',
      ru: 'Аспирантура по оркестровому дирижированию'
    },
    subtitle: {
      de: 'Meisterklasse bei Prof. Gunter Kahlert an der HfM Weimar',
      en: 'Masterclass with Prof. Gunter Kahlert at HfM Weimar',
      ru: 'Мастер-класс проф. Гунтера Калерта в Веймаре'
    },
    description: {
      de: 'Vertiefung der musikalischen Leitungskompetenz im Aufbaustudium Dirigieren an der Hochschule für Musik Franz Liszt Weimar. Einstudierung von Sinfonik, Oratorien und Opernliteratur mit Spezialisierung auf stilgetreue historische Rhetorik.',
      en: 'Deepening orchestral direction skills through master studies in conducting at the HfM Franz Liszt Weimar under Prof. Gunter Kahlert, specializing in historically informed rhetorical gesture.',
      ru: 'Углубление дирижерского мастерства в аспирантуре Веймарской высшей школы музыки под руководством проф. Гунтера Калерта. Историческая риторика и работа с оркестром.'
    },
    details: {
      de: ['Abschlusskonzerte mit Thüringer Sinfonieorchestern', 'Verknüpfung von Dirigat und barocker Bläsertradition'],
      en: ['Concert projects with Thuringian orchestras', 'Synthesis of conductor gesture and period brass performance'],
      ru: ['Дирижерские проекты с оркестрами Тюрингии', 'Синтез дирижирования и старинного духового звука']
    }
  },
  {
    id: 'vita-2006',
    year: 'Seit 2006',
    period: 'Gegenwart',
    location: 'Weimar · Leipzig · Rostock',
    badge: {
      de: 'Hochschuldozentur',
      en: 'Academic Chairs',
      ru: 'Профессура и доцентура'
    },
    title: {
      de: 'Lehraufträge für Horn & Naturhorn',
      en: 'Faculty Appointments in Horn & Natural Horn',
      ru: 'Преподавательская деятельность в трех академиях'
    },
    subtitle: {
      de: 'HfM Weimar (seit 2006) · HMT Rostock (seit 2009) · HMT Leipzig (seit 2015)',
      en: 'HfM Weimar (since 2006) · HMT Rostock (since 2009) · HMT Leipzig (since 2015)',
      ru: 'HfM Веймар (с 2006) · HMT Росток (с 2009) · HMT Лейпциг (с 2015)'
    },
    description: {
      de: 'Kontinuierliche Ausbildung des hornistischen Nachwuchses. Lehrauftrag für Horn und Naturhorn an der HfM Franz Liszt Weimar (seit 2006), an der HMT Rostock (seit 2009) sowie an der HMT Leipzig in der traditionsreichen Fachrichtung Alte Musik (seit 2015).',
      en: 'Longstanding faculty teacher for modern and historical horn at the HfM Weimar (since 2006), HMT Rostock (since 2009), and HMT Leipzig within the Early Music department (since 2015).',
      ru: 'Многолетнее воспитание нового поколения музыкантов. Преподает валторну и натуральный рог в Веймаре (с 2006), Ростоке (с 2009) и на отделении старинной музыки в Лейпциге (с 2015).'
    },
    details: {
      de: ['Pädagogischer Schwerpunkt: Historische Aufführungspraxis', 'Studenten und Absolventen in europäischen Spitzenorchestern'],
      en: ['Focus: Historical performance practice & authentic embouchure', 'Alumni placed in premier European orchestras'],
      ru: ['Главный фокус: аутентичная практика и ручная техника', 'Выпускники играют в ведущих оркестрах Европы']
    }
  }
];

export const craftsmanshipModels: InstrumentCraftsmanshipModel[] = [
  {
    id: 'kerner-1760-brno',
    name: 'Anton Kerner 1760 (Brünn / Brno Modell)',
    originEra: 'Spätbarock / Frühklassik (Wien, ca. 1760)',
    category: 'baroque',
    historicalOriginalLocation: 'Mährisches Landesmuseum Brünn (Moravské zemské muzeum, Brno)',
    builderPartner: 'Andreas Jungwirth & Stephan Katte (Eigenbau-Kopie)',
    acousticalCharacter: {
      de: 'Hervorragende Artikulation, geschmeidige Ansprache in den Naturtönen 6 bis 12 und warmes Schmelzen bei gedämpften Stopftönen. Ideal für frühklassische Solokonzerte und Solokantaten.',
      en: 'Exemplary articulation, agile response through harmonics 6–12, and a warm, homogeneous blend on hand-stopped notes. Perfectly balanced for early Classical solo concerti.',
      ru: 'Превосходная артикуляция, легкий отклик в среднем и высоком регистрах и мягкий тембр закрытых нот.'
    },
    description: {
      de: 'Anton Kerner war einer der bedeutendsten Wiener Hornmacher des 18. Jahrhunderts. Das im Mährischen Landesmuseum in Brünn aufbewahrte Instrument von 1760 zeigt den Übergang vom reinen Jagdhorn zum virtuosen Konzertinstrument der Wiener Frühklassik. Stephan Katte restaurierte und vermass das Original vor Ort akribisch.',
      en: 'Anton Kerner was among the foremost Viennese brass artisans of the 18th century. The 1760 original preserved in the Moravian Museum in Brno represents the pivotal transition toward expressive Classical solo horn playing. Katte measured and restored the original instrument before initiating this authentic replica series.',
      ru: 'Антон Кернер — выдающийся венский мастер XVIII века. Инструмент 1760 года из Брно демонстрирует переход от охотничьего рога к виртуозному концертному инструменту.'
    },
    historicalNotes: {
      de: 'Originalzustand in Brünn mit meisterhafter Gravur auf dem Becherkranz. Die Kopie bewahrt das exakte Schwingungsverhalten ohne künstliche Überblasbohrungen.',
      en: 'Original specimen in Brno features master artisan engraving on the bell rim garland. The replica maintains precise resonance without artificial venting holes.',
      ru: 'Оригинал в Брно снабжен гравировкой на венке раструба. Копия сохраняет естественное колебание без искусственных отверстий.'
    },
    craftsmanshipJourney: {
      de: 'Reine Handhämmerung über Stahldornen nach historischem Zuschnitt. Die Wandungsstärke des Messings verjüngt sich organisch von 0.50 mm am Rohr bis zu 0.35 mm am Becherrand.',
      en: 'Constructed by pure hand-hammering over custom steel mandrels. Brass thickness tapers organically from 0.50 mm in the body to 0.35 mm at the bell rim.',
      ru: 'Ручная ковка на стальных оправках. Толщина латуни органично уменьшается от 0.50 мм в трубке до 0.35 мм на краю раструба.'
    },
    keyCrooks: ['Bb alto', 'A', 'G', 'F', 'E', 'Eb', 'D', 'C basso'],
    specs: {
      bore: '11.5 mm mittlere Wiener Mensur',
      bellTaper: '260 mm handgehämmerter Messingbecher',
      metalAlloy: 'Spezielles Weichmessing (70% Cu / 30% Zn) mit Zinn-Lötungen',
      vents: '100% lochfrei (ventless) - ohne Überblasbohrungen',
      mouthpieceRecomm: 'Mundstück mit moderater Kessel-Trichter-Kombination (4.2 mm)',
      weight: 'ca. 1.150 g (ohne Aufsteckbogen)'
    },
    repertoire: [
      'Joseph Haydn: Hornkonzerte Nr. 1 & Nr. 2',
      'Carl Philipp Emanuel Bach: Bläsersinfonien',
      'Johann Melchior Molter: Hornkonzerte',
      'Michael Haydn: Concertino in D'
    ]
  },
  {
    id: 'kerner-1810-inventionshorn',
    name: 'Anton Kerner 1810 Inventionshorn',
    originEra: 'Wiener Klassik (Wien, 1810)',
    category: 'classical',
    historicalOriginalLocation: 'Historische Sammlung Brünn / Wien',
    builderPartner: 'Werkstatt Friedbert Syhre / Andreas Jungwirth & Stephan Katte',
    acousticalCharacter: {
      de: 'Kompakte, zentrierte Projektion; gleichmäßige akustische Luftsäule dank innenliegender U-Stimmzüge (Inventionszüge). Repertoire von Mozart, Haydn bis Beethoven.',
      en: 'Focused, centered acoustic projection with consistent resistance across all crook keys via internal tuning slides. Built for Mozart, Haydn, and Beethoven.',
      ru: 'Сфокусированный звук и стабильное сопротивление воздушного столба благодаря внутренним сменным кронам.'
    },
    description: {
      de: 'Das Inventionshorn nach Anton Kerner (1810) stellt den Höhepunkt der klassischen Handhorn-Entwicklung dar. Die Stimmzüge werden im Inneren des Hornkreises gewechselt, sodass der Abstand vom Mundstück zur Hand in der Stürze bei jedem Bogen konstant bleibt.',
      en: 'The Classical Inventionshorn based on Kerner (1810) represents the apex of hand-stopping mechanics: inner slides maintain a constant distance between embouchure and the bell regardless of crook key.',
      ru: 'Инвенционный рог по Кернеру (1810) — вершина классической эволюции валторны. Смена строя происходит внутри круга, не меняя положения раструба.'
    },
    historicalNotes: {
      de: 'Entwickelt aus der Hampel-Invention (Dresden 1753), perfektioniert von Wiener Meistern. Ermöglicht die gesamte chromatische Skala rein durch virtuose Handstopftechnik.',
      en: 'Developed from the Hampel invention (Dresden 1753) and perfected by Viennese artisans, enabling full chromatic facility strictly through hand stopping.',
      ru: 'Развитие конструкции Хампеля (Дрезден, 1753). Позволяет извлекать полную хроматическую гамму исключительно рукой.'
    },
    craftsmanshipJourney: {
      de: 'Präzisionsgefertigte zylindrische Züge mit handeingeschliffenen Muffen für luftdichte Passung. Handgravierter Becherkranz mit Neusilberauflage.',
      en: 'Precision-fitted cylindrical slide tubes with hand-lapped ferrules ensuring airtight acoustic sealing. Hand-chased silver garland.',
      ru: 'Прецизионные цилиндрические трубки с ручной притиркой. Раструб с серебряным венком ручной работы.'
    },
    keyCrooks: ['Bb alto', 'A', 'G', 'F', 'E', 'Eb', 'D', 'C basso'],
    specs: {
      bore: '11.3 mm Präzisionsmensur',
      bellTaper: '270 mm klassischer Schallbecher mit Zierkranz',
      metalAlloy: 'Traditionelles Tombak / Messing mit Zierauflagen',
      vents: 'Ohne Grifflöcher konzipiert (100% Naturhorn)',
      mouthpieceRecomm: 'Klassisches Hornmundstück nach Wiener Tradition (tiefer Trichter)',
      weight: 'ca. 1.280 g (inkl. F-Inventionsbogen)'
    },
    repertoire: [
      'W.A. Mozart: Hornkonzerte KV 412, 417, 447, 495 & Quintett KV 407',
      'Ludwig van Beethoven: Hornsonate F-Dur op. 17',
      'Antonio Rosetti: Konzerte für zwei Hörner',
      'Franz Danzi: Sonaten für Naturhorn und Klavier'
    ]
  },
  {
    id: 'tromba-da-caccia-2013',
    name: 'Tromba da caccia 2013 (Eigenbau)',
    originEra: 'Leipziger Barock / Bach-Zeit (Rekonstruktion 2013)',
    category: 'tromba',
    historicalOriginalLocation: 'Leipzig / Weimar (nach Vorbildern von Johann Heinrich Eichentopf & Gottfried Reiche)',
    builderPartner: 'Stephan Katte (vollständiger Werkstatt-Eigenbau in Zusammenarbeit mit Meister Syhre)',
    acousticalCharacter: {
      de: 'Strahlender, durchdringender Clarinton mit hornartiger Wärme. Extrem schnelle Ansprache im 8. bis 16. Teilton, unverzichtbar für Bachs anspruchsvollste Kantaten.',
      en: 'Brilliant, clarino projection coupled with horn warmth. Exceptionally agile response across the 8th to 16th harmonics, essential for Bach’s most demanding cantatas.',
      ru: 'Яркий, проникающий тембр с валторновой теплотой. Быстрый отклик в верхнем регистре (8–16 обертоны) для сложнейших кантат Баха.'
    },
    description: {
      de: '2013 vollendete Stephan Katte diesen anspruchsvollen Eigenbau einer Tromba da caccia. Das Instrument schließt die klangliche Lücke zwischen Barocktrompete und Naturhorn und wurde speziell für die authentische Aufführung der Leipziger Kirchenmusik Johann Sebastian Bachs entworfen.',
      en: 'In 2013, Stephan Katte completed this handcrafted Tromba da caccia. Bridging the acoustic timbre of the Baroque trumpet and natural horn, it was purpose-built for authentic performances of J.S. Bach’s sacred cantatas in Leipzig.',
      ru: 'В 2013 году Стефан Катте завершил создание этой уникальной охотничьей трубы. Инструмент сочетает свойства барочной трубы и валторны для исполнения музыки Баха.'
    },
    historicalNotes: {
      de: 'Gottfried Reiche, Bachs berühmter Stadtmusikus in Leipzig, wurde auf dem Porträt von Elias Gottlob Haußmann (1727) mit einem solchen spiralförmigen Jagdinstrument verewigt.',
      en: 'Gottfried Reiche, Bach’s legendary Leipzig town musician, was immortalized in Haußmann’s 1727 portrait holding a coiled coiled-horn/trumpet of this exact family.',
      ru: 'Готфрид Райхе, легендарный солист Баха в Лейпциге, запечатлен на знаменитом портрете 1727 года именно с такой спиральной охотничьей трубой.'
    },
    craftsmanshipJourney: {
      de: 'Kreisförmig gewickelter Messingkörper mit engem Windungsdurchmesser. Speziell gebogene Rohre mit handgezogenen Bögen und historischer Nahtverlötung.',
      en: 'Compact helical brass coiling with narrow loop diameter, hand-drawn tube bows, and historical longitudinal brazed seams.',
      ru: 'Компактная винтовая намотка малого диаметра, паяные вручную продольные швы по старинной технологии.'
    },
    keyCrooks: ['D', 'C', 'Bb', 'F'],
    specs: {
      bore: '10.8 mm schlanke Trompeten-Horn-Mensur',
      bellTaper: '190 mm spiralförmiger Schallbecher',
      metalAlloy: 'Historisches Messingblech, kaltverfestigt',
      vents: 'Keine Grifflöcher - rein lippengesteuerte Naturtöne',
      mouthpieceRecomm: 'Spezifisches Trichtermundstück mit flachem Übergang (3.8–4.0 mm)',
      weight: 'ca. 820 g'
    },
    repertoire: [
      'J.S. Bach: Messe in h-Moll BWV 232 ("Quoniam tu solus sanctus")',
      'J.S. Bach: Jagdkantate BWV 208 ("Was mir behagt, ist nur die muntre Jagd")',
      'J.S. Bach: Kantate BWV 65 ("Sie werden aus Saba alle kommen")',
      'G.Ph. Telemann: Festmusiken'
    ]
  },
  {
    id: 'leichamschneider-1723',
    name: 'Michael Leichamschneider 1723 (Bern Modell)',
    originEra: 'Hochbarock (Wien, 1723)',
    category: 'hunting',
    historicalOriginalLocation: 'Bernisches Historisches Museum (Bern, Schweiz)',
    builderPartner: 'Friedbert Syhre (Leipzig) & Stephan Katte',
    acousticalCharacter: {
      de: 'Dunkler, vokaler und sonorer Klang. Breiter Schalltrichter mit weiter Mensur, ideal für Johann Sebastian Bachs Corno-Partien (z.B. BWV 208, Brandenburgisches Konzert Nr. 1).',
      en: 'Dark, vocal, and resonant timbre with broad flare and wide bore. Perfectly suited for J.S. Bach\'s challenging clarino horn writing (BWV 208, Brandenburg No. 1).',
      ru: 'Глубокий, певучий и бархатный тембр. Широкая мензура, идеальная для партий валторны у И.С. Баха.'
    },
    description: {
      de: 'Michael Leichamschneider begründete in Wien die klassische Form des barocken Jagd- und Orchesterhorns. Die genaue Vermessung des erhaltenen Berner Originalinstruments von 1723 diente als Basis für die Rekonstruktion eines kompromisslos lochfreien Naturhorns.',
      en: 'Michael Leichamschneider in Vienna defined the archetype of the Baroque orchestral horn. Precise measurements of the original 1723 specimen in the Bern Historical Museum formed the blueprint for this authentic, ventless recreation.',
      ru: 'Михаэль Лейхамшнейдер заложил в Вене форму барочного оркестрового рога. Точные замеры оригинального инструмента 1723 года в Берне легли в основу аутентичной реконструкции.'
    },
    historicalNotes: {
      de: 'Das Berner Original gilt in der Organologie als eines der besterhaltenen barocken Hornoriginale Europas. Seine weite Stürze verleiht ihm eine fast vokal menschliche Stimmfarbe.',
      en: 'The Bern specimen is recognized among organologists as one of Europe’s best-preserved Baroque horns. Its wide bell expansion creates a vocal, singing overtone quality.',
      ru: 'Бернский оригинал признан одним из наиболее сохранившихся барочных рогов в Европе с певучим вокальным тембром.'
    },
    craftsmanshipJourney: {
      de: 'Großer zweieinhalbwindiger Bogenkranz. Aus einem einzigen Blechzuschnitt handgeschweifter und gehämmerter Schalltrichter.',
      en: 'Spacious 2.5-turn body loop. Bell flare hand-cut, rolled, and hammered from a single brass sheet with traditional braze joint.',
      ru: 'Большой корпус в два с половиной оборота. Раструб выкован вручную из цельного листа латуни.'
    },
    keyCrooks: ['F', 'D', 'C basso', 'Bb alto', 'G'],
    specs: {
      bore: '11.8 mm (weite historische Mensur)',
      bellTaper: '275 mm historischer Zuschnitt nach Berner Vorbild',
      metalAlloy: 'Reines Kupfer-Zink-Blech, historische Weichglühung',
      vents: 'Streng authentisch ohne Grifflöcher (ventless)',
      mouthpieceRecomm: 'Historisches Trichter-Mundstück (tiefer Trichter, 4.2–4.5 mm Bohrung)',
      weight: 'ca. 1.050 g'
    },
    repertoire: [
      'J.S. Bach: Brandenburgisches Konzert Nr. 1 F-Dur BWV 1046',
      'J.S. Bach: Jagdkantate BWV 208',
      'G.F. Händel: Wassermusik (Suites in F & D)',
      'G.Ph. Telemann: Konzert für zwei Hörner in Es-Dur'
    ]
  }
];

export const craftsmanshipPrinciples: CraftsmanshipPrinciple[] = [
  {
    id: 'principle-no-finger-holes',
    title: {
      de: 'Der Verzicht auf unhistorische Grifflöcher',
      en: 'The Rejection of Unhistorical Finger Holes',
      ru: 'Отказ от неисторических отверстий'
    },
    summary: {
      de: 'Warum moderne Überblaslöcher den echten Barockklang verfälschen',
      en: 'Why modern vent holes compromise authentic Baroque resonance',
      ru: 'Почему клапанные отверстия искажают подлинный звук барокко'
    },
    content: {
      de: 'In den 1960er bis 1980er Jahren wurden historische Hornkopien nahezu ausnahmslos mit drei oder vier Grifflöchern (Überblaslöchern nach Otto/Haas) gebaut. Diese Löcher erleichtern zwar das Treffen der Töne und korrigieren unreine Naturtöne, zerstören jedoch die genuine Luftsäule und den typisch warmen, sprechenden Schmelz des 18. Jahrhunderts. Stephan Kattes lebenslanges Credo ist die kompromisslose Rückkehr zum lochfreien, reinen Naturhorn.',
      en: 'From the 1960s to the 1980s, Baroque horn replicas were almost universally constructed with 3 or 4 venting holes. While these holes assisted accuracy in modern tempered pitch, they broke the unbroken acoustic air column and depleted the warm, expressive overtone bloom of the 18th century. Katte’s lifelong mission is the rigorous return to genuine ventless instruments.',
      ru: 'В 1960–1980-е годы реплики старинных валторн снабжались 3–4 отверстиями для облегчения интонирования. Однако это нарушало целостность воздушного столба и лишало инструмент уникального теплого тембра XVIII века. Принцип Катте — игра исключительно на аутентичных инструментах без отверстий.'
    },
    technicalSpecs: {
      de: [
        'Ungebrochene Luftsäule über die gesamte Rohrlänge',
        'Rein physikalische Obertonresonanz (reine Naturterzen & Naturseptimen)',
        'Natürliche dynamische Färbung: samtiges Piano, metallischer Glanz im Forte'
      ],
      en: [
        'Unbroken acoustic air column across total tubing length',
        'Pure harmonic overtone resonance (pure natural thirds and 7th harmonics)',
        'Organic dynamic contrast: velvety piano to clarino brilliance in forte'
      ],
      ru: [
        'Непрерывный воздушный столб по всей длине трубки',
        'Чистый гармонический резонанс натурального строя',
        'Естественная динамическая палитра от пиано до благородного форте'
      ]
    }
  },
  {
    id: 'principle-mouthpiece-acoustics',
    title: {
      de: 'Mundstückwahl & Rohr-Widerstand',
      en: 'Mouthpiece Architecture & Tube Resistance',
      ru: 'Выбор мундштука и сопротивление трубки'
    },
    summary: {
      de: 'Historische Trichtermundstücke und ihre Wechselwirkung mit der Rohrgeometrie',
      en: 'Historical funnel mouthpieces and their aerodynamic impedance',
      ru: 'Исторические конические мундштуки и акустика трубки'
    },
    content: {
      de: 'Ein Naturhorn ohne Löcher verlangt eine völlig andere Mundstückgeometrie als moderne Doppelhörner. Stephan Katte forscht an tiefen, konischen Trichter-Mundstücken mit weiter Bohrung und schmalem Rand. Erst dieses Zusammenspiel erzeugt den nötigen Rückstau (Impedanz), um hohe Naturtöne wie den 11., 13. oder 16. Teilton klanglich stabil und kantabel zu zentrieren.',
      en: 'A ventless horn requires an entirely different mouthpiece geometry than modern double horns. Katte’s research emphasizes deep, funnel-shaped cups with wider throats and narrow rims, establishing the precise back-pressure (acoustic impedance) needed to articulate and sustain the delicate upper partials (11th, 13th, 16th harmonics).',
      ru: 'Натуральный рог без отверстий требует принципиально иной формы мундштука, чем современная валторна. Катте использует глубокие воронкообразные мундштуки с широким каналом, создающие оптимальное акустическое сопротивление для верхних обертонов.'
    },
    technicalSpecs: {
      de: [
        'Historischer Trichterquerschnitt statt moderner halbkugeliger Kessel',
        'Große Rückbohrung (4.2 mm bis 4.6 mm) für freien Luftfluss',
        'Exakte Abstimmung auf die Mensur des Aufsteckbogens'
      ],
      en: [
        'Historical conical funnel cup rather than modern bowl cup',
        'Enlarged throat bore (4.2 mm to 4.6 mm) for unconstricted airflow',
        'Matched impedance specifically calibrated to terminal crooks'
      ],
      ru: [
        'Коническая форма воронки вместо сферической чашки',
        'Широкое устье канала (4.2–4.6 мм)',
        'Точное согласование с мензурой каждого крона'
      ]
    }
  },
  {
    id: 'principle-orval-technique',
    title: {
      de: 'Die Handstopftechnik nach Francis Orval',
      en: 'Hand-Stopping Method after Francis Orval',
      ru: 'Техника ручного закрытия по методу Франсиса Орваля'
    },
    summary: {
      de: 'Klangfarben-Ausgleich zwischen offenen und gestopften Naturtönen',
      en: 'Harmonizing timbre between open and hand-stopped harmonics',
      ru: 'Выравнивание тембра открытых и закрытых звуков'
    },
    content: {
      de: 'Der legendäre Hornvirtuose Francis Orval revolutionierte das Verständnis der Handstopftechnik: Durch millimetergenaue Winkelung der rechten Hand in der Stürze lassen sich Zwischentöne der Naturtonreihe so anpassen, dass der klangliche Unterschied zu offenen Tönen fast verschwindet. Katte gibt diese Meisterschaft in Weimar, Leipzig und Meisterkursen weiter.',
      en: 'Legendary horn virtuoso Francis Orval revolutionized hand-stopping acoustics: through precise angular hand displacement within the bell throat, non-harmonic notes can be shaded to match the openness and core resonance of natural pitches.',
      ru: 'Легендарный валторнист Франсис Орваль революционизировал технику ручного закрытия: точное положение ладони позволяет извлекать полутона, сохраняя открытый и благородный тембр валторны.'
    },
    technicalSpecs: {
      de: [
        'Drei Kernpositionen: Ouvert (offen), Demi-bouché (halb-gestopft), Bouché (voll)',
        'Vollständige chromatische Skala ohne mechanische Ventile',
        'Nuancierte Vokalisation der Vokale A, O und U über den Ansatz'
      ],
      en: [
        'Three primary hand apertures: Ouvert (open), Demi-bouché (half), Bouché (stopped)',
        'Complete chromatic scale without mechanical valves',
        'Subtle vowel vocalization shaping oral cavity resonance'
      ],
      ru: [
        'Три положения руки: открытое, полузакрытое и полностью закрытое',
        'Полная хроматическая гамма без механики',
        'Формирование тембра артикуляцией гласных звуков'
      ]
    }
  }
];

export const keyCollaborations: CollaborationEntry[] = [
  {
    id: 'collab-thomaner',
    ensemble: 'Thomanerchor Leipzig',
    city: 'Leipzig',
    directorOrFocus: 'Thomaskantor Georg Christoph Biller / Gotthold Schwarz',
    description: {
      de: 'Regelmäßige Verpflichtung als Hornsolist für Bachs h-Moll-Messe ("Quoniam tu solus sanctus"), Weihnachtsoratorium und Bach-Kantaten in der Thomaskirche Leipzig.',
      en: 'Frequent guest soloist for J.S. Bach’s B-Minor Mass ("Quoniam tu solus sanctus"), Christmas Oratorio, and church cantatas at St. Thomas Church.',
      ru: 'Постоянный солист в мессе си минор Баха, Рождественской оратории и кантатах в церкви Святого Фомы в Лейпциге.'
    }
  },
  {
    id: 'collab-dresdner-barock',
    ensemble: 'Dresdner Barockorchester',
    city: 'Dresden',
    directorOrFocus: 'Dresdner Hofkapell-Tradition & Festmusiken',
    description: {
      de: 'Langjährige Zusammenarbeit bei der Wiederentdeckung und Aufführung des virtuosen Dresdner Bläserrepertoires (Heinichen, Zelenka, Hasse, Telemann).',
      en: 'Longstanding collaboration exploring the virtuoso brass legacy of the Dresden court (Heinichen, Zelenka, Hasse, Telemann).',
      ru: 'Многолетнее сотрудничество и возрождение виртуозного репертуара дрезденского барочного двора.'
    }
  },
  {
    id: 'collab-lautten-compagney',
    ensemble: 'Lautten Compagney Berlin',
    city: 'Berlin',
    directorOrFocus: 'Wolfgang Katschner',
    description: {
      de: 'Mitwirkung an innovativen Opern- und Oratorienprojekten, Händel-Festspielen und internationalen CD-Einspielungen.',
      en: 'Collaborator on innovative opera and oratorio productions, Handel festivals, and international label recordings.',
      ru: 'Участие в оперных постановках, генделевских фестивалях и записях компакт-дисков.'
    }
  },
  {
    id: 'collab-telemann-michaelstein',
    ensemble: 'Telemannisches Collegium Michaelstein',
    city: 'Blankenburg (Harz)',
    directorOrFocus: 'Forschungsinstitut für Historische Aufführungspraxis',
    description: {
      de: 'Konzerte und Symposien zur barocken Bläserakustik im Kloster Michaelstein, Heimat traditionsreicher Forschung zur Mitteldeutschen Barockmusik.',
      en: 'Concerts and symposiums on Baroque brass acoustics at Kloster Michaelstein, the renowned center for early music research.',
      ru: 'Концерты и научные симпозиумы по старинной акустике в монастыре Михаэльштайн.'
    }
  },
  {
    id: 'collab-bach-consort-leipzig',
    ensemble: 'Bach-Consort Leipzig',
    city: 'Leipzig',
    directorOrFocus: 'Mitteldeutsche Barockkammermusik',
    description: {
      de: 'Kammermusikabende mit Originalinstrumenten, Rekonstruktion historischer Bläserserenaden und Solo-Hornkonzerte.',
      en: 'Chamber evenings on period instruments, reconstructing Baroque wind serenades and solo horn concertos.',
      ru: 'Камерные концерты на исторических инструментах и сольные валторновые программы.'
    }
  },
  {
    id: 'collab-staatskapelle-weimar',
    ensemble: 'Staatskapelle Weimar',
    city: 'Weimar',
    directorOrFocus: 'Ehemalige Festanstellung als 1. Solohornist (1992–2002)',
    description: {
      de: 'Zehn Jahre prägender Solohornist des traditionsreichen Opern- und Konzertorchesters. Bis heute enge künstlerische Verbindung.',
      en: 'A decade as principal solo hornist of this historic orchestra, maintaining strong artistic ties across Central Germany.',
      ru: 'Десять лет на посту первого солиста капеллы, сохранение творческих связей по сей день.'
    }
  }
];

export const discographyProductions: DiscographyEntry[] = [
  {
    id: 'disco-bach-h-moll',
    title: 'J.S. Bach: Messe in h-Moll BWV 232',
    subtitle: 'Corno da caccia Solo "Quoniam tu solus sanctus"',
    year: '2014',
    label: 'Rondeau Production',
    ensemble: 'Thomanerchor Leipzig & Gewandhausorchester / Bach-Consort',
    repertoire: 'Johann Sebastian Bach: Missa solemnis BWV 232',
    hornInstrument: 'Michael Leichamschneider 1723 Naturhorn in D',
    role: {
      de: 'Solohorn (Corno da caccia)',
      en: 'Solo Corno da caccia',
      ru: 'Соло Corno da caccia'
    }
  },
  {
    id: 'disco-telemann-hornkonzerte',
    title: 'Georg Philipp Telemann: Hornkonzerte & Ouvertüren',
    subtitle: 'Konzerte für ein und zwei Naturhörner mit Streichern und B.c.',
    year: '2011',
    label: 'cpo (Classic Produktion Osnabrück)',
    ensemble: 'Telemannisches Collegium Michaelstein',
    repertoire: 'G.Ph. Telemann: TWV 51:D8, TWV 52:D1, TWV 52:F4',
    hornInstrument: 'Anton Kerner 1760 (Brünn Kopie, ventless)',
    role: {
      de: '1. Solohorn & Bläserinstruktion',
      en: 'Principal Solo Horn',
      ru: '1-я солирующая валторна'
    }
  },
  {
    id: 'disco-dresdner-hofmusik',
    title: 'Dresdner Hofmusik: Heinichen, Zelenka & Hasse',
    subtitle: 'Festliche Bläsermusiken für den Kurfürstlich-Sächsischen Hof',
    year: '2018',
    label: 'Coviello Classics',
    ensemble: 'Dresdner Barockorchester',
    repertoire: 'J.D. Heinichen: Dresden Concerti; Jan Dismas Zelenka: Capriccios',
    hornInstrument: 'Tromba da caccia & Leichamschneider Hörner',
    role: {
      de: 'Solist & Bläser-Coach',
      en: 'Soloist & Brass Coach',
      ru: 'Солист и репетитор духовой группы'
    }
  },
  {
    id: 'disco-classic-inventionshorn',
    title: 'Wiener Klassik: Mozart & Rosetti Hornkonzerte',
    subtitle: 'Originaleinspielung auf dem Inventionshorn mit U-Zügen',
    year: '2016',
    label: 'Genuin Classics',
    ensemble: 'Weimarer Barock-Ensemble',
    repertoire: 'W.A. Mozart KV 447, KV 495 & Antonio Rosetti Concerto in Es',
    hornInstrument: 'Anton Kerner 1810 Inventionshorn',
    role: {
      de: 'Solohorn & Musikalische Leitung',
      en: 'Solo Horn & Music Director',
      ru: 'Солист и музыкальный руководитель'
    }
  }
];

export const upcomingDates: ConcertDateEntry[] = [
  {
    id: 'date-14-nov',
    date: '14. November 2026',
    isoDate: '2026-11-14',
    time: '19:30 CET',
    city: 'Leipzig',
    venue: 'Thomaskirche zu Leipzig',
    address: 'Thomaskirchhof 18, 04109 Leipzig',
    eventTitle: {
      de: 'J.S. Bach: Messe in h-Moll BWV 232',
      en: 'J.S. Bach: Mass in B Minor BWV 232',
      ru: 'И.С. Бах: Месса си минор BWV 232'
    },
    program: {
      de: 'Corno da caccia Solo ("Quoniam tu solus sanctus") mit dem Thomanerchor',
      en: 'Corno da caccia Solo ("Quoniam tu solus sanctus") with Thomanerchor Leipzig',
      ru: 'Соло Corno da caccia с Хором Святого Фомы'
    },
    programDetails: {
      de: [
        'Kyrie & Gloria',
        'Quoniam tu solus sanctus (Solist: Stephan Katte auf dem Michael Leichamschneider 1723 Horn in D)',
        'Credo, Sanctus, Agnus Dei',
        'Liturgische Aufführungspraxis nach mitteldeutscher Tradition'
      ],
      en: [
        'Kyrie & Gloria',
        'Quoniam tu solus sanctus (Soloist: Stephan Katte on Michael Leichamschneider 1723 Horn in D)',
        'Credo, Sanctus, Agnus Dei',
        'Liturgical performance practice in Central German tradition'
      ],
      ru: [
        'Kyrie & Gloria',
        'Quoniam tu solus sanctus (Солист: Стефан Катте на роге Leichamschneider 1723)',
        'Credo, Sanctus, Agnus Dei'
      ]
    },
    ensemble: 'Thomanerchor Leipzig & Barockorchester',
    conductor: 'Thomaskantor',
    role: {
      de: 'Solohornist (Corno da caccia)',
      en: 'Solo Hornist (Corno da caccia)',
      ru: 'Солист (Corno da caccia)'
    },
    instrumentUsed: 'Michael Leichamschneider 1723 (Bern Modell) in D',
    ticketInfo: {
      de: 'Vorverkauf über Thomasshop Leipzig und Musikticket-Kassen',
      en: 'Advance tickets via Thomasshop Leipzig and ticket offices',
      ru: 'Билеты в кассах церкви Святого Фомы'
    },
    ticketUrl: 'https://www.thomaskirche.org',
    isFeatured: true,
    status: 'upcoming'
  },
  {
    id: 'date-06-dec',
    date: '06. Dezember 2026',
    isoDate: '2026-12-06',
    time: '17:00 CET',
    city: 'Dresden',
    venue: 'Frauenkirche Dresden',
    address: 'Neumarkt, 01067 Dresden',
    eventTitle: {
      de: 'Festliche Barockbläser zum Advent',
      en: 'Festive Baroque Brass for Advent',
      ru: 'Праздничная барочная музыка к Адвенту'
    },
    program: {
      de: 'Werke von Telemann, Heinichen und Zelenka für Naturhörner und Barockorchester',
      en: 'Works by Telemann, Heinichen, and Zelenka for natural horns and period orchestra',
      ru: 'Сочинения Телемана, Хайнихена и Зеленки для натуральных валторн'
    },
    programDetails: {
      de: [
        'G.Ph. Telemann: Konzert für zwei Naturhörner in D-Dur TWV 52:D1',
        'Jan Dismas Zelenka: Capriccio Nr. 4 in A-Dur ZWV 185',
        'J.D. Heinichen: Concerto in F-Dur für Hörner und Oboen'
      ],
      en: [
        'G.Ph. Telemann: Concerto for two natural horns in D major TWV 52:D1',
        'Jan Dismas Zelenka: Capriccio No. 4 in A major ZWV 185',
        'J.D. Heinichen: Concerto in F major for horns and oboes'
      ],
      ru: [
        'Г.Ф. Телеман: Концерт для двух валторн ре мажор TWV 52:D1',
        'Я.Д. Зеленка: Каприччио № 4 ля мажор ZWV 185',
        'И.Д. Хайнихен: Концерт фа мажор'
      ]
    },
    ensemble: 'Dresdner Barockorchester',
    conductor: 'Stephan Katte / Konzertmeister',
    role: {
      de: '1. Solohorn & Bläserleitung',
      en: 'Principal Solo Horn & Brass Leader',
      ru: '1-я солирующая валторна'
    },
    instrumentUsed: 'Anton Kerner 1760 (Brünn Modell, ventless)',
    ticketInfo: {
      de: 'Konzertkasse Frauenkirche Dresden & Online-Portal',
      en: 'Frauenkirche Dresden box office and ticket website',
      ru: 'Кассы Фрауэнкирхе в Дрездене'
    },
    ticketUrl: 'https://www.frauenkirche-dresden.de',
    isFeatured: true,
    status: 'upcoming'
  },
  {
    id: 'date-22-jan',
    date: '22.–24. Januar 2027',
    isoDate: '2027-01-22',
    time: 'Ganztägig (Meisterkurs)',
    city: 'Weimar',
    venue: 'Hochschule für Musik Franz Liszt, Fürstenhaus',
    address: 'Platz der Demokratie 2/3, 99423 Weimar',
    eventTitle: {
      de: 'Weimarer Meisterkurs: Naturhorn & Historischer Instrumentenbau',
      en: 'Weimar Masterclass: Natural Horn & Historical Organology',
      ru: 'Веймарский мастер-класс: натуральный рог и инструмент'
    },
    program: {
      de: 'Drei Tage Intensivkurs: Handstopftechnik nach Francis Orval, Rohrwiderstand, Bogenwahl',
      en: 'Three-day intensive course: Francis Orval hand technique, tube impedance, and crook selection',
      ru: 'Трехдневный курс: метод Франсиса Орваля, акустика трубки, выбор строя'
    },
    programDetails: {
      de: [
        'Vormittags: Akustikseminar & Werkstattdemonstration (Becherhämmerung, Mensuren)',
        'Nachmittags: Einzelunterricht & Kammermusik auf lochfreien Naturhörnern',
        'Abschlusskonzert der Teilnehmer im Festsaal Fürstenhaus'
      ],
      en: [
        'Mornings: Acoustics seminar & craft workshop demonstration (bell forming, bores)',
        'Afternoons: Master lessons & chamber music on ventless horns',
        'Participants closing concert in the Fürstenhaus hall'
      ],
      ru: [
        'Утро: Акустический семинар и мастерская (ковка раструба, мензуры)',
        'День: Индивидуальные уроки на аутентичных валторнах',
        'Заключительный концерт участников'
      ]
    },
    ensemble: 'HfM Franz Liszt Weimar',
    role: {
      de: 'Kursleiter & Dozent',
      en: 'Masterclass Director',
      ru: 'Руководитель мастер-класса'
    },
    instrumentUsed: 'Vergleich historischer Kerner-, Leichamschneider- & Syhre-Kopien',
    ticketInfo: {
      de: 'Teilnehmeranmeldung über HfM Weimar; Zuhörerkarten an der Tageskasse',
      en: 'Registration via HfM Weimar; auditor tickets at door',
      ru: 'Регистрация участников через HfM Веймар'
    },
    isFeatured: false,
    status: 'upcoming'
  },
  {
    id: 'date-past-magdeburg',
    date: '18. März 2024',
    isoDate: '2024-03-18',
    time: '20:00 CET',
    city: 'Magdeburg',
    venue: 'Gesellschaftshaus Magdeburg',
    eventTitle: {
      de: 'Magdeburger Telemann-Festtage: Glanz des Naturhorns',
      en: 'Magdeburg Telemann Festival: Splendor of the Natural Horn',
      ru: 'Дни Телемана в Магдебурге: Блеск натурального рога'
    },
    program: {
      de: 'G.Ph. Telemann: Konzerte für Bläser und Streicher aus der Darmstädter Handschrift',
      en: 'G.Ph. Telemann: Concerti for winds and strings from Darmstadt manuscripts',
      ru: 'Сочинения Телемана для духовых и струнных'
    },
    ensemble: 'Telemannisches Collegium Michaelstein',
    role: {
      de: 'Solohornist',
      en: 'Solo Hornist',
      ru: 'Солист'
    },
    instrumentUsed: 'Anton Kerner 1760 Naturhorn',
    ticketInfo: {
      de: 'Vergangenes Referenzkonzert (Archiv)',
      en: 'Past reference concert (Archive)',
      ru: 'Прошедший концерт (Архив)'
    },
    isFeatured: false,
    status: 'past'
  }
];

export const defaultBioConfig: SiteBioConfig = {
  headline: {
    de: 'Stephan Katte',
    en: 'Stephan Katte',
    ru: 'Стефан Катте'
  },
  subheadline: {
    de: 'Historische Hörner, Instrumentenbau & Dirigieren',
    en: 'Historical Horns, Instrument Craftsmanship & Conducting',
    ru: 'Исторические валторны, инструмент и дирижирование'
  },
  heroBio: {
    de: 'Ehemaliger Solohornist der Staatskapelle Weimar, Dozent an den Musikhochschulen in Weimar, Leipzig und Rostock sowie leidenschaftlicher Rekonstrukteur kompromisslos lochfreier Naturhörner des 18. Jahrhunderts.',
    en: 'Former principal solo hornist of the Staatskapelle Weimar, faculty professor in Weimar, Leipzig, and Rostock, and master craftsman reconstructing genuinely ventless 18th-century natural horns.',
    ru: 'Бывший солист Веймарской государственной капеллы, доцент консерваторий Веймара, Лейпцига и Ростока, мастер-реконструктор аутентичных валторн XVIII века без клапанов.'
  },
  quickBio: {
    de: 'Stephan Katte verbindet wie wenige Künstler seiner Generation die Welt des virtuosen Solisten, des Dirigenten und des akribischen Instrumentenbauers. Sein handwerkliches und wissenschaftliches Streben gilt der vollkommenen Wiederherstellung des authentischen Naturhornklangs.',
    en: 'Stephan Katte bridges the artistry of the virtuoso hornist, orchestral conductor, and meticulous historical brass artisan, dedicated to the authentic resonance of uncompromised period instruments.',
    ru: 'Стефан Катте объединяет искусство виртуозного солиста, дирижера и мастера-реконструктора, посвятив себя возвращению подлинного звука натурального рога.'
  },
  craftsmanshipPhilosophy: {
    de: '100% lochfrei: Keine unhistorischen Überblasbohrungen nach Otto/Haas. Echte Handhämmerung, historischer Rohrwiderstand und die Wiederbelebung der Orval-Handstopftechnik.',
    en: '100% ventless: zero artificial finger holes. Hand-hammered brass, authentic acoustic impedance, and the revival of the Francis Orval hand-stopping technique.',
    ru: '100% без отверстий: отказ от искусственных клапанов. Ручная ковка, историческое акустическое сопротивление и метод ручной техники Орваля.'
  },
  contactEmail: 'kontakt@stephan-katte.de',
  contactLocation: 'Weimar / Thüringen (Deutschland)',
  institutes: [
    {
      name: 'Hochschule für Musik Franz Liszt Weimar',
      role: 'Lehrauftrag Horn / Naturhorn',
      since: '2006'
    },
    {
      name: 'HMT Felix Mendelssohn Bartholdy Leipzig',
      role: 'Fachrichtung Alte Musik',
      since: '2015'
    },
    {
      name: 'HMT Rostock',
      role: 'Institut für Orchesterspiel & Blasinstrumente',
      since: '2009'
    }
  ]
};
