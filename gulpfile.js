const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('css/jake.css')
        .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(''))
);
