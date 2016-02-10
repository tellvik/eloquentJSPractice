/* Function definition.
Value assigned to variable is a function.
Function takes one param, x, a number.
Function returns a number (the square of x).
*/

// var square = function (x) {
//   return x*x;
// };
// console.log(square(3));


/* Function definition.
Value assigned to variable is a function.
Function takes no param.
Function returns nothing. It has a side effect.
*/

// var makeNoise = function() {
//   console.log('Pling!');
// };

// makeNoise();


/* Function definition.
Value assigned to variable is a function.
Function takes two param, base and exponent, both numbers.
Function body contains a for loop.
It returns the value of the base multiplied by the power of the exponent.
*/

// var power = function(base, exponent) {
//   var result = 1;
//   for (var count = 0; count < exponent; count++)
//     result *= base;
//   return result;
// };

// console.log(power(2, 3));

// power(2, 3)
//   var result = 1;
// // loop 1:   
//   for (var count = 0; 0 < 3; 0++) {
//     1*2; 
//     return 2;
//     count = 1;
// // loop 2: 
//   for count = 1; 1 < 3; 1++)
//     2*2;
//     return 4;
//     count = 2;
// // loop 3: 
//   for count = 2; 2 < 3; 2++)
//     4*2;
//     return 8;
//     count = 3;
// // loop 4 (condition count < exponent tests false, loop breaks): 
//   for count = 3; 3 < 3; 3++)
//     BREAK
//   return 8;
// }


/* Scope as it pertains to arguments and other variables 
referred to in a given function:
Arguments passed to a function in the invocation statement
are local to the function.
Variables declared within the function (i.e., with the var keyword),
are local to the function.
Variables referenced, but not declared, within the function
will be accessed in the function's enclosing scope(s), up to and
including the global scope.
*/

// var x = 'outside';

// var f1 = function() {
//   var x = 'inside f1';
// };
// f1();
// console.log(x);

/* In the previous example, although f1 has run, it assigns the 
value 'inside f1' to x only within it's local scope. The console.log
invocation accesses the value of x in the global scope, 'outside',
and logs it to console.
*/


// var f2 = function() {
//   x = 'inside f2';
// };
// f2();
// console.log(x);

/* In the previous example, when f2 is called, control looks for a
variable declaration for x. It doesn't find one in the local scope of
the function body. It looks to the enclosing scope (which is the global
scope in this case) and finds x declared on line 77. It assigns the 
value 'inside f2' to x within the global scope. The console.log invocation
on line 96 accesses the value of x in the global scope, which has been changed
from it's original assignment of 'outside' to 'inside f2' as a result
of the function invocation on line 95, and logs it to console.
*/


/* NESTED SCOPE */
// var landscape = function() {
//   var result = '';
//   var flat = function(size) {
//     for (var count = 0; count < size; count++)
//       result += '_';
//   };
//   var mountain = function(size) {
//     result += '/';
//     for (var count = 0; count < size; count++)
//       result += "'";
//     result += '\\';
//   };
  
//   flat (3);
//   mountain(4);
//   flat(6);
//   mountain(1);
//   flat(1);
//   return result;
// };

// console.log(landscape());

/* In the previous code example, the variable result is accessible
to both nested functions, flat and mountain. However, the
count variable is assigned locally within each nested function.
As a result, when flat and mountain are invoked on lines 123-127,
each function runs with a fresh count and concatenates the appropriate
number of symbols to the string, result.
*/


/* FUNCTIONS AS VALUES */

var launchMissiles = function(value) {
  missileSystem.launch('now');
};
if (safeMode)
launchMissiles = function(value) {/* do nothing*/};

/* In the previous code, line 148 assigns the variable launchMissiles
a new function definition.*/