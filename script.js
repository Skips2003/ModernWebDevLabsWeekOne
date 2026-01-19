function getNumbers() {
    const num1 = parseFloat(document.getElementById('userIn').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function calculate(operation) {
    const { num1, num2 } = getNumbers();
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Please enter valid numbers in both fields.";
    }

    if (operation === 'divide' && num2 === 0) {
        return "Error: Cannot divide by zero.";
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";
            break;
        default:
            result = "Invalid operation.";
    }

    return result;
}

// Calculation Buttons
document.getElementById('add').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('add')}`;
});

document.getElementById('subtract').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('subtract')}`;
});

document.getElementById('multiply').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('multiply')}`;
});

document.getElementById('divide').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: ${calculate('divide')}`;
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('result').textContent = `Result: `;
});

// Number buttons
document.getElementById('one').addEventListener('click', () => {
    document.getElementById('userIn').append(1);
});

document.getElementById('two').addEventListener('click', () => {
    document.getElementById('userIn').append(2);
});

document.getElementById('three').addEventListener('click', () => {
    document.getElementById('userIn').append(3);
});

document.getElementById('four').addEventListener('click', () => {
    document.getElementById('userIn').append(4);
});

document.getElementById('five').addEventListener('click', () => {
    document.getElementById('userIn').append(5);
});

document.getElementById('six').addEventListener('click', () => {
    document.getElementById('userIn').append(6);
});

document.getElementById('seven').addEventListener('click', () => {
    document.getElementById('userIn').append(7);
});

document.getElementById('eight').addEventListener('click', () => {
    document.getElementById('userIn').append(8);
});

document.getElementById('nine').addEventListener('click', () => {
    document.getElementById('userIn').append(9);
});

document.getElementById('zero').addEventListener('click', () => {
    document.getElementById('userIn').append(0);
});