const app = require('electron').app;


module.exports = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () => app.getLocale(),
  cacheUserLanguage: Function.prototype,
};
