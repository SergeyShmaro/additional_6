module.exports = function zeros(expression) {
    let result = 0;
    let even = 0;
    let fives = 0;
    const exprArr = expression.split('*');
    for (let i = 0; i < exprArr.length; i++) {
        even += countModTwo(exprArr[i]);
        fives += countModFive(exprArr[i]);
    }
    result = Math.min(even, fives);
    return result;
}

const isDoubleFactorial = expression => {
    if (expression[expression.length - 2] === '!') {
        return true;
    }
    return false;
}

const isEvenDoubleFactorial = expression => {
    if (parseInt(expression, 10) % 2 === 0) {
        return true;
    }
    return false;
}

const countModTwo = expr => {
    const num = parseInt(expr, 10);
    const isDF = isDoubleFactorial(expr);
    const isEDF = isEvenDoubleFactorial(expr);
    let n = 0;
    let result = 0;
    while (Math.pow(2, n) <= num) {
        n++;
    }
    if (!isDF || (isDF && isEDF)) {
        for (let i = 1; i < n; i++) {
            result += Math.floor(num / Math.pow(2, i));
        }
    }
    return result;
}

const countModFive = expr => {
    const num = parseInt(expr, 10);
    const isDF = isDoubleFactorial(expr);
    const isEDF = isEvenDoubleFactorial(expr);
    let n = 0;
    let result = 0;
    let resultEDF = 0;
    while (Math.pow(5, n) <= num) {
        n++;
    }
    for (let i = 1; i < n; i++) {
        result += Math.floor(num / Math.pow(5, i));
    }
    if (isDF) {
        for (let i = 1; i < n; i++) {
            resultEDF += Math.floor(num / (Math.pow(5, i) * 2));
        }
        if (isEDF) {
            result = resultEDF;
        } else {
            result -= resultEDF;
        }
    }
    return result;
}
