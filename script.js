let numberString = '0';
let number = 0;
let firstNum = 0;
let operator = '';
let secondNum = 0;
// Add boolean value for if firstNum is already used, operator already used, and secondNum is already used, and second operator has been used.

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const currentDisplay = document.getElementById("currentDisplay");
const previousDisplay = document.getElementById("previousDisplay")
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.operate');
const equals = document.getElementById('equal');
const clear = document.getElementById('clear');
const del = document.getElementById('del');

// Change parseNum to parseFloat
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        numberString += value;
        number = parseFloat(numberString);
        display.textContent = number;
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        firstNum = number;
        numberString = '';
        display.textContent = number;
    });
});

del.addEventListener('click', () => {
    numberString = numberString.slice(0, -1);
    number = parseFloat(numberString)
    display.textContent = number;
});

clear.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    number = 0;
    numberString = '';
    display.textContent = number;
});

equals.addEventListener('click', () => {
    secondNum = number;
    firstNum = operate(firstNum, operator, secondNum)
    display.textContent = firstNum;
    number = firstNum;
    numberString = '';
});

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

// TODO: 1) Make a display of previous input and current operator
// TODO: 2) Backspace
// TODO: 3) Keyboard support
// TODO: 4) History, button memory based on each output