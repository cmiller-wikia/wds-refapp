var Handlebars = require('handlebars')
    fs         = require('fs'),
    jsdom      = require("node-jsdom").jsdom;
    path       = require('path');

function assetName(category, name, variant) {
    return "wds-" + category + "-" + name + (variant ? "-" + variant : "");
}

function classAttr(className, variant) {
  return className
    ? className + (variant ? " " + className + "-" + variant : "")
    : className
}

function _svg_inline(name, options) {
  var assetPath = path.resolve(
    require.resolve('wds-styles'),
    "../../svg/" + name + ".svg");
  var asset = fs.readFileSync(assetPath);
  var classes = classAttr(options.hash["class"], options.hash["variant"]);

  var ele = jsdom("").createElement('div')
  ele.innerHTML = asset
  if (classes) { ele.firstChild.setAttribute("class", classes); }
  if (options.hash["width"]) { ele.firstChild.setAttribute("width", options.hash["width"]); }
  if (options.hash["height"]) { ele.firstChild.setAttribute("height", options.hash["height"]); }

  return new Handlebars.SafeString(ele.innerHTML);
}

module.exports = {
  svg_ref: function(category, name, options) {
    return new Handlebars.SafeString("<svg class=\"" +
      classAttr(options.hash["class"], options.hash["variant"]) +
      "\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#" +
      assetName(category, name, options.hash["variant"]) + "\"></use></svg>");
  },

  svg_inline: function(category, name, options) {
    return _svg_inline(assetName(category, name, options.hash["variant"]), options);
  },

  svg_inline_raw: function(name, options) {
    return _svg_inline(name, options);
  }
}
