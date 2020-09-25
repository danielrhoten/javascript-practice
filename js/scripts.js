let selectedObject = null;

let score = 0;
let myName = 'Daniel';
let isActive = null;

let object = {
    score: 0,
    myName: 'Daniel',
    isActive: true,
};

let array =[0, 'Daniel', true];

array.push('x');

object.age = 99;

const button = document.querySelector(selectors, 'button'); 

document.querySelector(selectors, 'button').innertext = array[0];

button.innerText = object.myName;
button.style.color = 'red';



logScore();
addOne();
logScore();

function addOne() {
    score++;
}

function logScore() {
    console.log(score);
}

