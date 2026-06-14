import PaymentMethod from "./paymentMethod.js";

export default class CreditCard extends PaymentMethod {
  pay(amount) {
    return `Paid ${amount} via Credit Card`;
  }
}
