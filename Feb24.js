//working with string part2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

//Jonas
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
//console.log(loginEmail.trim()); - instead use like below
console.log(email == loginEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email == normalizedEmail);

const price = '288,97#';
const priceUS = price.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23';
console.log(announcement.replace('door', 'gate'));
//to replaceAll
console.log(announcement.replace(/door/g, 'gate'));

const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boeing'));
console.log(plane.startsWith('A320'));
console.log(plane.startsWith('A2'));

//part 3
//split
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jonas Schedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase()+ n.slice(1));
    //or
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

//example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(437726672682782));
//repeat
const weatherMessage = 'Bad weather...Departured Delayed';
console.log(weatherMessage.repeat(5));

//example

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(7);

//Default parameters

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', undefined, 1000);
createBooking('LH123', 2, 1000);


//how passing arguments works: value vs. reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schedtmann',
  passport: 237827832892,
};

const checkIn = function(flightNum, passenger){
  flightNum = 'LH999';
  passenger.name= 'Mr.'+ passenger.name;
  if(passenger.passport === 237827832892){
    alert('Checked in');
  }
  else{
    alert('Wrong passport!');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

const newPassport = function(person){
  person.passport = Math.trunc(Math.random()*10000000000);
}

newPassport(jonas);
checkIn(flight,jonas);

