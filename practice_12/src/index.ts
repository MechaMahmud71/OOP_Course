import { Bike } from "./bike.entity";
import { Car } from "./car.entity";
import { Truck } from "./truck.entity";

const truck = new Truck('Toyota', 'Corolla', '2020'); // Create a new truck object
const rentalCost = truck.rent(new Date(2023, 0, 1), new Date(2023, 0, 5)); // Rent the truck for 5 days
console.log(`Total truck rental cost: $${rentalCost.toFixed(2)}`); // Output the total rental cost

const car= new Car('Honda', 'Civic', '2010'); // Create a new car object  
const rentalCostCar = car.rent(new Date(2023, 0, 1), new Date(2030, 0, 5)); // Rent the car for 5 days
console.log(`Total car rental cost: $${rentalCostCar.toFixed(2)}`); // Output the total rental cost


const bike = new Bike('Yamaha', 'YZF-R15', '2022'); // Create a new bike object
const rentalCostBike = bike.rent(new Date(2023, 0, 1), new Date(2023, 0, 10)); // Rent the bike for 5 days
console.log(`Total bike rental cost: $${rentalCostBike.toFixed(2)}`); // Output the total rental cost