//Functions accepting callback functions

const oneWord = function (str) {
    return str.replace(/ /g, ''.toLowerCase());
  };
  
  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };
  
  //higher order function
  const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
  };
  
  transformer('JS is the best!', upperFirstWord);
  transformer('JS is the best!', oneWord);
  
  //function returning functions
  const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };
  
  const greeterHey = greet('Hey');
  greeterHey('Jonas');
  greeterHey('Steven');
  //can also call like
  greet('Hello')('Jonas');
  //By using arrow function
  const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
  greetArrow('Hi')('Steven');

  
  //the call and apply method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode} ${flightNum},name` });
    },
  };
  lufthansa.book(239, 'Jonas Schedtmann');
  lufthansa.book(635, 'John Smith');
  console.log(lufthansa);
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  // book(23,'Sarah Williams');
  //the above calling of the method does not work
  
  //call methods
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);
  
  book.call(lufthansa, 238, 'Mary cooper');
  console.log(lufthansa);
  
  const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
  };
  
  book.call(swiss, 26, 'Elena cooper');
  console.log(swiss);
  
  //Apply method
  const flightData = [583, 'George cooper'];
  book.apply(swiss, flightData);
  console.log(swiss);
  
  book.call(swiss, ...flightData);
  
  //bind method
  const bookEW = book.bind(eurowings);
  const bookLW = book.bind(lufthansa);
  const bookSW = book.bind(swiss);
  bookEW(23, 'Steve Harrington');
  bookEW(67, 'Steven Williams');
  bookSW(78, 'Jeremy Gilbert');
  
  //const bookEW23 = book.bind(eurowings, 23, 'Jonas');
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Jonas Schedtmann');
  bookEW23('Martha cooper');
  
  //partial application
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));
  
  const addVAT = addTax.bind(null, 0.23);
  console.log(addVAT(100));
  
  //or
  const addTaxRate = function (rate) {
    return function (value) {
      return value + value * rate;
    };
  };
  
  console.log(addTaxRate(300)(0.23));
  const addVAT2 = addTaxRate(0.23);
  console.log(addVAT2(100));
  console.log(addVAT2(23));

  //Immediately Invoked Function Expressions(IIFE)

(function(){
    console.log('This will never run again')
  })();
  
  //Also works for arrow function
  (()=> console.log('This will also never run again'))();
  