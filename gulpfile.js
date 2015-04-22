var root  = '.';
var dest  = './www';
var src   = './www';
var test  = './spec';

var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var changed       = require('gulp-changed');
var concat        = require('gulp-concat');
var declare       = require('gulp-declare');
var gulp          = require('gulp');
var handlebars    = require('gulp-handlebars');
var jshint        = require('gulp-jshint');
var karma         = require('karma');
var path          = require('path');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var wrap          = require('gulp-wrap');

gulp.task('lint', function() {
  gulp
    .src(['gulpfile.js', src + '/js/*.js', 'spec/*_spec.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('karma', function() {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  });
});

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: dest
    },
    port: 3333,
    files: [
      src + '/scss/**/*.scss',
      src + '/js/**/*.js',
      src + '/**/*.html',
      src + '/templates/**.hbs'
    ]
  });
});

gulp.task('styles', function () {
  gulp
    .src(root + '/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version']}))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('templates', function(){
  gulp.src(src + '/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'App.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(dest + '/js/compiled_templates/'));
});

gulp.task('partials', function() {
  // Assume all partials start with an underscore
  gulp.src([src + '/templates/**/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))
    .pipe(concat('partials.js'))
    .pipe(gulp.dest(dest + '/js/compiled_templates/'));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(root + '/scss/**', ['styles']);
  gulp.watch(src + '/templates/**', ['partials', 'templates']);
  gulp.watch([src + '/js/**/*.js', test + '/*_spec.js'], ['lint']);
});

gulp.task('default', ['styles', 'partials', 'templates', 'watch']);
