import domready from 'domready'
import * as dropdowns from './wds-dropdowns'
import * as search from './wds-search'

var count = 0;

domready(function() {
  dropdowns.init();
  search.init();
});
