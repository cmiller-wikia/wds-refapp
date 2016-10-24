var Handlebars = require('handlebars')

module.exports = function wdsIcon(name, options) {
  var n = "wds-icons-" + options.hash["name"];
 return new Handlebars.SafeString("<svg><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#" + name + "\"></use></svg>");
}
