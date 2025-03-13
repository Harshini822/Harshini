// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   console.log(this);
// };
// new Person('Jonas', 1991);

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  const jonas = new Person('Jonas', 1991);
  console.log(jonas);
  
  //both produce same output
  console.log(jonas instanceof Person);
  
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  jonas.calcAge();
  console.log(jonas.__proto__);
  console.log(jonas.__proto__ === Person.prototype);
  
  console.log(Person.prototype.isPrototypeOf(jonas));
  console.log(Person.prototype.isPrototypeOf(Person));
  
  //.prototyprOfLinkedObjects
  Person.prototype.species = 'Homo sapiens';
  console.log(jonas);
  console.log(jonas.species);
  
  console.log(jonas.hasOwnProperty('firstName'));
  console.log(jonas.hasOwnProperty('species'));
  
  const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
  console.log(arr.__proto__);
  console.log(arr.__proto__ === Array.prototype);
  
  console.log(arr.__proto__.__proto__);
  Array.prototype.unique = function () {
    return [...new Set(this)];
  };
  
  console.log(arr.unique());
  
  const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
  
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  const bmw = new Car('BMW', 120);
  const mercedes = new Car('Mercedes', 95);
  
  bmw.accelerate();
  bmw.accelerate();
  bmw.brake();
  bmw.accelerate();
  
  // ES6 Classes
  
  // Class expression
  // const PersonCl = class {}
  
  // Class declaration
  class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    // Set a property that already exists
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
  }
  
  const jessica = new PersonCl('Jessica Davis', 1996);
  console.log(jessica);
  jessica.calcAge();
  console.log(jessica.age);
  
  console.log(jessica.__proto__ === PersonCl.prototype);
  
  // PersonCl.prototype.greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };
  jessica.greet();
  
  PersonCl.hey();
  
  // Setters and Getters
  const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
  
    get latest() {
      return this.movements.slice(-1).pop();
    },
  
    set latest(mov) {
      this.movements.push(mov);
    },
  };
  
  console.log(account.latest);
  
  account.latest = 50;
  console.log(account.movements);
  
  // Object.create
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  console.log(steven);
  steven.name = 'Steven';
  steven.birthYear = 2002;
  steven.calcAge();
  
  console.log(steven.__proto__ === PersonProto);
  
  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 1979);
  sarah.calcAge();
  