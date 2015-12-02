// Add ES2015-polyfills
require("babel-polyfill");

const frontPage = require('./components/front-page');

document.addEventListener('DOMContentLoaded', () => {
    frontPage.init();
});
