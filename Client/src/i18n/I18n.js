import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import configs from "..//configs"
// Importing translation files

import translationVI from "..//langs/vi.json"
import translationEN from "..//langs/en.json";


//Creating object with the variables of imported translation files
const resources = {
  [configs.i18n.supportedLangs.en]: {
    translation: translationEN,
  },
  [configs.i18n.default]: {
    translation: translationVI,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:configs.i18n.default, //default language
    keySeparator:".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;