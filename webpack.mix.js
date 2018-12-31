const mix = require('laravel-mix')
const pkg = require('./package.json')
const { join } = require('path')

const path = {
  resources: join(__dirname, 'src'),
  assets: join(__dirname, 'src', 'assets'),
  theme: join(__dirname, 'src', 'wordpress', 'wp-content', 'themes', pkg.name)
}

mix.setPublicPath('./')
  .js([ join(path.assets, 'scripts/app.js') ], join(path.theme, 'assets', 'scripts/bundle.js'))
  .extract(['vue', 'jquery', 'bootstrap'])
  .sass(join(path.assets, 'sass/app.scss'), join(path.theme, 'assets', 'stylesheets/bundle.css'))
  .options({
    extractVueStyles: true,
    processCssUrls: true,
    uglify: {},
    purifyCss: false,
    postCss: [require('autoprefixer')],
    clearConsole: false
  })
  .sourceMaps()
  .disableNotifications()
  .autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
    'vue': ['Vue', 'window.Vue']
  })
  .webpackConfig({
    resolve: {
      alias: {
        '~': join(__dirname, 'node_modules'),
        '@': join(path.assets, 'scripts'),
      }
    }
  })
