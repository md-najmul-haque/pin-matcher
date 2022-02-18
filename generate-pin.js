// generating pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    } else {
        return getPin();
    }
}

const displyPin = document.getElementById('pin')
const displyInput = document.getElementById('disply-input');

// set pin to disply
function generatePin() {
    const pin = getPin();
    displyPin.value = pin;
}

// get and set number to the display
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;

    if (isNaN(number)) {
        if (number == 'C') {
            displyInput.value = '';
        }
    } else {
        const previousNumber = displyInput.value;
        const newNumber = previousNumber + number;
        displyInput.value = newNumber;
    }

});

// Showing Error Message
document.getElementById('pin-fail').style.display = 'none';
document.getElementById('pin-success').style.display = 'none';

function verifyPin() {
    if (displyPin.value == displyInput.value) {
        document.getElementById('pin-fail').style.display = 'none'
        document.getElementById('pin-success').style.display = 'block'
    } else {
        document.getElementById('pin-fail').style.display = 'block'
        document.getElementById('pin-success').style.display = 'none'
    }
}
