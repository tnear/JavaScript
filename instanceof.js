class Person { } // used for testing

function string() {
    // true for String constructor
    const str = new String('hello');
    console.assert(str instanceof String);

    // false for assignment
    const str2 = 'hello2';
    console.assert(!(str2 instanceof String));
}

function classSyntax() {
    const p = new Person();
    console.assert(p instanceof Person);
    console.assert(!(p instanceof String));
}

function array() {
    const arr = [1, 2]
    console.assert(arr instanceof Array);
}

function test() {
    string();
    classSyntax();
    array();
}

test();
console.log('Tests passed!');
