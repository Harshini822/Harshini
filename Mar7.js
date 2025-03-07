//Internationalizing dates
const now = new Date();
const us = new Intl.DateTimeFormat('en-US').format(now);
console.log(us);
const ar = new Intl.DateTimeFormat('ar-SY').format(now);
console.log(ar);
// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));

//Timers: setTimeOut & setInterval
setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  'Olives',
  'Spinach'
);
console.log('Waiting....');

setInterval(function(){
  const now = new Date();
  console.log(now);
},1000);
