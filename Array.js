// https://www.w3schools.com/js/js_arrays.asp

function sort() {
    let arr = [2, 1, 3];
    arr.sort();
    console.assert(arr[0] === 1);
    console.assert(arr[1] === 2);
    console.assert(arr[2] === 3);
}

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
    const slicedArrayStr = slicedArray.join();
    console.assert(slicedArrayStr === '4,5');

    // the original array is unchanged for slice()
    const arrStr = arr.join();
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
    const newArrStr = newArr.join();
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
    const arrText = arr.join();
    console.assert(arrText === '2,6,7,8,5');
}

function test() {
    sort();
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
    spliceRestParameter();
}

test();
console.log('Tests passed!');
