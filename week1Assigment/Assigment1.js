function greet(name) {
  return "Hello" + name;


}
let Greeting = greet("Bittu");
console.log(Greeting);



function age(voteAge) {
  if (voteAge >= 18) {
    return ("He can vote");


  } else {

    return ("He can't vote")
  }

}
console.log(age(21));


let users = ["Rahul", "Satyam", "Vinod", "Pritam", "Khanna"];
for (let index = 0; index < users.length; index++) {
  console.log(users[index]);
  ;

}