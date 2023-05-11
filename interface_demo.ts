
/*
 * We could change interface to type
 * but interface adds additional deafure to force implementing class
 * to implament undefined methods
 */
 
interface Human{
    name: string;
    age: number;

    greet: () => void;
}

let max: Human;

max ={
    name: 'Max',
    age: 32,

    greet(){
        console.log("Hello...");
    }
}

class Instructor implements Human{
    name: string;
    age: number;

    greet(){
        console.log("Hello...");
    }
}