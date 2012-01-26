var Scroll = (function (){
    var Scroll,
        items = {},
        init = function() {
            var didScroll = false;

            $(window).scroll(function() {
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    didScroll = false;

                    var key;
                    for (key in items) {
                        if (items[key]['isOn']) {
                            items[key]['callback']();
                        }
                    }
                }
            }, 250);
        };

    // One-time init functions
    init();

    Scroll = function() {};
    Scroll.prototype = {
        add: function(key, callback) {
            if (typeof callback !== 'function') {
                throw Error('Invalid callback - Scroll');
            }

            items[key] = {callback: callback, isOn: true};
            return this;
        },
        remove: function(key) {
            delete items[key];
            return this;
        },
        on: function(key) {
            items[key]['isOn'] = true;
            return this;
        },
        off: function(key) {
            items[key]['isOn'] = false;
            return this;
        },
        inViewPort: function(element) {
            var _window = $(window),
                top = _window.scrollTop(),
                fold = _window.height() + _window.scrollTop();

            return (!(fold <= element.offset().top) && !(top >= element.offset().top + element.height()));
        }
    };

    return (new Scroll);
}());