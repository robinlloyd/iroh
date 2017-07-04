var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Sass
// ==============================================
gulp.task('sass', function() {
  return gulp
    .src(['src/iroh.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('iroh.css'))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('dist'));
});

// Watch
// ==============================================
gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['sass']);
});

// Gulp default
// ==============================================
gulp.task('default', ['sass', 'watch']);

gulp.task('build', ['sass']);
