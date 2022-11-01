const defaultResult = 0;
let currentResult = defaultResult;
let calcState = false;
let logEntries = [];

function getUserInputNumber() {
    return parseInt(userInput.value);
}

function createAndWriteCalcLog(operator, beforeCalcNumber, calcNumber) {
    let calcLog = `${beforeCalcNumber} ${operator} ${calcNumber}`;

    if (beforeCalcNumber == 0) {
        calcLog = calcNumber;
    } else if (calcNumber == 0 && operator != "/") {
        calcLog = beforeCalcNumber;
    }

    if (isNaN(currentResult)) {
        currentResult = "정의되지 않은 결과입니다.";
    }

    if (currentResult == Infinity) {
        currentResult = "0으로 나눌 수 없습니다.";
    }

    outputResult(currentResult, calcLog);
    focusUserInputNumber();
    calcState = true;
}

function writeToLog(operationIdentifier, prevResult, orperationNumber, result) {
    const logEntry = {
        operationIdentifier,
        prevResult,
        orperationNumber,
        result,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
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

    if (typeof currentResult == "string") {
        currentResult = 0;
    }

    return true;
}

function add() {
    let inputNumber = getUserInputNumber();
    if (!vaildateUserInputNumber(inputNumber)) {
        return false;
    }
    let beforeCalcNumber = currentResult;
    currentResult += inputNumber;
    createAndWriteCalcLog("+", beforeCalcNumber, inputNumber);
    writeToLog("ADD", beforeCalcNumber, inputNumber, currentResult);
}

function subtract() {
    let inputNumber = getUserInputNumber();
    if (!vaildateUserInputNumber(inputNumber)) {
        return false;
    }
    let beforeCalcNumber = currentResult;
    currentResult -= inputNumber;
    createAndWriteCalcLog("-", beforeCalcNumber, inputNumber);
    writeToLog("ADD", beforeCalcNumber, inputNumber, currentResult);
}

function multiply() {
    let inputNumber = getUserInputNumber();
    if (!vaildateUserInputNumber(inputNumber)) {
        return false;
    }
    let beforeCalcNumber = currentResult;
    currentResult *= inputNumber;
    createAndWriteCalcLog("*", beforeCalcNumber, inputNumber);
    writeToLog("ADD", beforeCalcNumber, inputNumber, currentResult);
}

function divide() {
    let inputNumber = getUserInputNumber();
    if (!vaildateUserInputNumber(inputNumber)) {
        return false;
    }
    let beforeCalcNumber = currentResult;
    currentResult /= inputNumber;
    createAndWriteCalcLog("/", beforeCalcNumber, inputNumber);
    writeToLog("ADD", beforeCalcNumber, inputNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

userInput.addEventListener("input", () => {
    let inputNumber = userInput.value;
    let firstInput = inputNumber.slice(0, 1);
    let lastInput = inputNumber.slice(-1);

    if (firstInput == 0) {
        changeUserInputNumber(lastInput);
    }

    if (calcState) {
        calcState = false;
        changeUserInputNumber(lastInput);
    }
});

// undefined = 초기화된 변수의 기본값, 값이 없다, 직접 값으로 할당 X 
// null = 절대 기본값이 될수 없음, 변수정리나,초기화시 사용
// NaN = Not a Number, 숫자가 아님, 숫자가 아닌 값을 숫자로 변환하려고 할때 발생
// defer = HTML 파싱이 끝나면 실행 
// async = HTML 파싱과 병렬로 실행
// DOMContentLoaded = HTML 파싱이 끝나면 실행
// load = HTML 파싱과 병렬로 실행, 이미지, 스크립트, CSS등의 리소스가 모두 로드되면 실행
// addEventListener = 이벤트 리스너를 등록하는 메서드
// preventDefault = 이벤트의 기본 동작을 막는 메서드
// stopPropagation = 이벤트의 전파를 막는 메서드