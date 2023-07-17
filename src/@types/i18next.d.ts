// import the original type declarations
import 'i18next';
import { Translation } from '../lib/i18n/locales/ja';
// import all namespaces (for the default language, only)

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'ja';
    // custom resources type
    resources: {
      ja: Translation;
    };
  }
}
