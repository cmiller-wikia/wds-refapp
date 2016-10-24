var Handlebars = require('handlebars')

module.exports = function wdsIcon(options) {
  var n = "wds-icons-" + options.hash["name"];
  var classes = ["wds-icon"]
  if (options.hash["class"]) {
    classes.push(options.hash["class"])
  }
  
  return new Handlebars.SafeString("<svg class=\"" + classes.join(" ") + "\"><use xlink:href=#" + n + "></use></svg>");
}
