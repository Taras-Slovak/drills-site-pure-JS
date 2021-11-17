(() => {
    const $ = function (selector) {
        const element = document.querySelectorAll(selector);
        const obj = {};

        obj.hide = ()=>{
            element.forEach(el =>{
                el.style.display = 'none';
            });
            return obj;
        };

        obj.show = ()=>{
            element.forEach(el =>{
                el.style.display = '';
            });
            return obj;
        };

        return obj;
    };

    window.$ = $;
})();