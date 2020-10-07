let a = 4;
let b = 5;

const person = {
    name: 'test',
    age: 3,
}


function myFunction(number1, number2, myString) {
    const a = 4;
    const b = 5;
    return a + b;
} 

const myFunction2(number1, number2, myString) {
    return a + b;

const MyAnonFunction = (numnber, number2) {
    console.log(number, numnber2)
}

const MyFunction = (numnber, number2) => {
    console.log(number, numnber2)
}

function makeMultiple(multiplier) {
    const test = 4;
    return function(number) {
        return number * multiplier + test + a;
}

const makeDouble = makeMultiple (multiplier: 2);
const makeTriple = makeMultiple (multiplier: 3);
console.log(makeDouble(number: 10), makeTriple(number: 10)); 



function makeCounter() {
    let value = a;
    return function () {
        value+;
        console.log(value);
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1();
counter1()
