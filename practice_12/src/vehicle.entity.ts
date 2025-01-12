export class Vehicle{
  protected rentalPricePerDay:number = 0;
  constructor(protected brand: string, protected model: string, protected manufactureYear: string) { }
  
  rent(startDate: Date, endDate: Date) {
    const rentDays = Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24);
    const totalCost = rentDays * this.rentalPricePerDay;
    return totalCost;
  }
}

