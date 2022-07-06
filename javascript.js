function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    if(operator === "+"){
        return add(num1, num2);
    }
    else if(operator === "-"){
        return subtract(num1, num2);
    }
    else if(operator === "*"){
        return multiply(num1, num2);
    }
    else if(operator === "/"){
        return divide(num1, num2);
    }
    else{
        return "Error";
    }
}

function displayNumber(num){
    const display = document.querySelector("#display");
    if(display.textContent.length === 1 && display.textContent === "0"){
        display.textContent = num;
    }
    else{
        display.textContent += num;
    }
}

function clearDisplay(){
    const display = document.querySelector("#display");
    display.textContent = 0;
}

function getDisplayValue(){
    return document.querySelector("#display").textContent;
}

function displayOperator(operator){
    const display = document.querySelector("#display");
    
    let lastChar = display.textContent[display.textContent.length-1];
    
    if( (lastChar !== operator) && (Number.isInteger(parseInt(lastChar)) === false)){
        console.log(lastChar);
        let displayString = display.textContent;
        let str = displayString.slice(0, -1);
        display.textContent = str + operator;
    }
    else if(Number.isInteger(parseInt(lastChar)) === true){
        
        display.textContent += operator;
    }
}



