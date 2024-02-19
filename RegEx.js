/*
Regular expressions (regexp)
https://www.w3schools.com/js/js_regexp.asp
*/

function basic() {
    const text = 'hello world!';
    const idx = text.search(/world/);
    console.assert(idx === 6);
}

function caseInsensitive() {
    const text = 'Hello World!';
    const idx = text.search(/world/i);
    console.assert(idx === 6);
}

function replace() {
    const text = 'hello world';
    const result = text.replace(/hello/, 'goodbye');
    console.assert(result === 'goodbye world');
}

// <pattern>.test() returns true/false
function patternTest() {
    const pattern = /[0-9]/;
    let result = pattern.test('hello');
    console.assert(!result);

    result = pattern.test('abc123');
    console.assert(result);
}

// pattern.exec() returns the found text as an object
function patternExec() {
    const pattern = /[0-9]/;
    let result = pattern.exec('hello');
    console.assert(!result);

    result = pattern.exec('abc123');
    console.assert(result.index === 3); // finds '1' at idx=3
}

// string.match() returns an array of matches
function match() {
    let text = 'hello world 234';

    // create a pattern with a capture group
    let result = text.match(/([0-9]+)/);
    // capture groups are returned in result array
    console.assert(result[0] === '234');

    // backreference: detect 'a <digit> b <digit>
    text = 'a 1 b 2 a 3 b 3';
    result = text.match(/a (\d) b \1/);
    console.assert(result[0] === 'a 3 b 3');
}

function test() {
    basic();
    caseInsensitive();
    replace();
    patternTest();
    patternExec();
    match();
}

test();
console.log('Tests passed!');
