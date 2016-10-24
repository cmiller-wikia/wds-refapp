var Handlebars = require('handlebars')

module.exports = function componentDemo(options) {
  return "<pre class=\"component-demo\"><code class=\" " + options.hash["language"] + " hljs\">" + Handlebars.Utils.escapeExpression(options.fn(this)) + "</code></pre>";
}
