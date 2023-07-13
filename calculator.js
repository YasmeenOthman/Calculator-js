let currentOperand = document.getElementById("input");
let previousOperand = document.getElementById("output");
let operators = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(".number");
let clearAllButton = document.querySelector(".clearAll");
let equalButton = document.querySelector(".equal");
let selectedOperation = null;

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

function calculate(num1, num2, op) {
  let result;
  num1 = parseFloat(previousOperand.innerText);
  num2 = parseFloat(currentOperand.innerText);
  op = selectedOperation;
  if (op === "-") {
    result = num1 - num2;
  } else if (op === "x") {
    result = num1 * num2;
  } else if (op === "÷" && num2 !== 0) {
    result = num1 / num2;
  } else if (op === "+") {
    result = num1 + num2;
  }
  console.log(result);
  return result;
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
    // add the clicked number to the output screen
    currentOperand.innerText += number.innerText;
  });
});

equalButton.addEventListener("click", function () {
  currentOperand.innerText = calculate();
  previousOperand.innerText = "";
});

clearAllButton.addEventListener("click", function () {
  currentOperand.innerText = "";
  previousOperand.innerText = "";
});
