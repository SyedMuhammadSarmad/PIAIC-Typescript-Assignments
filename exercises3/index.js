#! /usr/bin/env node
let person_name = "sarmad";
console.log("Lower case:", person_name.toLowerCase());
console.log("Upper case:", person_name.toUpperCase());
console.log("Tittle case:", person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
export {};
