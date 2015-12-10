function _getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function _loadImage($el, src) {
    if(!src.startsWith('http://')) {
        src = '/assets/images/' + src;
    }
    const img = new Image();
    img.addEventListener('load', () => {
        $el.style.backgroundImage = 'url('+ src +')';
        $el.classList.add('is-loaded');
    });
    img.src = src;
}

function _loadImages($el) {
    const sources = $el.dataset.src.split(',').map(src => src.trim());
    _loadImage($el, _getRandom(sources));
}

function init() {
    const $imagesToLoad = document.querySelectorAll('.js-load-image');
    Array.from($imagesToLoad).forEach(_loadImages);
}

module.exports = { init };
