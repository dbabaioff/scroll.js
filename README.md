# scroll.js

scroll.js is a small, cross-browser JavaScript library that can be used in web applications to manage the browser's scroll event.

## Usage

Load [jQuery](http://jquery.com/) and the scroll.js:

    <script src="jquery.js" type="text/javascript"></script>
    <script src="scroll.js" type="text/javascript"></script>

```js
Scroll.add('scroll_1', function() {
    ...
})
.add('scroll_2', function() {
    ...
})
.off('scroll_1')
.on('scroll_1')
.remove('scroll_2');
```

## Author

David Babaioff