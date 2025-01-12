import { Vehicle } from "./vehicle.entity";

export class Truck extends Vehicle {
  rentalPricePerDay: number = 100;
  private MAINTENANCE_FEE_PER_DAY = 100;
  constructor(brand: string, model: string, manufactureYear: string) {
    super(brand, model, manufactureYear)
  }

  public override rent(startDate: Date, endDate: Date): number {
    const totalCost = super.rent(startDate, endDate);
    const maintenanceFee = Math.abs(startDate.getDate() - endDate.getDate()) * this.MAINTENANCE_FEE_PER_DAY;
    return totalCost + maintenanceFee;
  }
}