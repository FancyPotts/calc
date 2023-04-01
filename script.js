let numberString = '0';
let number = 0;
let firstNum = 0;
let operator = '';
let secondNum = 0;
let calcHistory = [];
let logged = '';

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

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        numberString += value;
        number = parseFloat(numberString);
        currentDisplay.textContent = number;
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        firstNum = number;
        numberString = '';
        currentDisplay.textContent = number;
    });
});

del.addEventListener('click', () => {
    if (number > 0 || number < 0) {
        numberString = numberString.slice(0, -1);
        number = parseFloat(numberString)
        currentDisplay.textContent = number;
    } else {
        return
    }
});

clear.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    number = 0;
    numberString = '';
    currentDisplay.textContent = number;
});

equals.addEventListener('click', () => {
    secondNum = number;
    logged = firstNum + operator + secondNum;
    calcHistory.push(logged);
    previousDisplay.textContent = logged;
    firstNum = operate(firstNum, operator, secondNum);
    currentDisplay.textContent = firstNum;
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


// TODO: 1) Keyboard support
// TODO: 2) History, button memory based on each output

// Mar 31
// - Added Del button and eventlistener. 
// - Added decimal button.
// - Change parseNumber to parseFloat. 
// - Add previous input and current input, build on calc log

// Note: I thought I could do list[-1] like in py to display last entry. Turns out that's not how it works in js, whoops. So instead I use arr[arr.length - 1] to display last entry.