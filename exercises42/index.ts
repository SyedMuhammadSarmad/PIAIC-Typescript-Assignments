//Question 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
actually been modified.*/



let magicians = ["Harry Houdini", "David Blaine", "Dynamo", "Penn Jillette", "Teller"]

function make_great(magicians : string []) : string []{
    return magicians.map((items) => `The Great ${items}`)
}


function show_magicians(magicians : string[]): void {
    for(let magician of magicians){
        console.log(magician)
    }
}

magicians = make_great(magicians)

show_magicians(magicians)
