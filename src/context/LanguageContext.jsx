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
      whatsapp: "Book via WhatsApp",
      connect: "Connect with Philis",
      open: "Open menu",
      close: "Close menu",
      footer: "Philis Hair & Beauty Salon · Doha, Qatar",
    },
  },

  AR: {
    nav: {
      home: "الرئيسية",
      story: "قصتنا",
      services: "الخدمات",
      gallery: "المعرض",
      booking: "احجزي الآن",
      contact: "تواصل معنا",
      whatsapp: "احجزي عبر واتساب",
      connect: "تواصلي مع فيليس",
      open: "فتح القائمة",
      close: "إغلاق القائمة",
      footer: "صالون فيليس للشعر والجمال · الدوحة، قطر",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("philis-language");

    return savedLanguage === "AR" ? "AR" : "EN";
  });

  useEffect(() => {
    localStorage.setItem("philis-language", language);

    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language],
    };
  }, [language]);

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
      "useLanguage must be used inside a LanguageProvider."
    );
  }

  return context;
}
