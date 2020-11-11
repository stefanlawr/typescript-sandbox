function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // This kind of error checking is caught by using Types and is unneccessary!
    // if(typeof(n1) !== 'number' || typeof(n2) !== 'number') {
    //     throw new Error('Incorrect Input Type!');
    // }
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

const number1 = 5; // 5.0 and 5 are the same in JS
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);