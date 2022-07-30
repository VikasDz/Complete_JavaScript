/**** Section 4👉 Data Types in JavaScript ****/

var myName = "Hello Jarvis";
console.log(myName);
// Here SemiColon is Not Important..
// console.log(typeof(myName));

// var myAge = 26;
// console.log(myAge);

// var iAmBoy = false;
// console.log(iAmBoy);

// // typeof operator 
// console.log(typeof(iAmBoy));


// DataTypes Practice

console.log( 10 + "20");
// 9 - "5"
console.log( 9 - "5"); //bug
// "Java" + "Script"
console.log( "Java "+ "Script");
// " " + " "
console.log( " " + 0);
// " " + 0


console.log("SatYam" - "Raj");
// return NaN (Not a Number);

// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 


var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));
// //2nd javascript bug

var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?
// If We Subtract Two String Then Return Not a Number

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 

// var myPhoneNumber = 979898;
// var myName = "Satya";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// var myPhoneNumber = prompt("Enter Your Number");
// if(isNaN(myPhoneNumber)){
//     console.log("Please Enter Valid Number!");
//       alert("Please Enter Vaild Number")
// }
// else{ 
//   console.log("You Entered Number");
//     alert("Entered Number!")
// }

// NaN Practice 🤯

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);    
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));
// console.log(NaN==NaN);



// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const 
// These are The Keywords For Making Variables in JavaScript...
