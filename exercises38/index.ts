// Question 38
/* Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, 
at least one of which is not in the default country.*/


function describe_cities(city_name :string , country : string = "Pakistan"){
    console.log(`${city_name} is in ${country}`)
}

describe_cities("Karachi")
describe_cities("Lahore")
describe_cities("Mumbai","India")

