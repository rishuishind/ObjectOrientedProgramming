package withStratergy;

// import withStratergy.stratergy.NormalDrive;
import withStratergy.stratergy.SpecialDrive;

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new SportVehicle();
        Vehicle v2 = new Vehicle(new SpecialDrive());
        v1.drive();
        v2.drive();
    }
}
