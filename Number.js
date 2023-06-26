// Numbers in JavaScript are double-precision floating-poit numbers

function double() {
    console.assert(1 === 1.0);

    // 2^53 === 2^53 + 1 with double data type
    const twoTo53 = 9007199254740992;
    console.assert(twoTo53 === twoTo53 + 1);
}

function separator() {
    // can use '_' to separate digits
    console.assert(1_000 === 1000);
    console.assert(1_000_000 === 1000000);
}

function infinity() {
    const div0 = 1/0;
    console.assert(div0 === Infinity);
}

function hexadecimal() {
    const x = 0xFF;
    console.assert(x === 255);
}

function toString() {
    // convert number to string (base 10 is default)
    const num = 32;
    const str = num.toString();
    console.assert(str === '32');
}

function test() {
    double();
    separator();
    infinity();
    hexadecimal();
    toString();
    toString();
}

test();
console.log('Tests passed!');
