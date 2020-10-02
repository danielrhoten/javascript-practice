if ( 20 * true === 20 ) {
    console.log('true is basically 1')
}

if ( 20 * false === 0 ) {
    console.log('true is basically 0')
}

let a = 1;
let b = 2;

if (a > b) {
    console.log('this wont run')
}

if (a < b) {
    console.log('a is less than b')
}

if (a <= b) {
    console.log('this will run. 1 is less than or equal to 1')
}

if (a) {
    console.log('a does have value. it\'s truthy')
}

if (!a) {
    console.log('this is falsy')
}

if (a && b) {
    console.log('a and b both have value. truthy')
}

if (a || 0) {
    console.log('a has value but 0 does not')
}


switch (a) {
    case 0:
        console.log('0')
        break;
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
    default:
        console.log('none of the above')
}

a > b ? console.log('a is greater than b truthy') : console.log('a is not greater than b');

function manythings() {
    console.log(1);
    console.log(2);
}

function manythings2() {
    console.log(3);
    console.log(4);
}