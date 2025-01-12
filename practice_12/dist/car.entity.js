"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_entity_1 = require("./vehicle.entity");
class Car extends vehicle_entity_1.Vehicle {
    rentalPricePerDay = 50;
    YEAR_LIMIT_FOR_DISCOUNT = 5;
    DISCOUNT = 10;
    constructor(brand, model, manufactureYear) {
        super(brand, model, manufactureYear);
    }
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - Number(this.manufactureYear);
    }
    rent(startDate, endDate) {
        const totalCost = super.rent(startDate, endDate);
        let discount = 0;
        const age = this.calculateAge();
        if (age > this.YEAR_LIMIT_FOR_DISCOUNT) {
            discount = totalCost * (this.DISCOUNT / 100);
        }
        return totalCost - discount;
    }
}
exports.Car = Car;
