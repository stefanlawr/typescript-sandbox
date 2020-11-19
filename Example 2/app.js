// any type with more strict type checking
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError('Error occured!', 500);
