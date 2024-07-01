import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    greeting: 'Hello!',
                    // Other English translations
                }
            },
            fr: {
                translation: {
                    greeting: 'Bonjour!',
                    // Other French translations
                }
            }
            // Add more languages as needed
        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
