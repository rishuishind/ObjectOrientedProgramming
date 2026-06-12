package withoutStratergy;

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle();
        Vehicle v2 = new OffRoadVehicle();
        Vehicle v3 = new SportsVehicle();
        Vehicle v4 = new PassengenVehicle();

        v1.drive();
        v2.drive();
        v3.drive();
        v4.drive();
    }
}
