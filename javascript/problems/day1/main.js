import Checkout from "./checkout.js";
import CreditCard from "./creditCard.js";
import UPI from "./upimethod.js";

const checkout = new Checkout(new CreditCard());
checkout.paymentMethod = new UPI();
console.log(checkout.processPayment(400));
