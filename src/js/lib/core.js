(() => {
    const $ = function (selector) {
        const element = document.querySelectorAll(selector);
    };

    window.$ = $;
})();