/*
The Map object holds key-value pairs and remembers the original insertion order of the keys.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

function size() {
    let m = new Map();
    console.assert(m.size === 0);
}

function constructor() {
    // use array to initialize values
    const m = new Map([['a', 1], ['b', 2]]);
    console.assert(m.size === 2);
}

// set/add/insert values to map
function add() {
    let m = new Map();

    // values do not need to be the same data type
    m.set('A', 1);
    m.set('B', 2);
    m.set('C', '3');

    console.assert(m.size === 3);
    console.assert(m.get('A', 1));
    console.assert(m.get('B', 2));
    console.assert(m.get('C', '3'));
}

// delete (erase, remove) elements from map
function deleteExample() {
    let m = new Map();
    m.set('A', 'B');
    m.set('C', 2);

    // delete element
    m.delete('C');
    console.assert(m.size === 1);

    // delete on non-existent element does nothing
    m.delete('FakeKey');
    console.assert(m.size === 1);
}

function clear() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    // clear (delete) all entries
    m.clear();
    console.assert(m.size === 0);
}

// 'contains()' in C++
function has() {
    let m = new Map();
    m.set('A', 1);

    // use 'has' to learn if container has (contains) an element
    let hasElement = m.has('A');
    console.assert(hasElement);
    console.assert(!m.has('fake_key'));
}

// entries() returns an iterator object with [key, value]
function entries() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    let elems = [];
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

// keys() just returns the key (no value)
function keys() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    let keyList = [];
    for (const key of m.keys()) {
        keyList.push(key);
    }

    console.assert(keyList.length === 2);
    console.assert(keyList[0] === 'A');
    console.assert(keyList[1] === 'B');
}

// value() just returns the value (no key)
function values() {
    let m = new Map();
    m.set('A', 1);
    m.set('B', 2);

    let valueList = [];
    for (const value of m.values()) {
        valueList.push(value);
    }

    console.assert(valueList.length === 2);
    console.assert(valueList[0] === 1);
    console.assert(valueList[1] === 2);
}

function iterate() {
    const m = new Map([['a', 1], ['b', 2]]);

    let result = [];
    // iterating through a map return both <key, value>
    for (const elem of m) {
        // 'elem' is an array of length 2
        console.assert(elem.length === 2);
        result.push(elem);
    }

    // result === [ ['a', 1], ['b', 2] ]
    console.assert(result[0].toString() === 'a,1');
    console.assert(result[1].toString() === 'b,2');

    // alt [key, value] syntax (structured binding)
    result = [];
    for (const [key, value] of m) {
        result.push(key);
        result.push(value);
    }

    console.assert(result.length === 4);
    console.assert(result[0] === 'a' && result[1] === 1);
}

function spreadOperator() {
    // convert map to array of pairs using the spread operator
    // create {a: 1, b: 2}
    const m = new Map([['a', 1], ['b', 2]]);

    // create array [['a', 1], ['b', 2]]
    const arrOfPairs = [...m];
    console.assert(Array.isArray(arrOfPairs));
    console.assert(arrOfPairs.length === 2);
    console.assert(arrOfPairs[0][0] === 'a');
    console.assert(arrOfPairs[0][1] === 1);
    console.assert(arrOfPairs[1][0] === 'b');
    console.assert(arrOfPairs[1][1] === 2);
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
    iterate();
    spreadOperator();
}

test();
console.log('Tests passed!');
