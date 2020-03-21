// Problem1 - String Concat Method
let coffee = "French";
let flavor = "Vanilla";

console.log(coffee.concat(` ${flavor}`));

// Problem2 - Templating
let coffee = 3;
let chai = 10;

let coffeeMsg = `I have ${coffee} coffees.`
let chaisMsg = `I also have ${chai} chais.`
let drinksMsg = "I have a total of " + 13 + " drinks total."

console.log(coffeeMsg);
console.log(chaisMsg);
console.log(drinksMsg);

// Problem3 -IndexOfString Method: Find Where 42 Occurs
function myFunction() {
    let str = "Can you guess what the index of 42 is? I am sure you will be surprised!";

    let answer = str.indexOf("42");
    
    console.log(answer);
  
  };

  myFunction()

// ////////////////////////////////////////////////////////////
// Problem3 Pt.2 - .length Method: Find How long the string is!
function myFunction() {

    let str = "Can you guess how long this string is? I am sure you will be surprised! (Hint:It is not 42.)";
  
    let answer = str.length;
  
  console.log(answer);

  };

  myFunction();



// Problem4 -Replacing Values in A String
function myFunction() {

    let str1 = "How you doin?";
  
    let str2 = str1.replace("you", "yall");
  
  console.log(str2);
  
  };

myFunction();


// Problem 5 -Using Trim Method FOr Strings
function myFunction() {

    var str = "         SOCIAL DISTANCING!!!                    ";
  
    alert(str.trim());
  
  };

  myFunction();

// Problem 6 - Making Strings Case Sensitive
Using .toUpperCase
function myFunction() {

    let str = "social distancing!!";
  
    let res = str.toUpperCase();
  
    console.log(res);
  
  };

  myFunction();

// //////////////////////////////////////////////////////////
// Problem Pt.2
// Using .toLoweCase
  function myFunction() {

    let str = "QuiEt VoICeS...PLEASE";
  
    let res = str.toLowerCase();
  
    console.log(res);
  
  }

myFunction();