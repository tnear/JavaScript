/*
JavaScript JSON
JSON = JavaScript Object Notation
https://www.w3schools.com/js/js_json.asp
*/

// parse() converts a json string into a javascript object
function parse() {
    // create an array of 3 employees
    let text = '{ "employees" : [' +
        '{ "firstName": "John" , "lastName": "Doe" },' +
        '{ "firstName": "Anna" , "lastName": "Smith" },' +
        '{ "firstName": "Peter" , "lastName": "Jones" } ]}';

    const obj = JSON.parse(text);
    console.assert(obj.employees.length === 3);
    console.assert(obj.employees[0].firstName === 'John');
    console.assert(obj.employees[0].lastName === 'Doe');
}

// stringify() converts a javascript object into a json string
function stringify() {
    let result = JSON.stringify({ x: 5, y: 6});
    console.assert(result === '{"x":5,"y":6}');
}

function test() {
    parse();
    stringify();
}

test();
console.log('Tests passed!');
