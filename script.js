let changeDisplay = function(e){
    const pressedNumber = this.textContent;
    const display = document.getElementById("display");
    const displayValue = display.textContent;
    if (displayValue=="0"||displayValue=="+"||displayValue=="-"
            ||displayValue=="/"||displayValue=="x"){
        display.textContent = pressedNumber;       
    } else {
        display.textContent = display.textContent + pressedNumber;
    }
}

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => button.addEventListener("click", changeDisplay));

