const defaultResult = 0;
let currentResult = defaultResult;
let calcState = false; 

// 0 일때 나누기체크 0 인풋값 0인거 체크
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
