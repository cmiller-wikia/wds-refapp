import domready from 'domready'
import * as dropdowns from 'wds-scripts/js/dropdowns'
import * as search from 'wds-scripts/js/searchbar'

domready(function() {
  dropdowns.init();
  search.init();
});

export { default as templates } from "wds-scripts/js/templates-all"
