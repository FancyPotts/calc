let number = '';
let firstNum;
let operator;
let secondNum;

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const display = document.querySelector("#display");
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelector('.operate');

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    number += value;
    console.log(number);
  });
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