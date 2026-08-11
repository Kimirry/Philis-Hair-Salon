import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const isArabic = language === "AR";

  return (
    <button
      type="button"
      onClick={() => setLanguage(isArabic ? "EN" : "AR")}
      aria-label={
        isArabic
          ? "Switch to English"
          : "التبديل إلى العربية"
      }
      className="rounded-full border border-pink-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-pink-50 hover:text-pink-500"
    >
      {isArabic ? "EN" : "العربية"}
    </button>
  );
}
