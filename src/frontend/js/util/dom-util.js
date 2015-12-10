/**
 * Finds the closest parent element that matches the predicate
 *
 * @param   el Element to search from
 * @param   fn  A predicate
 * @returns the first element that passes the predicate, or false
 */
function closest(el, fn) {
    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
}

/**
 * Returns all siblings of an element, optionally matching a filter
 * @param el    the element with siblings
 * @param fn    (optional)
 * @returns {*}
 */
function siblings(el, fn) {
    const results = [];

    let sibling = el.parentNode.firstChild;
    while(sibling) {
        if(sibling != el && sibling.nodeType == 1 && (!fn || fn(sibling))) {
            results.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return results;
}

module.exports = {
    closest,
    siblings
};
