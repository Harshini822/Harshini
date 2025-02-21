//optional chaining
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotta'],
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
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
  };
  
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  for (const day of days) {
    //console.log(day);
    // const open = restaurant.openingHours[day]?.open;
    // const open = restaurant.openingHours[day]?.open || 'closed';
    //when using || as 0 is falsy values it prints closed for sat also even if it present so use nullish coalescing operator
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
  }
  
  console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
  console.log(restaurant.orderDelivery?.(0, 1) ?? 'Method does not exists');
  
  //Arrays
  const users = [{ name: 'Jonas', email: 'jonas@gmail.com' }];
  console.log(users[0]?.name ?? 'User array empty');
  
  const newusers = [];
  console.log(newusers[0]?.name ?? 'User array empty');

  //Looping objects

const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  };
  
  const properties = Object.keys(openingHours);
  console.log(properties);
  
  let openStr = `We are open on ${properties.length} days:`;
  for (const day of properties) {
    openStr += `${days}`;
  }
  console.log(openStr);
  const values = Object.values(openingHours);
  console.log(values);
  
  //entire object
  
  const entries = Object.entries(openingHours);
  console.log(entries);
  
  for (const [key, {open , close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
  }

  
  //Sets

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
  ]);
  console.log(ordersSet);
  console.log(new Set('JOnas'));
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread');
  console.log(ordersSet);
  ordersSet.delete('Risotto');
  console.log(ordersSet);
  
  for(const order of ordersSet) console.log(order);
  
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  // const staffUnique = new Set(staff);
  const staffUnique = [...new Set(staff)];//to unpack using spread operator
  console.log(staffUnique);
  
  console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
  const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
  ]);
  
  const mexicanFoods = new Set([
    'tortillas',
    'tomatoes',
    'rice',
    'avacoda',
    'garlic',
    'beans',
  ]);
  //intersection
  const commonFoods = italianFoods.intersection(mexicanFoods);
  console.log('Intersection:',commonFoods);
  console.log([...commonFoods]);
  //union
  const italianMexicanFusion = italianFoods.union(mexicanFoods);
  console.log('Union:',italianMexicanFusion);
  console.log([...italianMexicanFusion]);
  //it removes the duplicates
  console.log([...italianFoods,...mexicanFoods]);//it does not remove the duplicates
  console.log(new Set([...italianFoods,...mexicanFoods]));//it removes the duplicates
  
  //difference
  const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
  console.log('Difference:',uniqueItalianFoods);
  console.log([...uniqueItalianFoods]);
  
  const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
  console.log('Difference:',uniqueMexicanFoods);
  console.log([...uniqueMexicanFoods]);
  
  //symmetricDifference
  const uniqueItalianMexican = italianFoods.symmetricDifference(mexicanFoods);
  console.log('Difference:',uniqueItalianMexican);
  console.log([...uniqueItalianMexican]);
  
  //isDisjointFrom
  console.log(italianFoods.isDisjointFrom(mexicanFoods));

  
  //Maps
  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze, Italy');
  console.log(rest.set(2,'Lisbon, Portugal'));
  //can chain set by
  rest.set(true,'We can open')
  .set('open', 11);
  console.log(rest.get('name'));
  console.log(rest.get('open'));
  
  const arr = [1,2];
  rest.set(arr,'Test');
  console.log(rest)
  console.log(rest.size);
  console.log(rest.get(arr));

  //convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


//Maps : Iteration

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1,'C'],
  [2,'Java'],
  [3,'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again'],
]);

console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

const answer = Number(prompt('Your answer : '));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//working with strings

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);
console.log('B737'[2]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(7));
console.log(airline.slice(4, 7));
console.log(airline.slice(7, 14));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');

console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

