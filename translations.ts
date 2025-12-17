import { Service, Project } from './types';

interface TranslationData {
  nav: {
    home: string;
    services: string;
    projects: string;
    ai: string;
    call: string;
  };
  hero: {
    badge: string;
    title: string;
    titleSuffix: string;
    subtitle: string;
    desc: string;
    ctaCall: string;
    ctaWhatsapp: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
    getQuote: string;
  };
  portfolio: {
    title: string;
    categories: Record<string, string>;
    items: Project[];
  };
  ai: {
    badge: string;
    title: string;
    desc: string;
    stepsTitle: string;
    steps: string[];
    cardTitle: string;
    placeholder: string;
    btnAnalyze: string;
    loading: string;
    error: string;
    resultTitle: string;
    restart: string;
    labelWorkType: string;
    labelComplexity: string;
    labelMaterials: string;
    labelQuestions: string;
    callAction: string;
    btnCall: string;
    btnWhatsapp: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  contact: {
    brandDesc: string;
    contactTitle: string;
    quickLinksTitle: string;
    hoursTitle: string;
    monFri: string;
    sat: string;
    sun: string;
    closed: string;
    copyright: string;
  };
  sticky: {
    call: string;
    whatsapp: string;
  };
}

export const translations: Record<'en' | 'si', TranslationData> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      ai: "AI Quote",
      call: "Call",
    },
    hero: {
      badge: "Trusted in Sri Lanka Since 2005",
      title: "MP",
      titleSuffix: "WELDERS",
      subtitle: "Expert Metal Engineering & Fabrication Services",
      desc: "From modern gates and roofing to heavy machinery repairs. We deliver strength, durability, and quality craftsmanship for your home or business.",
      ctaCall: "Call For Quote",
      ctaWhatsapp: "WhatsApp Us",
    },
    services: {
      title: "Our Services",
      subtitle: "We specialize in a wide range of metalworking disciplines to meet both residential and commercial needs.",
      items: [
        { id: 1, title: "Gates & Grills", description: "Modern and classic designs for sliding gates, swing gates, window grills, and balcony railings tailored for Sri Lankan homes.", iconName: "Hammer" },
        { id: 2, title: "Roofing Frameworks", description: "Durable steel structures for roofing, Amano sheets, and car porches. Built to withstand local weather conditions.", iconName: "Construction" },
        { id: 3, title: "Heavy Machinery Repair", description: "On-site welding repairs for excavators, lorries, and industrial machinery. 24/7 emergency service available.", iconName: "Truck" },
        { id: 4, title: "Stainless Steel & Aluminum", description: "Premium pantry cupboards, handrails, and kitchen equipment welding for hotels and modern residences.", iconName: "Flame" }
      ],
      getQuote: "Get Quote"
    },
    portfolio: {
      title: "Our Work",
      categories: {
        All: "All",
        Commercial: "Commercial",
        Residential: "Residential",
        Custom: "Custom",
        Repair: "Repair"
      },
      items: [
        { id: 1, title: "Modern Roller Gate", category: "Residential", imageUrl: "https://i.ibb.co/vC5PrhD7/539569084-1114787474078952-3826417667681148315-n.jpg", description: "Remote controlled steel roller gate with wood finish inlay." },
        { id: 2, title: "Commercial Warehouse Roof", category: "Commercial", imageUrl: "https://i.ibb.co/qLqBms89/480453734-971974371693597-328294805776962295-n.jpg", description: "Large scale structural steel roofing framework." },
        { id: 3, title: "Luxury Staircase Railing", category: "Custom", imageUrl: "https://i.ibb.co/CKzpDL0z/475769271-957781596446208-6384545629682845265-n.jpg", description: "Modern floating staircase with tempered glass and steel." },
        { id: 4, title: "Rolller Door Repair", category: "Repair", imageUrl: "https://i.ibb.co/Kjfgc9rL/475645248-957898936434474-6428553518103787009-n.jpg", description: "Hard-facing and structural repair for construction equipment." },
        { id: 5, title: "Hotel Kitchen Fabrication", category: "Commercial", imageUrl: "https://images.unsplash.com/photo-1585671790691-1cb593dc49c5?auto=format&fit=crop&q=80&w=800", description: "Stainless steel worktables and shelving for commercial kitchen." },
        { id: 6, title: "Security Grills", category: "Residential", imageUrl: "https://images.unsplash.com/photo-1620610931557-494b238618e5?auto=format&fit=crop&q=80&w=800", description: "High-security window grills with decorative patterns." }
      ]
    },
    ai: {
      badge: "Free Project Assistant",
      title: "Plan Your Project With AI",
      desc: "Not sure how to explain what you need? Describe your idea here. Our system will help you list the materials and details you need before you call us.",
      stepsTitle: "Simple Steps:",
      steps: [
        "Tell us what you want to build or fix",
        "See what materials might be needed",
        "Get ready to talk to our welders"
      ],
      cardTitle: "MP Welders Assistant",
      placeholder: "Type your requirement here (e.g., \"I need a sliding gate for my house front\"):",
      btnAnalyze: "Analyze",
      loading: "Analyzing...",
      error: "Could not analyze request. Please check your internet connection.",
      resultTitle: "Project Summary",
      restart: "Start Over",
      labelWorkType: "Work Type",
      labelComplexity: "Complexity",
      labelMaterials: "Recommended Materials",
      labelQuestions: "Details To Tell Us",
      callAction: "Send us these details to get a quick price!",
      btnCall: "Call Now",
      btnWhatsapp: "WhatsApp Quote"
    },
    cta: {
      title: "Ready to Build Something Strong?",
      subtitle: "Get a free quote today and let's make your vision a reality.",
      button: "Contact Us Now"
    },
    contact: {
      brandDesc: "Your trusted partner for all iron and steel works in Sri Lanka. We build durable structures that last generations.",
      contactTitle: "Contact Us",
      quickLinksTitle: "Quick Links",
      hoursTitle: "Opening Hours",
      monFri: "Mon - Fri:",
      sat: "Saturday:",
      sun: "Sunday:",
      closed: "Closed",
      copyright: "MP Welders. Proudly Sri Lankan."
    },
    sticky: {
      call: "Call",
      whatsapp: "WhatsApp"
    }
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      services: "සේවා",
      projects: "ව්‍යාපෘති",
      ai: "AI සහාය",
      call: "අමතන්න",
    },
    hero: {
      badge: "2005 සිට ශ්‍රී ලංකාවේ විශ්වාසය දිනූ",
      title: "MP",
      titleSuffix: "වෙල්ඩර්ස්",
      subtitle: "විශිෂ්ට ලෝහ ඉංජිනේරු සහ පෑස්සුම් සේවා",
      desc: "නවීන ගේට්ටු සහ වහලවල් සිට විශාල යන්ත්‍ර අලුත්වැඩියාව දක්වා. ඔබේ නිවසට හෝ ව්‍යාපාරයට අවශ්‍ය ශක්තිමත් සහ උසස්ම තත්ත්වයේ නිර්මාණ අපි ලබා දෙන්නෙමු.",
      ctaCall: "මිල ගණන් විමසන්න",
      ctaWhatsapp: "WhatsApp කරන්න",
    },
    services: {
      title: "අපගේ සේවාවන්",
      subtitle: "ඔබගේ නිවසේ සහ ව්‍යාපාරයේ සියලුම ලෝහ සහ පෑස්සුම් අවශ්‍යතා සඳහා අපි කැපවී සිටින්නෙමු.",
      items: [
        { id: 1, title: "ගේට්ටු සහ ග්‍රිල්", description: "නවීන සහ සාම්ප්‍රදායික මෝස්තරයේ ස්ලයිඩින් ගේට්ටු, ස්වින්ග් ගේට්ටු, ජනෙල් ග්‍රිල් සහ බැල්කනි වැටවල්.", iconName: "Hammer" },
        { id: 2, title: "වහල රාමු", description: "වහලවල්, අමානෝ ෂීට් සහ කාර් පෝච් සඳහා කල් පවතින වානේ රාමු. ඕනෑම කාලගුණයකට ඔරොත්තු දෙන ලෙස නිමවා ඇත.", iconName: "Construction" },
        { id: 3, title: "බර යන්ත්‍ර අලුත්වැඩියාව", description: "එක්ස්කැවේටර්, ලොරි සහ කර්මාන්තශාලා යන්ත්‍ර සඳහා පෑස්සුම් අලුත්වැඩියාව. හදිසි අවස්ථා සේවාව.", iconName: "Truck" },
        { id: 4, title: "ස්ටේන්ලස් වානේ සහ ඇලුමිනියම්", description: "හෝටල් සහ නවීන නිවාස සඳහා පැන්ට්‍රි කබඩ්, අත්වැටවල් සහ මුළුතැන්ගෙයි උපකරණ.", iconName: "Flame" }
      ],
      getQuote: "මිල ගණන් ගන්න"
    },
    portfolio: {
      title: "අපගේ නිර්මාණ",
      categories: {
        All: "සියල්ල",
        Commercial: "වාණිජ",
        Residential: "නිවාස",
        Custom: "විශේෂ",
        Repair: "අලුත්වැඩියා"
      },
      items: [
        { id: 1, title: "නවීන රෝලර් ගේට්ටුව", category: "Residential", imageUrl: "https://i.ibb.co/vC5PrhD7/539569084-1114787474078952-3826417667681148315-n.jpg", description: "රිමෝට් මගින් ක්‍රියාත්මක වන ලී නිමාව සහිත රෝලර් ගේට්ටුව." },
        { id: 2, title: "වාණිජ ගබඩා වහලය", category: "Commercial", imageUrl: "https://i.ibb.co/qLqBms89/480453734-971974371693597-328294805776962295-n.jpg", description: "විශාල පරිමාණයේ වාණිජ වානේ වහල රාමුව." },
        { id: 3, title: "සුඛෝපභෝගී පඩිපෙළ", category: "Custom", imageUrl: "https://i.ibb.co/CKzpDL0z/475769271-957781596446208-6384545629682845265-n.jpg", description: "ටෙම්පර්ඩ් වීදුරු සහ වානේ සහිත නවීන පඩිපෙළ." },
        { id: 4, title: "එක්ස්කැවේටර් බකට් අලුත්වැඩියාව", category: "Repair", imageUrl: "https://i.ibb.co/Kjfgc9rL/475645248-957898936434474-6428553518103787009-n.jpg", description: "ඉදිකිරීම් උපකරණ සඳහා දෘඩ පෑස්සුම් සහ ව්‍යුහාත්මක අලුත්වැඩියාව." },
        { id: 5, title: "හෝටල් මුළුතැන්ගෙයි උපකරණ", category: "Commercial", imageUrl: "https://images.unsplash.com/photo-1585671790691-1cb593dc49c5?auto=format&fit=crop&q=80&w=800", description: "හෝටල් සඳහා ස්ටේන්ලස් වානේ මේස සහ රාක්ක." },
        { id: 6, title: "ආරක්ෂිත ග්‍රිල්", category: "Residential", imageUrl: "https://images.unsplash.com/photo-1620610931557-494b238618e5?auto=format&fit=crop&q=80&w=800", description: "අලංකාර මෝස්තර සහිත ඉහළ ආරක්ෂිත ජනෙල් ග්‍රිල්." }
      ]
    },
    ai: {
      badge: "නොමිලේ ව්‍යාපෘති සහායක",
      title: "AI මගින් ව්‍යාපෘතිය සැලසුම් කරන්න",
      desc: "ඔබට අවශ්‍ය දේ පැහැදිලි කිරීමට අපහසුද? ඔබේ අදහස මෙහි විස්තර කරන්න. අපගේ පද්ධතිය ඔබට අවශ්‍ය ද්‍රව්‍ය සහ විස්තර ලබා දෙනු ඇත.",
      stepsTitle: "සරල පියවර:",
      steps: [
        "ඔබට සාදා ගැනීමට හෝ අලුත්වැඩියා කිරීමට අවශ්‍ය දේ කියන්න",
        "අවශ්‍ය ද්‍රව්‍ය මොනවාදැයි දැනගන්න",
        "අපගේ වෙල්ඩර්වරුන් සමඟ කතා කිරීමට සූදානම් වන්න"
      ],
      cardTitle: "MP වෙල්ඩර්ස් සහායක",
      placeholder: "ඔබේ අවශ්‍යතාවය මෙහි ටයිප් කරන්න (උදා: \"මගේ නිවසේ ඉදිරිපසට ස්ලයිඩින් ගේට්ටුවක් අවශ්‍යයි\"):",
      btnAnalyze: "විස්තර ලබා ගන්න",
      loading: "සකසමින් පවතී...",
      error: "ඉල්ලීම විශ්ලේෂණය කළ නොහැක. කරුණාකර ඔබගේ අන්තර්ජාල සම්බන්ධතාවය පරීක්ෂා කරන්න.",
      resultTitle: "ව්‍යාපෘති සාරාංශය",
      restart: "නැවත අරඹන්න",
      labelWorkType: "ව්‍යාපෘති වර්ගය",
      labelComplexity: "සංකීර්ණත්වය",
      labelMaterials: "නිර්දේශිත ද්‍රව්‍ය",
      labelQuestions: "අපට පැවසිය යුතු විස්තර",
      callAction: "ඉක්මන් මිල ගණන් ලබා ගැනීමට මෙම විස්තර අපට එවන්න!",
      btnCall: "දැන් අමතන්න",
      btnWhatsapp: "WhatsApp කරන්න"
    },
    cta: {
      title: "ශක්තිමත් නිර්මාණයක් සඳහා සූදානම්ද?",
      subtitle: "අදම නොමිලේ මිල ගණන් ලබාගෙන ඔබේ සිහිනය සැබෑ කරගන්න.",
      button: "දැන්ම අමතන්න"
    },
    contact: {
      brandDesc: "ශ්‍රී ලංකාවේ විශ්වාසවන්තම යකඩ සහ වානේ නිර්මාණකරුවෝ. පරම්පරා ගණනක් පවතින ශක්තිමත් නිර්මාණ.",
      contactTitle: "අපව අමතන්න",
      quickLinksTitle: "ඉක්මන් සබැඳි",
      hoursTitle: "විවෘත වේලාවන්",
      monFri: "සඳුදා - සිකුරාදා:",
      sat: "සෙනසුරාදා:",
      sun: "ඉරිදා:",
      closed: "වසා ඇත",
      copyright: "MP වෙල්ඩර්ස්. දේශීය නිෂ්පාදනයකි."
    },
    sticky: {
      call: "අමතන්න",
      whatsapp: "WhatsApp"
    }
  }
};