let operationPressed = "";
let previousNumber = 0;
let currentNumber = 0;

let changeDisplay = function(e){
    const pressedNumber = this.textContent;
    const display = document.getElementById("display");
    const displayValue = display.textContent;
    if (displayValue=="0"||displayValue=="+"||displayValue=="-"
            ||displayValue=="/"||displayValue=="x" || displayValue==""){
        display.textContent = pressedNumber;       
    } else {
        if(displayValue.length<15){
            display.textContent = displayValue + pressedNumber;
        }
    }
}

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => button.addEventListener("click", changeDisplay));

let displayDecimalPoint = function(e){
    const display = document.getElementById("display");
    const displayValue = display.textContent;
    if(!displayValue.includes(".")){
        display.textContent = displayValue + ".";    
    }
}

const pointButton = document.getElementById("button-point");
pointButton.addEventListener("click", displayDecimalPoint);

let deleteLastElement = function(e){
    const display = document.getElementById("display");
    const displayValue = display.textContent;
    if (displayValue.length == 1) {
        display.textContent = "0";
    } else display.textContent = displayValue.slice(0, -1);
}

const deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteLastElement);

let clear = function(e){
    const display = document.getElementById("display");
    display.textContent = "0";
    previousNumber = 0;
    currentNumber = 0;
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

let add = function(number1, number2){
    return number1+number2;
}

let subtract = function(number1, number2){
    return number1-number2;
}

let multiply = function(number1, number2){
    return number1*number2;
}

let divide = function(number1, number2){
    if (number2 == 0){
        return "lmao no way";
    } else return number1/number2;
}

let operate = function(operator, number1, number2){
    if (operator == "+") {return add(number1,number2);}
    if (operator == "-") {return subtract(number1,number2);}
    if (operator == "x") {return multiply(number1,number2);}
    if (operator == "/") {return divide(number1,number2);}
}

let pressOperation = function(e){
    /* operation button pressed for the first time */
    const display = document.getElementById("display");
    if(!operationPressed){
        previousNumber = parseFloat(display.textContent);
        display.textContent = this.textContent;
        operationPressed = this.textContent;
    } 
    /* operation button pressed later */
    else{
        currentNumber = parseFloat(display.textContent);
        if (isNaN(currentNumber)){
            currentNumber = parseFloat(previousNumber);  
        }
        previousNumber = operate(operationPressed, previousNumber, currentNumber);
        currentNumber = 0;
        display.textContent = this.textContent;
        operationPressed = this.textContent;
    }
}

const operationButtons = document.querySelectorAll(".operation-button");
operationButtons.forEach(button => button.addEventListener("click", pressOperation));

let pressEqual = function(e){
    const display = document.getElementById("display");
    currentNumber = parseFloat(display.textContent);
    if (isNaN(currentNumber)){
        currentNumber = 0;  
    }
    let result = operate(operationPressed, previousNumber, currentNumber);
    currentNumber = result;
    if (currentNumber.length>15){
        currentNumber = parseFloat(toString(currentNumber).slice(0,15));
    } 
    display.textContent = currentNumber;
    operationPressed = "";
}

const equalsButton = document.getElementById("button-equals");
equalsButton.addEventListener("click", pressEqual);