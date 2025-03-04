//findIndex method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements1 = [200, 450, 400, 3000, 650, 130, 70, 1300];
console.log(movements.findIndex((mov) => mov === 450));
console.log(movements.indexOf(200)); //checks whether the array contains the element or not
//findLast method
console.log(movements.findLast((mov) => mov < 0));
//findLastIndex
console.log(movements.findLastIndex((mov) => mov < 0));

//equality
console.log(movements.includes(-130));
//condition
//some
console.log(movements.some((mov) => mov === -130));
const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);
console.log(movements.some((mov) => mov > 0));
//every
console.log(movements.every((mov) => mov > 0));
console.log(movements1.every((mov) => mov > 0));

//Separate callback
const deposits = (mov) => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.find(deposits));
console.log(movements.filter(deposits));

//flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[1, 2, 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

//without flatMap
const overall = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overall);
const overallBalance = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//sorting arrays
console.log(movements);
console.log(movements.sort()); //convert to string and sort
//Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

//instead use
// movements.sort((a, b) => {
//  a-b
// });
// console.log(movements);
//Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);
//instead use
// movements.sort((a, b) => {
//   b-a
// });
// console.log(movements);

//array grouping
const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);

//more ways of creating and filling arrays
console.log([1, 2, 3, 4]);
console.log(new Array(1, 2, 3, 4));
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));
x.fill(1);
console.log(x);
x.fill(1);
console.log(x);
const y = new Array(7);
y.fill(1, 3, 5);
console.log(y);

const z = Array.from({ length: 7 }, () => 1);
console.log(z);

const arrFrom = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arrFrom);
