class Rectangle {
    // private properties are prefixed with '#' (hash names)
    #height = 0; // default value
    #width       // no default value

    // constructor for class (note: destructors do not exist in JS)
    constructor(height, width) {
        this.#height = height;
        this.#width = width;

        // also create public properties
        this.publicHeight = height;
        this.publicWidth = width;
    }

    // bind 'area' property to function
    get area() {
        return this.getArea();
    }

    set width(width) {
        // width setter for private property
        this.#width = width;
    }

    // getArea method
    getArea() {
        return this.#height * this.#width;
    }
}

function test() {
    rect = new Rectangle(5, 4);

    // public fields (using private fields ('#') outside of 
    // class definition throws a runtime error)
    console.assert(rect.publicHeight == 5);
    console.assert(rect.publicWidth == 4);
    
    // 'get area' access via property
    console.assert(rect.area == 20);

    // method syntax
    console.assert(rect.getArea() == 20);

    // update width using setter method
    rect.width = 10;
    console.assert(rect.getArea() == 50);
}

test();
console.log('Tests passed!');
