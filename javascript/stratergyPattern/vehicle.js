class Vehicle {
  constructor(brand, color, driverStratergy) {
    this.brand = brand;
    this.color = color;
    this.driverStratergy = driverStratergy;
  }
  drive() {
    this.driverStratergy.drive();
  }
}

export default Vehicle;
