//closure
const secureBooking = function(){
    let passengerCount = 0;
    return function(){
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  
  const booker = secureBooking();
  
  booker();
  booker();
  booker();
  
  //closure example
  
  let f;
  const g = function(){
    const a=23;
    f = function(){
      console.log(a*2);
    };
  };
  
  const h = function(){
    const b=25;
    f = function(){
      console.log(b*2);
    };
  };
  
  
  g();
  f();
  
  //reassigning f function
  h();
  f();
  
  //example 2
  
  const boardPassengere = function(n,wait){
    const perGroup = n/3;
    setTimeout(function(){
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`)
    },wait*1000);
    console.log(`Will start boarding in ${wait} seconds`);
  };
  
  boardPassengere(180,3);
  
//simple array methods

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice(3));
console.log(arr.slice());
console.log([...arr]);

console.log(arr.splice(2));
console.log(arr); //mutated the original array
let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.splice(-1));
console.log(arr2);

let arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr3.splice(1, 2));
console.log(arr3);

let arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr4.splice());
console.log(arr4);

//reverse
const revArray = ['j', 'g', 'd', 'k', 'r'];
console.log(revArray.reverse());
console.log(revArray);

//concat
const letters = arr4.concat(revArray);
console.log(letters);
console.log([...arr4, ...revArray]);

//join
console.log(letters.join('-'));

//the new at method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.slice(1)[0]);
console.log('jonas'.at(1));
console.log('jonas'.at(-1));

//the new at method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]);
console.log(arr.slice(1)[0]);
console.log('jonas'.at(1));
console.log('jonas'.at(-1));

//looping arrays:forEach

//normal looping
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const movement of movements) - can also use like this
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//forEach
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

//forEach with Maps and Sets

//map
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
  });
  
  //sets
  const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
  console.log(currenciesUnique);
  currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
  });
  
  
  
  