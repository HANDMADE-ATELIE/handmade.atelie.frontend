import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslation from './locales/pt-br.json';

const resources = {
    pt: {
        translation: ptTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,

        lng: 'pt',
        fallbackLng: 'pt',

        interpolation: {
            escapeValue: false
        },

        react: {
            wait: true
        }
    });

export default i18n;
