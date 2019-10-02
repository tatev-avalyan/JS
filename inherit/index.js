// var book = {
//     title: "The Principles of Object-Oriented JavaScript"
// };
// var prototype = Object.getPrototypeOf(book);
// console.log(prototype === Object.prototype);  


// var now = new Date();
// console.log(now)



// var book = {
//     title: "The Principles of Object-Oriented JavaScript",
//     toString: function() {
//         return "[Book " + this.title + "]"
//     }
// };
// var message = "Book = " + book;
// console.log(message); 

// var empty = {};
// for (var property in empty) {
//     if (empty.hasOwnProperty(property)) {
//         console.log(property);
//     }
// }

// var nakedObject = Object.create(Object);
//         console.log("toString" in nakedObject);     
//         console.log("valueOf" in nakedObject);  


// function Person() {
//     this.name = 'tatev'
// } 
// const person = new Person()

// var nakedObject1 = Object.create(person, {}); // <--- {}

// console.warn(nakedObject1.constructor)

// for (let i in nakedObject1) {
//     if (nakedObject1.hasOwnProperty(i)) {
//         console.warn(i)
//     }
// }


// function Rectangle(length, width) { this.length = length;
//     this.width = width;
// }
// Rectangle.prototype.getArea = function() {
//     return this.length * this.width;
// };
// Rectangle.prototype.toString = function() {
//     return "[Rectangle " + this.length + "x" + this.width + "]";
// };
// function Square(size) { this.length = size;
//     this.width = size;
// }
// Square.prototype = new Rectangle();
// Square.prototype.constructor = Square;
// Square.prototype.toString = function() {
//     return "[Square " + this.length + "x" + this.width + "]";
// };
// var rect = new Rectangle(5, 10);
// var square = new Square(6);
// console.log(rect.getArea());
// console.log(square.getArea());
// console.log(rect.toString());
// console.log(square.toString());

// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Object);
// console.log(square instanceof Square);
// console.log(square instanceof Rectangle);
// console.log(square instanceof Object);




// function EventTarget(){
// }
// EventTarget.prototype = {
//     constructor: EventTarget,
//  addListener: function(type, listener){
//         // create an array if it doesn't exist
//         if (!this.hasOwnProperty("_listeners")) {
//             this._listeners = [];
// }
//         if (typeof this._listeners[type] == "undefined"){
//             this._listeners[type] = [];
// }
//         this._listeners[type].push(listener);
//     },
//     fire: function(event){
//         if (!event.target){
//             event.target = this;
// }
//         if (!event.type){  // falsy
//             throw new Error("Event object missing 'type' property.");
// }
// if (this._listeners && this._listeners[event.type] instanceof Array){ var listeners = this._listeners[event.type];
// for (var i=0, len=listeners.length; i < len; i++){
//                 listeners[i].call(this, event);
//             }
// } },
// removeListener: function(type, listener){
//     if (this._listeners && this._listeners[type] instanceof Array){
//                    var listeners = this._listeners[type];
//                    for (var i=0, len=listeners.length; i < len; i++){
//                        if (listeners[i] === listener){
//                            listeners.splice(i, 1);
//                            break;
//     } }
//     } }
// };

// function Person(name) {
//     this.name = name;
// }
// Person.prototype = Object.create(EventTarget.prototype);
// Person.prototype.constructor = Person;
// Person.prototype.sayName = function() {
//     console.log(this.name);
//     this.fire({ type: "namesaid", name: name });
// };
// var person = new Person("Nicholas");
// console.log(person instanceof Person);    
// console.log(person instanceof EventTarget); 



function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
} }
    return receiver;
}
// var person = mixin(new EventTarget(), {
//     get name() {
//             return "Nicholas"
//         },
//         sayName: function() {
//             console.log(this.name);
//             this.fire({ type: "namesaid", name: name });
//     } });
//     console.log(person.name);
//     person.name = "Greg"; console.log(person.name);
     

var person = mixin(new EventTarget(), {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
} });