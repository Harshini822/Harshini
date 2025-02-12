//arrow function
const calcAge = (birthyr) => 2037 - birthyr;
const age3 = calcAge(1991);
console.log(age3);

//Functions

const calcAge1 = function (birthyear) {
  return 2037 - birthyear;
};
const yearsUntilRetirement = function (birthyear, fn) {
  const a = calcAge1(birthyear);
  const retirement = 65 - a;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//function

function elevator(curr, target) {
  if (curr > target) {
    return 'Going down';
  } else if (curr < target) {
    return 'Going up';
  } else {
    return 'Arrived';
  }
}

console.log(elevator(2, 3));
console.log(elevator(5, 3));
console.log(elevator(4, 4));

//Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(friends[0]);
console.log(friends.length);

const fn = 'Jonas';
const jonas = [fn, 'Schmedtan', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//arrays calcage

const calcAge2 = function (birthyr) {
  return 2037 - birthyr;
};
const yrs = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge2(yrs));

const a1 = calcAge2(yrs[0]);
const a2 = calcAge2(yrs[1]);
const a3 = calcAge2(yrs[years.length - 1]);
console.log(a1, a2, a3);

//or

const ages = [calcAge2(yrs[0]), calcAge2(yrs[1])];
console.log(ages);

//push

const frd = ['x', 'y', 'z'];
frd.push('f');
console.log(frd);
const newfrd = frd.push('a');
console.log(newfrd);
console.log(frd);
frd.unshift('r');
console.log(frd);

//pop

frd.pop();
console.log(frd);
const popped = frd.pop();
console.log(popped);

//shift

frd.shift();
console.log(frd);
const shifted = frd.shift();
console.log(shifted);
frd.unshift('h');
console.log(frd);
const unshifted = frd.unshift('d');
console.log(unshifted);
console.log(frd);

//indexof

console.log(frd.indexOf('h'));
console.log(frd.indexOf('n'));

console.log(frd.includes('n'));
console.log(frd.includes('d'));
frd.push(23);
console.log(frd.includes('23'));
console.log(frd.includes(23));

//function and array

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

//object
const jonass = {
  fn: 'Jonas',
  friend: 'Michael',
};
console.log(jonass);
console.log(
  `${jonass.fn} has 3 friends , and his best friend is ${jonass.friend}`
);

//bracket notation
const key = 'city';
const user = { city: 'New York', country: 'USA' };

console.log(user[key]);

// dot notation
/*
const key = "city";
const user = { city: "New York", country: "USA" };

console.log(user.key]; 

output - error 
 
*/
