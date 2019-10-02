// function someFunction(a, b) {
//     console.warn(this, a, b)
// }

// const obj = {a: 1}
//  someFunction()


// var person1 = {
// name: "Nicholas"
// };
// console.log("name" in person1);
// delete person1.name;
// console.log("name" in person1);
// console.log(person1.name);


// var object = {aaaa: "shdaoh",asgdajsbj: "sadsdsad"};
// for (property in object) {
//     console.log("Name: " + property);
//     console.log("Value: " + object[property]);
// }

// var properties = Object.keys(object); 
// var i, len;
//         for (i=0, len=properties.length; i < len; i++){
//             console.log("Name: " + properties[i]);
//             console.log("Value: " + object[properties[i]]);
// }


// var person1 = {
//    name: "Nicholas"
//     };
//     Object.defineProperty(person1, "name", {
//          enumerable: false
//     });
//      console.log("name" in person1);
//      console.log(person1.propertyIsEnumerable("name"));

//      var properties = Object.keys(person1);
//      console.log(properties.length);
//      Object.defineProperty(person1, "name", {  
//           configurable: false
//      });

//      delete person1.name; 
//      console.log("name" in person1);
//     console.log(person1.name);
//     Object.defineProperty(person1, "name", { configurable: true
//     });



// var person1 = {};
// Object.defineProperty(person1, "name", {
//     value: "Nicholas",
//     enumerable: true,
//     configurable: true,
//     writable: true
// });


// var person1 = {};
// Object.defineProperty(person1, "name", {
//     value: "Nicholas"
// });
// console.log("name" in person1);
//  console.log(person1.propertyIsEnumerable("name"));
// delete person1.name;
// console.log("name" in person1);
// person1.name = "Greg";
// console.log(person1.name);

// var person1 = {
//     _name: "Nicholas",
//     get name() {
//         console.log("Reading name");
//         return this._name;
// },
//     set name(value) {
//         console.log("Setting name to %s", value);
//         this._name = value;
// } };


// var person1 = {
//     _name: "Nicholas"
// };
// Object.defineProperty(person1, "name", {
//     get: function() {
//         console.log("Reading name");
//         return this._name;
//     },
//     set: function(value) {
//         console.log("Setting name to %s", value);
//         this._name = value;
//     },
//     enumerable: true,
//     configurable: true
// });

// var person1 = {
//     _name: "Nicholas"
// };
// Object.defineProperty(person1, "name", {
//     get: function() {
//         console.log("Reading name");
//         return this._name;
// } });
// console.log("name" in person1);
// console.log(person1.propertyIsEnumerable("name"));
// delete person1.name;
// console.log("name" in person1);
// person1.name = "Greg";
// console.log(person1.name);


// var person1 = {};
// Object.defineProperties(person1, {
//    _name: {
//            value: "Nicholas",
//            enumerable: true,
//            configurable: true,
//            writable: true
// },
//      name: {
//            get: function() {
//                console.log("Reading name");
//                return this._name;
//            },
//            set: function(value) {
//                console.log("Setting name to %s", value);
//                this._name = value;
//            },
//            enumerable: true,
//            configurable: true
//        }
// });

var person1 = {
    name: "Nicholas"
};
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.enumerable);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(descriptor.value);
// true
// true
// true
// "Nicholas"


