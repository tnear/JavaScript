function bigInt() {
    // BigInt constructor
    const a = BigInt(1);
    console.assert(a == 1);

    // BitInt n-suffix (alt syntax)
    const b = 9999999999999999n;
    // BigInt with quotes for numbers larger than 2^53
    console.assert(b == BigInt('9999999999999999'));
}

function type() {
    console.assert(typeof 0n == 'bigint');
}

function test() {
    bigInt();
    type();
}

test();
console.log('Tests passed!');
