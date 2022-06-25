const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const include = require('gulp-file-include')
const del = require('del')
const concat = require('gulp-concat')

const sync = require('browser-sync').create()

function html(){
  return src('src/**.html')
    .pipe(include({
      prefix: '@@',
    }))
    .pipe(dest('dist'))
    .pipe(sync.stream())
}

function _sass(){
  return src('src/sass/**.sass')
    .pipe(sass())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
    .pipe(sync.stream())
}

function js(){
  return src('src/js/**.js')
    .pipe(dest('dist/js'))
    .pipe(sync.stream())
}

const img = () => {
  return src(['./src/img/**.png', './src/img/**.jpg', './src/img/**.jpeg', './src/img/**.svg'])
    .pipe(dest('./dist/img'))
    .pipe(sync.stream())
}

const fontAwesome = () => {
  return src('./src/fa/**')
    .pipe(dest('./dist/fa'))
    .pipe(sync.stream())
}

const fonts = () => {
  return src('./src/fonts/**')
    .pipe(dest('./dist/fonts'))
    .pipe(sync.stream())
}

const clean = () => {
  return del('./dist/*');
}

const liveServer = () => {
  sync.init({
    server: {
      baseDir: "./dist"
    }
  });

  watch('./src/sass/**/*.sass', _sass);
  watch('./src/components/**/*.html', html);
  watch('./src/index.html', html);
  watch('./src/js/**.js', js);
  watch('./src/img/**.png', img);
  watch('./src/img/**.jpg', img);
  watch('./src/img/**.jpeg', img);
  watch('./src/img/**.svg', img);
}

exports.default = series(clean, fonts, fontAwesome, html, _sass, js, img, liveServer);
