//the map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function(mov){
//   return mov*eurToUsd;
// });
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

//or
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDesc = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementsDesc);

//computing username
const user = 'Steven Thomas Williams';
const username = user
  .toLowerCase()
  .split(' ')
  .map((name) => name[0])
  .join('');
console.log(username);

//the filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

//the reduce method
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);
//output
// Iteration 0: 0
// Iteration 1: 200
// Iteration 2: 650
// Iteration 3: 250
// Iteration 4: 3250
// Iteration 5: 2600
// Iteration 6: 2470
// Iteration 7: 2540
// 3840
//initial accumulator value can be changed
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+cur;
// },100);
// console.log(balance);
// Iteration 0: 100
// Iteration 1: 300
// Iteration 2: 750
// Iteration 3: 350
// Iteration 4: 3350
// Iteration 5: 2700
// Iteration 6: 2570
// Iteration 7: 2640
// 3940

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//example
const calcHumanAge = ages => ages
  .map(age => age<=2 ? 2*age : 16+age*4)
  .filter(age => age>=18)
  .reduce((acc,age,i,arr) => acc+age/arr.length,0
  );

  const avg1 = calcHumanAge([5,7,9,6,3,8]);
  const avg2 = calcHumanAge([11,17,10,12,32,9]);
  console.log(avg1, avg2);

//the magic of chaining methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const totalDeposit = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposit);

//the find method
const firstWithdrawal = movements.find(mov => mov<0);
console.log(firstWithdrawal);

