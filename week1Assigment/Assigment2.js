// Ques1: Write a function that takes a user as an input and greet them with their name and age;
function person(user) {
  // Return a greeting string using the user's name and age
  return `Hi, my name is ${user.name} and my age is ${user.age}`;
}

// Create a user object
let user = {
  name: "Bittu",
  age: 21
};

// Call the function with the user object and log the greeting
console.log(person(user));


//Ques2 Write a function that takes a new object as input has name, age and gender and greets the user with their gender (Hi Mr Bittu, your age is 21) also tell the user if they are legal to vote
// Function that takes an object with name, age, and gender and greets the user
function greet(user) {
  // Determine the appropriate title based on gender
  let title = user.gender === "Male" ? "Mr." : "Ms."; // You can add more titles as needed
  
  // Check voting eligibility
  let personCanVote = user.age >= 18 ? "can vote" : "can't vote";

  // Return the formatted greeting including voting eligibility
  return `Hi ${title} ${user.name}, your age is ${user.age}, and you ${personCanVote}.`;
}

// Create a user object
let greeting = {
  name: "Bittu",
  age: 21,
  gender: "Male"
};

// Call the function with the user object and log the greeting
console.log(greet(greeting));

