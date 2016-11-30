# HOWTO

Module dependency currently dodgily hacked together with relative paths, so:

* Check out this, [wds-styles](https://github.com/cmiller-wikia/wds-styles) and [wds-scripts](https://github.com/cmiller-wikia/wds-scripts) so they have the same parent directory.
* Build wds-styles first, then wds-scripts
* ``npm install``
* ``gulp build``
* Open ``dist/index.html``

(2016-11-08 - gulp watch currently broken by interaction with browserify. Just gulp build for now)
