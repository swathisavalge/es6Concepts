//Arrow function

// const myNum = [1,2,3];
//#1
// const updatedNum = myNum.map(function(eachNum){
//     return eachNum += 1;
// });

//#2
// const updatedNum = myNum.map((eachNum) => {
//     return eachNum += 1;
// });

//#3
//const updatedNum = myNum.map(eachNum => eachNum += 1);


//#4 to deal with strings conversion
// const updatedNum = myNum.map(() => "Swathi");

// console.log(updatedNum)

//******************************************/

// var myNum = [9, 10, 11, 15];

// console.log(myNum);

// ES5 way of writing function using function keyword

// var sortedMap = myNum.map(function(returnNum){
//   return returnNum += 10
// });

// ES6 way of writing function using =>
// var sortedMap = myNum.map(() => "favNum");
//
// console.log(sortedMap);

//******************************************/

// var ages = [34, 38, 10, 11];

// var filteredAge = ages.filter((age) =>  age >= 11);

// console.log(ages);
// console.log(filteredAge);

//******************************************/
//Prototype Methods

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.speak =function(){
//     console.log(`Hello, My name is ${this.name}.`);
// };

// const bill = new Person('Swathi', 35);
// bill.speak();


class Person {
    constructor(name, age, children){
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak(){
        console.log(`Hello, My name is ${this.name}.`);
    }
    birth(child){
        this.children.push(child);
    }
}

const bill = new Person('Dhaney', 39,['Vidyut','Swathi']);
bill.speak();
bill.birth('Papa');

console.log(bill);

