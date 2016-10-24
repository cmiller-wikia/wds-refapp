var Handlebars = require('handlebars'),
  hljs = require('highlightjs/highlight.pack.js');


module.exports = function componentDemo(options) {
  var codeBlock = hljs.highlight("html", options.fn(this)).value;
  var s = ""

  if (! options.hash["codeOnly"]) {
    s += "<div class=\"component-demo__rendered\">" + options.fn(this) + "</div>";
  }

  return s + "<pre class=\"component-demo\"><code class=\"html hljs\">" + codeBlock + "</code></pre>";
}
