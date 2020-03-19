import { app, remote } from 'electron';

export default {
  type: 'languageDetector',
  async: false,
  init: Function.prototype,
  detect: () => (app || remote.app).getLocale(),
  cacheUserLanguage: Function.prototype
};
