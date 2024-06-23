//Question 24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//• Tests for equality and inequality with strings
let greet1 = "hello";
let greet2 = "hello";
//• Tests for equality and inequality with strings
console.log(greet1 == greet2);
console.log(greet1 != greet2);
//• Tests using the lower case function
console.log(greet1.toLowerCase() == greet1);
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 20;
let num2 = 21;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//• Tests using "and" and "or" operators
//and(&&)
console.log(num1 != num2 && greet1 == greet2);
//or(||)
console.log(num1 == num2 || greet1 == greet2);
//• Test whether an item is in a array
let ids = [1, 2, 3, 4, 5];
console.log(ids.includes(2));
//• Test whether an item is not in a array
console.log(ids.includes(100));
export {};
