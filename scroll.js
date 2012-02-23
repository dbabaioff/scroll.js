var Scroll = (function (){
    var Scroll,
        items = {},

        // http://ejohn.org/projects/flexible-javascript-events/
        addEvent = function(obj, type, fn) {
            if (obj.attachEvent) {
                obj['e' + type + fn] = fn;
                obj[type + fn] = function(){ obj['e' + type + fn](window.event); }
                obj.attachEvent('on' + type, obj[type + fn]);
            }
            else {
                obj.addEventListener(type, fn, false);
            }
        },
        init = function() {
            var didScroll = false;

            addEvent(window, 'scroll', function() {
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    didScroll = false;

                    var key;
                    for (key in items) {
                        if (items[key].on) {
                            items[key].fn();
                        }
                    }
                }
            }, 250);
        };

    // One-time init functions
    init();

    Scroll = function() {};
    Scroll.prototype = {
        bind: function(keys, fn) {
            // var key;

            //if (typeof keys !== 'object') {
                //keys = {fn: fn, on}
            // }

            // for (key in keys) {
            //     items[key] = {fn: fn, on: true};
            //}

            return this;
        },
        unbind: function(keys) {
            delete items[keys];
            return this;
        },
        // param is for internal usage only
        on: function(key, param) {
            items[key].on = (typeof param !== 'undefined') ? param : true;
            return this;
        },
        off: function(key) {
            return this.on(key, false);
        }
    };

    return (new Scroll);
}());