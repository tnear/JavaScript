function coalesce() {
    // returns RHS when LHS is null or undefined

    // null example (takes RHS)
    const a = null;
    const b = a ?? 2;
    console.assert(b === 2);

    // non-null example (takes LHS)
    const c = 3;
    const d = c ?? 2;
    console.assert(d === 3);
}

function test() {
    coalesce();
}

test();
console.log('Tests passed!');
