var Handlebars = require('handlebars');

module.exports = {
  "concat": function() {
    var args = Array.prototype.slice.call(arguments);
    return args.slice(0, -1).join('');
  }
}
