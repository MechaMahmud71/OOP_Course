"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
const vehicle_entity_1 = require("./vehicle.entity");
class Truck extends vehicle_entity_1.Vehicle {
    rentalPricePerDay = 100;
    MAINTENANCE_FEE_PER_DAY = 100;
    constructor(brand, model, manufactureYear) {
        super(brand, model, manufactureYear);
    }
    rent(startDate, endDate) {
        const totalCost = super.rent(startDate, endDate);
        const maintenanceFee = Math.abs(startDate.getDate() - endDate.getDate()) * this.MAINTENANCE_FEE_PER_DAY;
        return totalCost + maintenanceFee;
    }
}
exports.Truck = Truck;
