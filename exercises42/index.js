//Question 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
actually been modified.*/
let magicians = ["Harry Houdini", "David Blaine", "Dynamo", "Penn Jillette", "Teller"];
function make_great(magicians) {
    magicians = magicians.map((items) => `The Great ${items}`);
    return magicians;
}
magicians = make_great(magicians);
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
export {};
