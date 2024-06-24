// Question 37
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

// Define the make_shirt function with default parameters



function make_shirt(size : string = "large", text?: string) :void{
    if(size == "large" || size =="medium"){
        text = "I love TypeScript"
    }
    console.log("Size of shirt is",size)
    console.log("Messge should be print is",text)
}

//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript
make_shirt()

//Make a large shirt and a medium shirt with the default message
make_shirt("medium")
make_shirt("large")

//Make a shirt of any size with a different message.
make_shirt("small","happy coding")


