const defaultResult = 0;
let currentResult = defaultResult;
let calcState = false; 

function getUserInputNumber() {
    return parseInt(userInput.value);
}

function createAndWriteCalcLog(operator, beforeCalcNumber, calcNumber) {
    let calcLog;

    if(beforeCalcNumber == 0){
        calcLog = calcNumber ;
    }else if ( calcNumber == 0 ) {
        calcLog = beforeCalcNumber ;
    }else {
        calcLog = `${beforeCalcNumber} ${operator} ${calcNumber}`;
    }

    if(isNaN(currentResult)){
        currentResult = "정의되지 않은 결과입니다."
        changeUserInputNumber(0);
    }

    outputResult(currentResult, calcLog);
    focusUserInputNumber();
    calcState = true;
    
}

function changeUserInputNumber(inputNumber) {
    userInput.value = inputNumber;
}

function focusUserInputNumber() {
    userInput.focus();
}

function vaildateUserInputNumber(inputNumber) {
    if (isNaN(inputNumber)) {
        alert("값을 입력후에 계산해주세요");
        return false;
    }
    
    if (typeof currentResult == 'string'){
        currentResult = 0;
    }

}

function add () {
    let inputNumber = getUserInputNumber();
    vaildateUserInputNumber(inputNumber);
    let beforeCalcNumber = currentResult;
    currentResult += inputNumber;
    createAndWriteCalcLog('+', beforeCalcNumber, inputNumber);
}

function subtract () {
    let inputNumber = getUserInputNumber();
    vaildateUserInputNumber(inputNumber);
    let beforeCalcNumber = currentResult;
    currentResult -= inputNumber;
    createAndWriteCalcLog('-', beforeCalcNumber, inputNumber);
}

function multiply () {
    let inputNumber = getUserInputNumber();
    vaildateUserInputNumber(inputNumber);
    let beforeCalcNumber = currentResult;
    currentResult *= inputNumber;
    createAndWriteCalcLog('*', beforeCalcNumber, inputNumber);
}

function divide () {
    let inputNumber = getUserInputNumber();
    vaildateUserInputNumber(inputNumber);
    let beforeCalcNumber = currentResult;
    currentResult /= inputNumber;
    createAndWriteCalcLog('/', beforeCalcNumber, inputNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

userInput.addEventListener('input', () => {
    let inputNumber = userInput.value;
    let firstInput = inputNumber.slice(0, 1);
    let lastInput = inputNumber.slice(-1);

    if(firstInput == 0){
        changeUserInputNumber(lastInput);
    }

    if (calcState){
        calcState = false;
        changeUserInputNumber(lastInput);
    }

});
