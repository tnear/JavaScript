// Math object

function pow() {
    console.assert(Math.pow(2, 5) === 32);
}

function round() {
    // round to nearest integer
    console.assert(Math.round(2.2) === 2);
    console.assert(Math.round(2.5) === 3);
}

function random() {
    // returns value between [0, 1)
    const val = Math.random();
    console.assert(val >= 0 && val < 1);
}

function max() {
    const arr = [2, 1, 3, 0];

    // get maximum value of array
    let maxValue = Math.max(...arr);
    console.assert(maxValue === 3);

    // multiple arguments
    maxValue = Math.max(3, 4, 2);
    console.assert(maxValue === 4);
}

function test() {
    pow();
    round();
    random();
    max();
}

test();
console.log('Tests passed!');
