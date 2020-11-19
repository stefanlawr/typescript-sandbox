function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

// Callback function
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

let someValue: undefined;

// Both are valid 

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(5,8));

addAndHandle(10, 20, (result)=> {
    console.log(result);
});