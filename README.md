# HOWTO

Module dependency currently dodgily hacked together with relative paths, so:

* Check out this and [wds-styles](https://github.com/cmiller-wikia/wds-styles) so they have the same parent directory.
* Build wds-styles first
* ``npm install``
* ``gulp watch``
* Open ``dist/index.html``

(2016-11-08 - gulp watch currently broken by interaction with browserify. Just gulp build for now)
