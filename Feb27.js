// 1. map() - Transforming Data
// Question:
// You have an array of numbers. Use map() to square each number.

const numbers = [2, 3, 4, 5];
const square = numbers.map(number=>number*number);
console.log(square);

// 3. filter() - Get Even Numbers
// Question:
// Given an array of numbers, use filter() to get only even numbers.

const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(number => number%2 ==0);
console.log(even);

// 4. filter() - Active Users
// Question:
// Given an array of user objects, use filter() to return only active users.

const users = [
    { name: "Madhav", active: true },
    { name: "Krishna", active: false },
    { name: "Anjali", active: true }
  ];
  
  const activeUsers = users.filter(user => user.active==true);
  console.log(activeUsers);
  // Expected output: [{ name: "Madhav", active: true }, { name: "Anjali", active: true }]
  

// 5. reduce() - Sum of Numbers
// Question:
// Use reduce() to find the sum of an array of numbers.

const numbers = [10, 20, 30, 40];
const sumNumbers = numbers.reduce((acc,cur) => acc+cur,0);
console.log(sumNumbers);
// Expected output: 100

// 2. Computing Usernames (map())
// Question:
// Given an array of user objects, use map() to generate usernames in lowercase with the first letter of the last name.

const users = [
    { firstName: "Madhav", lastName: "Krishna" },
    { firstName: "Anjali", lastName: "Singh" },
    { firstName: "Vikram", lastName: "Sharma" }
  ];
  
  const username = users.map(user => user.firstName.toLowerCase() + user.lastName[0].toLowerCase());
  console.log(username);
  
  // Expected output: ["madhavk", "anjalis", "vikrams"]




// 8. find() - Finding a User by Name
// Question:
// Use find() to get the user object for "Anjali" from an array of users.

const users = [
    { name: "Madhav", age: 27 },
    { name: "Anjali", age: 25 },
    { name: "Krishna", age: 30 }
  ];
  const findUser = users.find(user => user.name == "Anjali")
  console.log(findUser);

  
// 9. find() - Checking if a Product is Available
// Question:
// You have an array of products. Use find() to get the first product with stock > 0.

const products = [
    { name: "Laptop", stock: 0 },
    { name: "Phone", stock: 10 },
    { name: "Tablet", stock: 5 }
  ];
  
  const findStock = products.find(product=> product.stock>0)
  console.log(findStock);
  
  // Expected output: { name: "Phone", stock: 10 }

  // 7. Chaining Methods (map(), filter(), reduce())
// Question:
// Use map(), filter(), and reduce() together to:

// First, filter even numbers
// Then, double them using map()
// Finally, sum them using reduce()

const numbers = [1, 2, 3, 4, 5, 6];
const chaining = numbers.filter(number=>number%2==0)
  .map(number=> 2*number)
  .reduce((acc,number)=> acc+number,0);
console.log(chaining);

// Expected output: 24 (2 → 4, 4 → 8, 6 → 12, sum = 24)


// 6. reduce() - Grouping Data
// Question:
// Use reduce() to group users by their roles.

const users = [
    { name: "Madhav", role: "admin" },
    { name: "Anjali", role: "user" },
    { name: "Krishna", role: "admin" },
    { name: "Vikram", role: "user" }
  ];
  
  const group = users.reduce((acc, user) => {
    (acc[user.role] = acc[user.role] || []).push(user);
    return acc;
  }, {});
  console.log(group);
  
  /* Expected output:
  {
    admin: ["Madhav", "Krishna"],
    user: ["Anjali", "Vikram"]
  }
  */
  
  
  