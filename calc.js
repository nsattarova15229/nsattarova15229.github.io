const result = document.getElementById('result');

function appendNumber(number) {
    if (result.value === '0' || result.value === 'Error') {
        result.value = '';
    }
    result.value += number;
}

function appendOperator(operator) {
    const lastChar = result.value.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        result.value = result.value.slice(0, -1);
    }
    result.value += operator;
}

function appendDecimal(decimal) {
    const current = result.value.split(/[\+\-\*\/]/).pop();
    if (!current.includes(decimal)) {
        result.value += decimal;
    }
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value) || '0';
    } catch (error) {
        result.value = 'Error';
    }
}
