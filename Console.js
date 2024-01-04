/*
JavaScript's console object provides access to the debugging console.
https://developer.mozilla.org/en-US/docs/Web/API/console
*/

function assert() {
    // console.assert logs a message and stack tace if first argument is false
    console.assert(true, 'Unexpected failure');
}

function count() {
    // default counter (no label)
    // outputs: default: 1, default: 2
    console.count();
    console.count();

    // label
    // outputs: label: 1, label: 2
    console.count('label');
    console.count('label');
}

function group() {
    // indented logging
    console.log('Outer level');
    console.group();
    console.log('Level 2');
    console.group();
    console.log('Level 3');
    console.groupEnd();
    console.groupEnd();
}

function log() {
    // general logging
    console.log('hello');
}

function time() {
    // outputs: label: 0.094ms
    console.time('label');
    console.timeEnd('label');
}

function trace() {
    // outputs stack trace
    //console.trace();
}

function test() {
    assert();
    count();
    group();
    log();
    time();
    trace();
}

test();
console.log('Tests passed!');
