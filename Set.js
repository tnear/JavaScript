function size() {
    let s = new Set();
    console.assert(s.size === 0);
}

function constructor() {
    // use array to initialize values
    let s = new Set(['a', 'b', 'c']);
    console.assert(s.size === 3);
}

function add() {
    let s = new Set();
    s.add(1);
    s.add(2);

    console.assert(s.size === 2);

    // only first is saved
    s.add(2);
    s.add(2);
    console.assert(s.size === 2);
}

function deleteExample() {
    let s = new Set();
    s.add('A');
    s.add('B');

    // delete element
    s.delete('A');
    console.assert(s.size === 1);

    // delete on non-existent element does nothing
    s.delete('A');
    console.assert(s.size === 1);
}

function clear() {
    let s = new Set();
    s.add('A');
    s.add('B');

    // delete entries
    s.clear();
    console.assert(s.size === 0);
}

function has() {
    let s = new Set();
    s.add('A');

    // use 'has' to learn if container has an element
    console.assert(s.has('A'));
    console.assert(!s.has('fake_key'));
}

function values() {
    let s = new Set();
    s.add(1);
    s.add(2);

    let values = []
    for (const value of s.values()) {
        values.push(value);
    }

    console.assert(values.length === 2);
    console.assert(values[0] === 1);
    console.assert(values[1] === 2);
}

function test() {
    size();
    constructor();
    add();
    deleteExample();
    clear();
    has();
    values();
}

test();
console.log('Tests passed!');
