
//scope chain vs call stack

const a = 'Jonas';
first();
function first(){
  const b = 'Hello';
  second();
  function second(){
    const c = 'Hi';
    third();
    console.log(c,b)
  }
}
function third(){
  const d = 'Hey';
  // console.log(d+c+b+a);
}

// output error as c is in inner scope


"use strict"
function calcAge(birthYear){
  const age = 2037 - birthYear;
  function printAge(){
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if(birthYear>=1981 && birthYear<=1996){
      const str = `Oh, and you're a millenial,${firstName}`;
      console.log(str);

    }
    //console.log(str);-error
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age)-error
//printAge()-error


//scope chain

const myName = 'Jonas';
function first()
{
  const age = 30;
  if(age>=30){
    const decade = 3;
    var millenial = true;
  }

  function second(){
    const job = 'teacher';
    console.log(`${myName} is a ${age} old ${job}`);
  }
  second();

}
first();

//second();-can not access outside the scope
console.log(myName); // as it outside it can be accessed
