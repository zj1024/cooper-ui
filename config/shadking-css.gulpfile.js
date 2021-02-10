/* eslint-disable no-undef */
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const path = require('path')

const entry = path.resolve(__dirname, '../theme/index.scss')
const output = path.resolve(__dirname, '../theme/css')

gulp.task('minScss', () => {
  return gulp
    .src(entry)
    .pipe(rename('index.min.scss'))
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
    .pipe(rename('index.scss'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      }),
    )
    .pipe(gulp.dest(output))
})

gulp.task('default', gulp.parallel('scss', 'minScss'))
