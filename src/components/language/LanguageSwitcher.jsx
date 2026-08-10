import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={
        language === "EN"
          ? "Switch to Arabic"
          : "Switch to English"
      }
      className="rounded-full border border-pink-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-500"
    >
      {language === "EN" ? "AR" : "EN"}
    </button>
  );
}
