'use strict';

const source = 'build/developing/';
const dest = 'build/developing/';
// Load plugins
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const cssnano = require('cssnano');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// BrowserSync
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: source
		},
		port: 3000
	});
	done();
}

// BrowserSync Reload
function browserSyncReload(done) {
	browsersync.reload();
	done();
}


// CSS task
function css() {
	return gulp
		.src(source + 'scss/styles.scss')
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(gulp.dest(source + 'css/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(gulp.dest(dest + 'css/'))
		.pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
	return gulp
		.src([
			source + 'js/scripts/*.js',
			'!build/developing/js/scripts/1jquery.js',
			'./gulpfile.js'
		])
		.pipe(plumber())
		// .pipe(eslint())
		// .pipe(eslint.format());
	// .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
	return (
		gulp
		.src([source + 'js/scripts/*.js'])
		.pipe(concat('scripts.min.js'))
		.pipe(plumber())
		.pipe(gulp.dest(source + 'js/'))
		.pipe(browsersync.stream())
	);
}


// Watch files
function watchFiles(done) {
	gulp.watch(source + 'scss/**/*', css);
	gulp.watch(source + 'js/scripts/*', gulp.series(scriptsLint, scripts));
	gulp.watch(source + '**/*', gulp.series(browserSyncReload));
	done();
}

const js = gulp.series(scriptsLint, scripts);
gulp.task('default', gulp.series(gulp.parallel(css, js, watchFiles, browserSync)));
