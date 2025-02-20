'use strict';
//Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotta'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [firstCateg, secondCateg] = restaurant.categories;
console.log(firstCateg, secondCateg);
//Italian Pizzeria

const [firstCateg1, , thirdCateg] = restaurant.categories;
console.log(firstCateg1, thirdCateg);
//Italian Vegetarian

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);

//instead use like below
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

//destructuring the above

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i,,j]=nested;
// console.log(i,j);
//op-2,[5,6]

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);

const [m = 1, n = 2, o = 3] = [8, 9];
console.log(m, n, o);

//Destructuring objects

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotta'],
    openingHours: {
      thu:{
        open: 12,
        close: 22,
      },
      fri:{
        open: 11,
        close: 23,
      },
      sat: {
        open: 0,
        close: 24,
      },
    },
  
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderDelivery: function({
      starterIndex = 1,
      mainIndex = 0,
      time = '20:00',
      address,
    }){
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
  };
  
  restaurant.orderDelivery({
    time: '22.30',
    address: 'Via del sole,21',
    mainIndex: 2,
    starterIndex: 2,
  });
  
  const {name, openingHours, categories} = restaurant;
  console.log(name, openingHours, categories);
  
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);
  
  //to set defaults
  const {menu = [], starterMenu: starters = []} = restaurant;
  console.log(menu,starters);
  
  //Mutating variables
  let a = 111;
  let b = 999;
  const obj = {a:23, b: 7, c:14};
  ({a, b}= obj);
  console.log(a,b);
  
  //Nested objects
  // const {fri} = openingHours;
  // console.log(fri);
  
  const {fri} = hours;
  console.log(fri);
  
  //openingHours or hours both works
  
  // const {fri: {open,close}} = openingHours;
  // console.log(open,close);
  
  //or 
  
  const {fri: {open: o,close: c}} = openingHours;
  console.log(o,c);
  
  //spread operator

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
//const badNewArr = [1,2,arr];
//op - [1, 2, Array[3]]

console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);
console.log(...newArr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotta'],
  
};

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

//join 2 arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//rest
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

const add = function(...numbers){
  let sum = 0;
  for(let i=0;i<numbers.length;i++)
  {
    sum+=numbers[i];
   
  }
  console.log(sum);
}

add(2,4);
add(7,3,5,1,5);

const x = [24,4,8];
add(...x);

//shortcircuiting

console.log(3 || 'Jonas');
//in logical or operator if the 1st value is a truthy value it immediately returns that value

console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

//AND

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish coalescing operators
// restaurant.numGuests = 0;
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//op-0
const guests = restaurant.numGuests ?? 10;
console.log(guests);

//op - 10

//Logical Assignment operator

const rest1 = {
    name : 'Capri',
    numGuests: 20,
  };
  
  const rest2 = {
    name : 'La Piazza',
    owner: 'Giovanni Rossi',
  };
  
  rest1.numGuests = rest1.numGuests || 10;
  //rest2.numGuests = rest2.numGuests || 10;
  rest2.numGuests ||= 10;
  //above both produce same output
  console.log(rest1);
  console.log(rest2);

  
  const rest1 = {
    name : 'Capri',
    numGuests: 0,
  };
  
  const rest2 = {
    name : 'La Piazza',
    owner: 'Giovanni Rossi',
  };
  
  rest1.numGuests = rest1.numGuests || 10;
  //output numGuests = 10 as rest1 has numGuests = 0
  rest2.numGuests ||= 10;
  
  //above both produce same output
  console.log(rest1);
  console.log(rest2);

//or using nullish

rest1.numGuests = rest1.numGuests ?? 10;
//output numGuests = 0 
rest2.numGuests ||= 10;

//above both produce same output
console.log(rest1);
console.log(rest2);

//And
rest2.owner = rest2.owner && 'Anonymous';
console.log(rest1);
console.log(rest2);
//output

// {name: "Capri", numGuests: 10}
// {name: "La Piazza", owner: "Anonymous", numGuests: 10}

rest1.owner = rest1.owner && 'Anonymous';
rest2.owner = rest2.owner && 'Anonymous';

//output
// {name: "Capri", numGuests: 10, owner: undefined}
// {name: "La Piazza", owner: "Anonymous", numGuests: 10}

//Looping arrays : The for fo loop

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotta'],
    
  };
  
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  for(const item of menu) console.log(item);
  
  for(const item of menu.entries()) 
  {
    
    console.log(`${item[0]+1}: ${item[1]}`);
  }
  
  for(const [i,el] of menu.entries()){
    console.log(`${i+1}: ${el}`);
  }

  
