const { src,dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
exports.default = () => {
  return src('lib/styles/*.scss')
    .pipe(
      sass().on('error', err => {
        console.log(`${err.message}on line: ${err.lineNumber} in line: ${err.filename}`)
      })
    )
    .pipe(dest('lib/styles'));
}
