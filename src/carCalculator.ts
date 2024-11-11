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

