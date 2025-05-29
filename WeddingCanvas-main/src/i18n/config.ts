import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "weddingCardGenerator": "Digital Wedding Card Generator",
      "templates": "Templates",
      "digitalWeddingCards": "Digital Wedding Cards",
      "chooseTemplate": "Choose from our beautiful collection of wedding card templates",
      "customizeCard": "Customize Your Card",
      "selectLanguage": "Select Language",
      "brideFirstName": "Bride's First Name",
      "brideLastName": "Bride's Last Name",
      "groomFirstName": "Groom's First Name",
      "groomLastName": "Groom's Last Name",
      "weddingDate": "Wedding Date",
      "weddingTime": "Wedding Time",
      "venue": "Venue",
      "message": "Personal Message",
      "downloadCard": "Download Card",
      "useTemplate": "Use This Template"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 