// Question 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like bananas!*/
//• Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["mango", "lychee", "kiwi"];
/*• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like bananas!
*/
if (favorite_fruits.includes("banana")) {
    console.log("you really like banana");
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango");
}
if (favorite_fruits.includes("apple")) {
    console.log("you really like apple");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("you really like kiwi");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("you really like strawberry");
}
export {};
