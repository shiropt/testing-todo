import 'i18next';
import { Ja } from '../lib/i18n/locales/ja';

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'ja';
    // custom resources type
    resources: {
      ja: Ja;
    };
  }
}
// reference: https://www.i18next.com/overview/typescript
