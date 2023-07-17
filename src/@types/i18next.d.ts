// import the original type declarations
import 'i18next';
import { ja } from '../locales/ja/ja';
// import all namespaces (for the default language, only)

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    // defaultNS: 'ns1';
    // custom resources type
    resources: {
      ja: typeof ja;
    };
    // other
  }
}
