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
    if(b === 0){
        return "Cannot divide by zero";
    }
    else{
        return a / b;
    }
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
    else if(operator === ''){
        return num1;
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
        let displayString = display.textContent;
        let str = displayString.slice(0, -1);
        display.textContent = str + operator;
    }
    else if(Number.isInteger(parseInt(lastChar)) === true){
        
        display.textContent += operator;
    }
}

function decimalCount(num){
    const numStr = String(num);
    if(numStr.includes('.')){
        return numStr.split('.')[1].length;
    }
    return 0;
}

function equals(){
    const display = document.querySelector("#display");
    let displayText = display.textContent;
    let displayTextLength = display.textContent.length;
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    let operatorCount = 0;
    let answer = 0;
    for(let i = 0; i < displayTextLength; i++){
        if( Number.isInteger(parseInt(displayText[i])) === true && (operator === '')){
            num1 += displayText[i];
        }
        else if((displayText[i] === ".") && (operator === '')){
            num1 += displayText[i];
        }
        else if((displayText[i] === ".") && (operator !== '')){
            num2 += displayText[i];
        }
        else if(Number.isInteger(parseInt(displayText[i])) === false && operatorCount == 0){
            operator = displayText[i];
            operatorCount++;
        }
        else if(Number.isInteger(parseInt(displayText[i])) === false && operatorCount >= 1){
            num1 = operate(operator,parseFloat(num1),parseFloat(num2));
            num2 = 0;
            operator = displayText[i];
        }
        else if(Number.isInteger(parseInt(displayText[i])) === true && (operator !== ''))
        {
            num2 += displayText[i];
        }
    }

    answer = operate(operator,parseFloat(num1),parseFloat(num2));
    if(decimalCount(answer) >= 4){
        display.textContent = answer.toFixed(3);
    }
    else{
        display.textContent = answer;
    }
    
}




