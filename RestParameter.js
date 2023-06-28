// Rest parameters (...)

// This function requires an initial value then sums any # of args
function sumInitialValue(initialValue, ...args) {
    let total = initialValue;
    for (const elem of args) {
        total += elem;
    }
    return total;
}

// This function accepts any # of args using rest parameter (...) then sums them
function sum(...args) {
    // use spread operator to pass along everything
    const initialValue = 0;
    return sumInitialValue(initialValue, ...args);
}

function test() {
    const result = sum(1, 2, 3);
    console.assert(result === 6);

    const result2 = sumInitialValue(10, 2, 3, 4);
    console.assert(result2 === 19);
}

test();
console.log('Tests passed!');
