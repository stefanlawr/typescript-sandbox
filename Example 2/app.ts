// any type with more strict type checking
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {errorMessage: message, errorCode: code};
}

generateError('Error occured!', 500);