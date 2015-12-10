// Add ES2015-polyfills
require("babel-polyfill");

const imageLoader = require('./components/image-loader');
const smoothScroll = require('smooth-scroll');

document.addEventListener('DOMContentLoaded', () => {
    imageLoader.init();
    smoothScroll.init();
});
