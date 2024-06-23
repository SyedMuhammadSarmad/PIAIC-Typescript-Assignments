//Question 27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//version1 color is green
let alien_color = "green";
console.log("allien color is ", alien_color);
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("the player earned 15 points");
}
//version2 color is yellow
alien_color = "yellow";
console.log("allien color is ", alien_color);
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("the player earned 15 points");
}
//version3 color is red
alien_color = "red";
console.log("allien color is ", alien_color);
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("the player earned 15 points");
}
export {};
