// x ??= y  // Means : x ?? (x = y)
function nullLHS() {
    // null LHS example
    let x = null;
    let y = 1;

    // x is null, so it is assigned to y's value
    x ??= y;
    console.assert(x === y);
}

function nullRHS() {
    let x = 2;
    let y = null;

    // x is non-null so its value is unchanged
    x ??= y;
    console.assert(x === 2);
}

function test() {
    nullLHS();
    nullRHS();
}

test();
console.log('Tests passed!');
