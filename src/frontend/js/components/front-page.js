const BASE_URL = '/assets/images/';
const backgroundImages = [
    'background-01.jpg',
    'background-02.jpg',
    'background-03.jpg'
];

function _getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function _changeImage($el) {
    const img = new Image();
    const src = BASE_URL + _getRandom(backgroundImages);
    img.addEventListener('load', () => {
        $el.style.backgroundImage = 'url('+ src +')';
        $el.classList.add('is-loaded');
    });
    img.src = src;
}

function init() {
    const $els = Array.from(document.querySelectorAll('.js-random-background-image'));
    $els.forEach(_changeImage);
}

module.exports = { init };
