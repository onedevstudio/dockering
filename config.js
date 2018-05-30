const pkg = require('./package.json')
const { join } = require('path')
const loadPlugins = require('gulp-load-plugins')

const jeet = require('jeet')
const rupture = require('rupture')

const env = process.env.NODE_ENV || 'production'
const isProduction = env === 'production'
const $ = loadPlugins()

const themePath = join(__dirname, 'www', 'wp-content', 'themes', pkg.name)

module.exports = {
  pkg,
  isProduction,
  plugins: $,
  src: {
    stylus: './assets/stylus',
    scripts: './assets/scripts',
    fonts: './assets/fonts',
    static: './assets/static',
    images: './assets/images'
  },
  dest: {
    dist: themePath,
    // stylesheets: `${themePath}/assets/stylesheets`,
    javascripts: `${themePath}/assets/javascripts`,
    images: `${themePath}/assets/images`,
    fonts: `${themePath}/assets/fonts`
  },
  stylus: {
    'include css': true,
    include: [
      join(__dirname, 'node_modules')
    ],
    use: [
      jeet(),
      rupture()
    ]
  },
  cssnano: {
    add: true,
    autoprefixer: {
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox >= 20'
      ]
    }
  },
  plumber: {
    errorHandler: $.notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
    })
  },
  size: taskName => {
    return {
      title: `Task: ${taskName} -`,
      showFiles: true
    }
  },
  header: `/**
 * Theme Name: <%= pkg.name %>
 * Theme URI: <%= pkg.homepage %>
 * Description: <%= pkg.description %>
 * Author: <%= pkg.author %>
 * Version: <%= pkg.version %>
 * License: <%= pkg.license %>
 */`
}
