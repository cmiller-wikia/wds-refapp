var Handlebars = require('handlebars')

module.exports = function componentDemo(b) {
  var s = ""

  if (! b.hash["codeOnly"]) {
    s += "<div class=\"component-demo__rendered\">" + b.fn(this) + "</div>";
  }

  return s + "<pre class=\"component-demo\"><code class=\"html hljs xml\">" + Handlebars.Utils.escapeExpression(b.fn(this)) + "</code></pre>";
}
