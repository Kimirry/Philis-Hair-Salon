import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  EN: {
    nav: {
      home: "Home",
      story: "Our Story",
      services: "Services",
      gallery: "Gallery",
      booking: "Book Now",
      contact: "Contact",
      language: "AR",
      close: "Close menu",
      open: "Open menu",
      connect: "Connect with Philis",
      whatsapp: "Book via WhatsApp",
      footer: "Philis Hair & Beauty Salon · Doha, Qatar",
    },
  },

  AR: {
    nav: {
      home: "الرئيسية",
      story: "قصتنا",
      services: "الخدمات",
      gallery: "معرض الصور",
      booking: "احجزي الآن",
      contact: "تواصل معنا",
      language: "EN",
      close: "إغلاق القائمة",
      open: "فتح القائمة",
      connect: "تواصلي مع فيليس",
      whatsapp: "احجزي عبر واتساب",
      footer: "صالون فيليس للشعر والجمال · الدوحة، قطر",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("philis-language") || "EN";
  });

  useEffect(() => {
    localStorage.setItem("philis-language", language);

    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "EN" ? "AR" : "EN"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}
