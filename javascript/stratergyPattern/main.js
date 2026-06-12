import SportDrive from "./sportsDrive.js";
import Vehicle from "./vehicle.js";

const v1 = new Vehicle("Tata", "black", new SportDrive());
v1.drive();
console.log(v1);
