// Spread operator (...)

function functionArgs() {
    const sumFunction = (a, b, c) => a + b + c;

    const arr = [1, 2, 3];

    // use spread operator (...) to expand 1=>a, 2=>b, 3=>c
    const result = sumFunction(...arr);
    console.assert(result === 6);
}

function concat() {
    const arr1 = [1, 2];
    const arr2 = [3, 4];

    const arr3 = [...arr1, ...arr2];
    console.assert(arr3.length === 4);
    console.assert(arr3[0] === 1);
    console.assert(arr3[1] === 2);
    console.assert(arr3[2] === 3);
    console.assert(arr3[3] === 4);
}

function assignment() {
    const numbers = [1, 2, 3, 4];
    const [one, two, ...rest] = numbers;

    console.assert(one === 1);
    console.assert(two === 2);
    console.assert(rest.length === 2);
    console.assert(rest[0] === 3);
    console.assert(rest[1] === 4);
}

function test() {
    functionArgs();
    concat();
    assignment();
}

test();
console.log('Tests passed!');
