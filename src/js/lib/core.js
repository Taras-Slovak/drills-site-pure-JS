// (() => {
//     const $ = function (selector) {
//         const element = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () => {
//             element.forEach(el => {
//                 el.style.display = 'none';
//             });
//             return obj;
//         };

//         obj.show = () => {
//             element.forEach(el => {
//                 el.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     };

//     window.$ = $;
// })();

const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this; //{}
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;