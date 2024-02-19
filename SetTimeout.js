/*
The global setTimeout() method sets a timer which executes a
function once the timer expires.
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

setTimeout(code)
setTimeout(code, delayInMilliseconds)
*/

function _callable() {
    console.log('_callable');
}

function basic() {
    // arrow function
    setTimeout(() => {
        console.log('Delayed for 1 millisecond');
    }, 1);

    // named function
    setTimeout(_callable, 2);
}

// use clearTimeout to prevent a setTimeout from running
function clearTimeoutFcn() {
    const timeout = setTimeout(_callable, 1000);
    clearTimeout(timeout); // prevent timeout from running
}

function test() {
    basic();
    clearTimeoutFcn();
}

test();
console.log('Tests passed!');
