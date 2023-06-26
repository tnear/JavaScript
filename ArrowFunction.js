// Arrow functions (ES6) provide a concise way to write functions

function oneParam() {
    const nums = [2, 3, 4, 5];
    const odd = nums.filter(num => num % 2);

    console.assert(odd.length === 2);
    console.assert(odd[0] === 3);
    console.assert(odd[1] === 5);
}

function twoParams() {
    const sumFunction = (a, b) => a + b;
    let result = sumFunction(2, 3);
    console.assert(result === 5);
}

function test() {
    oneParam();
    twoParams();
}

test();
console.log('Tests passsed!');
