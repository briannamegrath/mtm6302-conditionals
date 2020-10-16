// Elements
const $buttonContainer = document.getElementById('button-container')
const $equals = document.getElementById('equals')
const $formula = document.getElementById('formula')
const $answer = document.getElementById('answer')

// Funtions

function insertFormula (event) {
  console.log(event.target.textContent)
}

function equals () {
  console.log($formula.textContent)

  // declare variables
  let leftOperand = '1'
  let rightOperand = '2'
  let operation = '/'
  let operationSet = false

  // parse the formula
  for (const character of $formula.textContent) {
    if (operationSet === false) {
      if (character === '+' || character === '-' || character === '*' || character === '/') {
        operation = character
        operationSet = true
        continue
      }
    }

    if (operationSet === false) {
      leftOperand += character
    }

    if (operationSet === true) {
      rightOperand += character
    }
  }

  console.log(`leftOperand is: ${leftOperand}`)
  console.log(`operation is: ${operation}`)

  // Calculate the result
  let answer = 0

  if (operation === '+') {
    answer = parseInt(leftOperand) + parseInt(rightOperand)
  } else if (operation === '-') {
    answer = parseInt(leftOperand) - parseInt(rightOperand)
  } else if (operation === '*') {
    answer = parseInt(leftOperand) * parseInt(rightOperand)
  } else if (operation === '/') {
    answer = parseInt(leftOperand) / parseInt(rightOperand)
  }

  $answer.textContent = answer
  $formula.textContent = ''
}

// Event Listeners
$buttonContainer.addEventListener('click', insertFormula)
$equals.addEventListener('click', equals)
