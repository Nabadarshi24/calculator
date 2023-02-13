var n1, n2, op;
var needClear = false;


function calculator(inputValue) {
    if (inputValue == 0) {
        if (checkZero()) {
            return;
        }
    }

    if (inputValue == ".") {
        if (checkDecimal()) {
            return;
        }
    }

    if (document.getElementById("display").innerHTML == "0" && inputValue != ".") {
        document.getElementById("display").innerHTML = "";
    }

    if (needClear == true) {
        if (inputValue == ".") {
            document.getElementById("display").innerHTML = "0.";
        } else {
            document.getElementById("display").innerHTML = inputValue;
        }
        needClear = false;
    } 
    else {
        document.getElementById("display").innerHTML += inputValue;
    } 
}

function checkZero() {
    if (document.getElementById("display").innerHTML == "0") {
        document.getElementById("display").innerHTML = 0;

        return true;
    }
}

function checkDecimal() {
    if (document.getElementById("display").innerHTML.includes(".")) {
        return true;
    }
}

function onOperatorClick(operator) {
    n1 = parseFloat(document.getElementById("display").innerHTML);
    op = operator;
    needClear = true;
}

function Delete() {
    document.getElementById("display").innerHTML = "0";
    n1 = "";
    n2 = "";
    op = "";
}

function addNumbers(p1, p2) {
    return p1 + p2;
}

function subNumbers(p1, p2) {
    return p1 - p2;
}

function multiplyNumbers(p1, p2) {
    return p1 * p2;
}

function divNumbers(p1, p2) {
    return p1 / p2;
}

function modNumbers(p1, p2) {
    return p1 % p2;
}

function doOperation(operator) {
    let result
    console.log(operator);

    if (operator == "+") {
        console.log("doOp");
        result = addNumbers(n1, n2);
    }
    else if (operator == "-") {
        result = subNumbers(n1, n2);
    }
    else if (operator == "*") {
        result = multiplyNumbers(n1, n2);
    }
    else if (operator == "/") {
        result = divNumbers(n1, n2);
    }

    console.log(result);

    document.getElementById("display").innerHTML = result;
}

function result1() {
    n2 = parseFloat(document.getElementById("display").innerHTML);
    doOperation(op);
}
