let numberString = '0'
let number = 0
let firstNum = 0
let operator = ''
let secondNum = 0
let calcHistory = []
let when = 0
let logged = {}
let result = 0
let action = ''

const sum = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const opButtons = document.querySelectorAll('.operate')
const numButtons = document.querySelectorAll('.num')
const logControl = document.querySelectorAll('.log')
const previousDisplay = document.getElementById('previousDisplay')
const currentDisplay = document.getElementById('currentDisplay')
const equals = document.getElementById('equal')
const clear = document.getElementById('clear')
const del = document.getElementById('del')

logControl.forEach(button => {
  button.addEventListener('click', () => {
    action = button.textContent
    history()
  })
})

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent
    numberString += value
    number = parseFloat(numberString)
    currentDisplay.textContent = number
  })
})

opButtons.forEach(button => {
  button.addEventListener('click', function () {
    if (when === 0) {
      operator = button.textContent
      firstNum = number
      numberString = '0'
      currentDisplay.textContent = number
    } else {
      operator = button.textContent
      firstNum = calcHistory[when].result
      currentDisplay.textContent = calcHistory[when].result
    }
  })
})

del.addEventListener('click', () => {
  if (numberString === '0') {
    return
  } else if (number > 0 || number < 0) {
    numberString = numberString.slice(0, -1)
    number = parseFloat(numberString)
    currentDisplay.textContent = number
  }
})

clear.addEventListener('click', () => {
  if (numberString === '0' && previousDisplay.textContent === 'Press C again to clear all') {
    firstNum = 0
    secondNum = 0
    number = 0
    numberString = '0'
    calcHistory = []
    logged = {}
    currentDisplay.textContent = 0
    previousDisplay.textContent = ''
  } else if (numberString === '0' && previousDisplay.textContent !== '') {
    numberString = '0'
    previousDisplay.textContent = 'Press C again to clear all'
    currentDisplay.textContent = 'else press Curr to keep'
  } else {
    numberString = '0'
    currentDisplay.textContent = 0
  }
})

equals.addEventListener('click', () => {
  secondNum = number
  result = operate(firstNum, operator, secondNum)
  log(firstNum, operator, secondNum, result)
  number = calcHistory[0].result
  currentDisplay.textContent = calcHistory[0].result
  previousDisplay.textContent = calcHistory[0].firstNum + calcHistory[0].operator + calcHistory[0].secondNum
  numberString = '0'
  when = 0
})

function operate (firstNum, operator, secondNum) {
  if (operator === '*') {
    return multiply(firstNum, secondNum)
  } else if (operator === '/') {
    if (secondNum === 0 || firstNum === 0) {
      return 0
    }
    return divide(firstNum, secondNum)
  } else if (operator === '+') {
    return sum(firstNum, secondNum)
  } else if (operator === '-') {
    return subtract(firstNum, secondNum)
  }
};

function log (firstNum, operator, secondNum, result) {
  logged = {
    firstNum,
    operator,
    secondNum,
    result
  }
  calcHistory.unshift(logged)
};

function history () {
  if (calcHistory.length <= 1) {
    return
  } else {
    if (action === 'Previous') {
      if (when < calcHistory.length && when + 1 != calcHistory.length) {
        when += 1
        previousDisplay.textContent = calcHistory[when].firstNum + calcHistory[when].operator + calcHistory[when].secondNum
        currentDisplay.textContent = calcHistory[when].result
      } else {
        return
      }
    } else if (action === 'Forward') {
      if (when === 0) {
        return
      } else if (when > 0) {
        when -= 1
        previousDisplay.textContent = calcHistory[when].firstNum + calcHistory[when].operator + calcHistory[when].secondNum
        currentDisplay.textContent = calcHistory[when].result
      }
    } else if (action === 'Current') {
      when = 0
      previousDisplay.textContent = calcHistory[when].firstNum + calcHistory[when].operator + calcHistory[when].secondNum
      currentDisplay.textContent = calcHistory[when].result
    } else if (action === 'Load') {
      firstNum = calcHistory[when].firstNum
      operator = calcHistory[when].operator
      secondNum = calcHistory[when].secondNum
      result = calcHistory[when].result
      log(firstNum, operator, secondNum, result)
      number = result
      when = 0
    }
  }
};

// TODO: 1) Keyboard support
// TODO: 2) History based on each output and able to select them.
//          - Make them accessible only accordingly to process of using calculator.
// TODO: 3) Remove All Clear messages when using numbers instead of just Curr.

// Mar 31
// - Added Del button and eventlistener.
// - Added decimal button.
// - Change parseNumber to parseFloat.
// - Add previous input and current input, build on calc log
// - Improve on appearance
// - Add log buttons
// April 1
// - Change history to array of objects and refactor code accordingly
// - Add function to access history
// - Made history function, log function all that jazz work.
// - Add warning prompt and to press clear again for AC function.
// - Add hover effect on buttons.
// - Add font for display.

// Note: I thought I could do list[-1] like in py to display last entry. Turns out that's not how it works in js, whoops. So instead I use arr[arr.length - 1] to display last entry.

// Note: Del would show NaN if used on a result, so modified it so it wouldn't affect the result or show NaN and Clear has to be used. New issue: First input shows no problem going to 0, but after operator is added, it shows NaN. Solved: It was because other would return blank strings, when originally the string has 0 in it.

// Note: I made an array to track calculations. I realized that it would be easier to store an array of arrays to reuse the expression than break down a string.

// Note: Cannot store object from an array in a variable?

// Its interesting to see how if you're not cautious, especially while refactoring code, to get unintented outputs, but with an understanding of how the process works, its easy to zero in the reason why something is happening.