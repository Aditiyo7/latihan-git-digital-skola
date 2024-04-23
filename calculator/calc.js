const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Cannot divide by zero';
    }
    return a / b;
}

function calculate(operation, a, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operation';
    }
}

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operation (+, -, *, /): ', (operation) => {
            const result = calculate(operation, parseFloat(num1), parseFloat(num2));
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});