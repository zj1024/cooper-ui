/* eslint-disable no-undef */
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const path = require('path')

const entry = path.resolve(__dirname, '../cooper-theme/index.scss')
const output = path.resolve(__dirname, '../cooper-theme/css')

gulp.task('minScss', () => {
  return gulp
    .src(entry)
    .pipe(rename('cooper-ui.min.scss'))
    .pipe(
      sass({
        outputStyle: 'compressed',
      }),
    )
    .pipe(gulp.dest(output))
})

gulp.task('scss', () => {
  return gulp
    .src(entry)
    .pipe(rename('cooper-ui.scss'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }),
    )
    .pipe(gulp.dest(output))
})

gulp.task('default', gulp.parallel('scss', 'minScss'))
