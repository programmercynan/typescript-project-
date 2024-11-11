"use strict";
// src/carCalculator.ts
// Create an example car object with type annotations
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    fuelEfficiency: 30, // mpg
    maxSpeed: 120, // mph
};
// Calculate the time to reach max speed from 0 with a given acceleration
function timeToMaxSpeed(acceleration) {
    // Type annotation for the parameter and the return type
    // Formula: time = maxSpeed / acceleration
    return myCar.maxSpeed / acceleration;
}
// Calculate the fuel used for a given distance
function fuelUsedForDistance(distance) {
    // Type inference for result, which TypeScript infers as a number
    const fuelUsed = distance / myCar.fuelEfficiency;
    return fuelUsed;
}
// Test the functions with example values
// Displaying car information
console.log("Car Information:");
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
console.log(`Fuel Efficiency: ${myCar.fuelEfficiency} mpg, Max Speed: ${myCar.maxSpeed} mph`);
// Calculating time to max speed with an acceleration of 10 mph/s
const acceleration = 10;
console.log(`Time to reach max speed with ${acceleration} mph/s acceleration: ${timeToMaxSpeed(acceleration)} seconds`);
// Calculating fuel used for a trip of 150 miles
const tripDistance = 150;
console.log(`Fuel used for ${tripDistance} miles: ${fuelUsedForDistance(tripDistance)} gallons`);
