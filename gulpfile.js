const gulp = require('gulp')
const gutil = require('gulp-util')
const runSequence = require('run-sequence')
const task = require('autoamazing')

const {
  env,
  srcPath,
  themeName,
  themePath,
  includeSettings,
  sassSettings,
  modulesPath
} = require('./configs/gulp.config')

task.clean(gulp, {
  src: [
    `./src/themes/${themeName}/assets/*`
  ]
})

task.stylesheets(gulp, {
  src: `${srcPath}/sass/*.sass`,
  dest: `${themePath}/assets/stylesheets`,
  sassSettings: sassSettings,
  env: env
})

task.scripts(gulp, {
  src: `${srcPath}/javascripts/main.js`,
  dest: `${themePath}/assets/javascripts`,
  includeSettings: includeSettings,
  include: true,
  env: env
})

task.scripts(gulp, {
  taskname: 'scripts:vendor',
  src: [
    `${modulesPath}/jquery/dist/jquery.js`
  ],
  dest: `${themePath}/assets/javascripts/vendor`,
  includeSettings: includeSettings,
  include: true,
  env: env
})

task.images(gulp, {
  src: `${themePath}/assets/images/**/*`,
  dest: `${themePath}/assets/images`,
  env: env
})

task.copy(gulp, {
  taskname: 'fonts',
  src: `${srcPath}/fonts/**/*`,
  dest: `${themePath}/assets/fonts`
})

gulp.task('build', callback =>
  runSequence(
    ['clean'],
    ['images'],
    ['fonts', 'stylesheets'],
    ['scripts', 'scripts:vendor'],
    callback
  )
)

gulp.task('watch', ['build'], () => {
  gulp.watch(`${srcPath}/sass/**/*.sass`, ['stylesheets']);
  gulp.watch(`${srcPath}/javascripts/**/*.js`, ['scripts']);
});

gulp.task('default', [ 'watch' ]);
