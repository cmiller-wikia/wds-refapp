var Handlebars = require('handlebars'),
    hljs = require('highlightjs/highlight.pack.js');

module.exports = function codeSample(options) {
  var lang = options.hash["language"];
  var codeBlock = options.fn(this);

  if (lang && hljs.getLanguage(lang)) {
      codeBlock = hljs.highlight(lang, codeBlock).value;
  } else {
      codeBlock = hljs.highlightAuto(codeBlock).value;
  }

  return "<pre class=\"component-demo\"><code class=\" " + options.hash["language"] + " hljs\">" + codeBlock + "</code></pre>";
}
