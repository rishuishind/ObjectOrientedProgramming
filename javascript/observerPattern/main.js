import IphoneObservable from "./observable/iPhoneObservable.js";
import EmailObserver from "./observers/EmailObserver.js";

const iPhone = new IphoneObservable();
const samsung = new IphoneObservable();
const user1 = new EmailObserver("abc@gmail.com", iPhone);
const user2 = new EmailObserver("xyz@gmail.com", samsung);

iPhone.add(user1);
iPhone.add(user2);
samsung.add(user2);
iPhone.setInventory(40);
samsung.setInventory(30);
