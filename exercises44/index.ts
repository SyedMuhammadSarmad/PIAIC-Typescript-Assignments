//Question 44
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.*/

let items = (...items : string[]) => {
    if(items.length != 0 ){
        console.log("\nThis Sandwhich includes:")
        items.forEach((item) => console.log(`${item}`))
    }
    else{
        console.log("\nThis is a plain Sandwhich")
    }
}

items("Chicken" , "Chese" , "Ketchup")

items("Potato" , "Ketchup")

items()

