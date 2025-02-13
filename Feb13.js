//Object methods
/*
const jonas = {
  fn:'Jonas',
  birthyr:1991,
  job:'teacher',

  calcAge:function ()
  {
      return 2037 - birthyr;
  }
};

console.log(jonas.calcAge(birthyr));
*/
//output birthyr is not defined

const jonas = {
    fn: 'Jonas',
    birthyr: 1991,
    job: 'teacher',
  
    calcAge: function (birthyr) {
      return 2037 - birthyr;
    },
  };
  
  console.log(jonas.calcAge(1991));
  //console.log(jonas.['calcAge'](1991));
  
  const jonas2 = {
    fn: 'Jonas',
    birthyr: 1991,
    job: 'teacher',
    hasDriverLicense: false,
  
    // calcAge:function ()
    // {
    //   console.log(this);
    //     return 2037 - this.birthyr;
    // }
  
    calcAge: function () {
      console.log(this);
      this.age = 2037 - this.birthyr;
      return this.age;
    },
  };
  
  console.log(jonas2.calcAge());
  console.log(jonas2.age);
  const license = this.hasDriverLicense ? 'a' : 'no';
  
  console.log(
    `${jonas2.fn} is a ${jonas2.age}-year old teacher and he has ${license} driver's license.`
  );
  
  //BMI
  
  const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
  
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    },
  };
  
  const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
  
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    },
  };
  
  const johnbmi = john.calcBMI();
  const markbmi = mark.calcBMI();
  
  const b =
    johnbmi > markbmi
      ? `John Smith's BMI ${johnbmi} is higher than Mark Miller's ${markbmi}`
      : `Mark Miller's BMI ${markbmi} is higher than John Smith's ${johnbmi}`;
  console.log(b);
  
  //for loop
  
  for (let rep = 6; rep <= 10; rep++) {
    console.log(rep);
  }
  
  for (let rep = 10; rep >= 5; rep--) {
    console.log(rep);
  }
  
  //looping array
  
  const jArr = ['Jonas', 'Smith', 2037 - 1991, 'teacher', ['Michael', 'Peter']];
  const types = [];
  
  for (let i = 0; i < jArr.length; i++) {
    console.log(jArr[i], typeof jArr[i]);
    types[i] = typeof jArr[i];
  }
  console.log(types);
  
  const years = [1991, 2007, 1969, 2020, 1987];
  const ages = [];
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages);
  
  //continue and break
  
  for (let i = 0; i < jArr.length; i++) {
    if (typeof jArr[i] !== 'string') continue;
  
    console.log(jArr[i], typeof jArr[i]);
  }
  
  for (let i = 0; i < jArr.length; i++) {
    if (typeof jArr[i] !== 'string') break;
  
    console.log(jArr[i], typeof jArr[i]);
  }
  
  for (let i = 0; i < jArr.length; i++) {
    if (typeof jArr[i] === 'string') continue;
  
    console.log(jArr[i], typeof jArr[i]);
  }
  
  const jArr1 = [
    23,
    'Jonas',
    'Smith',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter'],
  ];
  
  for (let i = 0; i < jArr1.length; i++) {
    if (typeof jArr1[i] === 'string') break;
  
    console.log(jArr1[i], typeof jArr1[i]);
  }
  
  //looping backwards
  
  console.log('Backward looping');
  for (let i = jArr.length - 1; i >= 0; i--) {
    console.log(jArr1[i]);
  }
  
  //Loops in loop
  console.log('Loops in loops');
  for (let i = 0; i < 5; i++) {
    console.log(`Starting outside loop ${i}`);
    for (let j = 0; j < 3; j++) {
      console.log(`Inside loop ${j}`);
    }
  }
  
  const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
  const bills = [125, 555, 444, 322, 342, 54, 253, 410, 892, 78];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  
  console.log(totals, bills, tips);
  
  const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  };
  console.log(calcAvg([2, 3, 7]));
  console.log(calcAvg(totals));
  console.log(calcAvg(tips));
  
  //while loop
  let rep = 1;
  while (rep <= 10) {
    console.log(rep);
    rep++;
  }
  
  let dice = Math.trunc(Math.random() * 6) + 1;
  
  while (dice !== 6) {
    console.log(`You rolled a dice ${dice}`);
  }
  
  while (dice !== 6) {
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
      console.log('Loop is about to end');
    }
  }
  