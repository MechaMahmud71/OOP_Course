import { Vehicle } from "./vehicle.entity";

export class Bike extends Vehicle {
  rentalPricePerDay: number = 50;
  private DISCOUNT = 15;
  private DAY_LIMIT_FOR_DISCOUNT = 7;
  constructor(brand: string, model: string, manufactureYear: string) {
    super(brand, model, manufactureYear)
  }

  rent(startDate: Date, endDate: Date) {
    const rentalPeriodInDays = Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24);
    const totalCost = super.rent(startDate, endDate);
    let discount = 0;
    if (rentalPeriodInDays > this.DAY_LIMIT_FOR_DISCOUNT) {
      discount = totalCost * (this.DISCOUNT / 100);
    }
    return totalCost - discount;
  }
}