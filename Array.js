// https://www.w3schools.com/js/js_arrays.asp

function push() {
    let arr = [2, 1];

    // add 3 to end of array
    arr.push(3);
    console.assert(arr.length === 3);
}

function pop() {
    // remove last element of array
    let arr = [1, 2, 3];
    arr.pop();

    // pop returns last element
    const val = arr.pop();
    console.assert(val === 2);

    console.assert(arr.length === 1);
    arr.pop();
    console.assert(arr.length === 0);
    
    // pop on empty does nothing
    arr.pop();
    console.assert(arr.length === 0);
}

function isArray() {
    // arrays
    console.assert(Array.isArray([]));
    console.assert(Array.isArray([1, 2]));

    // not arrays
    console.assert(!Array.isArray(10));
    console.assert(!Array.isArray('abc'));
}

function instanceOf() {
    const arr = [1, 2, 3];
    console.assert(arr instanceof Array);
}

function shift() {
    let arr = [2, 1, 3];

    // shift removes front element
    const elem = arr.shift();
    console.assert(elem === 2);
    console.assert(arr.length === 2);
}

function unshift() {
    let arr = [2, 1, 3];

    // unshift adds element to front
    arr.unshift(4);
    console.assert(arr[0] === 4);
    console.assert(arr.length === 4);
}

function concat() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];

    const newArray = arr1.concat(arr2);
    console.assert(newArray.length === 5);
    
    // verify first and last element
    console.assert(newArray[0] === 1);
    console.assert(newArray.slice(-1)[0] === 5);
}

function flat() {
    // flatten higher dimensions down to array
    const arr = [ [1, 2], [3, 4] ];
    const flatArr = arr.flat();
    console.assert(flatArr[0] === 1);
    console.assert(flatArr[1] === 2);
    console.assert(flatArr[2] === 3);
    console.assert(flatArr[3] === 4);
}

function slice() {
    // slice slices out a piece of an array

    // one arg example:
    // starts at index 2 and slices until end of array
    const arr = [2, 3, 4, 5];
    const slicedArray = arr.slice(2);
    const slicedArrayStr = slicedArray.toString();
    console.assert(slicedArrayStr === '4,5');

    // the original array is unchanged for slice()
    const arrStr = arr.toString();
    console.assert(arrStr === '2,3,4,5');
}

function sliceTwoArgs() {
    // slice can accept a second optional argument indicating the stop index
    // arg1 = start index
    // arg2 = stop index (one past)
    const arr = [2, 3, 4, 5];

    // this retrieves index 1 and 2 (but not 3)
    const newArr = arr.slice(1, 3);

    // verify that [3,4] were copied into the new array
    const newArrStr = newArr.toString();
    console.assert(newArrStr === '3,4');
}

function splice() {
    // splice can remove and add elements to/from an array in-place
    let arr = [2, 3, 4, 5];

    // arg1 = start index
    // arg2 = delete count
    // start at elem 1 and deletes 2 elements
    // this deletes [3, 4] and leaves [2, 5]
    arr.splice(1, 2);
    console.assert(arr.length === 2);
    console.assert(arr[0] === 2);
    console.assert(arr[1] === 5);
}

function spliceRestParameter() {
    // splice can remove and add elements to/from an array in-place
    // the ...rest parameters define elements to add at the end of the splice
    let arr = [2, 3, 4, 5];

    // this deletes two elements starting at index = 1, [3, 4]
    // This leaves [2, 5]. The ...rest arguments are [6,7,8].
    // These are added at the splice point producing [2, 6, 7, 8, 5]
    arr.splice(1, 2, 6, 7, 8);
    const arrText = arr.toString();
    console.assert(arrText === '2,6,7,8,5');
}

function sort() {
    let arr = [2, 1, 3];
    arr.sort();
    console.assert(arr[0] === 1);
    console.assert(arr[1] === 2);
    console.assert(arr[2] === 3);
}

function sortCompareFunction() {
    let arr = ['z', 'aaa', 'bb'];

    // sort by string length
    arr.sort( (a, b) => a.length - b.length );
    console.assert(arr[0] === 'z');
    console.assert(arr[1] === 'bb');
    console.assert(arr[2] === 'aaa');
}

function reverse() {
    let arr = [3, 2, 1];
    arr.reverse();
    const arrText = arr.toString();
    console.assert(arrText === '1,2,3');
}

function map() {
    const numbers = [2, 1, 3, 4];
    const square = numbers.map(elem => elem * elem);
    const squareStr = square.toString();
    console.assert(squareStr === '4,1,9,16');
}

function filter() {
    const arr = [1, 2, 3, 4, 5];
    const even = arr.filter(elem => elem % 2 === 0);
    console.assert(even.toString() === '2,4');
}

function reduce() {
    const arr = [1, 2, 3, 4, 5];
    const sum = arr.reduce( (total, value) => total += value);
    console.assert(sum === 15);
}

function some() {
    const arr = [-1, 2, -3];

    // check if there are any numbers >= 0
    const any = arr.some(elem => elem >= 0);
    console.assert(any);
}

function constArray() {
    const arr = [1, 2];

    // const on array means array cannot be reassigned:
    // arr = [3, 4] // error!

    // ...but elements within in an array can be modified:
    arr[0] = 3;
    console.assert(arr[0] === 3);
    console.assert(arr[1] === 2);
}

function iterate() {
    const arr = [1, 2, 3];

    let elems = [];

    // use for..of to iterate through an array (or string)
    for (const elem of arr) {
        elems.push(elem);
    }

    console.assert(elems.toString() === '1,2,3');
}

function test() {
    push();
    pop();
    isArray();
    instanceOf();
    shift();
    unshift();
    concat();
    flat();
    slice();
    sliceTwoArgs();
    splice();
    spliceRestParameter();
    sort();
    sortCompareFunction();
    reverse();
    map();
    filter();
    reduce();
    some();
    constArray();
    iterate();
}

test();
console.log('Tests passed!');
