var Handlebars = require('handlebars');

module.exports = {
  "i18n_strings": function(lang) {
    return require('design-system-i18n/i18n/' + lang + '/design-system.json');
  },

  "i18n": function(strings, key) {
    if (!strings) {
      return key
    } else {
      return new Handlebars.SafeString(strings[key] || key);      
    }
  }
}
