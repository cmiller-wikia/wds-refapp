var wdsDropdown = require('wds-scripts/js/templates/dropdowns')

module.exports.register = function(handlebars) {
  handlebars.registerHelper('global-nav-dropdown', function(menu, type, strings) {
    var i18n = handlebars.helpers.i18n

    return new handlebars.SafeString(wdsDropdown.newTextDropdown(
      i18n(strings, menu.header.title.key),
      menu.links.map(link =>
        "<a href=\"" + link.href + "\" class=\"wds-global-navigation__dropdown-link\">"+ i18n(strings, link.title.key) + "</a>"
      ),
      {
        'mainClasses': [ "wds-global-navigation__" + type ],
        'toggleClasses': [ "wds-global-navigation__dropdown-toggle" ],
        'iconClasses': [ "wds-icon-tiny" ],
        'contentClasses': [ "wds-global-navigation__dropdown-content" ],
        'listClasses': [ "wds-is-linked" ]
      }
    ));
  });
}
