import { useContext, useEffect } from 'react';
import { i18nContext } from '../providers/I18nProvider/I18nProvider';
export default function useLang() {
    const { i18n, t } = useContext(i18nContext);

   
    return { i18n, t };
    }

