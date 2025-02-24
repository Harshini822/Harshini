// Q1: Extract the first 5 characters from the string "JavaScript Developer" using slice().
console.log('JavaScript Developer'.slice(0, 5));

// Q2: Replace the word "bad" with "good" in the string "This is a bad idea.".
const str = 'This is a bad idea';
console.log(str.replace('bad', 'good'));

// Q3: Convert "hello" into "Hello" by capitalizing only the first letter.
const message = 'hello';
const firstUpper = message[0].toUpperCase() + message.slice(1);
console.log(firstUpper);

// Q4: Find the index of the word "code" in the string "I love to code in JavaScript.".

const word = 'I love to code in JavaScript.';
console.log(word.indexOf('code'));

// Q5: Remove leading and trailing spaces from the string " Trim this! ".

console.log(' Trim this! '.trim());

// Q6: Check if the string "Learning JavaScript" starts with "Learn".
if ('Learning JavaScript'.startsWith('Learn')) {
  console.log('It starts with Learn');
} else {
  console.log("It doesn't starts with Learn");
}

// Q7: Repeat the string "Hello " 3 times using a string method.

console.log('Hello '.repeat(3));

// Q8: Split "apple,banana,grape" into an array of words.
console.log('apple,banana,grape'.split(','));

// Q9: Join the array ["I", "love", "JavaScript"] into a single sentence.
console.log('I', 'love', 'JavaScript'.split(',').join(' '));

// Q10: Count the number of occurrences of "a" in "banana".
const strfruits = 'banana';
let count = 0;

for (const char of strfruits) {
  if (char === 'a') count++;
}

console.log(count);

// Q11: Convert "javascript" into uppercase and "HTML" into lowercase in one line
console.log('Javascript'.toUpperCase(), 'Html'.toLowerCase());

// Q12: Replace all occurrences of "dog" with "cat" in the string "dog dog dog" using a regex.
const animal = 'dog dog dog';
console.log(animal.replace(/dog/g, 'cat'));

// Q13: Extract the domain name from the email "john.doe@gmail.com".
const email = 'john.doe@gmail.com';
const domain = email.split('@')[1];
console.log(domain);

// Q14: Reverse the string "JavaScript" using built-in methods.
const revStr = 'JavaScript';
const reversedStr = revStr.split('').reverse().join('');
console.log(reversedStr);

// Q15: Check if "12345" is a numeric string (contains only digits).
const isNumeric = !isNaN('12345');
console.log(isNumeric);

// Q16: Create a function greet(name = "Guest") that logs "Hello, Guest" if no name is provided.
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet();
greet('John');

// Q17: Modify the function sum(a, b = 5) so that if only one number is given, it adds 5 to it.
function sum(a, b = 5) {
  return a + b;
}
console.log(sum(10));
console.log(sum(10, 3));

// Q18: Implement a function that converts USD to INR, assuming 1 USD = 83 INR by default.
function inrToUsd(usd, inr = 83) {
  return inr * usd;
}
console.log(inrToUsd(5));
console.log(inrToUsd(10, 85));
