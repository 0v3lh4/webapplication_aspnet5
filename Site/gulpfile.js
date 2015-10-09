var gulp = require('gulp'),
    dnx = require('gulp-dnx'),
    options = {
      command: 'kestrel',
      restore: false,
      build: true,
      run: true,
      cwd: './'
    };

gulp.task('dnx-run', dnx('kestrel'));
