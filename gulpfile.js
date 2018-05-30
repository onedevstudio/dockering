const {
  task,
  src,
  dest,
  watch
} = require('gulp-named')

const config = require('./config')
const sequence = require('run-sequence')
const $ = config.plugins

task('eslint', () =>
  src([ './assets/scripts/**/*.js', '!node_modules/**' ])
    .pipe($.eslint())
    .pipe($.eslint.format()))

task('images', () =>
  src(`${config.src.images}/**/*`)
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe($.size(config.size('images')))
    .pipe(dest(config.dest.images)))

task('static', () =>
  src(`${config.src.static}/*`)
    .pipe($.size(config.size('static')))
    .pipe(dest(config.dest.dist)))

task('fonts', () =>
  src([
    './node_modules/font-awesome/fonts/*'
  ])
    .pipe(dest(config.dest.fonts)))

task('scripts', ['eslint', 'scripts:vendor'], () =>
  src([`${config.src.scripts}/**/*.js`])
    .pipe($.plumber(config.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js', {
      newLine: ''
    }))
    .pipe($.babel())
    .pipe(config.isProduction ? $.uglify() : $.util.noop())
    .pipe($.rename(`bundle.js`))
    .pipe($.sourcemaps.write())
    .pipe($.size(config.size('scripts')))
    .pipe(dest(config.dest.javascripts))
    .pipe($.plumber.stop()))

task('scripts:vendor', () =>
  src(['./node_modules/jquery/dist/jquery.min.js'])
    .pipe($.plumber(config.plumber))
    .pipe($.concat(`vendor.js`, {
      newLine: ''
    }))
    .pipe(config.isProduction ? $.uglify() : $.util.noop())
    .pipe($.size(config.size('scripts:vendor')))
    .pipe(dest(config.dest.javascripts))
    .pipe($.plumber.stop()))

task('stylus', () =>
  src(`${config.src.stylus}/app.styl`)
    .pipe($.plumber(config.plumber))
    // .pipe($.sourcemaps.init())
    .pipe($.stylus(config.stylus))
    .pipe($.combineMq({
      beautify: true
    }))
    .pipe(config.isProduction ? $.cssnano(config.cssnano) : $.util.noop())
    // .pipe($.sourcemaps.write())
    .pipe($.rename(`style.css`))
    .pipe($.banner(config.header, {
      pkg: config.pkg
    }))
    .pipe($.size(config.size('stylus')))
    .pipe(dest(`${config.dest.dist}`))
    .pipe($.plumber.stop()))

task('watch', () => {
  watch([`${config.src.scripts}/**/*`], ['scripts'])
  watch([`${config.src.stylus}/**/*`], ['stylus'])
  watch([`${config.src.images}/**/*`], ['images'])
  watch([`${config.src.static}/**/*`], ['static'])
})

task('build', (cb) =>
  sequence([
    'stylus',
    'scripts',
    'images',
    'fonts',
    'static'
  ], cb))

task('default', (cb) =>
  sequence('build', 'watch', cb))
