/**
 * car performance calculator in typescript
 * -calculate car speed and fuel efficiency
 * -demonstrate type annotations, type inference and basic calculations
 * 
 */
// define car interface to specify properties of a car 
interface Car {
    make: string;
    model: string;
    year: number;
    fuelEfficiency: number;//miles per gallon
    maxSpeed: number; // miles per hour
}

// create an example car object with type annotations
const myCar: Car = {
    make:"Toyota",
    model: "Corolla",
    year: 2020,
    fuelEfficiency: 30, //mpg
    maxSpeed: 120, // mph
};

// calculate the time to reach max speed from 0 with a given acceleration
function timeToMaxSpeed(acceleration: number): number {
      // Type annotation for the parameter and the return type
      // formula: time = maxSpeed / acceleration
      return myCar.maxSpeed / acceleration;
    
}

// calculate the fuel used for a given distance 
function fuelUsedForDistance(distance: number): number {
     // Type inference for result, which TypeScript infers as a number
     const fuelUsed = distance / myCar.fuelEfficiency;
     return fuelUsed;
}
