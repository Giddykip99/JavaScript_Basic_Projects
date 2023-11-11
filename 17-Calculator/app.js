import Calculator from "./Calculator.js";

/************Declearing the variables to be used****************/
const numbers = document.querySelectorAll(".numbers");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

const prevOperand = document.querySelector(".display-prev");
const currentOperand = document.querySelector(".display-next");
const delete1 = document.querySelector(".delete");

const sineOperations = document.querySelectorAll(".sineoperations");


/**********Here we initialise the class calculator*************/
const calculation= new Calculator(prevOperand,currentOperand);

/************This are all eventListeners*************/

//this event listener adds a click event to all numbers buttons
numbers.forEach(number=>{
  number.addEventListener('click',()=>{
    calculation.enterNumber(number.textContent);
    calculation.updateDisplay();
  });
});

//this event listener adds a click event to all operation buttons
operator.forEach(op=>{
  op.addEventListener('click',()=>{
    calculation.enterOperator(op.textContent);
    calculation.updateDisplay();
  });
});

//this is an eventlistener to the equals to button to make computation
equal.addEventListener('click',()=>{
  calculation.calculate();
  calculation.updateDisplay();
});

//this event listener is for the clear button clears the display
clear.addEventListener('click',()=>{
  calculation.clearDisplay();
  calculation.updateDisplay();
});

//this function delete the last digit of the current number being typed in
delete1.addEventListener('click',()=>{
  calculation.deleteSingleItem();
  calculation.updateDisplay();
});

//this function takes in the cosine,sine and tan operation
sineOperations.forEach(operations => {
  operations.addEventListener('click',()=>{
    let sign=operations.textContent;
    calculation.solveSineOperation(sign);
    calculation.updateDisplay();
  });
  
});

