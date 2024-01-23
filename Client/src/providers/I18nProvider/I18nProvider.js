import React from 'react';
import { useTranslation } from 'react-i18next';
import { useContext,useEffect } from 'react';
export const i18nContext = React.createContext();

function I18nProvider({ children }) {
    const { i18n } = useTranslation();
    const { t } = useTranslation();


    useEffect(() => {
        const language = localStorage.getItem('language');
        console.log(language);
        if (language) {
            i18n.changeLanguage(language);
        }
    },[])
    return <i18nContext.Provider value={{ i18n, t }}>{children}</i18nContext.Provider>;
}

export default I18nProvider;
