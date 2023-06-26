// Optional chaining operator (?:)

function chaining() {
    const identifier = {
        Attributes: {
            Name: 'Chaining'
        }
    }

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
    chaining();
}

test();
console.log('Tests passed!');
