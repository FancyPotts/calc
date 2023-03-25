const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
    if (operator === "*") {
        return multiply(firstNum, secondNum)
    } else if (operator === "/") {
        if (secondNum === 0 || firstNum === 0){
            return 0
        }
        return divide(firstNum, secondNum)
    } else if (operator === "+") {
        return sum(firstNum, secondNum)
    } else if (operator === "-") {
        return subtract(firstNum, secondNum)
    }
}