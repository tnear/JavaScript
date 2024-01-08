/*
The keyword 'async' before a function makes the function return a promise.
The keyword 'await' pauses execution until a promise resolves. This does not
waste CPU resources.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/

// 'async' before function indicates that this function always returns a promise
async function f() {
    return 'done!';
    // same as:
    //return Promise.resolve('done!');
}
async function asyncAwait() {
    let promise = f();

    // execution pauses here until promise resolves
    let result = await promise;

    console.assert(result === 'done!');
}

function test() {
    asyncAwait();
}

test();
console.log('Tests passed!');
