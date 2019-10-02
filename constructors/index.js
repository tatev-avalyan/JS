// function Human(){

// }
// // var human1= new Human();
// var human1=new Human;   
// console.log(human1 instanceof Human); 
// console.warn(typeof human1)

// console.log(human1.constructor === Human); 


// function Person(name) {
//     this.name = name;
//     this.sayName = function() {
//                console.log(this.name);
//            };
// }


// var person1 = new Person("Nicholas");
// var person2 = new Person("Greg");

// console.log(person1.name);
// console.log(person2.name);

// person1.sayName();
// person2.sayName();



// function Person(name) {
//     Object.defineProperty(this, "name", {
//         get: function () {
//             return name;
//         },
//         set: function (newName) {
//             name = newName;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     this.sayName = function () {
//         console.log(this.name);
//     };
// }

// var person1 = new Person("Nicholas");
// console.log(person1 instanceof Person);
// console.log(typeof person1);
// console.log(name);


// var book = {
//     title: "The Principles of Object-Oriented JavaScript",
//     sayName() {this.title}

// };


// Object.freeze()

// Object.hasOwnProperty = {}


// book.title = 'ashot'
// console.log(book.title)

// var object = {}; 
// console.log(object.toString());
// object.toString = function() {
//     return "[object Custom]";
// }; 
// console.log(object.toString());


// console.warn(obj.__proto__)


