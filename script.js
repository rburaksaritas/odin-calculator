let changeDisplay = function(e){
    const pressedNumber = this.textContent;
    const display = document.getElementById("display");
    const displayValue = display.textContent;
    if (displayValue=="0"||displayValue=="+"||displayValue=="-"
            ||displayValue=="/"||displayValue=="x"){
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
    /** TODO: delete stored numbers in memory 
     * after functionality is implemented
    */
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

