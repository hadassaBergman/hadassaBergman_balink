import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    en: {
        translation: {
            "title": "Info weather", "Today":"Today", "Tomorrow":"Tomorrow","Sources":"Sources",
            "Humidity":"Humidity", "Visibility":"Visibility","Pressure":"Pressure","Confidence":"Confidence"
        }
    },
    hb : {
    translation: {
        "title": "מידע על מזג האוויר", "Today":"היום", "Tomorrow":"מחָָר", "Sources":"מקורות",
        "Humidity":"לחות", "Visibility":"רְאוּת","Pressure":"לַחַץ","Confidence":"אֵמוּן"
    }
}
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: window.localStorage.getItem('language') || 'en',
        fallbackLng: 'hb',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;