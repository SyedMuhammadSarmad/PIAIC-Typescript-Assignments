#! /usr/bin/env node

//Question 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let quote:string = "Software is eating the world, but AI is going to eat software"
let author:string = "Jensen Huang"

let message:string = `${author} once said, "${quote}"`

console.log(message)
