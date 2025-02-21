//Question 1: Access Nested Properties Safely
// Use optional chaining (?.) to prevent errors when accessing address.city from the user object.

const user = {
  name: "Alice",
  profile: {
      email: "alice@example.com",
      // address is sometimes missing
  }
};

// Use optional chaining to get city safely

console.log(user.profile.email?.city);

// Question 2: Print Object Keys
// Write a function printKeys(obj) that prints all keys of the given object

const car = { brand: "Tesla", model: "Model S", year: 2023 };
const printKeys = function(obj){
  console.log(Object.keys(car));
}
printKeys();

// Question 3: Print Object Values
// Modify printValues(obj) to print all values of an object.

const book = { title: "JS Guide", author: "John", pages: 300 };
const printValues = function(obj){
  console.log(Object.values(car));
}
printValues();

// Question 4: Print Object Entries (Key-Value Pairs)
// Modify printEntries(obj) to print all key-value pairs of an object.

const laptop = { brand: "Apple", model: "MacBook", year: 2022 };
const printEntries = function(obj){
  console.log(Object.entries(car));
}
printEntries();

// Question 5: Remove Duplicates from an Array Using Sets
// Convert an array with duplicate values into a unique set of values.

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers)
// Convert to unique numbers using Set

console.log(uniqueNumbers); // Expected output: [1, 2, 3, 4, 5]

// Question 6: Check if a Set Contains a Value
// Create a Set of fruits and check if "Banana" is present in the Set.

const fruits = new Set(["Apple", "Banana", "Cherry"]);

// Check if "Banana" exists in the set
console.log(fruits.has("Banana")); // Expected output: true

// Question 7: Create and Retrieve Data from a Map
// Create a Map for storing student grades (name -> grade) and retrieve "John"'s grade.

const studentGrades = new Map();
studentGrades.set('John','90');


// Add students and their grades

console.log(studentGrades.get("John")); // Expected output: 90

// Question 8: Check if a Key Exists in a Map
// Modify the code below to check if "Bob" exists in the Map.

const users = new Map([
    ["Alice", "Admin"],
    ["John", "User"]
]);

// Check if "Bob" exists in the Map
console.log(users.has('Bob')); // Expected output: false

// Question 9: Iterate Over a Map and Print Key-Value Pairs
// Write a function to loop over a Map and print each key-value pair.

const countries = new Map([
    ["India", "New Delhi"],
    ["USA", "Washington D.C."]
]);
for(const [key, value] of countries){
  console.log(`Country: ${key}, Capital: ${value}`);
}
// Loop and print each country with its capital

// Question 10: Choose the Best Data Structure
// Select the most appropriate data structure (Array, Set, Object, or Map) for each scenario:

//A list of unique user IDs - Set
// A collection of key-value pairs where keys are unknown strings - Map
// A dataset with fast lookup of user preferences - Object
// A sorted list of top 5 players - Array