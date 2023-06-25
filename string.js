function slice() {
    // returns substring into new string based on index
    const str = 'hello';

    // get position 0 and 1
    console.assert(str.slice(0, 2) == 'he');

    // get from position 2 to end
    console.assert(str.slice(2) == 'llo');

    // get last character using negative index
    console.assert(str.slice(-1) == 'o');

    // get 3rd to last and 2nd to last character
    // (remember, stop index is one past where to stop)
    console.assert(str.slice(-3, -1) == 'll');
}

function substring() {
    // similar to slice() except negative indexes are not supported
    const str = 'hello';

    console.assert(str.substring(0, 2) == 'he');
    
    // not supported, negative values are treated as zero, which returns entire string
    console.assert(str.substring(-1) == 'hello');
}

function substr() {
    // deprecated -- similar to slice() except 2nd arg specifies length of extracted text
    const str = 'hello';

    // get elems 1, 2, 3
    console.assert(str.substr(1, 3) == 'ell');
}

function replace() {
    const str = 'hello hello';

    // replace replaces FIRST occurrence in a string
    const newStr = str.replace('ello', 'i');
    console.assert(newStr == 'hi hello');

    // replace all using regex
    // (note: prefer replaceAll)
    const newStr2 = str.replace(/ello/g, 'i');
    console.assert(newStr2 == 'hi hi');
}

function replaceAll() {
    // replace ALL occurrences in a string
    const str = 'hello hello';

    const newStr = str.replaceAll('ello', 'i');
    console.assert(newStr == 'hi hi');
}

function length() {
    const str = 'hello';
    console.assert(str.length === 5);
}

function object() {
    // alt syntax: use String constructor
    const str = new String('hello');
    console.assert(str == 'hello');
}

function charAt() {
    const str = 'hello';

    // bracket
    console.assert(str[0] == 'h');

    // functional style (safer)
    console.assert(str.charAt(0) == 'h');    
}

function split() {
    const str = 'hello,hi,hola';
    const arr = str.split(',');

    console.assert(arr.length === 3);
    console.assert(arr[0] === 'hello');
    console.assert(arr[1] === 'hi');
    console.assert(arr[2] === 'hola');

    // split('') splits into individual characters
    const chars = 'hi';
    const arr2 = chars.split('');
    console.assert(arr2.length === 2);
    console.assert(arr2[0] === 'h');
    console.assert(arr2[1] === 'i');
}

slice();
substring();
substr();
length();
replace();
replaceAll();
object();
charAt();
split();

console.log('Tests passed!')
