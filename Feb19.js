//variable hoisting
// const myName = "Jonas";
// if(myName === "Jonas")
// {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037-1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }
//cannot access 'job before initialization-output, produces same output if we also use let

const myName = 'Jonas';
if (myName === 'Jonas') {
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  var job = 'teacher';
  //console.log(x);
}

//output - Jonas is a undefined 48

//function hoisting

console.log(addDeclaration(3, 2));
// console.log(addExpression(2,6));-error
// console.log(addArrow(2,6));-error
//if the above both function declared using var the output display as addExpression and addArrow is not a function as var is used and we print like console.log(addArrow) it produces output as undefined.

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}
//output because var value is undefined when hoisted

//window object

var x = 1;
let y = 16;
const z = 7;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false

//this keyword
const jonas = {
  name: 'Jonas',
  year: 1987,
  calcAge: function () {
    //return 2037 - year;-output : year not defined
    return 2037 - this.year;
  },
};
console.log(jonas.calcAge());



//this keyword for regular function and arrow function

const calcAgeFunc = function(birthYear){
  console.log(2037 - birthYear);
  console.log(this);//undefined
};
calcAgeFunc(1989);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this)
}
calcAgeFunc(1990);//window object

//copying a function from one object to another object
const jonas = {
    year:1991,
    calcAge : function(){
      console.log(this);
      console.log(2037-this.year);
    },
  };
  jonas.calcAge();
  console.log(jonas.calcAge());
  const matilda = {
    year:2017
  };
  
  matilda.calcAge = jonas. calcAge;
  matilda.calcAge();
  console.log(matilda.calcAge());

  const jonas = {
    firstName:'Jonas',
    year:1991,
    calcAge : function(){
      console.log(this);
      console.log(2037-this.year);
    },
    greet: () => console.log(`Hey ${this.firstName}`),
  };
  jonas.greet();
  // as arrow function do not get their own this keyword

  
  const jonas = {
    firstName:'Jonas',
    year:1991,
    calcAge : function(){
      console.log(this);
      console.log(2037-this.year);
    },
    greet: function() {console.log(`Hey ${this.firstName}`)
  },
  };
  jonas.greet();
  //this outputs Hey Jonas

  //object references
const jessica = {
    firstName:'Jessica',
    lastName:'Williams',
    age:27,
  };
  
  const marriedJessica = jessica;
  marriedJessica.lastName = 'Davis';
  
  console.log('Before:',jessica);
  console.log('After:',marriedJessica);
  
  //output- as heap points to same memory address
  // Before:
  // {firstName: "Jessica", lastName: "Davis", age: 27}
  // After:
  // {firstName: "Jessica", lastName: "Davis", age: 27}