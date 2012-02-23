# scroll.js

scroll.js is a small, cross-browser JavaScript library that can be used in web applications to manage the **window object's** scroll event.

Using John Resig's [flexible javascript events](http://ejohn.org/projects/flexible-javascript-events/).

## Usage

Load scroll.js:

    <script src="scroll.js" type="text/javascript"></script>

## Bind/Unbind

Bind an event handler to the "scroll" JavaScript event (based on a key).

```js
Scroll.bind('scroll_1', function() {
    // Your event handler code goes here.
}).bind({
    'scroll_2': function() {
        // Your event handler code goes here.
    },
    'scroll_3': function() {
        // Your event handler code goes here.
    }
});

// OR
// One or more space-separated keys
Scroll.bind('scroll_1 scroll_2 scroll_3', function() {
    // Your event handler code goes here.
});
```

Unbind an event handler to the "scroll" JavaScript event (based on a key).

```js
// Unbind all events.
Scroll.unbind();

// Unbind a specific event handler.
Scroll.unbind('scroll_1').unbind('scroll_2').unbind('scroll_3');

// equivalent to...
// One or more space-separated keys
Scroll.unbind('scroll_1 scroll_2 scroll_3');
```

## Turn on/off

Turn on/off an event handler.

```js
Scroll.off('scroll_1').off('scroll_2');

Scroll.on('scroll_1').on('scroll_2');
```

## TODO

* Attach a handler (to scroll event) for any element in the page.

## Author

David Babaioff