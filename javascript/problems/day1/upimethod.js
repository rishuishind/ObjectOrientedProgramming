import PaymentMethod from "./paymentMethod.js";

export default class UPI extends PaymentMethod {
  pay(amount) {
    return `Paid ${amount} via UPI`;
  }
}
