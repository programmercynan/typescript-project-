// src/carCalculator.ts
// Create an example car object with type annotations
var myCar = {
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
    var fuelUsed = distance / myCar.fuelEfficiency;
    return fuelUsed;
}
// Test the functions with example values
// Displaying car information
console.log("Car Information:");
console.log("Make: ".concat(myCar.make, ", Model: ").concat(myCar.model, ", Year: ").concat(myCar.year));
console.log("Fuel Efficiency: ".concat(myCar.fuelEfficiency, " mpg, Max Speed: ").concat(myCar.maxSpeed, " mph"));
// Calculating time to max speed with an acceleration of 10 mph/s
var acceleration = 10;
console.log("Time to reach max speed with ".concat(acceleration, " mph/s acceleration: ").concat(timeToMaxSpeed(acceleration), " seconds"));
// Calculating fuel used for a trip of 150 miles
var tripDistance = 150;
console.log("Fuel used for ".concat(tripDistance, " miles: ").concat(fuelUsedForDistance(tripDistance), " gallons"));
