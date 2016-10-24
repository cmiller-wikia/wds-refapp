var gulp = require('gulp');

// RUNNABLE COMMANDS

gulp.task('build', ['build:all']);
gulp.task('clean', ['clean:all']);
gulp.task('watch', ['watch:all']);

// IMPLEMENTATION

var
    del          = require('del'),
    hb           = require('gulp-hb'),
    fileInclude  = require('gulp-file-include')
    sassImporter = require('sassy-npm-importer')
    rename       = require('gulp-rename'),
    scss         = require('gulp-sass'),
    sequence     = require('run-sequence');

gulp.task('clean:all', function() {
  return del('dist');
});

gulp.task('build:all', function() {
  sequence('clean:all', ['templates:compile', 'statics:copy', 'build:css', 'highlight:js', 'highlight:css']);
})

gulp.task('templates:compile', function() {
  return gulp
    .src('./handlebars/templates/*.hbs')
    .pipe(hb({
      partials: './handlebars/partials/**/*.hbs',
      helpers: './handlebars/helpers/**/*.js',
      data: './global.json'
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

gulp.task('highlight:js', function() {
  return gulp.src('node_modules/highlightjs/highlight.pack.min.js')
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('highlight:css', function() {
  return gulp.src('node_modules/highlightjs/styles/default.css')
    .pipe(rename('highlight-default.css'))
    .pipe(gulp.dest('./dist/styles'));
});


gulp.task('watch:all', ['build'], function() {
  return gulp.watch([
    "scss/**",
    "static/**",
    "handlebars/**",
    "global.json"
  ],['build']);
});
