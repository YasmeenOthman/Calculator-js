let currentOperand = document.getElementById("input");
let previousOperand = document.getElementById("output");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");
let clearAllButton = document.querySelector(".clearAll");
let equalButton = document.querySelector(".equal");
let selectedOperation = null;

// add event listeners to select a number and operator
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    selectedOperator(operator.innerText);
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    // add the clicked number to the output screen
    currentOperand.innerText += number.innerText.toString();

    display();
  });
});

// pass the operation the user select
function selectedOperator(operation) {
  if (currentOperand.innerText === "") return;
  if (previousOperand.innerText !== "") {
    calculate();
  }
  selectedOperation = operation;
  previousOperand.innerText = currentOperand.innerText;
  currentOperand.innerText = "";
}

// display
function display() {
  previousOperand.innerText = previousOperand.innerText;
  currentOperand.innerText = currentOperand.innerText;
}

function calculate(num1, num2, op) {
  let result;
  num1 = parseFloat(previousOperand.innerText);
  num2 = parseFloat(currentOperand.innerText);
  op = selectedOperation;
  if (op === "-") {
    result = num1 - num2;
  }
  console.log(result);
  return result;
}

calculate();
