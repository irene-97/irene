let gulp = require('gulp');
let gulpLoadPlugins = require('gulp-load-plugins');

let $ = gulpLoadPlugins({
    overridePattern: false,
    pattern: [
        'cssnano',
        'uglifyjs-webpack-plugin',
        'vinyl-named',
        'webpack',
        'webpack-stream'
    ],
    scope: [
        'dependencies',
        'devDependencies',
    ],
});

gulp.task('images', () => {
    return gulp.src('public/images/src/**')
        .pipe($.imagemin([
            $.imagemin.gifsicle(),
            $.imagemin.jpegtran({progressive: true}),
            $.imagemin.optipng(),
            $.imagemin.svgo(),
        ]))
        .pipe(gulp.dest('public/images/dist'));
});

gulp.task('scripts:main', () => {
    return gulp.src('public/scripts/src/main.js')
        .pipe($.plumber())
        .pipe($.fileInclude({
            prefix: '// @',
        }))
        .pipe($.babel({
            presets: [
                'es2015',
            ],
        }))
        .pipe($.jsbeautifier({
            js: {
                indent_with_tabs: true,
                end_with_newline: true,
                max_preserve_newlines: 2,
            },
        }))
        .pipe(gulp.dest('public/scripts/dist'));
});

gulp.task('scripts:vendor', () => {
    return gulp.src('public/scripts/src/vendor.js')
        .pipe($.plumber())
        .pipe($.fileInclude({
            prefix: '// @',
        }))
        // .pipe($.uglify())
        .pipe(gulp.dest('public/scripts/dist'));
});

gulp.task('styles', () => {
    return gulp.src('public/styles/src/**/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.postcss([
            $.cssnano({
                autoprefixer: {
                    add: true,
                    browsers: ['> 0%'],
                },
                discardComments: {
                    removeAll: true,
                },
            })
        ]))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('public/styles/dist'));
});

gulp.task('watch', () => {
    gulp.watch('public/images/src/**', ['images']);
    gulp.watch(['public/scripts/src/**', '!public/scripts/src/vendor.js'], ['scripts:main']);
    gulp.watch('public/scripts/src/vendor.js', ['scripts:vendor']);
    gulp.watch('public/styles/src/**', ['styles']);
});
