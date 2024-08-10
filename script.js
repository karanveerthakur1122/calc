let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function append(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        display.textContent = 'Error';
    }
}
