import { Language } from '../types';

export const downloadPressKit = (lang: Language = 'de') => {
  const titles = {
    de: {
      docTitle: 'Stephan Katte - Offizielle Pressemappe & Künstlerbiografie',
      subtitle: 'Solohornist · Dirigent · Spezialist für historische Naturhörner · Instrumentenbau',
      bioHeading: 'Künstlerisches Profil & Vita',
      bioText1: 'Stephan Katte gehört zu den international profiliertesten Spezialisten für historische Horninstrumente und historische Aufführungspraxis. Nach seinem Studium an der Hochschule für Musik Franz Liszt Weimar bei Prof. Rainer Heimbuch und Meisterkursen u.a. bei Prof. Peter Damm war er von 1992 bis 2002 als Solohornist der traditionsreichen Staatskapelle Weimar engagiert.',
      bioText2: 'Als gefragter Solist und Kammermusiker musiziert er regelmäßig mit renommierten Ensembles wie dem Thomanerchor Leipzig (Solohorn bei Bachs h-Moll-Messe "Quoniam"), dem Dresdner Barockorchester und der Lautten Compagney Berlin. Ein ergänzendes Dirigierstudium in Weimar erweiterte sein künstlerisches Schaffen um die Leitung sinfonischer und barocker Orchesterprojekte.',
      academicHeading: 'Akademische Dozenturen & Lehre',
      academicText: 'Stephan Katte unterrichtet(e) historische Horninstrumente und Naturhorn an drei führenden Musikhochschulen Mitteldeutschlands: an der Hochschule für Musik Franz Liszt Weimar, der Hochschule für Musik und Theater "Felix Mendelssohn Bartholdy" Leipzig sowie der Hochschule für Musik und Theater Rostock.',
      craftHeading: 'Instrumentenbau & Akustische Forschung',
      craftText: 'Aus Unzufriedenheit mit kompromissbehafteten modernen Kopien widmete sich Stephan Katte der Rekonstruktion historischer Naturhörner nach Originalvermessungen (u.a. im Bernischen Historischen Museum und im Mährischen Landesmuseum Brünn). In enger Kooperation mit renommierten Werkstätten wie Friedbert Syhre (Leipzig) entstehen lochfreie Naturhörner, die ohne unhistorische Grifflöcher (System Otto/Haas) gespielt werden und den genuinen, warmen Naturklang des 18. Jahrhunderts wiederbeleben.',
      repertoireHeading: 'Kernrepertoire & Highlights',
      repertoireText: 'J.S. Bach: h-Moll-Messe (Quoniam), Brandenburgisches Konzert Nr. 1, Kantaten BWV 1, 14, 52, 65, 140; G.F. Händel: Wassermusik, Feuerwerksmusik; W.A. Mozart: Hornkonzerte KV 412, 417, 447, 495, Quintett KV 407; J. Haydn: Konzerte Nr. 1 & 2; L.v. Beethoven: Hornsonate op. 17.',
      contactHeading: 'Kontakt & Konzertanfragen',
      email: 'kontakt@stephan-katte.de',
      location: 'Weimar, Thüringen (Deutschland)',
      website: 'www.stephan-katte.de'
    },
    en: {
      docTitle: 'Stephan Katte - Official Press Kit & Artist Biography',
      subtitle: 'Principal Hornist · Conductor · Specialist in Historical Brass · Master Instrument Maker',
      bioHeading: 'Artistic Profile & Biography',
      bioText1: 'Stephan Katte is one of Europe’s leading specialists in historical natural horns and historically informed performance practice. Following studies at the Franz Liszt University of Music in Weimar under Prof. Rainer Heimbuch and masterclasses with Prof. Peter Damm, he served as Principal Hornist of the venerable Staatskapelle Weimar from 1992 to 2002.',
      bioText2: 'As a distinguished soloist and chamber musician, he frequently performs with foremost period ensembles including the Thomanerchor Leipzig (solo horn in J.S. Bach’s B minor Mass "Quoniam"), the Dresdner Barockorchester, and Lautten Compagney Berlin. Further conducting studies in Weimar expanded his artistic scope to orchestral direction of baroque and classical repertoires.',
      academicHeading: 'Academic Faculty Appointments',
      academicText: 'Stephan Katte has taught historical horn at three prominent German music conservatories: the Franz Liszt University of Music Weimar, the University of Music and Theatre "Felix Mendelssohn Bartholdy" Leipzig, and the Rostock University of Music and Drama.',
      craftHeading: 'Craftsmanship & Historical Horn Research',
      craftText: 'Driven by the quest for uncompromising acoustic authenticity, Stephan Katte designs and reconstructs period horns based on meticulous measurements of museum originals in Bern and Brno. Built in partnership with master brass makers such as Friedbert Syhre (Leipzig), his horns are 100% ventless—crafted without artificial nodal finger holes—reclaiming the true acoustic warmth and expressive timbre of the 18th century.',
      repertoireHeading: 'Core Repertoire & Concert Highlights',
      repertoireText: 'J.S. Bach: Mass in B minor (Quoniam), Brandenburg Concerto No. 1; G.F. Handel: Water Music; W.A. Mozart: Horn Concertos KV 412, 417, 447, 495, Quintet KV 407; J. Haydn: Concertos 1 & 2; L.v. Beethoven: Sonata Op. 17.',
      contactHeading: 'Contact & Booking',
      email: 'kontakt@stephan-katte.de',
      location: 'Weimar, Thuringia (Germany)',
      website: 'www.stephan-katte.de'
    },
    ru: {
      docTitle: 'Стефан Катте - Официальный пресс-кит и биография',
      subtitle: 'Солист-валторнист · Дирижер · Специалист по старинным рогам · Мастер инструментов',
      bioHeading: 'Творческий профиль и биография',
      bioText1: 'Стефан Катте — ведущий европейский специалист по историческим натуральным валторнам и аутентичному исполнительству. Окончив Высшую школу музыки имени Франца Листа в Веймаре, с 1992 по 2002 год он служил солистом прославленной Веймарской государственной капеллы (Staatskapelle Weimar).',
      bioText2: 'В качестве солиста регулярно выступает с хором Святого Фомы в Лейпциге (Thomanerchor Leipzig, соло в Мессе си минор И.С. Баха «Quoniam»), Дрезденским барочным оркестром и берлинской Lautten Compagney. Окончил дирижерское отделение в Веймаре.',
      academicHeading: 'Преподавательская деятельность',
      academicText: 'Преподавал историческую валторну в трех высших музыкальных учебных заведениях Германии: в Веймаре, Лейпциге и Ростоке.',
      craftHeading: 'Инструментостроение и акустические исследования',
      craftText: 'Реконструирует исторические валторны на основе точных обмеров музейных оригиналов из Берна и Брно. Все инструменты изготавливаются без искусственных передувных отверстий (100% ventless), возрождая подлинное звучание эпохи Баха и Моцарта.',
      repertoireHeading: 'Основной репертуар',
      repertoireText: 'И.С. Бах: Месса си минор, Бранденбургский концерт № 1; Г.Ф. Гендель: Музыка на воде; В.А. Моцарт: Концерты для валторны, Квинтет KV 407; Л. ван Бетховен: Соната соч. 17.',
      contactHeading: 'Контакты и организация концертов',
      email: 'kontakt@stephan-katte.de',
      location: 'Веймар, Тюрингия (Германия)',
      website: 'www.stephan-katte.de'
    }
  };

  const data = titles[lang] || titles.de;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    // Fallback: download as text file if popup was blocked
    const textContent = `${data.docTitle}
${data.subtitle}
==================================================

1. ${data.bioHeading}
${data.bioText1}

${data.bioText2}

2. ${data.academicHeading}
${data.academicText}

3. ${data.craftHeading}
${data.craftText}

4. ${data.repertoireHeading}
${data.repertoireText}

5. ${data.contactHeading}
E-Mail: ${data.email}
Standort: ${data.location}
Website: ${data.website}
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Stephan_Katte_Pressemappe_${lang.toUpperCase()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
      <meta charset="utf-8">
      <title>${data.docTitle}</title>
      <style>
        @page {
          size: A4;
          margin: 20mm;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, serif;
          color: #1a1a1a;
          line-height: 1.6;
          margin: 0;
          padding: 30px;
          background: #ffffff;
        }
        .header {
          border-bottom: 2px solid #C5A059;
          padding-bottom: 20px;
          margin-bottom: 25px;
        }
        .monogram {
          display: inline-block;
          width: 44px;
          height: 44px;
          line-height: 44px;
          text-align: center;
          border-radius: 50%;
          background: #111;
          color: #C5A059;
          font-family: Georgia, serif;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
        }
        h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          color: #111;
          margin: 6px 0 4px 0;
        }
        .subtitle {
          font-size: 13px;
          color: #C5A059;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          color: #222;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 5px;
          margin-top: 22px;
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          color: #333;
          margin-bottom: 12px;
          text-align: justify;
        }
        .contact-box {
          margin-top: 30px;
          padding: 15px 20px;
          background: #faf8f5;
          border-left: 3px solid #C5A059;
          font-size: 12px;
        }
        .contact-box strong {
          color: #111;
        }
        .print-btn-bar {
          margin-bottom: 20px;
          padding: 10px;
          background: #f0f0f0;
          text-align: right;
        }
        .print-btn {
          background: #C5A059;
          color: #000;
          border: none;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
        }
        @media print {
          .print-btn-bar {
            display: none;
          }
          body {
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-btn-bar">
        <button class="print-btn" onclick="window.print()">Als PDF drucken / speichern</button>
      </div>

      <div class="header">
        <div class="monogram">SK</div>
        <h1>Stephan Katte</h1>
        <div class="subtitle">${data.subtitle}</div>
      </div>

      <h2>${data.bioHeading}</h2>
      <p>${data.bioText1}</p>
      <p>${data.bioText2}</p>

      <h2>${data.academicHeading}</h2>
      <p>${data.academicText}</p>

      <h2>${data.craftHeading}</h2>
      <p>${data.craftText}</p>

      <h2>${data.repertoireHeading}</h2>
      <p>${data.repertoireText}</p>

      <div class="contact-box">
        <strong>${data.contactHeading}</strong><br>
        E-Mail: ${data.email}<br>
        Standort: ${data.location}<br>
        Offizielle Website: ${data.website}
      </div>

      <script>
        window.onload = function() {
          // Auto trigger print dialog after brief delay
          setTimeout(function() {
            window.print();
          }, 350);
        };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
};
