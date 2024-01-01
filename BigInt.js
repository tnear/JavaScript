/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/

function bigInt() {
    // BigInt constructor
    const a = BigInt(1);
    console.assert(Number(a) === 1);

    // BitInt n-suffix (alt syntax)
    const b = 9999999999999999n;
    // BigInt with quotes for numbers larger than 2^53
    console.assert(b === BigInt('9999999999999999'));
}

function type() {
    console.assert(typeof 0n === 'bigint');
}

function number() {
    const a = BigInt(2);

    // convert BigInt to Number (can be a lossy conversion)
    const n = Number(a);
    console.assert(n === 2);
}

function test() {
    bigInt();
    type();
    number();
}

test();
console.log('Tests passed!');
