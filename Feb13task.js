//Using Object Methods

const person = {
    name: 'Harshini',
    age: 20,
    
    greet : function()
    {
        return `Hello my name is ${this.name} and I am ${this.age} years old`;
    }
  }
  
  console.log(person.greet());

  //Using a for Loop to Iterate Over an Array

const arr = [10, 20, 30, 40, 50];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//Breaking a Loop When a Condition is Met

for(let i=1;i<=10;i++)
    {
        if(i===5) break;
        console.log(i);
    }

//Skipping an Iteration Using continue

for(let i=1;i<=5;i++)
    {
        if(i===3) continue;
        console.log(i);
    }

//Looping Backwards Over an Array

const arr1 = [100, 200, 300, 400, 500];

for(let i=arr1.length-1;i>=0;i--)
{
    console.log(arr1[i]);
}


//Using a while Loop to Print Numbers

let rep = 1;
while(rep<=5)
{
    console.log(rep);
    rep++;
}

//Nested Loops (Loops in Loops)

for(let i=1;i<=3;i++)
    {
        console.log(`Table ${i}`);
        for(let j=1;j<=10;j++)
        {
            console.log(i*j);
        }
    }

//Object Methods with Parameters

const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    }
};
console.log(calculator.add(3,8));
console.log(calculator.sub(8,4));

//Using for...in to Iterate Over Object Properties

const car = {
    brand : 'Audi',
    model: 'Sedan',
    year: 2017
};

for(let i in car)
{
    console.log(`${i}: ${car[i]}`);
}



//Using for...of to Iterate Over an Array

const colors = ['pink', 'black', 'red', 'blue'];

for(let i of colors)
{
    console.log(i);
}

