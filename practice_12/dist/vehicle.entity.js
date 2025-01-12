"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    brand;
    model;
    manufactureYear;
    rentalPricePerDay = 0;
    constructor(brand, model, manufactureYear) {
        this.brand = brand;
        this.model = model;
        this.manufactureYear = manufactureYear;
    }
    rent(startDate, endDate) {
        const rentDays = Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24);
        const totalCost = rentDays * this.rentalPricePerDay;
        return totalCost;
    }
}
exports.Vehicle = Vehicle;
