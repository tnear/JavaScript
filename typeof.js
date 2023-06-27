// typeof returns type of variable

function typeofBasic() {
    console.assert(typeof 'text'         === 'string');
    console.assert(typeof 3              === 'number');
    console.assert(typeof 3.14           === 'number'); // all numbers are double-precision
    console.assert(typeof [1, 2]         === 'object');
    console.assert(typeof {a: 1, b: 2}   === 'object');
    console.assert(typeof function () {} === 'function');
    console.assert(typeof undefinedVar   === 'undefined');
    console.assert(typeof true           === 'boolean');
}

function test() {
    typeofBasic();
}

test();
console.log('Tests passsed!');
