var gulp = require('gulp');

// RUNNABLE COMMANDS

gulp.task('build', ['build:all']);
gulp.task('clean', ['clean:all']);
gulp.task('watch', ['watch:all']);

// IMPLEMENTATION

var
    babelify     = require('babelify'),
    browserify   = require('browserify'),
    buffer       = require('vinyl-buffer'),
    del          = require('del'),
    hb           = require('gulp-hb'),
    fileInclude  = require('gulp-file-include'),
    rename       = require('gulp-rename'),
    sassImporter = require('sassy-npm-importer'),
    scss         = require('gulp-sass'),
    sequence     = require('run-sequence'),
    source       = require('vinyl-source-stream'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify');

gulp.task('clean:all', function() {
  return del('dist');
});

gulp.task('build:all', function() {
  sequence('clean:all', ['templates:compile', 'statics:copy', 'build:css', 'build:js']);
})

gulp.task('templates:compile', function() {
  return gulp
    .src('./handlebars/templates/*.hbs')
    .pipe(hb({
      partials: './handlebars/partials/**/*.hbs',
      helpers: './handlebars/helpers/**/*.js',
      data: 'data/*.json'
    }))
    .pipe(fileInclude({prefix: '@@'}))
    .pipe(rename({ extname: ".html"}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('statics:copy', function() {
  return gulp.src('static/**')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:css', function() {
  return gulp.src('scss/styles.scss')
    .pipe(scss({ importer: sassImporter() }))
    .pipe(rename({ extname: ".css" }))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('build:js', function() {
  var bundler = browserify({ entries: "js/wds.js", standalone: 'WDS', debug: true});

  return bundler
    .transform("babelify", { presets: ['es2015']} )
    .bundle()
    .pipe(source('wds.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch:all', ['build'], function() {
  return gulp.watch([
    "scss/**",
    "static/**",
    "handlebars/**",
    "js/**",
    "global.json"
  ],['build']);
});
