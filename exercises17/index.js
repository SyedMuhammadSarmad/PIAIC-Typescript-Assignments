/*Question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
   print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 • Print a message to each of the two people still on your list, letting them know they’re still invited.
 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guests = ["kifayat", "Jawad", "Rayan", "Abdullah", "Wasiq", "Hamza"];
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry,new dinner table won’t arrive in time for the dinner, and I have space for only two guests.\nI can invite only two people for dinner.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    let not_invited = guests.pop();
    console.log(`Sorry ${not_invited} you are not invited`);
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach((remainig_guest) => console.log(`\n${remainig_guest}, you are still invited`));
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
while (guests.length > 0) {
    guests.pop();
}
console.log("\nFinal guests list:", guests);
export {};
