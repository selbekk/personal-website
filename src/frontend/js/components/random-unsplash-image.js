const imageLoader = require('./image-loader');

function _changeImage($el) {
    imageLoader.loadImage($el, 'http://unsplash.it/' + window.innerWidth + '/' + window.innerHeight + '?random');
}

function init() {
    const $els = Array.from(document.querySelectorAll('.js-random-unsplash-image'));
    $els.forEach(_changeImage);
}

module.exports = { init };
