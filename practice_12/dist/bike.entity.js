"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const vehicle_entity_1 = require("./vehicle.entity");
class Bike extends vehicle_entity_1.Vehicle {
    rentalPricePerDay = 50;
    DISCOUNT = 15;
    DAY_LIMIT_FOR_DISCOUNT = 7;
    constructor(brand, model, manufactureYear) {
        super(brand, model, manufactureYear);
    }
    rent(startDate, endDate) {
        const rentalPeriodInDays = Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24);
        const totalCost = super.rent(startDate, endDate);
        let discount = 0;
        if (rentalPeriodInDays > this.DAY_LIMIT_FOR_DISCOUNT) {
            discount = totalCost * (this.DISCOUNT / 100);
        }
        return totalCost - discount;
    }
}
exports.Bike = Bike;
