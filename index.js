const app = require('electron').app;


module.exports = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: function() {
    return app.getLocale();
  },
  cacheUserLanguage: Function.prototype,
};
