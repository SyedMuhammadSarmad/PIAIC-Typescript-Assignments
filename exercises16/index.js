//Question 16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
let guest = ["Jawad", "Abdullah", "Wasiq"];
console.log("Exciting news! We've found a bigger dinner table, so there's plenty of space for everyone");
//• Add one new guest to the beginning of your array.
// guest.splice(0,0,"Kifayat")
guest.unshift("Kifayat");
//• Add one new guest to the middle of your array. 
let middle = guest.length / 2;
guest.splice(middle, 0, "Rayyan");
//• Use append() to add one new guest to the end of your list.
/*
In TypeScript (and JavaScript), the append method is not directly available on arrays.
However, you can achieve the same functionality using the push method to add elements to the end of an array.
guest.
*/
guest.push("hamza");
guest.map((guests) => console.log(`Hi ${guests} I’d love for you to join us for dinner`));
export {};
