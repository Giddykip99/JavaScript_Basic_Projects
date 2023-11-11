/************The class with all the functionality*************/
export default class Calculator {
  
  constructor(prevOperand, currentOperand) {
    this.prevOperand = prevOperand;
    this.currentOperand = currentOperand;
    this.currentOperands = "";
    this.previousOperands = "";
    this.operation = undefined;
    this.sign=undefined;
  }

  /************This function takes in numbers and updates them on the screen*************/
  enterNumber(number) {
  
    if (number === "." && this.currentOperands.includes(".")) return;
    this.currentOperands = this.currentOperands.toString() + number.toString();
  }

  /************This function takes in operators and updates them on the screen*************/
  enterOperator(op) {
    if (this.currentOperands == "") return
    if (this.previousOperands !== ""){
      this.calculate();
    }
    this.operation = op;
    this.previousOperands = this.currentOperands;
    this.currentOperands = "";
    this.currentOperands = this.operation.toString() + ' '+' ';
  }

  /************This function updates the display when called upon*************/
  updateDisplay() {
    this.currentOperand.textContent = this.currentOperands;
    this.prevOperand.textContent = this.previousOperands;
  }

  /************This function clears everything on yhe display*************/
  clearDisplay() {
    this.currentOperands = "";
    this.previousOperands = "";
    this.operation = undefined;
  }

  /************This function makes all the calculations in the app*************/
  calculate() {
    const prev = parseFloat(this.previousOperands);
    const current = parseFloat(this.currentOperands.slice(1));

    let result;
    if (this.operation === "+") {
      result = prev + current;
    } else if (this.operation === "-") {
      result = prev - current;
    } else if (this.operation === "x") {
      result = prev * current;
    } else if (this.operation === "/") {
      result = prev / current;
    }else if(this.sign==='cos'){
       result= Math.cos(this.currentOperands * (Math.PI/180));
    }else if(this.sign==='sin'){
       result= Math.sin(this.currentOperands * (Math.PI/180));
    }else if(this.sign==='tan'){
       result= Math.tan(this.currentOperands * (Math.PI/180));
    }
    else {
      result = "syntax error";
    }
    this.currentOperands = result;
    this.operation=undefined;
    this.previousOperands = "";
  }

  // this function deletes the last digit to be enterd
  deleteSingleItem() {
    let index=this.currentOperands.length-1;
    this.currentOperands=this.currentOperands.substring(0,index);
  }


  solveSineOperation(sign){
    this.sign=sign;
    this.currentOperands=this.sign;
    this.previousOperands=this.currentOperands;
    this.currentOperands=''
  }
}
