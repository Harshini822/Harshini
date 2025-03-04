
// 3. Using findIndex()
// Q: Find the index of the first negative number in an array.

const numbers = [4, 2, -5, 8, -10];

const index = numbers.findIndex((num) => num < 0);

console.log(index); // Should return 2 (index of -5)

// 4. Using findLast() (ES2023)
// Q: Find the last even number in an array.

const nums = [1, 3, 7, 10, 5, 8];

const lastEven = nums.findLast((num) => num % 2 === 0);

console.log(lastEven); // Should return 8


// 5. Using findLastIndex() (ES2023)
// Q: Find the last index of a number greater than 10 in an array.

const numbers = [5, 12, 8, 20, 15, 7];

const lastIndex =  numbers.findLastIndex((num) => num > 10);

console.log(lastIndex); // Should return 4 (index of 15)

// 6. Using some() and every()
// Q1: Check if at least one number in an array is negative. Q2: Check if all numbers in an array are positive.

const arr = [10, -2, 30, 5];

const hasNegative = arr.some(a=>a<0);
const allPositive = arr.every(a=>a<0);

console.log(hasNegative); // true
console.log(allPositive); // false

// 7. Using flat()
// Q: Flatten a nested array to a single-level array.

const nestedArr = [1, [2, 3], [4, [5, 6]]];

const flatArray = nestedArr.flat(2);

console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// 8. Using flatMap()
// Q: Given an array of words, return an array of all characters.

const words = ["hello", "world"];

const characters = words.flatMap(word=>word.split(''))

console.log(characters); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// 9. Sorting Arrays (sort())
// Q: Sort an array of numbers in descending order.

const nums = [10, 3, 7, 2, 8];

const sortedNums = nums.sort((a,b)=>b-a);

console.log(sortedNums); // [10, 8, 7, 3, 2]

// 10. Array Grouping (groupBy())
// Q: Group an array of people by their age.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
  ];
  
  const groupedByAge = Object.groupBy(people, p=>p.age)
  
  console.log(groupedByAge);
  /*
  {
    25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
    30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }]
  }
  */

// 11. More Ways of Creating & Filling Arrays
// Q: Create an array of length 5, filled with 0.

const arr = new Array(5);
arr.fill(0);

console.log(arr); // [0, 0, 0, 0, 0]

// 1. Implementing Login (Basic Authentication Check)
// Q: Given an array of user objects with username and password, write a function that checks if the given username and password match any user in the array.

const users = [
    { username: 'madhav', password: '12345' },
    { username: 'john_doe', password: 'qwerty' },
    { username: 'alice', password: 'password' },
  ];
  
  function login(username, password) {
    const result = users.find(user => user.username === username);
    return result?.password === password;
    }
  
  
  console.log(login('madhav', '12345')); // true
  console.log(login('alice', 'wrongpass')); // false

  // 2. Implementing Transfer (Bank Transaction)
// Q: You have an array of accounts. Write a function that transfers money from one account to another if sufficient balance is available.

const accounts = [
    { id: 1, name: "Madhav", balance: 5000 },
    { id: 2, name: "Alice", balance: 3000 }
  ];
  
  function transfer(fromId, toId, amount) {
    const sender = accounts.find(acc => acc.id === fromId);
    const receiver = accounts.find(acc => acc.id === toId);
  
    if (!sender || !receiver) {
      console.log("Invalid account ID");
      return;
    }
  
    if (sender.balance >= amount) {
      sender.balance -= amount;
      receiver.balance += amount;
      console.log(`Transferred ₹${amount} from ${sender.name} to ${receiver.name}`);
    } else {
      console.log("Insufficient balance");
    }
  }
  
  transfer(1, 2, 2000);
  console.log(accounts);
  // Madhav's balance should decrease, Alice's should increase
  
  
  


