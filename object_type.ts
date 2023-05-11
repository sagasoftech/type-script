
//Object type

//any will say, any type is allowed for thie variable
//let person: any;

/*
 * We can have person object created without defining structure but then
 * it will allow n number of objects in there which will violate purpose of typesctipt
 */
//let person;


let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};


/*
 * Array of object
 */
let persons: {
    name: string;
    age: number;
}[];