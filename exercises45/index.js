//Question 45
/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a
model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two
other name-value pairs, such as a color or an optional feature.Print the Object that’s returned to make sure all the information was stored correctly.*/
let car_information = (manufacturer_name, model_name, optionals) => {
    let car = {
        manufacturer: manufacturer_name,
        model: model_name,
        ...optionals,
    };
    return car;
};
let car1 = car_information("Honda", "Civic", { color: "red", year: 2020 });
let car2 = car_information("Toyota", "Corolla", { color: "silver", year: 2020, Air_Conditioner: true, Air_Purifier: false });
let car3 = car_information("Honda", "City", { color: "Black", year: 2024, Voic_Command: true });
console.log("\nCar1:", car1, "\n", "Car2:", car2, "\n", "Car3:", car3);
export {};
