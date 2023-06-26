function size() {
    let m = new Map();
    console.assert(m.size === 0);
}

function constructor() {
    // use array to initialize values
    let m = new Map([['a', 1], ['b', 2]]);
    console.assert(m.size === 2);
}

function add() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    console.assert(m.size === 2);
    console.assert(m.get('A', 1));
    console.assert(m.get('B', 2));
}

function deleteExample() {
    let m = new Map();
    m.set('A', 'B');
    m.set('C', 2);

    // delete element
    m.delete('C');
    console.assert(m.size === 1);

    // delete on non-existent element does nothing
    m.delete('C');
}

function clear() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    // delete entries
    m.clear();
    console.assert(m.size === 0);
}

function has() {
    let m = new Map();
    m.set('A', 1);

    // use 'has' to learn if container has an element
    console.assert(m.has('A'));
    console.assert(!m.has('fake_key'));
}

function entries() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    // entries() returns an iteraor object with [key, value]
    let elems = []
    for (const elem of m.entries()) {
        console.assert(typeof elem === 'object');
        elems.push(elem[0]);
        elems.push(elem[1]);
    }

    console.assert(elems.length === 4);
    console.assert(elems[0] === 'A');
    console.assert(elems[1] === 1);
    console.assert(elems[2] === 'B');
    console.assert(elems[3] === 2);
}

function keys() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    let keys = []
    for (const key of m.keys()) {
        keys.push(key);
    }

    console.assert(keys.length === 2);
    console.assert(keys[0] === 'A');
    console.assert(keys[1] === 'B');
}

function values() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    let values = []
    for (const value of m.values()) {
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
    entries();
    keys();
    values();
}

test();
console.log('Tests passed!');
