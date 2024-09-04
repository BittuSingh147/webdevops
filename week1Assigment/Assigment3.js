// function filterevennumbers(numbers){
//   return numbers %2 ===0;
// }
// const number = [10, 15, 20, 25, 30];
// const evennumbers = number.filter(filterevennumbers);
// console.log(evennumbers);

const { count } = require("console");



//  function addProperty(obj){
//    obj.isActive = true;
//    return obj;
//  }
// const user = { id: 1, username: "coder123" };

// console.log(addProperty(user));

// function doubleValues(arr) {
//   let doubledArr = []; 
//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i] *2;
//     doubledArr.push(sum);
//   }
//   return doubledArr; 
// }
// const numbers = [1, 2, 3, 4];
// console.log(doubleValues(numbers));


//Create an object book with properties title and author. Add a method getDetails to the book object that returns a string with the title and author of the book.

// const book = { title: "The Great Gatsby",
//               author: "F. Scott Fitzgerald",
//                getdetails(){
//                 return `The name of this book is ${this.title} and the author is ${this.author}`
                
        
//               }
//              };
// console.log(book.getdetails())

// Problem: Write a function mergeArrays that takes two arrays as input and returns a new array that contains all the elements from both arrays.
// Example Input: ['a', 'b', 'c'], ['d', 'e', 'f']
// Example Output: ['a', 'b', 'c', 'd', 'e', 'f']

// function mergeArrays(){
//  let  arr1= ['a', 'b', 'c'];
//   let arr2 = ['d', 'e', 'f'];
//   return newarray = arr1.concat(arr2);
// }
// console.log(mergeArrays())


// Removing a Property
// Problem: Write a function removeProperty that takes an object and a property name as arguments. The function should remove the property from the object if it exists and return the updated object.
// function removeProperty(obj){
//   delete obj.city; 
//   return obj;
// }
// const obj = { name: "Alice", age: 25, city: "New York" };
// console.log(removeProperty(obj))

// Problem: Write a function updateProperty that takes an object, a property name, and a new value. The function should update the value of the given property to the new value and return the updated object.

// function updateProperty(obj){
//   obj.city= "los angeles";
//   return obj;
  
// }
// const obj = { name: "Bob", age: 30, city: "San Francisco" };
// console.log(updateProperty(obj))


// Problems :Write a function mergeObjects that takes two objects and merges them into a new object. If both objects have the same property, the value from the second object should be used.
// const obj1 = { name: "Charlie", age: 28 };
// const obj2 = { age: 35, city: "Chicago" };
// function mergeObjects(obj1 , obj2){
//  let  newobj = Object.assign(obj1 , obj2)
//   return newobj;
  
// }
// console.log(mergeObjects(obj1, obj2));

// Problem: Write a function countProperties that takes an object and returns the number of properties it has.

// const obj = { name: "Diana", age: 22, city: "Miami", isActive: true };
// function countProperties(object){
//   return Object.keys(obj).length;
// }
// console.log(countProperties(obj));

//Problem:Write a function filterByAge that takes an array of objects, where each object represents a person with properties name and age. The function should return a new array containing only the people who are 18 years old or older.

// function filterAge(people) {
//   return people.filter(person => person.age>=18);
  
// } 

// const people = [
//   { name: "Emily", age: 17 },
//   { name: "Frank", age: 20 },
//   { name: "Grace", age: 15 },
//   { name: "Henry", age: 22 }
// ];

// console.log(filterAge(people))


// Problem: Write a function arrayToObject that takes an array of strings and returns an object where the keys are the strings from the array, and the values are the lengths of those strings.

// function arrayToObject(arr){
//   let result ={}
//   for (const item of arr) {
//     const [key, value] = item.split(":"); 
//     result[key.trim()] = parseInt(value); 
//   }
//   return result;
// }

// const arr =[
//   "apple:5",
//   "banana : 6",
//   "cherry: 6"
// ]
// console.log(arrayToObject(arr));

// Problem: Write a function isEmptyObject that takes an object as an argument and returns true if the object has no properties, and false otherwise.

// function isEmptyObject(obj){
//   return Object.keys(obj).length===0;
  
// }
// const obj1 = {};
// const obj2 = { name: "Ivy" };

// console.log(isEmptyObject(obj1));
// console.log(isEmptyObject(obj2))


// Problem: Write a function addNewPerson that takes an array of objects and a new person object as arguments. The function should add the new person to the array and return the updated array.
//  function addNewPerson(people , newPerson){
//    return people.concat(newPerson);
//  }
// const people = [
//   { name: "Jake", age: 31 },
//   { name: "Lily", age: 29 }
// ];
// const newPerson = { name: "Mason", age: 27 };

// console.log(addNewPerson(people , newPerson));



// Problem: Write a function findPersonByName that takes an array of objects and a string representing a name. The function should return the first object that has the name property matching the given string.
// function findPersonByName(people, name) {
//   return people.filter(person => person.name === name);

// } 

// const people = [
//   { name: "Nina", age: 19 },
//   { name: "Olivia", age: 24 },
//   { name: "Paul", age: 30 }
// ];

// console.log(findPersonByName(people,"Olivia"))


// Problem :Write a function sumAges that takes an array of objects, where each object represents a person with properties name and age. The function should return the sum of all the ages.


function sumAges(array, property) {
  return array.reduce((total, obj) => total + obj[property], 0);
}
const people = [
  { name: "Quinn", age: 32 },
  { name: "Ryan", age: 28 },
  { name: "Sophia", age: 25 }
];

console.log(sumAges(people , "age"));