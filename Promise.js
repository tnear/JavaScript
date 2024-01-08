/*
JavaScript Promise Object
A Promise contains both the producing code and calls to the consuming code.
Producing code is code that can take some time.
Consuming code is code that must wait for the result.
https://www.w3schools.com/js/js_promise.asp
*/

function basic() {
    // create a promise object. the code inside executes when
    // the promise is used, ex: myPromise.then(...)
    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;
        // producing code here
        // when it obtains its result, it should call one of the two callbacks.
        // the first (myResolve) is for success
        // the second (myReject) is for failure

        // force a successful result
        if (x === 0) {
            myResolve('OK');
        } else {
            myReject('Error');
        }
    });

    // consuming code here. it waits for the execution of
    // one of the two callbacks 
    myPromise.then(
        function (successResult) {
            console.log('Success: ' + successResult);
        },
        function (error) {
            console.log('Failure: ' + error);
        }
    );
}

function test() {
    basic();
}

test();
console.log('Tests passed!');
