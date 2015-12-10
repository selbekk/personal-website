// Add ES2015-polyfills
require("babel-polyfill");

const randomBackgroundImage = require('./components/random-background-image');
const randomUnsplashImage = require('./components/random-unsplash-image');
const smoothScroll = require('smooth-scroll');

document.addEventListener('DOMContentLoaded', () => {
    randomBackgroundImage.init();
    randomUnsplashImage.init();
    smoothScroll.init();
});
