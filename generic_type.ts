
//Generics

function insertAtBegining<T>(array: T[], value: T){
    const newArray = [value, array];
    return newArray;
}

//Return type will be array of numbers
const numberArray = insertAtBegining([1,2,3,4], -1);
//Return type will be array of string
const stringArray = insertAtBegining(['a', 'b', 'c'], 'x')
