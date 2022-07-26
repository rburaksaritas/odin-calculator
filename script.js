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