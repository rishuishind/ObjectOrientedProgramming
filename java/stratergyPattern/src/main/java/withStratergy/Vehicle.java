package withStratergy;

import withStratergy.stratergy.DriveStratergy;

public class Vehicle {
    DriveStratergy driverObject;

    Vehicle(DriveStratergy obj) {
        this.driverObject = obj;
    }

    public void drive() {
        driverObject.drive();
    }
}
