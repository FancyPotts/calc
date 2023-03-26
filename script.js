let numberString = '';
let number = 0;
let firstNum = 0;
let operator = '';
let secondNum = 0;

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const display = document.getElementById("display");
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.operate');
const equals = document.getElementById('equal');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        numberString += value;
        number = parseInt(numberString);
        display.textContent = number;
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        console.log(operator)
        firstNum = number;
        number = 0;
        numberString = '';
        console.log(firstNum)
        display.textContent = number;
    });
});

equals.addEventListener('click', () => {
    secondNum = number;
    result = operate(firstNum, operator, secondNum)
    display.textContent = result;
});

// TODO: ** Make function for operator switch number to firstNum if empty and start new string for secondNum, if new operator instead of equal is used, put result into firstNum and empty secondNum.

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

