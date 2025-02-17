//1. Basic Operators

let a = Number(prompt('Enter input 1:'));
let b = Number(prompt('Enter input 2:'));
console.log(`Sum : ${a + b}`);
console.log(`Difference : ${a - b}`);
console.log(`Product : ${a * b}`);
console.log(`Quotient : ${a / b}`);

//2. if-else, Truthy/Falsy

// let num = '';

// if(Boolean(num) == false)
// {
//     console.log('Falsy input');
// }
// else if(num%2 == 0)
// {
//     console.log('Even');
// }
// else if(num%2 != 0)
// {
//     console.log('Odd');
// }

//ouptut - falsy input

//2. if-else, Truthy/Falsy

let num = 9;

if (Boolean(num) == false) {
  console.log('Falsy input');
} else if (num % 2 == 0) {
  console.log('Even');
} else if (num % 2 != 0) {
  console.log('Odd');
}

//3.Type Conversion

let str = '123';
console.log(+str + 10);

// //5. Boolean Logic

// let n = 2;
// const op = (n>=10 && n<=50) ? "The number is between 10 and 50" : "The number is not between 10 and 50";
// console.log(op);

//Output - The number is not between 10 and 50

//5. Boolean Logic

let n = 12;
const op =
  n >= 10 && n <= 50
    ? 'The number is between 10 and 50'
    : 'The number is not between 10 and 50';
console.log(op);

//4.Equality Operators
//Q: What will be the output of the following code? Why?

console.log(5 == '5');
console.log(5 === '5');
//5=="5" is true because it checks only for the value and in JS the type is converted and checks for the value alone.
//5==="5" is false because it checks for both value and datatype.


//6. Switch Case

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;
    
}

//7. Ternary Operator
let age = 18;
console.log(age>=18 ? "Adult" : "Minor");

//8. Strict Mode
// function sum(a,b)
// {
//     c = 8;
//     console.log(a+b+c);
// }
// console.log(sum(2,7));
// output-
// 17
// undefined


//8. Strict Mode

"use strict"
function sum(a,b)
{
    c = 8;
    console.log(a+b+c);
}
console.log(sum(2,7));

//error

//9. Function Declaration vs. Expression
function square(num)
{
    return num*num;
}
console.log(square(7));
 
const square1 = function(num){
  return num*num;
}
console.log(square1(9));

//10. Arrow Function
// function greet(name) {
//     return "Hello, " + name;
// }
const greet = (name) => {
  return "Hello, " + name;
}
console.log(greet("Harshini"));

//11. Arrays and Methods
const colors = ['pink', 'blue', 'red'];
console.log(colors);
colors.push('black');
console.log(colors);

//12.Objects (Dot vs. Bracket Notation)
const person ={
  name : 'Harsh',
  age : 20
};
console.log(person.name);
console.log(person['name']);

//13. For Loop

for(let i=1;i<=5;i++){
  console.log(i);
}

//14. Looping Arrays
const arr = [2, 4, 7, 5, 9, 0];
for(let i=0;i < arr.length;i++)
{
    console.log(arr[i]);
}

// 15. Debugging
// Q: Debug the following code (it should print numbers from 1 to 5).

// for (let i = 1; i <= 5; i++); {
//     console.log(i);
// }

for (let i = 1; i <= 5; i++){
  console.log(i);
}

