//reverse
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const reversedMov = movements.reverse();
console.log(movements);
console.log(reversedMov);
//to preserve the original use slice()
// const revMov = movements.slice().reverse();
//and can use toReversed()
const revMov = movements.toReversed();
console.log(revMov);

//movements[1]=2000;-mutates
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);

//converting and checking numbers

console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(Number('23'));
console.log(+'23');

//parseInt
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23'));
console.log(Number.parseInt('30', 4));
console.log(Number.parseInt('30px', 26));
console.log(Number.parseInt('30pp', 30));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 10));

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 10));

//math and rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px' ** 2));
console.log(Math.trunc(Math.random() * 6) + 1);

console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));

//the remainder operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3);
console.log(8 / 3);
console.log(9 % 3);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));

