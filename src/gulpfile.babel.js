'use strict';

import Config  from './gulpfile.config';
import Gulp    from 'gulp';
import Plugins from 'gulp-load-plugins';
import Bourbon from 'node-bourbon';

const $ = Plugins();

Gulp.task('stylesheets', () => Gulp.src(`${Config.src.sass}/*.sass`)
  .pipe($.plumber(Config.plumberHandler))
  .pipe($.sass(Config.sassSettings))
  .pipe($.autoprefixer(Config.autoprefixer))
  .pipe($.combineMq())
  .pipe($.size({ title: 'Stylesheets!', gzip: false, showFiles: true }))
  .pipe(Gulp.dest(`${Config.dist.stylesheets}`))
  .pipe($.rename({ suffix: '.min' }))
  .pipe($.cssnano())
  .pipe($.size({ title: 'Stylesheets minified!', gzip: false, showFiles: true }))
  .pipe(Gulp.dest(`${Config.dist.stylesheets}`))
  .pipe($.plumber.stop()));

Gulp.task('watch', ['stylesheets'], () => {
  Gulp.watch(`${Config.src.sass}/**/*.sass`, ['stylesheets']);
});

Gulp.task('default', [ 'watch' ]);
