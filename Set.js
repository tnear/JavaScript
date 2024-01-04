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

// delete (remove) elements from set
function deleteExample() {
    let s = new Set();
    s.add('A');
    s.add('B');

    // delete element
    s.delete('A');
    console.assert(s.size === 1);

    // delete on non-existent element does nothing
    s.delete('FakeKey');
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

    // use 'has' to learn if container has (contains) an element
    console.assert(s.has('A'));
    console.assert(!s.has('fake_key'));
}

// iterate through values
function values() {
    let s = new Set();
    s.add(1);
    s.add(2);

    let valueList = [];
    for (const value of s.values()) {
        valueList.push(value);
    }

    console.assert(valueList.length === 2);
    console.assert(valueList[0] === 1);
    console.assert(valueList[1] === 2);
}

function iterate() {
    const letters = new Set(['a', 'b', 'c']);

    let result = [];
    for (const letter of letters) {
        result.push(letter);
    }

    console.assert(result.toString() === 'a,b,c');
}

function test() {
    size();
    constructor();
    add();
    deleteExample();
    clear();
    has();
    values();
    iterate();
}

test();
console.log('Tests passed!');
