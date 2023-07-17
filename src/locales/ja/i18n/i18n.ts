import i18next from 'i18next';
import { ja } from '../ja';

const instance = i18next.createInstance();

instance.init({
  lng: 'ja',
  debug: true,
  resources: {
    ja,
  },
});

export const i18n = instance;
