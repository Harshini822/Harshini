// Question 2:
// Use the .at() method to get the last element of the array.
const arr = ['a','f','d',,'h','r'];
console.log(arr.at(-1));

// Question 3:
// Create a Map of student scores and use forEach() to log each student's name and score.

const scores = new Map([
  ['Steve', 76],
  ['Elena', 98],
  ['Jessica', 88],
  ['Alice', 67],
]);

scores.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
})

// Question 4:
// Create a Set of unique numbers and use forEach() to print each number.
const uniqueNumbers = new Set([23,43,22,82,23,9,4,32,2,82]);
uniqueNumbers.forEach(function(value,_,map){
  console.log(value);
});

// Question 1:
// Given an array of numbers, use the .map() method to double each number.
const arr = [3,2,4,5,8,7,1,9];
const result = arr.map(doubleNumber);
function doubleNumber(num){
  return num*num;
}
console.log(result);

// Question 5:
// Write a JavaScript function that creates a new <button> element with the text "Click Me" and adds it to the body.
function createButton(){
    const button = document.createElement("button");
    button.textContent = "Click Me";
    document.body.appendChild(button);
  }
  createButton();