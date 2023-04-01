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
        numberString = '0';
        currentDisplay.textContent = number;
    });
});

del.addEventListener('click', () => {
    if (numberString == '0') {
        return
    } else if (number > 0 || number < 0 ) {
        numberString = numberString.slice(0, -1);
        number = parseFloat(numberString);
        currentDisplay.textContent = number;
    } else {
        return
    }
});

clear.addEventListener('click', () => {
    if (numberString === '0') {
        firstNum = 0;
        secondNum = 0;
        number = 0;
        numberString = '0';
        calcHistory = [];
        logged = '';
        currentDisplay.textContent = number;
        previousDisplay.textContent = '';
    } else {
        numberString = '0';
        currentDisplay.textContent = 0;
    }
});

equals.addEventListener('click', () => {
    secondNum = number;
    logged = firstNum + operator + secondNum;
    previousDisplay.textContent = logged;
    firstNum = operate(firstNum, operator, secondNum);
    logged = logged + '=' + firstNum;
    calcHistory.push(logged);
    console.log(calcHistory)
    currentDisplay.textContent = firstNum;
    number = firstNum;
    numberString = '0';
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
// TODO: 2) History based on each output and able to select them.
//          - Add buttons at top of buttons LOG, PREV, FORW, LOAD
//          - Make them accessible only accordingly to process of using calculator.
//          - Make an function to handle array of array, loading and going through the array.

// Mar 31
// - Added Del button and eventlistener. 
// - Added decimal button.
// - Change parseNumber to parseFloat. 
// - Add previous input and current input, build on calc log
// - Improve on appearance

// Note: I thought I could do list[-1] like in py to display last entry. Turns out that's not how it works in js, whoops. So instead I use arr[arr.length - 1] to display last entry.

// Note: Del would show NaN if used on a result, so modified it so it wouldn't affect the result or show NaN and Clear has to be used. New issue: First input shows no problem going to 0, but after operator is added, it shows NaN. Solved: It was because other would return blank strings, when originally the string has 0 in it.

// Note: I made an array to track calculations. I realized that it would be easier to store an array of arrays so it'd be easier to reuse the expression than break down a string.