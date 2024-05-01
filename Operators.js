// '??'
function nullishCoalescingOperator() {
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

// x ??= y  // Means : x ?? (x = y)
function nullishCoalescingAssignmentNullLHS() {
    // null LHS example
    let x = null;
    let y = 1;

    // x is null, so it is assigned to y's value
    x ??= y;
    console.assert(x === y);
    console.assert(y === 1);
}

// x ??= y  // Means : x ?? (x = y)
function nullishCoalescingAssignmentNullRHS() {
    let x = 2;
    let y = null;

    // x is non-null so its value is unchanged
    x ??= y;
    console.assert(x === 2);
}

// The spread operator (...) allows an iterable, such as an array of string,
// to be expanded in places where zero or more arguments are expected.
function spreadOperatorFunctionArgs() {
    const sumFunction = (a, b, c) => a + b + c;

    const arr = [1, 2, 3];

    // use spread operator (...) to expand 1=>a, 2=>b, 3=>c
    const result = sumFunction(...arr);
    console.assert(result === 6);
}

// Spread operator (...)
function spreadOperatorConcat() {
    const arr1 = [1, 2];
    const arr2 = [3, 4];

    // concat arrays
    const arr3 = [...arr1, ...arr2];
    // alt syntax:
    // const arr3 = arr1.concat(arr2)
    console.assert(arr3.length === 4);
    console.assert(arr3[0] === 1);
    console.assert(arr3[1] === 2);
    console.assert(arr3[2] === 3);
    console.assert(arr3[3] === 4);
}

// Spread operator (...)
function spreadOperatorAssignment() {
    const numbers = [1, 2, 3, 4];
    const [one, two, ...rest] = numbers;

    console.assert(one === 1);
    console.assert(two === 2);
    console.assert(rest.length === 2);
    console.assert(rest[0] === 3);
    console.assert(rest[1] === 4);
}

function spreadOperatorMap() {
    const m = new Map([ [1, 'a'], [2, 'b'], [3, 'c'] ]);
    const valuesArray =  [...m.values()];
    console.assert(valuesArray.toString() === 'a,b,c');
}

// Optional chaining operator (?:)
function optionalChaining() {
    const identifier = {
        Attributes: {
            Name: 'Chaining'
        }
    };

    // ?. checks if property/function exists

    // exists (uses Name like normal)
    const name = identifier.Attributes?.Name;
    console.assert(name === 'Chaining');

    // Age does not exist, uses undefined
    const age = identifier.Attributes?.Age;
    console.assert(age === undefined);

    // multiple chaining for existence
    const name2 = identifier?.Attributes?.Name;
    console.assert(name2 === 'Chaining');

    // multiple chaining for non-existence
    const undef = identifier?.FakeProp1?.FakeProp2;
    console.assert(undef === undefined);
}

function test() {
    nullishCoalescingOperator();
    nullishCoalescingAssignmentNullLHS();
    nullishCoalescingAssignmentNullRHS();
    spreadOperatorFunctionArgs();
    spreadOperatorConcat();
    spreadOperatorAssignment();
    spreadOperatorMap();
    optionalChaining();
}

test();
console.log('Tests passed!');
