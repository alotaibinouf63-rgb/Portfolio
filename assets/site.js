/* Portfolio site: renders every section from window.PORTFOLIO (assets/content.js)
   and runs the viewers (certificates, work previews, CV pages, interactive demos). */
(function () {
  'use strict';
  const P = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------------- interface text */
  const UI = {
    en: {
      docTitle: 'Nouf Al Otaibi Portfolio', skip: 'Skip to content', navLabel: 'Sections',
      nav: [['about', 'Profile'], ['experience', 'Experience'], ['work', 'Work samples'], ['skills', 'Skills'], ['certificates', 'Certificates'], ['cv', 'CV'], ['contact', 'Contact']], toTop: 'Back to top',
      langBtn: 'العربية', langLabel: 'Switch to Arabic', menu: 'Menu', closeMenu: 'Close menu',
      seeWork: 'View My Work', cv: 'Download CV', contact: 'Contact Me',
      exhibit: 'Images from the work samples below, with fictional data.', exhibitLabel: 'Go to the work samples', factsLabel: 'Key facts',
      aboutH: 'Profile', focus: 'Areas of focus',
      xpH: 'Experience',
      ach: 'Key achievements', part: 'Participation', edu: 'Education', langs: 'Languages', logoAlt: (o) => `${o} logo`,
      skH: 'Skills', evidence: 'Supported by:',
      ceH: 'Certificates', ceP: 'Select a certificate to view it.',
      proH: 'Professional certifications', proBadge: 'Professional certification', coursesH: 'Courses', filterLabel: 'Filter courses by area',
      issued: 'Issued', valid: 'Valid until', certNo: 'Certificate no.', verify: 'Verify online', viewCert: 'View certificate',
      woH: 'Work samples',
      skillsShown: 'Skills applied', role: 'My role', features: 'Key features',
      launch: 'Launch Demo', enlarge: 'Enlarge preview', preview: 'Preview',
      cvH: 'CV', cvP: 'Preview each page of the CV here.',
      cvMeta: (n, l) => `PDF · ${n} pages · ${l}`, previewPages: 'Preview pages',
      previewPage: (i, n) => `Preview page ${i} of ${n}`, cvPageCap: (i, n) => `CV, page ${i} of ${n}`,
      coH: 'Contact', coP: 'I welcome inquiries about roles in office management and administrative operations.',
      email: 'Email', phone: 'Mobile', linkedin: 'LinkedIn', location: 'Location',
      copy: 'Copy', copied: 'Copied', writeEmail: 'Send email', call: 'Call', viewProfile: 'View profile',
      copyManual: 'Text selected. Press Ctrl+C, or long-press, to copy it.',
      mailCopied: (v) => `Email address copied: \u2066${v}\u2069`, phoneCopied: (v) => `Mobile number copied: \u2066${v}\u2069`,
      foot1: 'Personal portfolio of Nouf Al Otaibi.',
      close: 'Close', prev: 'Previous', next: 'Next', zoomIn: 'Zoom in', zoomOut: 'Zoom out',
      fullscreen: 'Full screen', exitFullscreen: 'Exit full screen', newTab: 'Open in new tab',
      demoNote: 'Interactive demo with fictional data. Original work by Nouf Al Otaibi at Security Forces Hospital.',
      demoLoading: 'Loading the demo…', demoFail: 'The demo could not load here ({reason}). You can open it in a new tab.', demoNotFile: 'the demo file is not in the expected format',
      fsFail: 'Full screen is not available here.',
      dlStart: 'Preparing the file…', dlFail: 'The download is not available here.', dlDeclined: 'Download canceled.', dlBusy: 'A save prompt is already open.',
      comma: ', '
    },
    ar: {
      docTitle: 'ملف أعمال نوف العتيبي', skip: 'الانتقال إلى المحتوى', navLabel: 'أقسام الموقع',
      nav: [['about', 'نبذة مهنية'], ['experience', 'الخبرة العملية'], ['work', 'نماذج الأعمال'], ['skills', 'المهارات'], ['certificates', 'الشهادات'], ['cv', 'السيرة الذاتية'], ['contact', 'التواصل']], toTop: 'العودة إلى الأعلى',
      langBtn: 'English', langLabel: 'التبديل إلى الإنجليزية', menu: 'القائمة', closeMenu: 'إغلاق القائمة',
      seeWork: 'استعراض أعمالي', cv: 'تحميل السيرة الذاتية', contact: 'تواصل معي',
      exhibit: 'صور من نماذج الأعمال أدناه، ببيانات وهمية.', exhibitLabel: 'الانتقال إلى نماذج الأعمال', factsLabel: 'معلومات أساسية',
      aboutH: 'نبذة مهنية', focus: 'مجالات التركيز',
      xpH: 'الخبرة العملية',
      ach: 'أبرز الإنجازات', part: 'المشاركات', edu: 'المؤهل العلمي', langs: 'اللغات', logoAlt: (o) => `شعار ${o}`,
      skH: 'المهارات', evidence: 'المرجع:',
      ceH: 'الشهادات', ceP: 'يمكنكم عرض أي شهادة بالضغط عليها.',
      proH: 'الشهادات المهنية', proBadge: 'شهادة مهنية', coursesH: 'الدورات التدريبية', filterLabel: 'تصفية الدورات حسب المجال',
      issued: 'تاريخ المنح', valid: 'سارية حتى', certNo: 'رقم الشهادة', verify: 'التحقق إلكترونياً', viewCert: 'عرض الشهادة',
      woH: 'نماذج الأعمال',
      skillsShown: 'المهارات المطبقة', role: 'دوري', features: 'أبرز الخصائص',
      launch: 'تشغيل النموذج', enlarge: 'تكبير المعاينة', preview: 'معاينة',
      cvH: 'السيرة الذاتية', cvP: 'يمكنكم معاينة صفحات السيرة الذاتية هنا.',
      cvMeta: (n, l) => `ملف PDF · ${n} صفحات · ${l}`, previewPages: 'معاينة الصفحات',
      previewPage: (i, n) => `معاينة الصفحة ${i} من ${n}`, cvPageCap: (i, n) => `السيرة الذاتية، الصفحة ${i} من ${n}`,
      coH: 'التواصل', coP: 'يسعدني تواصلكم بشأن الفرص الوظيفية في إدارة المكاتب والعمليات الإدارية.',
      email: 'البريد الإلكتروني', phone: 'الجوال', linkedin: 'LinkedIn', location: 'الموقع',
      copy: 'نسخ', copied: 'تم النسخ', writeEmail: 'إرسال بريد', call: 'اتصال', viewProfile: 'عرض الملف الشخصي',
      copyManual: 'تم تحديد النص، اضغط Ctrl+C أو اضغط مطولاً لنسخه.',
      mailCopied: (v) => `تم نسخ البريد الإلكتروني: \u2066${v}\u2069`, phoneCopied: (v) => `تم نسخ رقم الجوال: \u2066${v}\u2069`,
      foot1: 'ملف أعمال شخصي لنوف العتيبي.',
      close: 'إغلاق', prev: 'السابق', next: 'التالي', zoomIn: 'تكبير', zoomOut: 'تصغير',
      fullscreen: 'ملء الشاشة', exitFullscreen: 'إنهاء ملء الشاشة', newTab: 'فتح في تبويب جديد',
      demoNote: 'نموذج تفاعلي ببيانات وهمية. العمل الأصلي من إعداد نوف العتيبي في مستشفى قوى الأمن.',
      demoLoading: 'جارٍ تحميل النموذج…', demoFail: 'تعذّر عرض النموذج هنا ({reason}). يمكنكم فتحه في تبويب جديد.', demoNotFile: 'ملف النموذج ليس بالصيغة المتوقعة',
      fsFail: 'العرض بملء الشاشة غير متاح هنا.',
      dlStart: 'جارٍ تجهيز الملف…', dlFail: 'التحميل غير متاح هنا.', dlDeclined: 'أُلغي التحميل.', dlBusy: 'نافذة الحفظ مفتوحة بالفعل.',
      comma: '، '
    }
  };

  const svg = (d, cls = '') => `<svg class="ico${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICON = {
    work: svg('<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M3 9h18M9 21h6M12 17v4"/>'),
    down: svg('<path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
    play: svg('<path d="M8 5.5v13l11-6.5z"/>'),
    zoom: svg('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2M11 8.5v5M8.5 11h5"/>'),
    ext: svg('<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
    info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 7.6h.01"/>'),
    copy: svg('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
    phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>'),
    pages: svg('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>'),
    prev: svg('<path d="m15 5-7 7 7 7"/>', 'flip'),
    next: svg('<path d="m9 5 7 7-7 7"/>', 'flip'),
    expand: svg('<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>'),
    shrink: svg('<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>'),
    close: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    menuX: '<path d="M6 6l12 12M18 6 6 18"/>'
  };

  /* ---------------- language: English on every new visit; a #ar link or the language button
     switches, and the choice is kept for the rest of the visit (reloads included) */
  let lang = 'en';
  try { const s = sessionStorage.getItem('np-lang'); if (s === 'en' || s === 'ar') lang = s; } catch (e) {}
  if (location.hash === '#ar') lang = 'ar'; else if (location.hash === '#en') lang = 'en';
  const t = (o) => (o && typeof o === 'object' && !Array.isArray(o) ? (o[lang] ?? o.en) : o);
  const u = () => UI[lang];
  const fmtDate = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString(lang === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  // The single-file version embeds every image; A() maps a file path to its embedded copy.
  const A = (p) => (window.ASSETS && window.ASSETS[p]) || p;
  // The single-file copy parses its large embedded files (full-size images, demos, CV) after the
  // page has rendered; anything that needs them waits for that. On the website this resolves at once.
  const ready = () => (window.ASSETS_PENDING ? new Promise((r) => window.addEventListener('np-assets-ready', r, { once: true })) : Promise.resolve());

  function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast'; el.textContent = msg;
    $('toasts').appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }

  /* ---------------- renderers */
  function head(h, p, extra = '', cls = '') {
    return `<header class="sec-head${cls ? ' ' + cls : ''}"><h2 class="disp">${esc(h)}</h2>${p ? `<p class="desc">${esc(p)}</p>` : ''}${extra}</header>`;
  }

  function renderChrome() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = u().docTitle;
    $('skip').textContent = u().skip;
    $('brandName').textContent = t(P.person.name);
    const links = u().nav.map(([id, l]) => `<a href="#${id}" data-nav="${id}">${esc(l)}</a>`).join('');
    $('nav').innerHTML = links;
    $('menuNav').innerHTML = links;
    $('nav').setAttribute('aria-label', u().navLabel);
    $('menuNav').setAttribute('aria-label', u().navLabel);
    const lb = $('langBtn');
    lb.textContent = u().langBtn;
    lb.lang = lang === 'en' ? 'ar' : 'en';
    lb.setAttribute('aria-label', u().langLabel);
    $('menuLabel').textContent = $('menu').hidden ? u().menu : u().closeMenu;
    $('lbPrev').innerHTML = ICON.prev + `<span class="sr">${esc(u().prev)}</span>`;
    $('lbNext').innerHTML = ICON.next + `<span class="sr">${esc(u().next)}</span>`;
    $('lbClose').innerHTML = ICON.close + esc(u().close);
    $('demoClose').innerHTML = ICON.close + esc(u().close);
    $('demoTab').innerHTML = ICON.ext + `<span class="lbl">${esc(u().newTab)}</span>`;
    $('toTopLabel').textContent = u().toTop;
    $('lightbox').setAttribute('aria-label', u().preview);
  }

  function renderHero() {
    const p = P.person;
    const parts = t(p.title).split('·').map((s) => s.trim()).filter(Boolean);
    const [front, back] = P.works;
    $('hero').innerHTML = `
      <div class="hero-text">
        <h1 class="disp">${esc(t(p.name))}</h1>
        <p class="role">${parts.map((x) => `<span>${esc(x)}</span>`).join('<span class="sep" aria-hidden="true"></span>')}</p>
        <p class="lead">${esc(t(p.statement))}</p>
        <div class="cta">
          <a class="btn btn-primary" href="#work">${ICON.work}${esc(u().seeWork)}</a>
          <button class="btn btn-line" type="button" data-dl="${esc(p.cv)}" data-name="${esc(p.cvName)}">${ICON.down}${esc(u().cv)}</button>
          <a class="btn btn-text" href="#contact">${ICON.mail}${esc(u().contact)}</a>
        </div>
      </div>
      <div class="exhibit-col">
        <a class="exhibit" href="#work" aria-label="${esc(u().exhibitLabel)}">
          ${back ? `<span class="frame back"><img src="${esc(A(back.image))}" alt="" width="1340" height="1060" decoding="async"></span>` : ''}
          ${front ? `<span class="frame front"><img src="${esc(A(front.image))}" alt="" width="1340" height="1060" decoding="async" fetchpriority="high"></span>` : ''}
        </a>
        <p class="ex-cap">${esc(u().exhibit)}</p>
      </div>
      <dl class="facts" aria-label="${esc(u().factsLabel)}">${P.facts.map((f) => `<div><dt>${esc(t(f.k))}</dt><dd>${esc(t(f.v))}</dd></div>`).join('')}</dl>`;
  }

  function renderAbout() {
    const a = P.about;
    $('aboutWrap').innerHTML = `${head(u().aboutH)}
      <div class="about-grid">
        <div class="about-text">${a.p.map((x, i) => `<p${i === 0 ? ' class="first"' : ''}>${esc(t(x))}</p>`).join('')}</div>
        <div class="about-focus"><h3 class="h-sub">${esc(u().focus)}</h3>
          <ul class="focus">${a.interests.map((x) => `<li>${esc(t(x))}</li>`).join('')}</ul></div>
      </div>`;
  }

  function renderXP() {
    const jobs = P.experience.map((x, i) => {
      const current = /present/i.test((x.period && x.period.en) || '');
      const place = t(x.place);
      return `<li class="job${current ? ' current' : ''}" id="xp-${i}" data-keep>
        <div class="job-top">
          <p class="when"><b>${esc(t(x.period))}</b>${place ? `<span class="place">${esc(place)}</span>` : ''}</p>
          <h3 class="disp">${esc(t(x.role))}</h3>
          <p class="org">${esc(t(x.org))}</p>
          ${x.logo ? `<span class="logo-chip"><img src="${esc(A(x.logo))}" alt="${esc(u().logoAlt(t(x.org)))}"${x.logoSize ? ` width="${x.logoSize[0]}" height="${x.logoSize[1]}"` : ''}></span>` : ''}
        </div>
        ${x.groups && x.groups.length ? `<div class="duties">${x.groups.map((g) => `<div><h4>${esc(t(g.h))}</h4><ul class="dash">${g.items.map((it) => `<li>${esc(t(it))}</li>`).join('')}</ul></div>`).join('')}</div>` : ''}
      </li>`;
    }).join('');
    const parts = (P.participations || []).map((x) => `<div><h3 class="label">${esc(u().part)}</h3>
        <p class="t">${esc(t(x.role))}</p><p>${esc(t(x.org))}${esc(u().comma)}${esc(t(x.place))}</p><p class="num">${esc(t(x.period))}</p>
        ${x.doc ? `<button class="btn btn-line btn-sm" type="button" data-cert="${esc(x.doc)}" data-cap="${esc(t(x.role))}">${ICON.zoom}${esc(t(x.docLabel))}</button>` : ''}</div>`).join('');
    $('xpWrap').innerHTML = `${head(u().xpH)}
      <ol class="timeline">${jobs}</ol>
      <section class="ach block" id="ach" data-keep aria-labelledby="achH"><h3 class="h-sub" id="achH">${esc(u().ach)}</h3>
        <ul>${P.achievements.map((a) => `<li>${esc(t(a))}</li>`).join('')}</ul></section>
      <div class="extra block">${parts}
        <div><h3 class="label">${esc(u().edu)}</h3><p class="t">${esc(t(P.education))}</p></div>
        <div><h3 class="label">${esc(u().langs)}</h3><p class="t">${esc(t(P.languages))}</p></div>
      </div>`;
  }

  function renderSkills() {
    $('skillsWrap').innerHTML = `${head(u().skH)}
      <div class="matrix">${P.skills.map((s) => `
        <section class="skill" aria-labelledby="sk-${esc(s.id)}">
          <h3 id="sk-${esc(s.id)}">${esc(t(s.h))}</h3>
          <ul>${t(s.items).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
          <p class="evidence">${esc(u().evidence)} ${s.link ? `<a href="#${esc(s.link)}">${esc(t(s.proof))}</a>` : esc(t(s.proof))}</p>
        </section>`).join('')}</div>`;
  }

  let certFilter = 'all';
  let certList = [];
  function renderCerts() {
    const courses = P.courses.slice().sort((a, b) => b.date.localeCompare(a.date));
    certList = [];
    P.professional.forEach((c) => certList.push({ img: c.image, cap: t(c.title) }));
    courses.forEach((c) => {
      certList.push({ img: c.image, cap: t(c.title) });
      (c.extra || []).forEach((x) => certList.push({ img: x, cap: t(c.title) }));
    });
    const counts = { all: courses.length };
    courses.forEach((c) => { counts[c.topic] = (counts[c.topic] || 0) + 1; });
    const filters = Object.keys(P.topics).filter((k) => k !== 'professional' && counts[k])
      .map((k) => `<button type="button" data-topic="${esc(k)}" aria-pressed="${k === certFilter}">${esc(t(P.topics[k]))}<span class="n">${counts[k]}</span></button>`).join('');
    const pro = P.professional.map((c) => `<article class="pro-card">
        <button class="pro-img" type="button" data-cert="${esc(c.image)}" aria-label="${esc(u().viewCert)}: ${esc(t(c.title))}"><img src="${esc(A(`certs/${c.image}-thumb.webp`))}" alt="" loading="lazy" width="640" height="482"></button>
        <div class="pro-text">
          <span class="badge">${esc(u().proBadge)}</span>
          <h4>${esc(t(c.title))}</h4>
          <p class="issuer">${esc(t(c.issuer))}</p>
          <dl class="kv"><dt>${esc(u().issued)}</dt><dd>${esc(fmtDate(c.date))}</dd><dt>${esc(u().valid)}</dt><dd>${esc(fmtDate(c.valid))}</dd><dt>${esc(u().certNo)}</dt><dd><span class="ltr">${esc(c.no)}</span></dd></dl>
          <button class="btn btn-line btn-sm" type="button" data-cert="${esc(c.image)}">${ICON.zoom}${esc(u().viewCert)}</button>
        </div></article>`).join('');
    const list = courses.map((c) => `<li class="course" data-topic="${esc(c.topic)}"${certFilter !== 'all' && c.topic !== certFilter ? ' hidden' : ''}>
        <button class="course-btn" type="button" data-cert="${esc(c.image)}">
          <span class="c-thumb"><img src="${esc(A(`certs/${c.image}-thumb.webp`))}" alt="" loading="lazy"></span>
          <span class="c-text"><span class="c-title">${esc(t(c.title))}</span><span class="c-meta">${esc(t(c.issuer))}</span>
            <span class="c-date">${esc(fmtDate(c.date))}${c.hours ? esc(u().comma) + esc(t(c.hours)) : ''}</span></span>
        </button>
        ${c.verify ? `<a class="c-verify" href="${esc(c.verify)}" target="_blank" rel="noopener">${esc(u().verify)}${ICON.ext}</a>` : ''}
      </li>`).join('');
    $('certWrap').innerHTML = `${head(u().ceH, u().ceP)}
      <h3 class="h-sub">${esc(u().proH)}</h3>
      <div class="pro" id="pro" data-keep>${pro}</div>
      <div class="block">
        <div class="courses-head"><h3 class="h-sub">${esc(u().coursesH)}</h3><div class="filters" role="group" aria-label="${esc(u().filterLabel)}">${filters}</div></div>
        <ul class="course-list" id="courses" data-keep>${list}</ul>
      </div>`;
  }

  function renderWorks() {
    const note = P.worksNote ? `<div class="data-note" role="note">${ICON.info}<p>${esc(t(P.worksNote))}</p></div>` : '';
    const cases = P.works.map((w) => {
      const title = t(w.title);
      const gal = w.gallery && w.gallery.length ? w.gallery : [w.image];
      return `<article class="case" id="case-${esc(w.id)}" data-keep aria-labelledby="t-${esc(w.id)}">
        <div class="case-top">
          <div class="case-media">
            <button class="shot" type="button" data-gallery="${esc(w.id)}" data-idx="0" aria-label="${esc(u().enlarge)}: ${esc(title)}">
              <img src="${esc(A(w.image))}" alt="" loading="lazy" width="1340" height="1000"><span class="zoom-tag" aria-hidden="true">${ICON.zoom}${esc(u().enlarge)}</span></button>
            ${gal.length > 1 ? `<div class="thumbs">${gal.map((g, i) => `<button class="thumb" type="button" data-gallery="${esc(w.id)}" data-idx="${i}" aria-label="${esc(u().preview)} ${i + 1} / ${gal.length}: ${esc(title)}"><img src="${esc(A(g))}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
          </div>
          <div class="case-info">
            <p class="kind">${esc(t(w.kind))}</p>
            <h3 class="disp" id="t-${esc(w.id)}">${esc(title)}</h3>
            <p class="goal">${esc(t(w.goal))}</p>
            <dl class="case-facts">
              ${w.skills ? `<div><dt>${esc(u().skillsShown)}</dt><dd><ul class="tags skills">${t(w.skills).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></dd></div>` : ''}
            </dl>
            <div class="case-actions">
              ${w.demo ? `<button class="btn btn-primary" type="button" data-demo="${esc(w.demo)}">${ICON.play}${esc(u().launch)}</button>` : ''}
            </div>
          </div>
        </div>
        <div class="case-body">
          <section><h4>${esc(u().role)}</h4><p>${esc(t(w.role))}</p></section>
          <section><h4>${esc(u().features)}</h4><ul class="dash">${t(w.features).map((f) => `<li>${esc(f)}</li>`).join('')}</ul></section>
        </div>
      </article>`;
    }).join('');
    $('workWrap').innerHTML = `${head(u().woH, '', note, 'work-head')}<div class="cases">${cases}</div>`;
  }

  function renderCV() {
    const p = P.person;
    const thumbs = p.cvThumbs || [];
    const n = (p.cvPages || thumbs).length;
    $('cvWrap').innerHTML = `${head(u().cvH, u().cvP)}
      <div class="cv">
        <div class="cv-side">
          <h3 class="h-sub"><span class="ltr">${esc(p.cvName)}</span></h3>
          <p class="cv-meta">${esc(u().cvMeta(n, t(p.cvLanguage)))}</p>
          <div class="cv-actions">
            ${n ? `<button class="btn btn-primary" type="button" data-cv="0">${ICON.pages}${esc(u().previewPages)}</button>` : ''}
          </div>
        </div>
        <div class="cv-pages">${thumbs.map((src, i) => `<button class="page" type="button" data-cv="${i}" aria-label="${esc(u().previewPage(i + 1, n))}"><img src="${esc(A(src))}" alt="" loading="lazy" width="640" height="905"><span class="pg" aria-hidden="true">${i + 1}</span></button>`).join('')}</div>
      </div>`;
  }

  function renderContact() {
    const p = P.person;
    const tel = String(p.phone || '').replace(/[^+\d]/g, '');
    const shownLink = String(p.linkedin || '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    $('contactWrap').innerHTML = `<div class="contact-grid">
      <div><h2 class="disp">${esc(u().coH)}</h2><p class="lead">${esc(u().coP)}</p></div>
      <ul class="ledger">
        ${p.email ? `<li><span class="k">${esc(u().email)}</span><span class="v ltr">${esc(p.email)}</span>
          <span class="acts"><button class="chip" type="button" data-copy="${esc(p.email)}">${ICON.copy}${esc(u().copy)}</button><a class="chip" href="mailto:${esc(p.email)}">${ICON.mail}${esc(u().writeEmail)}</a></span></li>` : ''}
        ${p.phone ? `<li><span class="k">${esc(u().phone)}</span><span class="v ltr num">${esc(p.phone)}</span>
          <span class="acts"><button class="chip" type="button" data-copy="${esc(p.phone)}">${ICON.copy}${esc(u().copy)}</button><a class="chip" href="tel:${esc(tel)}">${ICON.phone}${esc(u().call)}</a></span></li>` : ''}
        ${p.linkedin ? `<li><span class="k">${esc(u().linkedin)}</span><a class="v ltr" href="${esc(p.linkedin)}" target="_blank" rel="noopener">${esc(shownLink)}</a>
          <span class="acts"><a class="chip" href="${esc(p.linkedin)}" target="_blank" rel="noopener">${ICON.ext}${esc(u().viewProfile)}</a></span></li>` : ''}
        <li><span class="k">${esc(u().location)}</span><span class="v">${esc(t(p.location))}</span><span class="acts"></span></li>
      </ul></div>`;
    $('footWrap').innerHTML = `<p>${esc(u().foot1)}</p><p>© ${new Date().getFullYear()} ${esc(t(p.name))}</p>`;
  }

  function renderAll() {
    renderChrome(); renderHero(); renderAbout(); renderXP(); renderWorks(); renderSkills(); renderCerts(); renderCV(); renderContact();
    markNav();
  }

  /* ---------------- section highlight in the menu */
  let currentNav = null;
  function markNav() {
    document.querySelectorAll('[data-nav]').forEach((a) => {
      if (a.dataset.nav === currentNav) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { currentNav = e.target.id === 'top' ? null : e.target.id; markNav(); } });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', 'about', 'experience', 'work', 'skills', 'certificates', 'cv', 'contact'].forEach((id) => spy.observe($(id)));
  }
  const onScroll = () => {
    $('hdr').classList.toggle('is-scrolled', window.scrollY > 8);
    $('toTop').hidden = window.scrollY < window.innerHeight * 1.2;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------- mobile menu */
  function setMenu(open) {
    $('menu').hidden = !open;
    $('menuBtn').setAttribute('aria-expanded', String(open));
    $('menuBtn').querySelector('svg').innerHTML = open ? ICON.menuX : ICON.menu;
    $('menuLabel').textContent = open ? u().closeMenu : u().menu;
  }
  $('menuBtn').addEventListener('click', () => setMenu($('menu').hidden));
  $('menuNav').addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  if (window.matchMedia) {
    const wide = window.matchMedia('(min-width: 1061px)');
    const onWide = () => { if (wide.matches) setMenu(false); };
    if (wide.addEventListener) wide.addEventListener('change', onWide); else if (wide.addListener) wide.addListener(onWide);
  }

  /* ---------------- language switch that keeps the reader's place */
  function headerLine() { return $('hdr').getBoundingClientRect().bottom + 1; }
  function snapshot() {
    if (window.scrollY < 4) return null;
    const line = headerLine();
    let best = null;
    document.querySelectorAll('[data-keep]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (el.id && r.top <= line && r.bottom > line && (!best || r.height < best.h)) best = { id: el.id, h: r.height, frac: (line - r.top) / r.height };
    });
    return best;
  }
  function restore(s) {
    if (!s) return;
    const el = document.getElementById(s.id);
    if (!el) return;
    const r = el.getBoundingClientRect();
    window.scrollTo({ top: Math.max(0, window.scrollY + r.top - headerLine() + s.frac * r.height), behavior: 'instant' });
  }
  $('langBtn').addEventListener('click', () => {
    const s = snapshot();
    lang = lang === 'ar' ? 'en' : 'ar';
    try { sessionStorage.setItem('np-lang', lang); } catch (e) {}
    renderAll();
    restore(s);
  });

  /* ---------------- overlays */
  const pageParts = () => [$('hdr'), $('main'), $('foot')];
  let openOverlay = null;
  function showOverlay(id) {
    setMenu(false);
    openOverlay = id;
    $(id).hidden = false;
    pageParts().forEach((el) => { el.inert = true; el.setAttribute('aria-hidden', 'true'); });
    document.documentElement.style.overflow = 'hidden';
  }
  function hideOverlay(id) {
    $(id).hidden = true;
    openOverlay = null;
    pageParts().forEach((el) => { el.inert = false; el.removeAttribute('aria-hidden'); });
    document.documentElement.style.overflow = '';
  }
  function giveFocusBack(el) {
    if (el && document.contains(el)) el.focus({ preventScroll: true });
    else $('main').focus({ preventScroll: true });
  }

  /* lightbox: certificates, work previews and CV pages */
  let lb = { items: [], idx: 0, opener: null };
  function setZoom(on) {
    $('lbStage').classList.toggle('zoomed', on);
    $('lbZoom').innerHTML = ICON.zoom + `<span class="lbl">${esc(on ? u().zoomOut : u().zoomIn)}</span>`;
  }
  function drawLB() {
    const it = lb.items[lb.idx];
    setZoom(false);
    $('lbStage').scrollTo(0, 0);
    if (window.ASSETS_PENDING) $('lbImg').removeAttribute('src');
    ready().then(() => { if (lb.items[lb.idx] === it) $('lbImg').src = A(it.src); });
    $('lbImg').alt = it.cap || '';
    $('lbTitle').textContent = it.cap || '';
    $('lbCount').textContent = lb.items.length > 1 ? `${lb.idx + 1} / ${lb.items.length}` : '';
    $('lbPrev').hidden = $('lbNext').hidden = lb.items.length < 2;
  }
  function openLB(items, idx, opener) {
    lb = { items, idx: Math.max(0, idx), opener };
    showOverlay('lightbox');
    drawLB();
    $('lbClose').focus();
  }
  function stepLB(d) { lb.idx = (lb.idx + d + lb.items.length) % lb.items.length; drawLB(); }
  function closeLB() { hideOverlay('lightbox'); $('lbImg').removeAttribute('src'); giveFocusBack(lb.opener); }
  $('lbPrev').addEventListener('click', () => stepLB(-1));
  $('lbNext').addEventListener('click', () => stepLB(1));
  $('lbZoom').addEventListener('click', () => setZoom(!$('lbStage').classList.contains('zoomed')));
  $('lbImg').addEventListener('click', () => setZoom(!$('lbStage').classList.contains('zoomed')));
  $('lbClose').addEventListener('click', closeLB);

  function openCert(img, cap, opener) {
    const items = certList.map((c) => ({ src: `certs/${c.img}.webp`, cap: c.cap, img: c.img }));
    const idx = items.findIndex((c) => c.img === img);
    if (idx < 0) openLB([{ src: `certs/${img}.webp`, cap: cap || '' }], 0, opener);
    else openLB(items, idx, opener);
  }
  function openGallery(id, idx, opener) {
    const w = P.works.find((x) => x.id === id);
    if (!w) return;
    const gal = w.gallery && w.gallery.length ? w.gallery : [w.image];
    openLB(gal.map((s) => ({ src: s, cap: t(w.title) })), idx, opener);
  }
  function openCV(idx, opener) {
    const pages = P.person.cvPages || [];
    if (!pages.length) return;
    openLB(pages.map((s, i) => ({ src: s, cap: u().cvPageCap(i + 1, pages.length) })), idx, opener);
  }

  /* demo viewer: each demo runs in its own sandboxed frame with only the permissions it needs */
  const fsElement = () => document.fullscreenElement || document.webkitFullscreenElement || null;
  const fsEnabled = () => !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  function drawFsButton() {
    const b = $('demoFs');
    b.hidden = !fsEnabled();
    const on = !!fsElement();
    b.innerHTML = (on ? ICON.shrink : ICON.expand) + `<span class="lbl">${esc(on ? u().exitFullscreen : u().fullscreen)}</span>`;
  }
  async function toggleFs() {
    const el = $('demo');
    try {
      if (fsElement()) await Promise.resolve((document.exitFullscreen || document.webkitExitFullscreen).call(document));
      else await Promise.resolve((el.requestFullscreen || el.webkitRequestFullscreen).call(el));
    } catch (e) {
      $('demoFs').hidden = true;
      toast(u().fsFail);
    }
  }
  $('demoFs').addEventListener('click', toggleFs);
  document.addEventListener('fullscreenchange', drawFsButton);
  document.addEventListener('webkitfullscreenchange', drawFsButton);

  let demoReq = 0;
  let demoOpener = null;
  let demoBlobUrl = null;
  async function openDemo(id, opener) {
    const w = P.works.find((x) => x.demo === id);
    if (!w) return;
    const path = `demos/${id}.html`;
    await ready();
    const embedded = window.DEMO_PAGES && window.DEMO_PAGES[id];
    const req = ++demoReq;
    demoOpener = opener;
    $('demoTitle').textContent = t(w.title);
    $('demoNote').textContent = u().demoNote;
    let tabUrl = path;
    if (embedded) {
      if (demoBlobUrl) URL.revokeObjectURL(demoBlobUrl);
      demoBlobUrl = URL.createObjectURL(new Blob([embedded], { type: 'text/html' }));
      tabUrl = demoBlobUrl;
    }
    $('demoTab').href = tabUrl;
    drawFsButton();
    const stage = $('demoStage');
    const status = $('demoStatus');
    stage.querySelectorAll('iframe').forEach((f) => f.remove());
    status.hidden = false;
    status.textContent = u().demoLoading;
    showOverlay('demo');
    $('demoClose').focus();

    const frame = document.createElement('iframe');
    frame.id = 'demoFrame';
    frame.title = t(w.title);
    frame.setAttribute('sandbox', w.sandbox || 'allow-scripts');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    frame.addEventListener('load', () => { if (req === demoReq) status.hidden = true; }, { once: true });
    try {
      let html = embedded;
      if (!html) {
        const res = await fetch(path);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        html = await res.text();
      }
      if (!/DEMOS\./.test(html)) throw new Error(u().demoNotFile);
      if (req !== demoReq || $('demo').hidden) return;
      frame.srcdoc = html;
    } catch (err) {
      if (req !== demoReq || $('demo').hidden) return;
      if (location.protocol === 'file:') frame.src = path; // a copy of the site opened straight from disk
      else { status.textContent = u().demoFail.replace('{reason}', (err && err.message) || String(err)); return; }
    }
    stage.appendChild(frame);
  }
  function closeDemo() {
    demoReq++;
    if (fsElement()) Promise.resolve((document.exitFullscreen || document.webkitExitFullscreen).call(document)).catch(() => {});
    $('demoStage').querySelectorAll('iframe').forEach((f) => f.remove());
    hideOverlay('demo');
    giveFocusBack(demoOpener);
  }
  $('demoClose').addEventListener('click', closeDemo);

  /* ---------------- files: the viewer's save prompt on claude.ai, an ordinary link elsewhere */
  const inViewer = !!(window.claude && typeof window.claude.use === 'function');
  let capPromise = null;
  function downloadsCap() {
    if (!capPromise) capPromise = inViewer ? Promise.resolve(window.claude.use('downloads')).catch(() => null) : Promise.resolve(null);
    return capPromise;
  }
  if (inViewer) downloadsCap();
  // The single-file copy carries the CV inside the page (window.EMBEDDED_FILES).
  const embedded = (path) => window.EMBEDDED_FILES && window.EMBEDDED_FILES[path];
  function decodeEmbedded(path) {
    const bin = atob(embedded(path));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Blob([bytes], { type: 'application/pdf' });
  }
  async function getBlob(path) {
    if (embedded(path)) return decodeEmbedded(path);
    const r = await fetch(path);
    const ct = r.headers.get('content-type') || '';
    if (!r.ok || ct.includes('text/html')) throw new Error('HTTP ' + r.status);
    return r.blob();
  }
  // Only the CV (a PDF) can be downloaded; the work samples offer no data files.
  async function download(path, filename) {
    if (!/\.pdf$/i.test(path)) return;
    await ready();
    const cap = await downloadsCap();
    if (cap) {
      try {
        toast(u().dlStart);
        await cap.save({ filename, data: await getBlob(path) });
        return;
      } catch (e) {
        const c = e && e.code;
        if (c === 'declined') { toast(u().dlDeclined); return; }
        if (c === 'rate_limited') { toast(u().dlBusy); return; }
        // any other refusal: fall back to the browser's own download below
      }
    }
    // Ordinary download: browsers, the single file, and the page opened on its own
    // (where window.claude exists but the viewer's save prompt is not offered).
    let href = path;
    let url = null;
    if (embedded(path)) {
      try { url = URL.createObjectURL(decodeEmbedded(path)); href = url; } catch (e) { toast(u().dlFail); return; }
    }
    const a = document.createElement('a');
    a.href = href; a.download = filename; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    if (url) setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  async function copyText(text, btn, msg) {
    try {
      await navigator.clipboard.writeText(text);
      toast(msg || u().copied);
    } catch (e) {
      // Some views refuse the clipboard: select the text, try the older copy command, and say what happened.
      const v = btn.closest('li') && btn.closest('li').querySelector('.v');
      if (v) { const r = document.createRange(); r.selectNodeContents(v); const s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
      let ok = false;
      try { ok = !!v && document.execCommand('copy'); } catch (err) {}
      toast(ok ? (msg || u().copied) : u().copyManual);
    }
  }

  // Email and call links can be blocked by the viewer around the page, and the page cannot tell.
  // They still try to open the mail app or dialer, and also copy the address or number so the
  // visitor always has it.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('#contactWrap a[href^="mailto:"], #contactWrap a[href^="tel:"]');
    if (!a) return;
    const v = a.closest('li') && a.closest('li').querySelector('.v');
    const value = v ? v.textContent.trim() : '';
    if (value) copyText(value, a, a.getAttribute('href').startsWith('mailto:') ? u().mailCopied(value) : u().phoneCopied(value));
  });

  function setFilter(topic) {
    certFilter = topic;
    document.querySelectorAll('.filters [data-topic]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.topic === topic)));
    document.querySelectorAll('.course').forEach((c) => { c.hidden = topic !== 'all' && c.dataset.topic !== topic; });
  }

  /* ---------------- in-page links (menu, buttons, skill references, back to top): scroll to the
     section here instead of following the #link, which the viewer around the page can treat as a
     new page load that lands at the top */
  const reducedMotion = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.target === '_blank' || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const id = decodeURIComponent(a.getAttribute('href').slice(1));
    const el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    // keyboard users carry on from the section they jumped to
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  });

  /* ---------------- events */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-dl],[data-cert],[data-gallery],[data-demo],[data-copy],[data-topic],[data-cv]');
    if (!el) return;
    const ds = el.dataset;
    if (ds.dl) { e.preventDefault(); download(ds.dl, ds.name); }
    else if (ds.cert) openCert(ds.cert, ds.cap, el);
    else if (ds.gallery) openGallery(ds.gallery, Number(ds.idx) || 0, el);
    else if (ds.demo) openDemo(ds.demo, el);
    else if (ds.copy) copyText(ds.copy, el);
    else if (ds.cv !== undefined) openCV(Number(ds.cv) || 0, el);
    else if (ds.topic) setFilter(ds.topic);
  });
  document.addEventListener('keydown', (e) => {
    if (openOverlay === 'lightbox') {
      if (e.key === 'Escape') closeLB();
      else if (e.key === 'ArrowRight' && lb.items.length > 1) stepLB(lang === 'ar' ? -1 : 1);
      else if (e.key === 'ArrowLeft' && lb.items.length > 1) stepLB(lang === 'ar' ? 1 : -1);
    } else if (openOverlay === 'demo') {
      if (e.key === 'Escape' && !fsElement()) closeDemo();
    } else if (e.key === 'Escape' && !$('menu').hidden) {
      setMenu(false);
      $('menuBtn').focus();
    }
  });

  /* ---------------- start */
  document.documentElement.classList.add('intro');
  renderAll();
  onScroll();
  setTimeout(() => document.documentElement.classList.remove('intro'), 900);
  const target = location.hash.length > 1 && location.hash !== '#ar' && location.hash !== '#en' ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
  if (target) requestAnimationFrame(() => target.scrollIntoView());
})();
