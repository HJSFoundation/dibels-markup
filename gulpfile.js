var dest  = './www';
var src   = './www';
var test  = './spec';

var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var changed       = require('gulp-changed');
var gulp          = require('gulp');
var jshint        = require('gulp-jshint');
var karma         = require('karma');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');

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
      src + '/**/*.html'
    ]
  });
});

gulp.task('styles', function () {
  gulp
    .src(src + '/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version']}))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(src + '/scss/**', ['styles']);
  gulp.watch([src + '/js/**/*.js', test + '/*_spec.js'], ['lint']);
});

gulp.task('default', ['styles', 'watch']);
