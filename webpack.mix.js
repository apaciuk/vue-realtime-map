const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js('resources/assets/js/app.js', 'public/js');
