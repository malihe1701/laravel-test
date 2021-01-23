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
//     .sass('resources/sass/app.scss', 'public/css');


mix.style([
    'resources/css/assets/css/essentials.css',
    'resources/css/assets/css/layout.css',
    'resources/css/assets/plugins/bootstrap/RTL/bootstrap-rtl.min.css',
    'resources/css/assets/plugins/bootstrap/RTL/bootstrap-flipped.min.css',
    'resources/css/assets/css/layout-RTL.css',
    'resources/css/assets/plugins/bootstrap/css/bootstrap.min.css',

    'resources/css/assets/css/header-1.css',
    'resources/css/assets/css/color_scheme/green.css',
    'resources/css/assets/plugins/slider.revolution/css/extralayers.css',
    'resources/css/assets/plugins/slider.revolution/css/settings.css'
],'public/front/css/app.css')

mix.scripts([
'resources/js/assets/plugins/jquery/jquery-2.1.4.min.js',
'resources/js/assets/js/scripts.js',
'resources/js/assets/plugins/slider.revolution/js/jquery.themepunch.tools.min.js',
'resources/js/assets/plugins/slider.revolution/js/jquery.themepunch.revolution.min.js',
'resources/js/assets/js/view/demo.revolution_slider.js'
],'public/front/js/app.js')