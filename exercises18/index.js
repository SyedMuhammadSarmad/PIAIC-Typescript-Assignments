//Question 18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Saudia Arab", "Japan", "China", "U.S", "Switzerland"];
//• Print your array in its original order.
console.log("Original Order\n", places);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Array in alphabetical order\n", [...places].sort());
//• Show that your array is still in its original order by printing it.
console.log("Array is still in its original order\n", places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order without changing the order of the original list\n", [...places].reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Array is still in its original order\n", places);
//• Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Array in reverse order\n", places);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Array in original order\n", places);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Array in alphabetic order\n", places);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
places.sort().reverse();
console.log("Array in reverse alphabetic order\n", places);
export {};
