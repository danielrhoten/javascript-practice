let isInputValid = false;
let number = 0;
const min = 5;
const max = 20;
while (isInputValid) {
    number = Number(prompt( message: 'enter a number'));

    if (number >= min && number <= max) {
        isInputValid = true;
    }
}

let attempts = 0;
promptForValidNumber();
function promptForValidNumber() {
    number = Number(prompt( message: 'enter a number'));

    if (number >= min && number <= max) {
        isInputValid = true;
    } else if(attempts > 4) { 
        alert('your just playing aroun.d')
        promptForValidNumber();
    } else {
        promptForValidNumber();
    }
}