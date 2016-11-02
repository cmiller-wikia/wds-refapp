function partial(handlebars, name) {
  var p = handlebars.partials[name]

  if (typeof p !== 'function') {
    p = handlebars.compile(p);
  }

  return p;
}

module.exports.register = function(handlebars) {
  handlebars.registerHelper('wds-global-navigation-links', function(context) {
    return partial(handlebars, 'navbar/links')();
  });
}
