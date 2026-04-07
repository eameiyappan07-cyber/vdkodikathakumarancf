/* ============================================================
   VELLORE DISTRICT KODIKATHA KUMARAN CHARITABLE FORUM
   Main JavaScript — Pure Vanilla JS, Zero Dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     LANGUAGE TRANSLATIONS
     ============================================================ */
  const LANG = {
    ta: {
      /* Top Bar */
      'topbar-phone':   '📞 +91 94886 36096',
      'topbar-email':   '✉ vinayagam.stc@gmail.com',
      'topbar-address': '📍 குடியேற்றம், வேலூர்',

      /* Nav */
      'nav-about':    'எங்களை பற்றி',
      'nav-services': 'சேவைகள்',
      'nav-heritage': 'கொடிகாத்த குமரன்',
      'nav-gallery':  'படங்கள்',
      'nav-contact':  'தொடர்பு',
      'nav-donate':   '❤ நன்கொடை',

      /* Hero */
      'hero-tag':   'வேலூர் மாவட்டம் • பதிவு பெற்ற அமைப்பு',
      'hero-title-1': 'வேலூர் மாவட்ட கொடிகாத்த குமரன்',
      'hero-title-2': 'தொண்டு மன்றம்',
      'hero-title-en': 'Vellore District Kodikatha Kumaran Charitable Forum',
      'hero-subtitle': 'கொள்கையில் உறுதியாய் இரு — சேவையில் கருணையாய் இரு',
      'hero-motto-1': 'கல்விச் சேவை',
      'hero-motto-2': 'மருத்துவ முகாம்',
	  'hero-motto-3': 'ஏழை எளியோருக்கு உதவுதல்',
      'hero-motto-4': 'மாணவர்கள் திறன் மேம்பாட்டு நிகழ்வுகள்',
      'hero-btn-join': '🤝 எங்களுடன் இணையுங்கள்',
      'hero-btn-donate': '❤ நன்கொடை',
      'hero-btn-whatsapp': '💬 WhatsApp',

      /* Stats */
      'stat-1-label': 'ஆண்டுகள் சேவை',
      'stat-2-label': 'மருத்துவ முகாம்கள்',
      'stat-3-label': 'மாணவர் விருதுகள்',
      'stat-4-label': 'தன்னார்வலர்கள்',

      /* About */
      'about-label': 'எங்களை பற்றி',
      'about-title': 'குடியேற்றத்தில் <span>தொண்டு செய்யும்</span> மன்றம்',
      'about-desc': 'வேலூர் மாவட்டத்தின் குடியேற்றம் பகுதியில் இயங்கும் இந்த பதிவு பெற்ற அமைப்பு, சமூக நல்வாழ்வுக்காக அர்ப்பணிக்கப்பட்டது.',
      'about-p1': 'வேலூர் மாவட்ட கொடிகாத்த குமரன் தொண்டு மன்றம், சுதந்திர வீரர் திருப்பூர் குமரனின் வீரத்தை போற்றும் வகையில் நிறுவப்பட்ட ஒரு சேவை நிறுவனம். கல்வி, சுகாதாரம், கலை என்ற மூன்று தூண்களில் நின்று சமூகத்திற்கு சேவை புரிகிறோம்.',
      'about-p2': 'முனைவர் வே.வினாயகமூர்த்தி அவர்களின் தலைமையில், இம்மன்றம் ஆண்டுதோறும் பள்ளி மாணவர்களுக்கு விருதுகள், இலவச மருத்துவ முகாம்கள், இரத்தான முகாம்கள் மற்றும் கலை போட்டிகள் நடத்துகிறது.',
      'about-h1-title': 'முனைவர் வே.வினாயகமூர்த்தி',
	  'about-h1-sub': 'பொதுச் செயலாளர்',
      'about-h2-title': 'பதிவு பெற்ற அமைப்பு',
      'about-h2-sub': 'குடியேற்றம், வேலூர் மாவட்டம்',
      'about-h3-title': 'தொடர்ச்சியான சேவை',
      'about-h3-sub': 'கல்வி, சுகாதாரம், கலை',
      'about-address-label': 'பதிவு அலுவலக முகவரி',
      'about-address-val': 'நெ. 83/36, காங்கிரஸ் அவுஸ் ரோடு,\nபுதுப்பேட்டை, குடியேற்றம், வேலூர் மாவட்டம்.',
      'about-badge-text': 'ஆண்டுகள் சேவை',

      /* Services */
      'svc-label': 'எங்கள் சேவைகள்',
      'svc-title': 'மூன்று <span>தூண்களில்</span> சேவை',
      'svc-desc': 'கல்வி, சுகாதாரம், கலை — இந்த மூன்று துறைகளில் சமூகத்திற்கு பணியாற்றுகிறோம்.',
      'svc-1-title': 'கல்விச் சேவை',
      'svc-1-title-en': 'Educational Service',
      'svc-1-desc': 'பள்ளி மாணவர்களுக்கு போட்டிகள் நடத்தி, வெற்றியாளர்களுக்கு விருதுகளும் உதவித்தொகைகளும் வழங்கப்படுகின்றன.',
      'svc-2-title': 'மருத்துவ முகாம்கள்',
      'svc-2-title-en': 'Free Medical Camps',
      'svc-2-desc': 'இலவச மருத்துவ முகாம்கள், கண் பரிசோதனை, இரத்ததான முகாம்கள் மூலம் சமூக நலனில் பங்காற்றுகிறோம்.',
      'svc-3-title': 'கலைவளர் போட்டிகள்',
      'svc-3-title-en': 'Arts & Cultural Events',
      'svc-3-desc': 'இளைஞர்களின் கலை திறமைகளை வளர்க்க கலை போட்டிகளும் கலாச்சார நிகழ்ச்சிகளும் ஏற்பாடு செய்யப்படுகின்றன.',

      /* Heritage */
      'heritage-label': 'வரலாற்று பின்னணி',
      'heritage-title': 'கொடிகாத்த <span>குமரன்</span> வீரகதை',
      'heritage-quote': '"தேசத்தின் கொடியை கீழே விழவிடேன் — என் உயிர் போனாலும்!"',
      'heritage-p1': 'திருப்பூர் குமரன் (1904–1932) — ஒரு இளம் சுதந்திர போராட்ட வீரன், அரசால் தடை செய்யப்பட்ட இந்திய தேசியக் கொடியை கைவிடாமல் போலீசின் தடியடியில் உயிரை விட்டான். அவனது தியாகம் தமிழகத்தில் இன்றும் போற்றப்படுகிறது.',
      'heritage-p2': 'அவரது நினைவை நிலைநிறுத்த, வேலூர் மாவட்டத்தில் இந்த தொண்டு மன்றம் அமைக்கப்பட்டது. ஆண்டுதோறும் ஜூன் 14 ஆம் தேதி "கொடிகாத்த குமரன் நினைவு நாள்" கொண்டாடப்படுகிறது.',
      'heritage-tag-1': '🏴 கொடி தியாகி',
      'heritage-tag-2': '📅 ஜூன் 14 நினைவு நாள்',
      'heritage-tag-3': '🦁 1904 – 1932',
      'heritage-tag-4': '🇮🇳 சுதந்திர போராட்ட வீரன்',

      /* Gallery */
      'gallery-label': 'நிகழ்வு படங்கள்',
      'gallery-title': 'எங்கள் <span>சேவை</span> தருணங்கள்',
      'gallery-desc': 'மன்றம் நடத்திய நிகழ்வுகள், விருதளிப்பு விழாக்கள் மற்றும் சேவை முகாம்களின் புகைப்படங்கள்.',

      /* Donate */
      'donate-label': 'நன்கொடை',
      'donate-title': 'உங்கள் <span>உதவி</span> வேண்டும்',
      'donate-body-1': 'இந்த மன்றம் முழுமையாக மக்களின் நன்கொடைகளை நம்பி இயங்குகிறது. உங்கள் சிறிய பங்களிப்பு ஒரு குழந்தையின் கல்வியை மாற்றும்.',
      'donate-use-1': 'பள்ளி மாணவர்களுக்கு விருதுகள் மற்றும் உதவித்தொகை',
      'donate-use-2': 'இலவச மருத்துவ முகாம் செலவுகள்',
      'donate-use-3': 'இரத்ததான முகாம் ஏற்பாடு',
      'donate-use-4': 'கலை போட்டி பரிசு நிதி',
      'donate-card-title': 'GPay / UPI மூலம் நன்கொடை',
      'donate-card-sub': 'பாதுகாப்பான மற்றும் நேரடி கட்டணம்',
      'donate-btn': '📱 GPay மூலம் நன்கொடை',
      'donate-or': 'அல்லது',
      'donate-wa-btn': '💬 WhatsApp மூலம் தொடர்பு',
      'donate-note': '🔒 உங்கள் நன்கொடை நேரடியாக பொதுச் செயலாளர் V. வினாயகமூர்த்தி அவர்களுக்கு சேரும். GST பதிவு அல்ல — ஒரு சேவை நிறுவனம்.',
      'donate-secure': '🔒 பாதுகாப்பான கட்டணம்',

      /* Contact */
      'contact-label': 'தொடர்பு கொள்ளுங்கள்',
      'contact-title': 'எங்களை <span>அணுகுங்கள்</span>',
      'contact-desc': 'தொண்டு மன்றத்தில் இணைய அல்லது நன்கொடை வழங்க தயங்காமல் தொடர்பு கொள்ளுங்கள்.',
      'contact-phone-label': 'தொலைபேசி',
      'contact-email-label': 'மின்னஞ்சல்',
      'contact-addr-label': 'முகவரி',
      'contact-addr-val': 'நெ. 83/36, காங்கிரஸ் அவுஸ் ரோடு, புதுப்பேட்டை, குடியேற்றம்.',
      'contact-wa-label': 'WhatsApp',
      'enquiry-title': '💬 உடனடி தொடர்புக்கு',
      'enquiry-body': 'மன்றத்தின் நடவடிக்கைகள், நன்கொடை, நிகழ்வுகள் தொடர்பான கேள்விகளுக்கு WhatsApp வழி உடனடியாக பதில் பெறலாம்.',
      'enquiry-btn': '💬 WhatsApp Enquiry',

      /* Footer */
      'footer-desc': 'வேலூர் மாவட்டத்தின் குடியேற்றத்தில் சேவை செய்யும் கொடிகாத்த குமரன் தொண்டு மன்றம். கல்வி, சுகாதாரம், கலை என்று சமூகத்திற்கு பணிகளை தொடர்ந்து செய்து வருகிறது.',
      'footer-links-title': 'முக்கிய இணைப்புகள்',
      'footer-contact-title': 'தொடர்பு',
      'footer-copy': '© 2025 வேலூர் மாவட்ட கொடிகாத்த குமரன் தொண்டு மன்றம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

      /* Float */
      'float-tooltip': 'WhatsApp மூலம் பேசுங்கள்',
    },
    en: {
      'topbar-phone':   '📞 +91 94886 36096',
      'topbar-email':   '✉ vinayagam.stc@gmail.com',
      'topbar-address': '📍 Gudiyattam, Vellore',

      'nav-about':    'About Us',
      'nav-services': 'Services',
      'nav-heritage': 'Kodikatha Kumaran',
      'nav-gallery':  'Gallery',
      'nav-contact':  'Contact',
      'nav-donate':   '❤ Donate',

      'hero-tag':      'Vellore District • Registered Organisation',
      'hero-title-1':  'Vellore District Kodikatha Kumaran',
      'hero-title-2':  'Charitable Forum',
      'hero-title-en': 'Vellore District Charitable Forum',
      'hero-subtitle': 'Be firm in principles — Be compassionate in service',
      'hero-motto-1':  'Education',
      'hero-motto-2':  'Medical Camps',
	  'hero-motto-3':  'Support for the Poor and Needy',
      'hero-motto-4':  'Student Skill Enhancement Programs',
      'hero-btn-join':    '🤝 Join Us',
      'hero-btn-donate':  '❤ Donate',
      'hero-btn-whatsapp':'💬 WhatsApp',

      'stat-1-label': 'Years of Service',
      'stat-2-label': 'Medical Camps',
      'stat-3-label': 'Student Awards',
      'stat-4-label': 'Volunteers',

      'about-label': 'About Us',
      'about-title': 'Serving the community of <span>Gudiyattam</span>',
      'about-desc': 'A registered charitable organisation in Gudiyattam, Vellore District, dedicated to social welfare.',
      'about-p1': 'Vellore District Kodikatha Kumaran Charitable Forum was established to honour the bravery of freedom fighter Tirupur Kumaran. We serve society through three pillars: education, healthcare, and arts.',
      'about-p2': 'Under the leadership of Dr. V. Vinayagamurthi, the forum annually conducts awards for school students, free medical camps, blood donation drives, and cultural competitions.',
      'about-h1-title': 'Dr. V. Vinayagamurthi',
      'about-h1-sub': 'General Secretary',
      'about-h2-title': 'Registered Organisation',
      'about-h2-sub': 'Gudiyattam, Vellore District',
      'about-h3-title': 'Continuous Service',
      'about-h3-sub': 'Education, Health, Arts',
      'about-address-label': 'Registered Office Address',
      'about-address-val': 'No. 83/36, Congress House Road,\nPudupettai, Gudiyattam, Vellore District.',
      'about-badge-text': 'Years of Service',

      'svc-label': 'Our Services',
      'svc-title': 'Three <span>Pillars</span> of Service',
      'svc-desc': 'Education, Healthcare, Arts — we serve society through these three vital areas.',
      'svc-1-title': 'Educational Service',
      'svc-1-title-en': 'Scholarships & Competitions',
      'svc-1-desc': 'We conduct competitions for school students and distribute awards, medals, and scholarships to winners and achievers.',
      'svc-2-title': 'Free Medical Camps',
      'svc-2-title-en': 'Healthcare for All',
      'svc-2-desc': 'Free medical camps, eye check-ups, and blood donation drives are organised to support the health of the community.',
      'svc-3-title': 'Arts & Cultural Events',
      'svc-3-title-en': 'Nurturing Young Talent',
      'svc-3-desc': 'Cultural competitions and events are organised to nurture the artistic and creative talents of the youth.',

      'heritage-label': 'Historical Background',
      'heritage-title': 'The Brave Story of <span>Kodikatha Kumaran</span>',
      'heritage-quote': '"I shall not let the flag of the nation fall — even if my life is taken!"',
      'heritage-p1': 'Tirupur Kumaran (1904–1932) was a young freedom fighter who died holding the banned Indian National Flag during a police lathi charge, refusing to release the flag even as he fell. His sacrifice is revered throughout Tamil Nadu.',
      'heritage-p2': 'To perpetuate his memory, this charitable forum was established in Vellore District. Every year on June 14th, "Kodikatha Kumaran Ninaivunaal" (Remembrance Day) is celebrated with events and award distributions.',
      'heritage-tag-1': '🏴 Flag Martyr',
      'heritage-tag-2': '📅 June 14 – Remembrance Day',
      'heritage-tag-3': '🦁 1904 – 1932',
      'heritage-tag-4': '🇮🇳 Freedom Fighter',

      'gallery-label': 'Event Photos',
      'gallery-title': 'Our <span>Service</span> Moments',
      'gallery-desc': 'Photos from our events, award ceremonies, medical camps, and community service activities.',

      'donate-label': 'Donate',
      'donate-title': 'Your <span>Support</span> Matters',
      'donate-body-1': 'This forum runs entirely on public donations. Your contribution, however small, can change the life of a child through education or healthcare.',
      'donate-use-1': 'Awards & scholarships for school students',
      'donate-use-2': 'Free medical camp expenses',
      'donate-use-3': 'Blood donation camp organisation',
      'donate-use-4': 'Prize fund for arts competitions',
      'donate-card-title': 'Donate via GPay / UPI',
      'donate-card-sub': 'Secure & Direct Payment',
      'donate-btn': '📱 Donate via GPay',
      'donate-or': 'OR',
      'donate-wa-btn': '💬 Contact via WhatsApp',
      'donate-note': '🔒 Your donation goes directly to General Secretary V. Vinayagamurthi. This is a charitable service organisation.',
      'donate-secure': '🔒 Secure Payment',

      'contact-label': 'Get in Touch',
      'contact-title': 'Contact <span>Us</span>',
      'contact-desc': 'Feel free to reach out to join the forum, make a donation, or learn more about our activities.',
      'contact-phone-label': 'Phone',
      'contact-email-label': 'Email',
      'contact-addr-label': 'Address',
      'contact-addr-val': 'No. 83/36, Congress House Road, Pudupettai, Gudiyattam.',
      'contact-wa-label': 'WhatsApp',
      'enquiry-title': '💬 Quick Enquiry',
      'enquiry-body': 'For any questions about the forum\'s activities, donations, or events, reach us instantly via WhatsApp.',
      'enquiry-btn': '💬 WhatsApp Enquiry',

      'footer-desc': 'Vellore District Kodikatha Kumaran Charitable Forum — serving the community of Gudiyattam through education, healthcare, and arts since its founding.',
      'footer-links-title': 'Quick Links',
      'footer-contact-title': 'Contact',
      'footer-copy': '© 2025 Vellore District Kodikatha Kumaran Charitable Forum. All Rights Reserved.',

      'float-tooltip': 'Chat with us on WhatsApp',
    }
  };

  /* ============================================================
     STATE
     ============================================================ */
  let currentLang = 'ta';

  /* ============================================================
     LANGUAGE SWITCHER
     ============================================================ */
  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang === 'ta' ? 'ta' : 'en');
    const data = LANG[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key] !== undefined) {
        el.innerHTML = data[key];
      }
    });

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  /* ============================================================
     NAVBAR SCROLL
     ============================================================ */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ============================================================
     HAMBURGER MENU
     ============================================================ */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }

  /* ============================================================
     COUNTER ANIMATION
     ============================================================ */
  function animateCounter(el, target, suffix) {
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = parseInt(el.getAttribute('data-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, target, suffix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
  }

  /* ============================================================
     ACTIVE NAV LINK ON SCROLL
     ============================================================ */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
  }

  /* ============================================================
     GPAY LINK BUILDER
     ============================================================ */
  function buildGPayLink() {
    const upiId   = '9488636096@okbizaxis'; // GPay UPI
    const payeeName = encodeURIComponent('Vellore Kodikatha Kumaran Forum');
    const note    = encodeURIComponent('Charitable Donation');
    return `upi://pay?pa=${upiId}&pn=${payeeName}&tn=${note}&cu=INR`;
  }

  function initGPayButtons() {
    document.querySelectorAll('[data-gpay]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = buildGPayLink();
        // Try UPI deep link; fallback to GPay web
        const a = document.createElement('a');
        a.href = link;
        a.click();
        // Fallback after 1.5s if UPI not opened
        setTimeout(() => {
          const fallback = 'https://pay.google.com/';
          window.open(fallback, '_blank', 'noopener,noreferrer');
        }, 1500);
      });
    });
  }

  /* ============================================================
     WHATSAPP LINKS
     ============================================================ */
  const WA_NUMBER = '919488636096';

  function buildWALink(msgKey) {
    const msgs = {
      enquiry: {
        ta: 'நமஸ்காரம்! வேலூர் மாவட்ட கொடிகாத்த குமரன் தொண்டு மன்றம் பற்றி அறிய விரும்புகிறேன்.',
        en: 'Hello! I would like to know more about the Vellore District Kodikatha Kumaran Charitable Forum.'
      },
      donate: {
        ta: 'நமஸ்காரம்! நான் உங்கள் மன்றத்திற்கு நன்கொடை வழங்க விரும்புகிறேன். விவரங்கள் தெரிவிக்கவும்.',
        en: 'Hello! I would like to make a donation to your forum. Please share the details.'
      },
      join: {
        ta: 'நமஸ்காரம்! உங்கள் தொண்டு மன்றத்தில் இணைய விரும்புகிறேன். தகவல் தெரிவிக்கவும்.',
        en: 'Hello! I am interested in joining your charitable forum. Please provide details.'
      }
    };
    const msg = msgs[msgKey] ? msgs[msgKey][currentLang] : msgs.enquiry[currentLang];
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function initWAButtons() {
    document.querySelectorAll('[data-wa]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.getAttribute('data-wa') || 'enquiry';
        window.open(buildWALink(type), '_blank', 'noopener,noreferrer');
      });
    });
  }

  /* ============================================================
     LANG BUTTON EVENTS
     ============================================================ */
  function initLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) applyLang(lang);
      });
    });
  }

  /* ============================================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    applyLang('ta');
    initNavbar();
    initMobileMenu();
    initReveal();
    initCounters();
    initActiveNav();
    initGPayButtons();
    initWAButtons();
    initLangButtons();
    initSmoothScroll();
  });

})();



 /* ============================================================
     Gallery_slid_show
     ============================================================ */
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  let slides = slider.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 2500); // 2.5 sec
});
