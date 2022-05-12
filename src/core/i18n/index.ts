import i18n from 'i18next';
import { Platform, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorageKeys } from '../constants/async-storage.constants';
import { AppLanguages } from '../constants/languages.constants';
import en from './locales/en.json';

const resources = {
  [AppLanguages.En]: {
    translations: en,
  },
};

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

export const systemLanguage =
  locale && Object.values(AppLanguages).includes(locale.substring(0, 2))
    ? (locale as string).substring(0, 2)
    : AppLanguages.En;

const initLanguage = async () => {
  let language = await AsyncStorage.getItem(AsyncStorageKeys.Language);
  if (!language) {
    language = systemLanguage;
  }
  return i18n.init({
    compatibilityJSON: 'v3',
    lng: language,
    fallbackLng: AppLanguages.En,
    resources,
    fallbackNS: ['translations'],
    defaultNS: 'translations',
  });
};

initLanguage();

export default i18n;
