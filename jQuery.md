# jQuery

jQuery is designed to simplify the client-side scripting of HTML. It makes things like HTML document traversal and manipulation, event handling, and animation simpler. jQuery can also create plugins on top of the JavaScript library.

jQuery is distributed as a single JavaScript file. 

## Key Features

- **DOM Manipulation**: Easily select elements in the document to perform operations. jQuery provides a powerful "write less, do more" approach.
- **Event Handling**: Simplifies adding events to web page elements.
- **AJAX**: Allows using AJAX to send asynchronous requests to the server for loading content without refreshing the page.
- **Effects and Animations**: Provides built-in effects and animations.

## CDN
Instead of downloading and hosting jQuery yourself, there is an option to provide it from a CDN:

```js
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head> 
```

## Selection syntax
*https://www.w3schools.com/jquery/jquery_syntax.asp*

Basic syntax: `$(selector).action()`
- The `$` symbol accesses jQuery
- `(selector)` queries HTML elements
- `action()` is action to be performed on selected elements

### Examples
- `$(this).hide()` - hides the current element
- `$("p").hide()` - hides all `<p>` elements
- `$(".test").hide()` - hides all elements with class="test"
- `$("#test").hide()` - hides the element with id="test"

## Event syntax
```js
// select all paragraph elements then perform an action on click
$("p").click(function() {
    // action goes here
});
```

### Hide a paragraph after it is double clicked
```js
$("p").dblclick(function(){
    $(this).hide();
});
```

### Chaining
```js
$("#p1").css("color", "red").slideUp(2000).slideDown(2000); 
```

## Selecting elements

Here's a simple example of using jQuery to change the text of an HTML element with the id "example":

```html
<html>
<head>
  <title>jQuery Example</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
        $("#example").click(function() {
            $(this).text("Hello, jQuery!");
        });
    });
  </script>
</head>
<body>
    <div id="example">Click me.</div>
</body>
</html>
```

## AJAX

jQuery simplifies the process of making AJAX calls to fetch data from a server asynchronously. This example demonstrates how to use jQuery's `$.ajax` method to get JSON data from a placeholder API and display it in an HTML element.

### HTML Setup

First, create a simple HTML file with a button to trigger the AJAX call and a `<div>` to display the fetched data:

```html

<button id="fetch-data">Fetch Data</button>
<div id="data-container"></div>

<script>
    // jQuery code here. 
    // (document).ready prevents any jQuery code from running before page finishes loading
$(document).ready(function(){
    $('#fetch-data').click(function() {
        // use ajax to load content dynamically
        $.ajax({
            url: 'https://example.com/api/endpoint',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // display fetched data
                $('#data-container').html('<p>Title: ' + data.title + '</p><p>Body: ' + data.body + '</p>');
            },
            error: function() {
                alert('Error fetching data');
            }
        });
    });
});
</script>
```

## Creating a plugin
jQuery plugins allows you add new methods that can be used by all jQuery objects.

The jQuery plugin below makes text blink within selected elements.
```js
(function($) {
    $.fn.blink = function(options) {
        // default settings
        var settings = $.extend({
            delay: 500 // blink interval in milliseconds
        }, options);

        // toggle visibility
        function blink() {
            var isVisible = $(this).css("visibility") === "visible";
            $(this).css("visibility", isVisible ? "hidden" : "visible");
        }

        // apply blink function to each selected element
        return this.each(function() {
            var elem = $(this);
            setInterval(blink.bind(elem), settings.delay);
        });
    };
}(jQuery));
```

After defining the plugin, you can use it in the page DOM.

```html
<script>
    $(document).ready(function(){
        // apply blink effect with default settings
        $('.blink').blink();

        // apply blink effect with custom delay
        $('.custom-blink').blink({ delay: 1000 });
    });
</script>

<p class="blink">This text will blink with default settings.</p>
<p class="custom-blink">This text will blink with a custom delay.</p>
```
