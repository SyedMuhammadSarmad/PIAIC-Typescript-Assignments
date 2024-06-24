// Question 32
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
//Make a list of five or more usernames called current_users.
let current_users = ["sarmmad", "Abdullah", "umar", "rayyan", "jawad"];
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["abdullah", "RAYYAN", "hamza", "bilal", "abdul"];
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
current_users = current_users.map((users) => users.toLowerCase());
new_users = new_users.map((users) => users.toLowerCase());
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let users of new_users) {
    if (current_users.includes(users))
        console.log("username is in use, person will need to enter a new username");
    else
        console.log("username is available");
}
export {};
