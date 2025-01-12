import { Vehicle } from "./vehicle.entity";

export class Car extends Vehicle {
  rentalPricePerDay: number = 50;
  private YEAR_LIMIT_FOR_DISCOUNT = 5;
  private DISCOUNT = 10;
  constructor(brand: string, model: string, manufactureYear: string) {
    super(brand, model, manufactureYear)
  }

  private calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - Number(this.manufactureYear);
  }

  public override rent(startDate: Date, endDate: Date) {
    const totalCost = super.rent(startDate, endDate);
    let discount = 0;
    const age = this.calculateAge();
    if (age > this.YEAR_LIMIT_FOR_DISCOUNT) {
      discount = totalCost * (this.DISCOUNT / 100);
    }
    return totalCost - discount;
  }
}