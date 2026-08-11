import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    nav: {
      home: "Home",
      story: "Our Story",
      services: "Services",
      gallery: "Gallery",
      booking: "Book Now",
      contact: "Contact",
    },

    hero: {
      eyebrow: "Philis Hair & Beauty Salon",
      titleOne: "Beauty,",
      titleTwo: "beautifully",
      titleThree: "expressed.",
      location: "Doha, Qatar",
      description:
        "Hair, beauty, nails and lashes crafted with care, creativity and a touch of Philis elegance.",
      book: "Book an Appointment",
      explore: "Explore Services",
      reassurance: "Your beauty. Your moment.",
      discover: "Discover Philis",
    },

    services: {
      eyebrow: "What We Offer",
      titleOne: "Signature Beauty",
      titleTwo: "Experiences",
      description:
        "From head to toe, every service at Philis is designed to elevate your natural beauty. Discover treatments crafted with care and premium products.",
      viewAll: "View All Services & Pricing",
    },

    promise: {
      eyebrow: "What We Stand For",
      title: "Our Promise",
      description:
        "We don't just want you to look good when you walk out — we want you to feel confident you made the right choice coming in.",
    },

    gallery: {
      eyebrow: "Our Work",
      titleOne: "Beauty",
      titleTwo: "Portfolio",
      description:
        "A glimpse into the artistry we create every day at our Al Khalidiya studio.",
      viewAll: "View Full Portfolio",
    },

    booking: {
      eyebrow: "Book Your Visit",
      titleOne: "Reserve Your",
      titleTwo: "Beauty Experience",
      description:
        "Booking at Philis is simple and personal. No complicated online forms — just browse our services, send us a quick WhatsApp message, and we'll take care of the rest.",
      button: "Book via WhatsApp",
      availability: "Available daily • Last appointment at 6:00 PM",
    },

    location: {
      eyebrow: "Find Us",
      titleOne: "Visit",
      titleTwo: "Philis",
      description:
        "Find Philis Hair Salon in Najma, Doha, along Al Khalidiya St. Contact us on WhatsApp to arrange your appointment and parking.",
      location: "Location",
      whatsapp: "WhatsApp",
      parking: "Parking",
      parkingValue: "Free parking available upon booking",
      hours: "Opening Hours",
      lastAppointment: "Last appointment accepted at 6:00 PM",
      directions: "Get Directions",
    },

    faq: {
      eyebrow: "Common Questions",
      titleOne: "Frequently",
      titleTwo: "Asked",
      description:
        "Everything you need to know before your visit. Can't find your answer? Message us on WhatsApp.",
      stillQuestions: "Still have questions?",
      ask: "Ask us on WhatsApp",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      story: "قصتنا",
      services: "الخدمات",
      gallery: "معرض الصور",
      booking: "احجزي الآن",
      contact: "تواصل معنا",
    },

    hero: {
      eyebrow: "صالون فيليس للشعر والجمال",
      titleOne: "جمالكِ،",
      titleTwo: "بأسلوب",
      titleThree: "استثنائي.",
      location: "الدوحة، قطر",
      description:
        "خدمات الشعر والجمال والأظافر والرموش نقدمها بعناية وإبداع ولمسة من أناقة فيليس.",
      book: "احجزي موعدك",
      explore: "استكشفي الخدمات",
      reassurance: "جمالكِ. لحظتكِ.",
      discover: "اكتشفي فيليس",
    },

    services: {
      eyebrow: "ما نقدمه",
      titleOne: "تجارب",
      titleTwo: "جمالية مميزة",
      description:
        "من الرأس إلى القدمين، صُممت كل خدمة في فيليس لتعزيز جمالك الطبيعي. اكتشفي علاجات نقدمها بعناية وباستخدام منتجات مميزة.",
      viewAll: "عرض جميع الخدمات والأسعار",
    },

    promise: {
      eyebrow: "ما نؤمن به",
      title: "وعدنا لكِ",
      description:
        "لا نريدكِ فقط أن تبدين جميلة عند مغادرتكِ، بل نريدكِ أن تشعري بالثقة وأنكِ اتخذتِ القرار الصحيح.",
    },

    gallery: {
      eyebrow: "أعمالنا",
      titleOne: "معرض",
      titleTwo: "الجمال",
      description:
        "لمحة عن الإبداع الذي نقدمه كل يوم في استوديو فيليس في الخالدية.",
      viewAll: "عرض معرض الأعمال الكامل",
    },

    booking: {
      eyebrow: "احجزي زيارتك",
      titleOne: "احجزي",
      titleTwo: "تجربتكِ الجمالية",
      description:
        "الحجز في فيليس بسيط وشخصي. لا توجد نماذج إلكترونية معقدة — تصفحي خدماتنا وأرسلي لنا رسالة سريعة عبر واتساب وسنهتم بالباقي.",
      button: "احجزي عبر واتساب",
      availability: "متاح يومياً • آخر موعد للحجز الساعة 6:00 مساءً",
    },

    location: {
      eyebrow: "موقعنا",
      titleOne: "زوري",
      titleTwo: "فيليس",
      description:
        "ستجدين صالون فيليس للشعر والجمال في النجمة، الدوحة، على شارع الخالدية. تواصلي معنا عبر واتساب لترتيب موعدك وموقف السيارة.",
      location: "الموقع",
      whatsapp: "واتساب",
      parking: "مواقف السيارات",
      parkingValue: "مواقف مجانية متاحة عند الحجز",
      hours: "ساعات العمل",
      lastAppointment: "آخر موعد للحجز الساعة 6:00 مساءً",
      directions: "الحصول على الاتجاهات",
    },

    faq: {
      eyebrow: "الأسئلة الشائعة",
      titleOne: "الأسئلة",
      titleTwo: "الشائعة",
      description:
        "كل ما تحتاجين معرفته قبل زيارتكِ. لم تجدي إجابة سؤالك؟ راسلينا عبر واتساب.",
      stillQuestions: "هل لديكِ أسئلة أخرى؟",
      ask: "اسألي عبر واتساب",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    if (newLanguage === "ar") {
      setLanguage("ar");
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      return;
    }

    setLanguage("en");
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  };

  const toggleLanguage = () => {
    if (language === "en") {
      changeLanguage("ar");
    } else {
      changeLanguage("en");
    }
  };

  const currentTranslations =
    translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        changeLanguage,
        toggleLanguage,
        isArabic: language === "ar",
        translations: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
