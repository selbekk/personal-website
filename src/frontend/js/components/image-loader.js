function loadImage($el, src) {
    const img = new Image();
    img.addEventListener('load', () => {
        $el.style.backgroundImage = 'url('+ src +')';
        $el.classList.add('is-loaded');
    });
    img.src = src;
}

module.exports = { loadImage };
