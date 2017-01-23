'use strict';

import Notify from 'gulp-notify';
import Bourbon from 'node-bourbon';

const themeName = 'docker-wp';

const config = {
  src: {
    sass: './assets/sass',
    javascripts: './assets/javascripts',
  },
  dist: {
    stylesheets: `./themes/${themeName}/assets/stylesheets`,
    javascripts: `./themes/${themeName}/assets/javascripts`,
    images: `./themes/${themeName}/assets/images`,
    fonts: `./themes/${themeName}/assets/fonts`,
  },
  plumberHandler: {
    errorHandler: Notify.onError({
      title   : 'Gulp',
      message : 'Error: <%= error.message %>'
    })
  },
  sassSettings: {
    compass: true,
    sourcemap: false,
    noCache: true,
    style: 'nested',
    sourceComments: false,
    includePaths: [
      Bourbon.includePaths,
      'sass',
      'node_modules',
      'bower_components'
    ]
  },
  autoprefixer: {
    browsers: [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 5',
      'opera >= 23',
      'ios >= 6',
      'android >= 4.4',
      'bb >= 10'
    ],
    cascade: false
  }
};

module.exports = config;
