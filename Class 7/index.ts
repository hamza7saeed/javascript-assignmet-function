/*Assignment 1: Simple Sum
Create a function named add that takes two parameters, a and b, and logs their sum to the console. 
Call the function with different numbers to ensure it works.*/

function sum (a , b){
    let add = a + b;
    console.log(add);
    
}
sum (3,4);

/*Assignment 2: Greetings
Write a function called greet that takes a name as a parameter and logs a greeting message to the console.
 Call the function with different names. */

 function greeting (name){
    let gree = "Assalam-o-Alaikum ";
    console.log(gree + name);
    

 }
 greeting ("hamza");


 /*Assignment 3: Double It
Define a function named double that takes a number as a parameter and logs its double to the console.
 Test the function with various numbers. */

 function double (num){
    let num1 = num;
    let num2 = num;
    console.log(num1 * num2);
    return num1 * num2
 }
 double(5);
let a =  double(5);
console.log(a);




/* 
Assignment 4: Even or Odd Checker
Create a function named isEven that takes a number as a parameter and logs "Even" to the console if the number is even and "Odd" if it's odd. 
Test the function with different numbers.
 */

function even (num){
    if (num % 2 ===0){
        console.log("This is even number = ", num);
        
    }
    else {
        console.log("This is odd number", num);
        
    }
}

even(5)

//  With return function
function even (num){
    if (num % 2 ===0){
        console.log("This is even number = ", num);
        return num
    }
    else {
        console.log("This is odd number", num);
        return num
    }
}

even(5);
let bb:any = even(5);
console.log(bb);

/* 
Assignment No 6: JavaScript Times Table Printer
Create a simple JavaScript function called printTimesTable that takes a number as input.
 This function should display the multiplication table for that number in a user-friendly way on the console.
 Make sure the output is easy to understand for everyone.
 */

function countt (table, numbers){
    for (let i = 0; i <=numbers; i++){
        console.log(table + " x "+ i + " = " + (table * i));
        
    }
}
countt(2,10);

/* 
Assignment 5: Max of Two Numbers
Define a function named findMax that takes two numbers as parameters and logs the larger number to the console.
 Test the function with different pairs of numbers.
 */

 function findMax(nums){
  
    let a = Math.max(...nums)
    console.log(a)
  }
  findMax([22,3,42,5,0.6]);

//   With return function
  function findMax(nums){
  
    let a = Math.max(...nums)
   
    return a
  }

let b = findMax([22,3,42,5,0.6]);
console.log(b);


