const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/main.sass', 'public/css');

mix
    .js('resources/js/ajax.js', 'public/js')
    .js('resources/js/script.js', 'public/js')
	.scripts([
		'public/js/ajax.js',
		'public/js/script.js'
	], 'public/js/all.js')
    .sass('resources/sass/main.sass', 'public/css')
    .options({processCssUrls: false});
if (mix.inProduction()) mix.version();
mix.browserSync('http://ctek/');