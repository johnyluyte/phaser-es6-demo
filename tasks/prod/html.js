import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import usemin from 'gulp-usemin';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev';

gulp.task('html:prod', () => {
    return gulp.src(config.paths.src.root + 'index.html')
        .pipe(gulp.dest(config.paths.builds.tmp.root))
        .pipe(usemin({
            js: [uglify(), rev()],
            lib: [uglify(), rev()],
            html: [htmlmin({
                removeComments: true,
                collapseWhitespace: true
            })]
        }))
        .pipe(gulp.dest(config.paths.builds.prod.root))
        .on('error', util.log);
});