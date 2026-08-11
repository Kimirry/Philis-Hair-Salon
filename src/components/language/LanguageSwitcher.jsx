import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Change language"
      className="border border-pink-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition"
    >
      {language === "en" ? "العربية" : "English"}
    </button>
  );
}
