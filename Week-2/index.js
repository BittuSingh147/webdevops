//function of add two numbers
// function Sum(num1 , num2){
//   let Total = num1+num2;
//   return Total;
// }
// console.log(Sum(4,5));

//find sum from 1 to n;

// function Sum(n){
//   let ans = 0;
//   for(let i = 0; i<=n; i++){
//     ans= ans+i;
//   }
//   return ans;

// }
// const ans = Sum(10);
// console.log(ans);


//Problem3: I/O operations

// const fsa = require("fs");
// const context = fsa.readFileSync("Week-2/a.txt", "utf-8");
// console.log(context);
// const context2 = fsa.readFileSync("Week-2/b.txt", "utf-8");
// console.log(context2);


// const fs = require("fs");
// function read(err, data) {
//   if (err) {
//     console.log("file not found!")

//   } else {
//     console.log(data)

//   }
// }
// fs.readFile("Week-2/a.txt", "utf-8", read);//run asynchronously
// fs.readFile("Week-2/b.txt", "utf-8", read);//run asynchronously

// function readFile(filepath, encoding, op) {
//   op("Error hi there!")
// }

function timeout() {
  console.log("Press the button")
}
console.log("Hi");

setTimeout(timeout, 1000);
console.log("Launch the loup");
let a=0;
for (let i = 0; i<100000; i++){
  a= a+1;

}
console.log("Expensive Operation done")//Expensive operation done because of cpu is busy 
