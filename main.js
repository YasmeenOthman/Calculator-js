let currentOperand = document.getElementById("input");
let previousOperand = document.getElementById("output");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");
let clearAllButton = document.querySelector(".clearAll");
let equalButton = document.querySelector(".equal");
let selectedOperation = null;

// pass the operation the user select
function selectedOperator(operation) {
  currentOperand.innerText === "";
  if (currentOperand.innerText === "") return;
  if (previousOperand.innerText !== "") {
    calculate();
    equal();
  }

  selectedOperation = operation;
  previousOperand.innerText = currentOperand.innerText + " " + operation;
  currentOperand.innerText = "";
}

function calculate() {
  let result;
  let num1 = parseFloat(previousOperand.innerText);
  let num2 = parseFloat(currentOperand.innerText);
  let op = selectedOperation;
  if (op === "-") {
    result = num1 - num2;
  } else if (op === "x") {
    result = num1 * num2;
  } else if (op === "÷" && num2 == 0) {
    return "Error";
  } else if (op === "÷" && num2 !== 0) {
    result = num1 / num2;
  } else if (op === "+") {
    result = num1 + num2;
  }

  return result;
}

function equal() {
  if (!currentOperand.innerText || !previousOperand.innerText) {
    return;
  }
  currentOperand.innerText = calculate();
  previousOperand.innerText = "";
}
function appendNumber(number) {
  currentOperand.innerText += number;
}

function clearAll() {
  previousOperand.innerText = "";
  currentOperand.innerText = "";
}

// add event listeners to an operator
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    selectedOperator(operator.innerText);
  });
});

// add event listeners to select a number
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
  });
});

equalButton.addEventListener("click", equal);

clearAllButton.addEventListener("click", clearAll);
