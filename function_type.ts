
//Function Type

function add(a: number, b: number){
    return a + b;
}

//Above function has infered return type as below, but we can also define explicitely
//function add(a: number, b: number): number{}


//Below function has infered return type as void
//function printOutput(value: any): void{}
//also as input parameter is any, we can pass any variable
function printOutput(value: any){
    console.info(value);
}